<template>
	<view class="container">
		<page-head class="page-head-box"></page-head>
		
		<view class="scroll-box" >
			<scroll-view
			:scroll-top="scrollTop"
			scroll-y="true" 
			:show-scrollbar="false"
			class="scroll-Y"
			@scroll="scroll">

			<view class="step-content">
				<view class="step-content-body step-content-body-unlock">
					<view class="level-card">
						<uni-section title="书籍绑定" type="line" padding :titleFontSize="'18px'">
							<view class="book-box book-box-view book-box-view-bg" v-if="bookList.length === 0">
								<view class="no-bind-book">
									<svg t="1728999818523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1572" width="32" height="32" style="margin-left: 10px; margin-right: 20px;"><path d="M661.76 65.28c-64 0-119.04 38.4-149.76 94.72-30.08-56.32-85.76-94.72-149.76-94.72H65.92v835.84h272.64c51.2 0 135.68 17.28 149.12 57.6 12.8 0 19.84 0.64 49.28 0v-0.64c13.44-40.32 97.92-57.536 148.48-57.536h272.64V65.28h-296.32zM338.56 843.52H115.84V122.88h247.68c46.72 0 94.08 27.52 113.92 70.4v679.872c-30.208-29.248-95.424-30.784-138.88-29.632z m570.24-0.64h-223.36c-43.456-1.152-110.144 0.512-139.456 30.528V193.28h1.216c19.84-42.88 67.2-70.4 113.92-70.4h247.68v720z" fill="#8492a6" p-id="1573"></path></svg>
									<text class="book-text">{{'未绑定' }}</text>
								</view>
							</view>
	
							<view class="book-box book-box-view" v-if="bookList.length">
								<view class="book-box-body" v-for="(item, index) in bookList" :key="index">
								
									<view class="book-box-body-content">
										<view class="book-operate" @click="onBookDelete(item)">
											<svg t="1729215285785" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4455" width="30" height="30"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#E6E9FC" p-id="4456"></path><path d="M686.933333 332.8c8.533333 0 21.333333 0 25.6 4.266667 8.533333 4.266667 12.8 8.533333 17.066667 12.8 4.266667 4.266667 8.533333 12.8 8.533333 17.066666 0 4.266667 4.266667 12.8 4.266667 17.066667V396.8h-34.133333v277.333333c0 8.533333 0 12.8-4.266667 21.333334s-8.533333 12.8-12.8 17.066666c-4.266667 4.266667-12.8 8.533333-21.333333 12.8s-17.066667 4.266667-25.6 4.266667H409.6c-8.533333 0-17.066667 0-25.6-4.266667-8.533333-4.266667-17.066667-8.533333-21.333333-12.8-4.266667-4.266667-8.533333-12.8-12.8-17.066666s-8.533333-17.066667-8.533334-25.6V396.8h-29.866666v-4.266667-17.066666c0-4.266667 0-8.533333 4.266666-17.066667s4.266667-12.8 8.533334-17.066667 8.533333 0 12.8-4.266666 12.8-4.266667 25.6-4.266667h46.933333V298.666667c0-8.533333 4.266667-17.066667 8.533333-21.333334 4.266667-8.533333 12.8-8.533333 21.333334-8.533333h166.4c12.8 0 21.333333 4.266667 25.6 8.533333 4.266667 4.266667 8.533333 12.8 8.533333 21.333334v34.133333h46.933333z m-247.466666 0h166.4V298.666667h-166.4v34.133333z m-12.8 332.8c12.8 0 17.066667-8.533333 17.066666-21.333333V401.066667h-34.133333v243.2c0 8.533333 0 12.8 4.266667 17.066666 0 4.266667 4.266667 4.266667 12.8 4.266667z m98.133333 0c4.266667 0 8.533333 0 12.8-4.266667s4.266667-8.533333 4.266667-17.066666V401.066667h-34.133334v243.2c0 12.8 4.266667 21.333333 17.066667 21.333333z m98.133333 0c4.266667 0 8.533333 0 12.8-4.266667 0-4.266667 4.266667-8.533333 4.266667-17.066666V401.066667h-34.133333v243.2c0 12.8 4.266667 21.333333 17.066666 21.333333z" fill="#335ABE" p-id="4457"></path></svg>
										</view>
										<view class="book-tag">
											编号
										</view>
									</view>
									<view class="book-box-body-title-container">
										<view class="book-box-body-title">
											{{ item }}
										</view>
									</view>
								</view>
							</view>
							<view class="book-box">
								<uni-easyinput class="book-input" trim="all" v-model="bookNumberValue" placeholder="请输入书籍编码" @input="onbookNumberIuput"></uni-easyinput>
								<view class="book-btn" @click="onBookNumberBind">
									<button type="primary" style="font-size: 13px;">确定</button>
								</view>
							</view>
						</uni-section>


					</view>
				</view>	
			</view>


			<view class="step-content">
				<view class="step-content-body step-content-body-unlock">
					<view class="level-card">
						<uni-section title="目标设置" type="line" padding :titleFontSize="'18px'">
							<uni-section title="预计完成时间" type="square" padding>
								<view class="book-box book-box-view">
									<svg t="1729001633682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9748" width="32" height="32" style="margin-left: 10px; margin-right: 20px;"><path d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m-34.133333 218.453333a54.613333 54.613333 0 0 0-54.613334 54.613334v273.066666l0.597334 8.106667a54.613333 54.613333 0 0 0 54.016 46.506667h273.066666l8.106667-0.597334A54.613333 54.613333 0 0 0 805.546667 546.133333l-0.597334-8.106666A54.613333 54.613333 0 0 0 750.933333 491.52H532.48V273.066667l-0.597333-8.106667A54.613333 54.613333 0 0 0 477.866667 218.453333z" fill="#8492a6" p-id="9749"></path></svg>
									<text class="book-text">{{ finishTime||'未知' }}</text>
								</view>
							</uni-section>
							<uni-section title="今日目标" type="square" padding>
								<view class="book-box book-box-view">
										<svg t="1729001256170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4755" width="32" height="32" style="margin-left: 10px; margin-right: 20px;"><path d="M85.930667 590.762667H78.762667a78.762667 78.762667 0 1 1 0-157.525334h7.168a433.664 433.664 0 0 1 347.306666-347.306666V78.762667a78.762667 78.762667 0 1 1 157.525334 0v7.168a433.664 433.664 0 0 1 347.306666 347.306666h7.168a78.762667 78.762667 0 1 1 0 157.525334h-7.168a433.664 433.664 0 0 1-347.306666 347.306666v7.168a78.762667 78.762667 0 1 1-157.525334 0v-7.168a433.664 433.664 0 0 1-347.306666-347.306666zM512 748.373333a236.373333 236.373333 0 1 0 0-472.576 236.373333 236.373333 0 0 0 0 472.576z m0-78.762666a157.525333 157.525333 0 1 1 0-315.050667 157.525333 157.525333 0 0 1 0 315.050667z" fill="#8492A6" p-id="4756"></path></svg>
										<text class="book-text">{{ goalNumber||'未设置' }}</text>
									</view>
								<view class="book-box">
									<uni-easyinput  class="book-input" trim="all" v-model="goalNumberValue" placeholder="请输入书籍编码" @input="onGoalNumberChange"></uni-easyinput>
									<view class="book-btn" @click="onGoalSetting">
										<button type="primary" style="font-size: 13px;">确定</button>
									</view>
								</view>
								
							</uni-section>
						</uni-section>


					</view>
				</view>	
			</view>

			<view style="width: 100%;height: 100px;">

			</view>
			

			
		</scroll-view>	
		</view>
		
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="bookOperateDialog" type="dialog">
				<uni-popup-dialog type="info" mode="base" title="是否确认解绑?" @confirm="bookOperateDialogConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import eventBus from '@/common/eventbus.js'
	export default {
		data() {
			return {
				scrollTop: 0,
				levelDetail: {
					levelName: '第01关',
					summary: {stepId:0, levelDetail: {content:'资料分析主讲', url:'https://www.baidu.com'}, isLocked: false},
					stepList: [
						// levelName 关卡名称
						// levelDetail 关卡详情 content: 关卡内容 url: 关卡链接
						// isLocked 是否锁定 					
						{stepId:1, levelDetail: {content:'知识考点', url:'https://www.baidu.com'}, isLocked: true},
						{stepId:2, levelDetail: {content:'特训练习', url:'https://www.baidu.com'}, isLocked: false},
						{stepId:3, levelDetail: {content:'老师点评', url:'https://www.baidu.com'}, isLocked: true},
						{stepId:4, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: false},
						{stepId:5, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true},
						{stepId:6, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true}
					]
				},
				goalInfo: {
						number: 3,
						predictGoal: 30
					},
					bookList: ["No.123456"],
					bookItem: '',
					bookNumberValue: '',
					goalNumber: 0,
					goalNumberValue: 0,
					finishTime: '2024-10-15'
			};
		},
		mounted() {
			eventBus.emit("titleUpdate", {title: "个人中心"})
		},
		methods: {
			onGoalNumberChange(e) {
				this.goalNumberValue = e
			},
			onGoalSetting() {
				console.log(this.goalNumberValue)
				this.goalNumber = this.goalNumberValue
			},
			onBookNumberBind() {
				this.bookList.push(this.bookNumberValue)
			},
		   getStepContentClass(isLocked) {
			  return isLocked ? 'step-content-body step-content-body-lock' : 'step-content-body step-content-body-unlock';
			},
			scroll: function(e) {
				this.scrollHeight = e.detail.scrollHeight
				this.scrollTop = e.detail.scrollTop
			},
			onbookNumberIuput(e) {
				console.log(e)
			},
			onBookDelete(item) {
				this.$refs.bookOperateDialog.open()
				this.bookItem = item
			},
			bookOperateDialogConfirm() {
				console.log('confirm unbind book')
				// 从列表中删除this.bookItem
				this.bookList.splice(this.bookList.indexOf(this.bookItem), 1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: linear-gradient(145deg, #55a6ff 15%, rgb(60 130 242 / 67%) 46%, #4083edd1 100%);
		flex: 1;
		overflow: hidden;
	}
	.page-head-box {
		height: 70px;
		width: 100%;
	}
	.scroll-box {
		width: 100%;
		height: 93%;
	}
	.scroll-Y{
		width: 100%;
		height: 100%;
	}
	
	.step-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 200px;
		height: auto;
		margin-top: 20px;
		position: relative;
	}

	.step-content-body {
		width: 85%;
		height: 100%;
		border-radius: 10px;
		padding: 15px;
		.summary-icon {
			width: 32px;
			height: 32px;
			top: 10px;
			left: 10px;
			margin-right: 20px;
		}
	}
	.step-content-body-lock {
		background-color: #f0f0f0;
	}
	.step-content-body-unlock {
		background-color: #ffffff;
	}
	.summary-title {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: center;
	}
	.level-card {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
	}
	.book-box {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}
	.book-box-view {
		height: auto;
		min-height: 50px;
		border-radius: 10px;
		margin-bottom: 20px
	}
	.book-box-view-bg {
		background-color: rgb(243 244 246);
	}
	.no-bind-book {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
	}
	.book-input {
		width: 200px;
		height: 40px;
		font-size: 16px;
	}
	.book-text {
		color: rgb(31 41 55);
		font-weight: bolder;
		font-size: 17px;
	}
	.book-box-body {
		width: 120px;
		height: 90px;
		background:  #f27b14d1;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		margin-top: 10px;
		overflow: hidden;
	}

	.book-tag{
		position: relative;
		top:8px;
		right:-20px;
		width:80px;
		height:20px;
		line-height:20px;
		transform:rotate(45deg);
		text-align:center;
		background:#f00;
		color:#fff;
		opacity:0.7;
		border-bottom:solid 1px #666;box-shadow:0 0 4px 2px rgb(0 0 0 / 35%);
	}
	.book-box-body-content{
		flex: 4;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;

	}
	.book-operate {
		width: 30px;
		height: 30px;
		margin-top: 3px;
		margin-left: -10px;
		cursor: pointer;
	}
	.book-box-body-title-container {
		flex: 6;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.book-box-body-title {
		width: 70%;
		height: auto;
		color: #ffffff;
		word-wrap: break-word; /* 确保长单词可以换行 */
		overflow-wrap: break-word; /* 兼容性更好 */
		text-align: center;
		padding-top: 10px;

	}

	.book-box-body-number {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding-top: 3px;
	}

	.book-btn {
		width: 60px;
		height: 35px;
		font-size: 16px;
		margin-left: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
