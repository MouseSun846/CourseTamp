<template>
	<view class="container">
		<page-head></page-head>
		
		<view class="scroll-box" >
			<scroll-view
			:scroll-top="scrollTop"
			scroll-y="true" 
			:show-scrollbar="false"
			class="scroll-Y"
			@scroll="scroll">
			
			<view class="step-content">
				<view class="step-content-body step-content-body-unlock">
					<view class="summary-title">
						<image class="summary-icon" mode="heightFix" src="/static/summary.svg" :draggable="false"></image>
						<uni-title type="h1" title="概要总结" ></uni-title>
					</view>
					<view class="level-card first-level-card">
						<level-card :levelItem="levelDetail.summary">
						</level-card>
					</view>
						
				</view>
	
				
			</view>
			
			
			<view class="step-content" v-for="(level, index) in levelDetail.stepList" :key="level.stepId">
				<view :class="getStepContentClass(level.isLocked)">
					<svg v-html="getStepIcon(level.stepId, level.isLocked)"></svg>
				<view class="level-card level-card-step">
					<level-card :levelItem="level">
					</level-card>
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
			};
		},
		onLoad: function(option) {
			console.log(option)
			const eventChannel = this.getOpenerEventChannel();
			// 监听levelItem事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('onLevelItemClickEvent', function(data) {
				eventBus.emit("titleUpdate", {title: data.data.name})
				
			})
		},
		methods: {
		   getStepContentClass(isLocked) {
			  return isLocked ? 'step-content-body step-content-body-lock' : 'step-content-body step-content-body-unlock';
			},
			getStepIcon: function(number, isLocked) {
				if(isLocked) {
					return this.getLockStepIcon(number)
				}
				return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73" height="33" viewBox="0 0 73 33" fill="none">
					<path     fill="#1EA9FA"  d="M13.4762 3L73 3L73 23C73 28.5228 68.5229 33 63 33L3.4762 33L3.4762 13C3.4762 7.47715 7.95335 3 13.4762 3Z">
					</path>
					<path     fill="#57C1FD" fill-opacity="0.75" d="M10 -7.28956e-15L69.5238 0L69.5238 20C69.5238 25.5228 65.0467 30 59.5238 30L0 30L1.22465e-15 10C1.56282e-15 4.47715 4.47715 -7.96592e-15 10 -7.28956e-15Z">
					</path>
					<text x="6" y="21" text-anchor="center" dominant-baseline="center" fill="#ffffff" font-size="15" style="font-family: system-ui;">
						STEP ${number}
					</text>
					</svg>
					`
			},
			getLockStepIcon: function(number) {
				return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73" height="33" viewBox="0 0 73 33" fill="none">
					<path     fill="#A6A6A6"  d="M13.4762 3L73 3L73 23C73 28.5228 68.5229 33 63 33L3.4762 33L3.4762 13C3.4762 7.47715 7.95335 3 13.4762 3Z">
					</path>
					<path     fill="#808080" fill-opacity="0.75" d="M10 -7.28956e-15L69.5238 0L69.5238 20C69.5238 25.5228 65.0467 30 59.5238 30L0 30L1.22465e-15 10C1.56282e-15 4.47715 4.47715 -7.96592e-15 10 -7.28956e-15Z">
					</path>
					<text x="6" y="21" text-anchor="center" dominant-baseline="center" fill="#ffffff" font-size="15" style="font-family: system-ui;">
						STEP ${number}
					</text>
					</svg>
					`
			},
			scroll: function(e) {
				this.scrollHeight = e.detail.scrollHeight
				this.scrollTop = e.detail.scrollTop
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
		height: 240px;
		margin-top: 20px;
		position: relative;
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
		justify-content: center;
	}
	.first-level-card {
		margin-top: 8px;
	}
	.level-card-step {
		position: relative;
		top: -45%;
	}
</style>
