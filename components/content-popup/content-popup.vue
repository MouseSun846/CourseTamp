<template>
	<uni-popup ref="contentPopup" type="bottom" background-color="rgb(125 172 235)"  :mask-click="false">
			<view class="content-body">
				<uni-title type="h1" title="目录" color="#ffffff" align="center" style="margin-top: 0px;"></uni-title>
				<view class="close-btn-box">
					<image class="close-btn" mode="heightFix" src="/static/close.svg" :draggable="false" @click="closeContentPopup"></image>
				</view>
				
				<view class="wrap">
					<view class="tabs">
						<view v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: activeIndex == index }" @click="onTabClick(index)">
							{{ tab }}
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

									<uni-collapse ref="collapse" class="collapse-content" 
									v-for="(contentItem, contentindex) in contentList"
									:key="contentindex">

										<uni-collapse-item title-border="none" :border="false">
											<template v-slot:title>
												<view class="content-title-box"> 
													<svg t="1728784136346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13259" width="25" height="25"><path d="M998.817433 472.690256l-171.015748 173.005626c-7.33412 7.33412-12.223533 19.500798-9.778826 29.222771l41.503157 248.564112c7.390973 34.112184-7.277266 65.779661-34.169038 85.28046a88.236849 88.236849 0 0 1-48.89413 14.611385c-12.166679 0-26.834918-2.444707-39.05845-9.721972L524.885493 896.590994a22.229773 22.229773 0 0 0-24.447065 0L287.976377 1013.709491a87.384044 87.384044 0 0 1-87.952581-4.889413c-29.279624-19.500798-41.503157-51.168276-36.613744-85.280459l41.503157-246.119406c2.444707-12.166679 0-21.888651-7.334119-29.222771L24.175489 472.690256A93.183115 93.183115 0 0 1 4.504129 382.634091c9.778826-29.279624 34.169037-51.168276 65.950222-56.057688L307.477175 289.962659c9.778826 0 17.056092-7.33412 21.945505-17.056092L434.488206 48.732666A82.039802 82.039802 0 0 1 510.274108 0.009097c31.781185 0 61.060809 19.500798 75.729047 48.723569l107.453379 224.173901a31.042087 31.042087 0 0 0 22.002359 17.056092l236.96597 36.55689c29.336478 2.444707 56.22825 24.333358 65.950222 56.057689 12.223533 31.667477 2.444707 65.779661-19.500798 90.113018z" fill="#FFC83C" p-id="13260"></path></svg>
												<text class="text">{{ contentItem.title }}</text>
												</view>
											</template>
											<view class="content-text-box">
												<view class="content-text"
													v-for="(levelItem, levelIndex) in contentItem.levelInfoList"
													:key="levelIndex"
													:class="{ 'selected': selectedIndex === levelItem.levelNumber }"
													@click="onItemClick(levelItem, levelItem.levelNumber)">
														<view class="number-title-box">
															<view class="level-number-box"> 
																<view class="level-number"> 
																	<text class="level-number-text">{{ levelItem.levelNumber }}</text>
																</view>
															</view>
															<text class="content-text-wrapper">{{ levelItem.levelTitle }}</text>
														</view>
														<view class="item-choosing-box">
															<image class="item-choosing" mode="heightFix" src="/static/choosing.svg" :draggable="false" v-if="selectedIndex === levelItem.levelNumber"></image>
														</view>
													</view>
											</view>

										</uni-collapse-item>
									
									</uni-collapse>									

							</scroll-view>	

						</view>
					</view>
				</view>


		


			</view>
	</uni-popup>
</template>

<script>
	import eventBus from "@/common/eventbus.js";
	export default {
		data() {
			return {
					scrollTop: 0,
					selectedIndex: null, 
					contentList:[],
					contents:{
						commonLevel :[
						{
							title: "文件领学1：辅导员的定义与工作职责",
							levelInfoList:[ 
								{levelNumber: 1, levelTitle: "43号令_《普通高等学校辅导员队伍建设规定》"},
								{levelNumber: 2, levelTitle: "2号令_《高等学校辅导员队伍建设规定》"},
								{levelNumber: 3, levelTitle: "3号令_《高等学校辅导员队伍建设规定》"},
							]
						},
						{
							title: "文件领学2：思想理论教育和价值引领",
							levelInfoList:[ 
								{levelNumber: 4, levelTitle: "16号令_《关于进一步加强和改进大学生思想政治教育的意见》"},
								{levelNumber: 5, levelTitle: "《习近平总书记在全国高校思想政治工作会议上的讲话》"},
								{levelNumber: 6, levelTitle: "31号令_《关于加强和改进新形势下高校思想政治工作的意见》"},
								{levelNumber:7, levelTitle: "62号令_《高校思想政治工作质量提升工程实施纲要》"},
								{levelNumber:8, levelTitle: "63号令"}
							]
						}
					],
					hotLevel: [
							{
								title: "文件领学1：辅导员的定义与工作职责",
								levelInfoList:[ 
									{levelNumber: 1, levelTitle: "43号令_《普通高等学校辅导员队伍建设规定》"},
									{levelNumber: 2, levelTitle: "2号令_《高等学校辅导员队伍建设规定》"},
									{levelNumber: 3, levelTitle: "3号令_《高等学校辅导员队伍建设规定》"},
								]
							},
							{
								title: "文件领学2：思想理论教育和价值引领",
								levelInfoList:[ 
									{levelNumber: 4, levelTitle: "16号令_《关于进一步加强和改进大学生思想政治教育的意见》"},
									{levelNumber: 5, levelTitle: "《习近平总书记在全国高校思想政治工作会议上的讲话》"},
									{levelNumber: 6, levelTitle: "31号令_《关于加强和改进新形势下高校思想政治工作的意见》"},
									{levelNumber:7, levelTitle: "62号令_《高校思想政治工作质量提升工程实施纲要》"}
								]
							},
						]
					},
					activeIndex: 0,
					tabs: ['普通关卡', '热点关卡'] // Tab内容数组
			}
		},
		mounted() {
			eventBus.on("show-content-popup", (e) => {
				this.showContentDialog()
			})
			// 初始化目录列表书籍显示
			this.onTabClick(0)
		},
		methods: {
			// 显示目录popup 
			showContentDialog: function() {
				this.$refs.contentPopup.open()
			},
			// 关闭目录popup
			closeContentPopup: function() {
				this.$refs.contentPopup.close()
			},
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop
			},
			// 列表点击事件
			onItemClick: function(item, index) {
				this.selectedIndex = index
			},
			
			onTabClick(index) {
				this.activeIndex = index
				this.selectedIndex = 0
				if(this.activeIndex === 0) {
					// 普通关卡
					this.contentList = this.contents.commonLevel
				} else if(this.activeIndex ===1) {
					// 热点关卡
					this.contentList = this.contents.hotLevel
				}
			}
		}
	}
</script>

<style scoped>
	.content-body {
		height: 370px;
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
		height: 250px;
		width: 90%;
	}
	
	::v-deep .uni-list-item__container {
		background: rgb(125 172 235);
		height: 45px;
		padding: 5px;
	}
	::v-deep .uni-list-item__content-title {
		color: #ffffff;
	}
	.slot-box { 
		height: 40px;
		width: 60%;
		border: 2px solid transparent; /* 默认透明边框 */
		border-radius: 10px;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.uni-list-item.selected .slot-box { 
		border-color: #0055FF; /* 选中时的边框颜色 */
	}

	.slot-text {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-size: 18px;
	}
	.item-choosing-box {
		width: 20px;
		height: 100%;
		display: flex;
		flex-direction: column;		
	}
	.item-choosing {
		width: 20px;
		height: 20px;
		border-radius: 7px; 
	}


	.wrap {
      width: 95%;
      margin: 10px auto;
    }

    .tabs {
      display: flex;
      width: 100%;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
      background: linear-gradient(#e3e9f2, #ddebff);
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
      top: 0;
      right: -50px;
      height: 100%;
      width: 50px;
      z-index: 2;
      background-color: #fff;
      clip-path: path('M 0,0 C 25,0 25,50 50,50 L 0, 50 Z');
    }

    .content-wrap {
      min-height: 260px;
      background-color: #fff;
	  border-radius: 0px 0px 10px 10px;
    }

	.content-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.collapse-content {
		margin-top: 20px;
	}
	.content-title-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.text {
		margin-left: 8px;
		font-family: 'system-ui';
		font-weight: bolder;
		font-size: 16px;
		color: rgb(0 0 0 / 80%);
	}
	.number-title-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.level-number-box {
		width: 25px;
		height: 25px;
		margin-right: 8px;
	}
	.level-number {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #ffc83c;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.level-number-text {
		color: #ffffff;
		text-align: center;
		line-height: 25px;
		font-size: 12px;
	}
	.content-text-box {
		display: flex;
		flex-direction: column;
		width: 85%;
	}
	.content-text {
		margin-left: 20px;
		padding: 10px;
		font-family: 'system-ui';
		font-weight: bolder;
		font-size: 15px;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		border: 2px solid transparent; /* 默认透明边框 */
		border-radius: 10px;
		justify-content: space-between;
	}
	.content-text.selected { 
		border-color: #0055FF; /* 选中时的边框颜色 */
	}
	.content-text-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-right: 30px;
		color: rgb(0 0 0 / 70%);
	}
</style>