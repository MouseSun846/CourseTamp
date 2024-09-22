<template name="train-level">
	<view class="page-level-line">
		<view class="level-btn">
			<image class="img-level-btn" mode="scaleToFill" src="/static/green-level-btn.svg" :draggable="false"></image>
			<image class="img-level-btn" mode="scaleToFill" src="/static/green-level-btn.svg" :draggable="false"></image>	
			<image class="img-level-btn" mode="scaleToFill" src="/static/gray-level-btn.svg" :draggable="false"></image>
			<image class="img-level-btn" mode="scaleToFill" src="/static/gray-level-btn.svg" :draggable="false"></image>				
		</view>
		
		<image class="img-level-line" mode="heightFix" src="/static/level-line.svg" :draggable="false"></image>
	</view>
</template>

<script>
	export default {
		name: "train-level",
		props: {
			name: {
				type: String,
				default: ""
			}
		},
		methods: {

		}
	}
</script>
<style>
	.page-level-line {
		height: 100%;
	}

	.img-level-line {
		position: absolute;
		left: 45%;
		height: 100%;
	}
	.img-level-btn{
		width: 120rpx;
		height: 120rpx;
		z-index: 1;
	}
	
	.level-btn {
		height: 100%;
		width: auto;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 50%;
		justify-content: space-around; 
		margin-bottom: 20rpx;
	}
		
	.level-btn:last-child {
		margin-bottom: 0rpx;
	}
</style>
