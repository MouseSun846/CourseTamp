<template>
	<view class="container">
		<view class="left-image">
			<view class="image-content-2">
				<view class="image-content-1">
					<image class="img-body-1" mode="heightFix" src="/static/显微镜图标.svg" :draggable="false"></image>
				</view>
				<image class="img-body-2" mode="heightFix" src="/static/分组 2-左侧栏.svg" :draggable="false"></image>
				<view class="image-content-3">
					<image class="img-body-3" mode="heightFix" src="/static/13.svg" :draggable="false"></image>
				</view>
			</view>

		</view>
		<view class="content">
			<scroll-view :scroll-top="scrollTop"
				scroll-y="true" 
				:show-scrollbar="false"
				class="scroll-Y" 
				@scrolltoupper="upper"
				@scrolltolower="lower" 
				@scroll="scroll">
			
			  <view v-for="(item, index) in items" 
					:key="index" 
					class="scroll-view-item" 
					:class="item.bgColor">
				<level :posIndex="index"></level>
			  </view>
			</scroll-view>	
			
			
		</view>

		<view class="right-image">
			<view class="right-image-content-1">
				<image class="right-img-body-1" mode="heightFix" src="/static/分组 1-右侧栏.svg" :draggable="false"></image>
				<view class="right-image-content-2">
					<image class="right-img-body-2" mode="heightFix" src="/static/书本图标.svg" :draggable="false"></image>
				</view>
			</view>

		</view>







	</view>

</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				items: [{
						label: 'A',
						bgColor: 'uni-bg-red'
					},
					{
						label: 'B',
						bgColor: 'uni-bg-green'
					},
					{
						label: 'C',
						bgColor: 'uni-bg-blue'
					},
					{
						label: 'D',
						bgColor: 'uni-bg-red'
					},
					{
						label: 'E',
						bgColor: 'uni-bg-green'
					},
					{
						label: 'F',
						bgColor: 'uni-bg-blue'
					},
					{
						label: 'G',
						bgColor: 'uni-bg-red'
					},
					{
						label: 'H',
						bgColor: 'uni-bg-green'
					},
					{
						label: 'I',
						bgColor: 'uni-bg-blue'
					},
					{
						label: 'J',
						bgColor: 'uni-bg-red'
					},
					{
						label: 'K',
						bgColor: 'uni-bg-green'
					},
					{
						label: 'L',
						bgColor: 'uni-bg-blue'
					}
				]
			}
		},
		methods: {
			upper: function(e) {

			},
			lower: function(e) {

			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			}
		}
	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}

	.left-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 20%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.image-content-1 {
		position: absolute;
		top: 9%;
		left: 15%;
		width: 30%;
		height: 30%;
		z-index: 2;
	}

	.img-body-1 {
		height: 50%;
		width: 5rem;
	}

	.image-content-2 {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}

	.img-body-2 {
		height: 100%;
	}

	.image-content-3 {
		position: absolute;
		bottom: 0;
		left: 10%;
		width: 40%;
		height: 8%;
		z-index: 2;
	}

	.img-body-3 {
		height: 60%;
		width: 2rem;
	}

	.right-image {
		position: absolute;
		top: 0;
		right: 0;
		width: 20%;
		height: 100%;
		display: flex;
		flex-direction: row-reverse;
	}

	.content {
		height: 100%;

	}
	
	.scroll-Y{
		height: 100%;
	}
	.scroll-view-item {
		height: 100%;
		margin-top: -4rpx;
	}

	.right-image-content-1 {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
	}

	.right-img-body-1 {
		height: 100%;
		width: 5rem;
	}

	.right-image-content-2 {
		position: absolute;
		bottom: 13%;
		right: 22%;
		width: 55%;
		height: 20%;
		z-index: 2;
	}

	.right-img-body-2 {
		height: 50%;
		width: 3rem;
	}

	.content {
		width: 100%;
		height: 100%;
		background-color: #85b3f2c7;
	}
</style>