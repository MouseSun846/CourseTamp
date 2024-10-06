<template>
	<view class="container">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad: function(option) {
			console.log(option)
			const eventChannel = this.getOpenerEventChannel();
			// 监听levelItem事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('onLevelItemClickEvent', function(data) {
				console.log(data)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
</style>
