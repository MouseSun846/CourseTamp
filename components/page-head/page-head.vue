<template>
	<view class="common-page-head">
		<image class="head-background-music-left" mode="aspectFit" src="/static/music.svg" :draggable="false"></image>
		<image class="back-btn" mode="aspectFit" src="/static/back.svg" :draggable="false" @click="onBackBtnClick"></image>
		<view class="common-page-head-title">{{title}}</view>
		<image class="head-background-music-right" mode="aspectFit" src="/static/music.svg" :draggable="false"></image>
	</view>
</template>
<script>
	import eventBus from '@/common/eventbus.js'
	export default {
		name: "page-head",
		data() {
			return {title: ''}
		},
		mounted() {
			eventBus.on("titleUpdate", (e) => {
				this.title = e.title
			})
		},
		methods: {
			onBackBtnClick() {
				uni.redirectTo({url: "/pages/index/index"})
			}
		}
	}
</script>

<style lang="scss" scoped>
/* page */
.common-page-head{
	text-align: center;
	width: 100%;
	height: 100%;
	min-height: 70px;
	background: linear-gradient(214deg, rgb(0 98 255 / 64%) 15%, rgb(60 130 242 / 63%) 46%, #4486edd4 100%);
}
.common-page-head-title {
	display: inline-block;
	padding: 30rpx 40rpx;
	font-size: larger;
	font-weight: bold;
	color: #ffffff;
	box-sizing: border-box;
	font-family: system-ui;
	padding-top: 25px;
}

.head-background-music-left {
	position: absolute;
	width: 30px;
	height: 30px;
	left: 60px;
	top: 5px;
}

.head-background-music-right {
	position: absolute;
	width: 30px;
	height: 30px;
	right: 10px;
	top: 30px;
}
.back-btn {
	position: absolute;
	width: 40px;
	height: 40px;
	left: 10px;
	top: 16px;
	cursor: pointer;
}
</style>