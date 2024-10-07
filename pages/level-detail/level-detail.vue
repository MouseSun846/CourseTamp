<template>
	<view class="container">
		<page-head :title="'第01关'"></page-head>
		<scroll-view
			:scroll-top="scrollTop"
			scroll-y="true" 
			:show-scrollbar="false"
			class="scroll-Y" 
			@scroll="scroll">
			
			<view class="first-step">
				<view class="first-step-body">
					<image class="first-step-number-bg" mode="aspectFit" src="/static/choose-step.svg" :draggable="false">
					</image>
					<view class="step-title">STEP 1</view>
					
				</view>
			</view>
			<view class="first-step">
				<view class="first-step-body">
					<image class="first-step-number-bg" mode="aspectFit" src="/static/choose-step.svg" :draggable="false">
					</image>
					<view class="step-title">STEP 1</view>
					
				</view>
			</view>
			<view class="first-step">
				<view class="first-step-body">
					<image class="first-step-number-bg" mode="aspectFit" src="/static/choose-step.svg" :draggable="false">
					</image>
					<view class="step-title">STEP 1</view>
					
				</view>
			</view>
			<view class="first-step">
				<view class="first-step-body">
					<image class="first-step-number-bg" mode="aspectFit" src="/static/choose-step.svg" :draggable="false">
					</image>
					<view class="step-title">STEP 1</view>
					
				</view>
			</view>
			<view class="first-step">
				<view class="first-step-body">
					<image class="first-step-number-bg" mode="aspectFit" src="/static/choose-step.svg" :draggable="false">
					</image>
					<view class="step-title">STEP 1</view>
					
				</view>
			</view>
			<view class="first-step">
				<view class="first-step-body">
					<image class="first-step-number-bg" mode="aspectFit" src="/static/choose-step.svg" :draggable="false">
					</image>
					<view class="step-title">STEP 1</view>
					
				</view>
			</view>
		</scroll-view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0
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
		height: 100%;
		width: 100%;
		margin-bottom: 100px;
	}
	
	.first-step {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 200px;
		margin-top: 20px;
		.first-step-number-bg {
			position: relative;
			width: 100px;
			height: 50px;
			top: 6px;
			left: 10px;
		}
		.step-title {
			position: relative;
			top: -45px;
			left: 20px;
			font-size: larger;
			font-weight: bold;
			height: 88rpx;
			line-height: 88rpx;
			color: #ffffff;
			box-sizing: border-box;
			font-family: system-ui;
		}
	}
	
	.first-step-body {
		width: 90%;
		height: 100%;
		background-color: #ffffff;
		border-radius: 10px;
	}
</style>
