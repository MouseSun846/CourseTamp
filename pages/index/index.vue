<template>
	<view class="container">
		<coursePopup></coursePopup>
		<content-popup></content-popup>
		<view class="left-image">
			<view class="image-content-2">
				<image class="img-body-2" mode="heightFix" src="/static/分组12.svg" :draggable="false"></image>
			</view>
		</view>
		<view class="content">
			<scroll-view 
				:scroll-top="scrollTop"
				scroll-y="true" 
				:show-scrollbar="false"
				class="scroll-Y" 
				@scrolltoupper="upper"
				@scrolltolower="lower" 
				@scroll="scroll">
			
				<view v-for="(group, groupIndex) in chunkArray(campInfoList, 4)" class="scroll-view-item">
					<level :levelItem="group"></level>
				</view>
			</scroll-view>				
		</view>

		<view class="camp-menu-container">
			<view class="camp-menu-container-bg">
				<image class="camp-menu-bg" mode="scaleToFill" src="/static/menu.svg" :draggable="false"></image>
				<view class="camp-menu">
					<image class="camp-menu-icon" mode="scaleToFill" src="/static/course.svg" :draggable="false" @click="showCourseDialog"></image>
					<image class="camp-menu-icon" mode="scaleToFill" src="/static/sign.svg" :draggable="false" @click="goToSignPage"></image>
					<image class="camp-menu-icon" mode="scaleToFill" src="/static/content.svg" :draggable="false"  @click="showContentDialog"></image>
					<image class="camp-menu-icon" mode="scaleToFill" src="/static/user.svg" :draggable="false" @click="goToUserCenterPage"></image>
				</view>
			</view>
				
		</view>

		<view class="right-image">
			<view class="right-image-content-1">
				<image class="right-img-body-1" mode="heightFix" src="/static/分组11.svg" :draggable="false"></image>
			</view>

		</view>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message :type="tip.msgType" :message="tip.messageText" :duration="2000"></uni-popup-message>
		</uni-popup>

		<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="warn" :showClose="false" confirmText="确定" title="提示" :content="tipMsg" @confirm="dialogConfirm" @close="dialogConfirm"></uni-popup-dialog>
		</uni-popup>
	</view>

</template>

<script>
	import {LevelType, LevelStatus} from "@/common/util.js";
	import eventBus from "@/common/eventbus.js";
	import {codeToToken, 
		getTrainSessionList, 
		getDailyCheckInfo,
		getLevelList} from "@/common/api.ts";
	export default {
		data() {
			return {
				scrollTop: 0,
				scrollHeight: 0,
				scrollWidth: 0,
				popStyle: '',
				campInfoList: [],
				tip: {
						msgType: 'success',
						messageText: ''
					},
				trainSessionList:[],
				// 打卡链接
				dailyCheckUrl:'',
				tipMsg: ''
			}
		},
		mounted() {
			const currentUrl = new URL(window.location.href);
			const urlParams = new URLSearchParams(currentUrl.search);
			// 获取code
			const code = urlParams.get('code');
			if(!code) {
				this.tipMsg = "请求无效！"
				this.$refs.alertDialog.open()
			}
			// 获取trainId
			const trainId = urlParams.get('trainId');
			if(!trainId) {
				this.tipMsg = "训练营不存在！"
				this.$refs.alertDialog.open()
			}
			uni.setStorageSync('trainId', trainId);

			// tip消息提示
			eventBus.on("show-tip", (e) => {
				this.tip.msgType = e.msgType
				 this.tip.messageText = e.message
				this.$refs.message.open()
			})
			
			// 训练营不存在
			eventBus.on("no-train-id", (e) => {
				this.tipMsg = "训练营不存在！"
				this.$refs.alertDialog.open()
			})

			// 训练期数变化
			eventBus.on("train-session-change", (e) => {
				console.log('训练期数变化', e)
				// 更新关卡列表
				this.getLevelInfoList()

			})

			// code 换token
			codeToToken({ code: code}).then(res => {
				if(res.code === 0) {
						uni.setStorageSync('userId', ''+res.data.userId);
						uni.setStorageSync('token', ''+res.data.token);
						
						getTrainSessionList({ trainId: trainId}).then(res_session => {
							if(res_session.code === 0) {
									this.trainSessionList = res_session.data
									// 保存trainSessionId
									uni.setStorageSync('trainSessionId', ''+this.trainSessionList[0]?.trainSessionId);
									this.initData()
							}
						})
					}
			})


			this.goToTodayGoal()

		},
		methods: {

			initData: function() {
				const trainId = uni.getStorageSync('trainId');
				const trainSessionId = uni.getStorageSync('trainSessionId');				
				// 打卡信息查询
				getDailyCheckInfo({ trainId: trainId, trainSessionId: trainSessionId}).then(
					(res) => {
						if(res.code === 0) {
							this.dailyCheckUrl = res.data
						}
					})	
				this.getLevelInfoList()					
			},
			// 获取关卡列表
			getLevelInfoList: function() {
				const trainId = uni.getStorageSync('trainId');
				const trainSessionId = uni.getStorageSync('trainSessionId');
				const userId = uni.getStorageSync('userId');
				getLevelList({ trainId: trainId, trainSessionId: trainSessionId, userId: userId}).then(res => {
					if(res.code === 0) {
						// 根据关卡 levelNumber 排序
						res.data.sort((a, b) => {
							return b.levelNumber - a.levelNumber
						})
						this.campInfoList = res.data
					}
				})
			},

			// 用户打卡
			goToSignPage: function(e) {
				window.location.href = this.dailyCheckUrl
			},
			dialogConfirm: function() {
				window.location.href = 'https://feiniaoyunketang.h5.ixunke.com/pages/wepage/index?id=9'
			},
			showCourseDialog: function(e) {
				eventBus.emit("show-course-popup", this.trainSessionList)
			},
			showContentDialog: function(e) {
				eventBus.emit("show-content-popup", true)
			},
			// 跳转到今日学习目标
			goToTodayGoal: function(e) {
				const scorllElement = document.querySelector(".scroll-Y")
				const pageInfo = this.getPageInfo();
				console.log(pageInfo)
				this.scrollTop = scorllElement.clientHeight*(pageInfo.currentPage-1);
		
			},
			upper: function(e) {

			},
			lower: function(e) {

			},
			scroll: function(e) {
				this.scrollHeight = e.detail.scrollHeight
				this.scrollTop = e.detail.scrollTop
			},
			chunkArray: function(arr, chunkSize) {
				let result = [];
				let remain = arr.length > 0 ? arr.length%4 === 0 ? 0 : 4 - arr.length%4 : 0;
				for(let i = 0; i < remain; i++) {
					 arr.unshift({ id: -1, levelType: LevelType.EMPTY, name: "" });
				}
				for (let i = 0; i < arr.length; i += chunkSize) {
				  result.push(arr.slice(i, i + chunkSize));
				}

				return result;
			},
		  getPageInfo: function() {
			  let index = 0;
			  let remain = this.campInfoList.filter((item) => {return item.levelType !== LevelType.EMPTY}).length;
			  for (let i = 0; i < this.campInfoList.length; i ++) {
				  index++;
			    if(this.campInfoList[i].levelType === LevelType.END_EXAM_LEVEL) {
					break;
				}
			  }
			  return {currentPage: index%4===0?index/4:(index-index%4)/4+1, remain: (this.campInfoList.length-remain)/4};
		  },
		  // 跳转到用户中心
		  goToUserCenterPage() {
			  uni.navigateTo({
			  	url: '/pages/user-center/user-center'
			  });
		  }
		}
	}
</script>

<style scoped>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		flex: 1;
		overflow: hidden;
	}

	.left-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 20%;
		height: 100%;
		display: flex;
		flex-direction: column;
		pointer-events: none;
	}

	

	.image-content-2 {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}

	.img-body-2 {
		height: 100%;
	}

	

	.right-image {
		position: absolute;
		top: 0;
		right: 0;
		width: 20%;
		height: 100%;
		display: flex;
		flex-direction: row-reverse;
		pointer-events: none;
	}
	
	.scroll-Y{
		height: 100%;
	}
	.scroll-view-item {
		height: 100%;

		margin: -2rpx;
	}

	.right-image-content-1 {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
	}

	.right-img-body-1 {
		height: 100%;
		width: 5rem;
	}

	.content {
		width: 100%;
		height: 100%;
		opacity: 1;
		background-blend-mode: color;
		background: conic-gradient(from -20deg at 5% 31%, rgb(176 248 230 / 85%), rgb(224 255 237 / 67%) 34.72%, rgb(156 210 243 / 37%) 68.37%, rgb(129 251 210 / 42%));
	}

	.camp-menu-container{
		position: absolute;
		bottom: 20px;
		width: 100%;
		height: 100px;
		z-index: 1;
	}
	.camp-menu-container-bg {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100px;
	}
	.camp-menu-bg {
		height: 70px;
	}

	.camp-menu {
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		align-items: center;

		width: 300px;
		height: 60px;
	}
	.camp-menu-icon{
		width: 30px;
		z-index: 1;
		cursor: pointer;
	}
	
</style>