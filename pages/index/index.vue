<template>
	<view class="container">
		<view class="left-image">
			<view class="image-content-2">
				<image class="img-body-2" mode="heightFix" src="/static/分组 12.svg" :draggable="false"></image>
			</view>
		</view>
		<view class="content">
			<scroll-view 
				:scroll-top="scrollTop"
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
				<image class="right-img-body-1" mode="heightFix" src="/static/分组 11.svg" :draggable="false"></image>
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
				scrollHeight: 0,
				levelItem: [
					
					
					{ id: 3, type: LevelType.TODAY_GOAL, name: "名称1"},
					
					{ id: 12, type: LevelType.JOIN_CAMP_LOCK, name: "名称1"},
					
					
					
					{ id: 11, type: LevelType.CAMP_LEARNING, name: "名称1"},
					
					
					{ id: 9, type: LevelType.LOCK_LEVEL, name: "名称1"},
					
					
					
					{ id: 9, type: LevelType.LOCK_LEVEL, name: "名称1"},
					
					
					
					{ id: 9, type: LevelType.LOCK_LEVEL, name: "名称1"},
					
					
					{ id: 9, type: LevelType.LOCK_LEVEL, name: "名称1"},
					
					
					
					
					{ id: 4, type: LevelType.FINISH_CAMP, name: "名称1"},
					
					
					
					
					
					{ id: 5, type: LevelType.CAMP_EXAM, name: "名称1"},
					
					
									
					{ id: 6, type: LevelType.EXAM_LEVEL, name: "名称1"},
					
					
					{ id: 8, type: LevelType.REVIEW_LEVEL, name: "名称1"},


					
					{ id: 7, type: LevelType.HOT_LEVEL, name: "名称1"},



					{ id: 2, type: LevelType.FINISH_LEVEL, name: "名称1"},
					
					
					
					{ id: 9, type: LevelType.LOCK_LEVEL, name: "名称1"},
					
					
					
					{ id: 1, type: LevelType.JOIN_CAMP, name: "名称1"},
					
					
				]
			}
		},
		mounted() {
			this.goToTodayGoal()
		},
		methods: {
			// 跳转到今日学习目标
			goToTodayGoal: function(e) {
				const scorllElement = document.querySelector(".scroll-Y")
				const pageIndex = this.getPageInfo();
				this.scrollTop = scorllElement.clientHeight*(pageIndex-1);
			},
			upper: function(e) {

			},
			lower: function(e) {

			},
			scroll: function(e) {
				this.scrollHeight = e.detail.scrollHeight
				this.scrollTop = e.detail.scrollTop
				console.log(this.scrollTop)
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
			},
		  getPageInfo: function() {
			  let result = [];
			  let index = 0;
			  let remain = this.levelItem.length > 0 ? this.levelItem.length%4 === 0 ? 0 : 4 - this.levelItem.length%4 : 0;
			  for (let i = 0; i < this.levelItem.length; i ++) {
				  index++;
			    if(this.levelItem[i].type === LevelType.TODAY_GOAL) {
					break;
				}
			  }
			  return index%4===0?index/4:(index-index%4)/4+1;
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
		pointer-events: none;
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

	

	.right-image {
		position: absolute;
		top: 0;
		right: 0;
		width: 20%;
		height: 100%;
		display: flex;
		flex-direction: row-reverse;
		pointer-events: none;
	}

	.content {
		height: 100%;

	}
	
	.scroll-Y{
		height: 100%;
	}
	.scroll-view-item {
		height: 100%;
		max-height: 641px;
		margin: -2rpx;
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

	.content {
		width: 100%;
		height: 100%;
		background-color: #85b3f2c7;
	}
</style>