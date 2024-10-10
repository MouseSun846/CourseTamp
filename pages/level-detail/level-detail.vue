<template>
	<view class="container">
		<page-head :title="levelDetail.levelName"></page-head>
		<scroll-view
			:scroll-top="scrollTop"
			scroll-y="true" 
			:show-scrollbar="false"
			class="scroll-Y" 
			@scroll="scroll">
			
			<view class="step-content">
				<view class="step-content-body">
					

				</view>
			</view>
			
			
			<view class="step-content" v-for="(level, index) in levelDetail.stepList" :key="level.stepId">
				<view class="step-content-body">
					<svg v-html="getStepIcon(level.stepId, level.isLocked)"></svg>
				<image 
					class="lock-bg" 
					mode="aspectFit" 
					v-if="level.isLocked" 
					src="/static/lock.svg" 
					:draggable="false">
				</image>
				</view>
			</view>
		</scroll-view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				levelDetail: {
					levelName: '第01关',
					stepList: [
					// levelName 关卡名称
					// levelDetail 关卡详情 content: 关卡内容 url: 关卡链接
					// isLocked 是否锁定 					
					{stepId:1, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: false},
					{stepId:2, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true},
					{stepId:3, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true},
					{stepId:4, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true},
					{stepId:5, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true},
					{stepId:6, levelDetail: {content:'可配置', url:'https://www.baidu.com'}, isLocked: true}
				]
				}
			};
		},
		onLoad: function(option) {
			console.log(option)
			const eventChannel = this.getOpenerEventChannel();
			// 监听levelItem事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('onLevelItemClickEvent', function(data) {
				console.log(data)
			})
		},
		methods: {
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
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: linear-gradient(145deg, #55a6ff 15%, rgb(60 130 242 / 67%) 46%, #4083edd1 100%);
	}
	.scroll-Y{
		height: 800px;
		width: 100%;
		margin-bottom: 100px;
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
	
	.lock-bg {
		position: absolute;
		right: 7%;
		width: 40px;
	}
	.step-content-body {
		width: 90%;
		height: 100%;
		background-color: #ffffff;
		border-radius: 10px;
	}
</style>
