<template>
	<uni-popup ref="coursePopup" type="bottom" background-color="rgb(125 172 235)"  :mask-click="false">
			<view class="course-body">
				<view class="close-btn-box">
					<image class="close-btn" mode="heightFix" src="/static/close.svg" :draggable="false" @click="closeCoursePopup"></image>
				</view>
				<view class="wrap">
					<view class="tabs">
						<view class="tab active">
							课程
						</view>
					</view>
					<view class="content-wrap">
						<view class="content-box">
							<scroll-view
								:scroll-top="scrollTop"
								scroll-y="true" 
								:show-scrollbar="false"
								class="scroll-Y" 
								@scroll="scroll">
								<view class="course-box">
									<view class="course-item"
										v-for="(item, index) in courseList"
										:key="index"
										@click="onItemClick(item, index)"
										:class="{ 'selected': selectedIndex === index }"
										:clickable="true">
											<text class="slot-box slot-text">{{item.trainSessionName}}</text>
											<view class="item-choosing-box">
												<image class="item-choosing" mode="heightFix" src="/static/choosing.svg" :draggable="false" v-if="selectedIndex === index"></image>
											</view>
									</view>
								</view>
								

							</scroll-view>	
						</view>
					</view>
				</view>


			</view>
			<view>
		</view>
	</uni-popup>
</template>

<script>
	import eventBus from "@/common/eventbus.js";
	import { getTrainSessionList} from "@/common/api.js";
	export default {
		data() {
			return {
					scrollTop: 0,
					selectedIndex: 0, 
					courseList:[]
			}
		},
		mounted() {
			eventBus.on("show-course-popup", (e) => {
				this.courseList = e
				this.showCourseDialog()
			})
		},
		methods: {
			// 显示课程popup 
			showCourseDialog: function() {
				this.$refs.coursePopup.open()
			},
			// 关闭课程popup
			closeCoursePopup: function() {
				this.$refs.coursePopup.close()
			},
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop
			},
			// 列表点击事件
			onItemClick: function(item, index) {
				this.selectedIndex = index
				uni.setStorageSync('trainSessionId', ''+this.courseList[index]?.trainSessionId);
			}
		}
	}
</script>

<style scoped>
	.course-body {
		height: 360px;
	}
	.close-btn-box {
		position: fixed;
		top: 8px;
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		height: 42px;
		cursor: pointer;
		
	}
	.close-btn {
		height: 30px;
		width: 30px;
		margin-right: 30px;
	}
	::v-deep .uni-h1 {
		font-size: 20px;
	}
	
	.scroll-Y{
		position: absolute;
		height: 280px;
		width: 90%;
		margin-top: 10px;
	}
	
	::v-deep .uni-list-item__container {
		height: 45px;
		padding: 5px;
	}
	::v-deep .uni-list-item__content-title {
		color: #ffffff;
	}
	.slot-box { 
		height: auto;
		min-height: 40px;
		width: 100%;

		margin-top: 0px;
		margin-bottom: 0px;
	}

	.course-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.course-item {
		width: 90%;
		display: flex;
		flex-direction: row;
		border: 2px solid transparent; /* 默认透明边框 */
		border-radius: 10px;
		align-items: center;
	}

	.course-item.selected { 
		border-color: #0055FF; /* 选中时的边框颜色 */
	}

	.slot-text {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-family: 'system-ui';
		font-weight: bolder;
		color: rgb(0 0 0 / 80%);		
	}
	.item-choosing-box {
		width: 20px;
		height: 100%;
		display: flex;
		flex-direction: column;		
		margin-right: 10px;
	}
	.item-choosing {
		width: 20px;
		height: 20px;
		border-radius: 7px; 
	}


	.wrap {
      width: 95%;
      margin: 20px auto;
    }

    .tabs {
      display: flex;
      width: 100%;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
    }

    .tab {
      flex: 0 0 50%;
      height: 50px;
      cursor: pointer;
      position: relative;
      text-align: center;
      line-height: 50px;
	  font-family: system-ui;
	  font-size: 16px;
	  font-weight: bolder;
	  color: rgb(80 120 254);
    }

    .tab.active {
      background-color: #fff;
      color: #4185ef;
    }

    .tab.active:before {
      content: '';
      position: absolute;
      top: 0;
      left: -50px;
      height: 100%;
      width: 50px;
      z-index: 2;
      background-color: #fff;
      clip-path: path('M 0,50 C 25,50 25,0 50,0 L 50, 50 Z');
    }

    .tab.active:after {
      content: '';
      position: absolute;
      top: 0.1px;
      right: -48.8px;
      height: 100%;
      width: 50px;
      z-index: 2;
      background-color: #fff;
      clip-path: path('M 0,0 C 25,0 25,50 50,50 L 0, 50 Z');
    }

    .content-wrap {
      min-height: 300px;
      background-color: #fff;
	  border-radius: 0px 10px 10px 10px;
	  margin-top: -1px;
    }

	.content-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

</style>