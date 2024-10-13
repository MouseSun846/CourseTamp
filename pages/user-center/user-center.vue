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
						<uni-section title="书籍绑定" type="line" padding>
							<uni-easyinput class="uni-mt-5" trim="all" v-model="bookNumber" placeholder="请输入书籍编码" @input="onbookNumberIuput"></uni-easyinput>
						</uni-section>


					</view>
				</view>	
			</view>


			<view class="step-content">
				<view class="step-content-body step-content-body-unlock">
					<view class="level-card">
						<uni-section title="目标设置" type="line" padding>
							<uni-number-box :min="1" :max="100" :value="55" />
						</uni-section>

						<uni-section title="预期完成时间" type="line" padding>
							<uni-number-box :min="1" :max="100" :value="55" />
						</uni-section>

					</view>
				</view>	
			</view>

			

			
		</scroll-view>	
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
					bookNumber:123456
			};
		},
		mounted() {
			eventBus.emit("titleUpdate", {title: "个人中心"})
		},
		methods: {
		   getStepContentClass(isLocked) {
			  return isLocked ? 'step-content-body step-content-body-lock' : 'step-content-body step-content-body-unlock';
			},
			scroll: function(e) {
				this.scrollHeight = e.detail.scrollHeight
				this.scrollTop = e.detail.scrollTop
			},
			onbookNumberIuput(e) {
				console.log(e)
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
		height: 200px;
		margin-top: 20px;
		position: relative;
	}
	.step-content:first-child {
		height: 150px;
	}
	
	.step-content-body {
		width: 90%;
		height: 100%;
		border-radius: 10px;
		
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
</style>
