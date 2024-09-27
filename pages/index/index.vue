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
			
				<view v-for="(group, groupIndex) in chunkArray(levelItem, 4)" class="scroll-view-item">
					<level :levelItem="group"></level>
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
	import LevelType from "@/common/util.js";
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				levelItem: [
					{ id: 10, type: LevelType.JOIN_CAMP, name: "名称1"},
					{ id:100, type: LevelType.FINISH_LEVEL, name: "名称2"},
					{ id: 999, type: LevelType.JOIN_CAMP_LOCK, name: "名称3"},
					{ id: 888, type: LevelType.CAMP_LEARNING, name: "名称4"},
					{ id: 10, type: LevelType.TODAY_GOAL, name: "名称1"},
					{ id:100, type: LevelType.LOCK_LEVEL, name: "名称2"},
					{ id: 10, type: LevelType.JOIN_CAMP, name: "名称1"},
					{ id:100, type: LevelType.FINISH_LEVEL, name: "名称2"},
					{ id: 999, type: LevelType.JOIN_CAMP_LOCK, name: "名称3"},
					{ id: 888, type: LevelType.CAMP_LEARNING, name: "名称4"},
					{ id: 10, type: LevelType.TODAY_GOAL, name: "名称1"},
					{ id:100, type: LevelType.LOCK_LEVEL, name: "名称2"},
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
			},
		  chunkArray: function(arr, chunkSize) {
			let result = [];
			let remain = arr.length > 0 ? arr.length%4 === 0 ? 0 : 4 - arr.length%4 : 0;
			for(let i = 0; i < remain; i++) {
				arr.push({ id:-1, type: LevelType.EMPTY, name: ""})
			}
			for (let i = 0; i < arr.length; i += chunkSize) {
			  result.push(arr.slice(i, i + chunkSize));
			}
		
			return result;
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