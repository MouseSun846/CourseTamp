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
			
				<view v-for="(group, groupIndex) in chunkArray(campInfo.levelItem, 4)" class="scroll-view-item">
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
				campInfo: {
					// campId 训练营Id
					// sessionId 训练营 期数
					campId: 1,
					sessionId: 1,
					levelItem: [
				    // id 为主键
					// type 关卡类型
					// name 关卡名称
					// levelNumber 关卡号
					
					{ id: 1, type: LevelType.END_EXAM_LEVEL, name: "名称25", levelNumber: 1},
					{ id: 2, type: LevelType.END_EXAM_LEVEL_FINISH, name: "名称1", levelNumber: 2},
					{ id: 3, type: LevelType.END_EXAM_LEVEL_LEARNING, name: "名称2", levelNumber: 3},					
					{ id: 4, type: LevelType.END_EXAM_LEVEL_LOCK, name: "名称3", levelNumber: 4},
					{ id: 5, type: LevelType.EXAM_LEVEL_FINISH, name: "名称4", levelNumber: 5},
					{ id: 6, type: LevelType.EXAM_LEVEL_LEARNING, name: "名称5", levelNumber: 6},
					{ id: 7, type: LevelType.EXAM_LEVEL_LOCK, name: "名称6", levelNumber: 7},
					{ id: 8, type: LevelType.REVIEW_LEVEL_FINISH, name: "名称7", levelNumber: 8},
					{ id: 9, type: LevelType.REVIEW_LEVEL_LEARNING, name: "名称8", levelNumber: 9},
					{ id: 10, type: LevelType.REVIEW_LEVEL_LOCK, name: "名称9", levelNumber: 10},
					{ id: 11, type: LevelType.HOT_GOAL_LEVEL_FINISH, name: "名称10", levelNumber: 11},
					{ id: 12, type: LevelType.HOT_GOAL_LEVEL_LEARNING, name: "名称11", levelNumber: 12},
					{ id: 13, type: LevelType.HOT_GOAL_LEVEL_LOCK, name: "名称12", levelNumber: 13},
					{ id: 14, type: LevelType.HOT_LEVEL_FINISH, name: "名称13", levelNumber: 14},
					{ id: 15, type: LevelType.HOT_LEVEL_LEARNING, name: "名称14", levelNumber: 15},
					{ id: 16, type: LevelType.HOT_LEVEL_LOCK, name: "名称15", levelNumber: 16},
					{ id: 17, type: LevelType.GOAL_LEVEL_FINISH, name: "名称16", levelNumber: 17},
					{ id: 18, type: LevelType.GOAL_LEVEL_LEARNING, name: "名称17", levelNumber: 18},
					{ id: 19, type: LevelType.GOAL_LEVEL_LOCK, name: "名称18", levelNumber: 19},
					{ id: 10, type: LevelType.GENERAL_LEVEL_FINISH, name: "名称19", levelNumber: 10},
					{ id: 21, type: LevelType.GENERAL_LEVEL_LEARNING, name: "名称20", levelNumber: 21},
					{ id: 22, type: LevelType.GENERAL_LEVEL_LOCK, name: "名称21", levelNumber: 22},
					{ id: 23, type: LevelType.CAMP_LEVEL_FINISH, name: "名称22", levelNumber: 23},
					{ id: 24, type: LevelType.CAMP_LEVEL_LEARNING, name: "名称23", levelNumber: 24},
					{ id: 25, type: LevelType.CAMP_LEVEL_LOCK, name: "名称24", levelNumber: 25},

					]
				}
			}
		},
		mounted() {
			this.goToTodayGoal()
		},
		methods: {
			// 跳转到今日学习目标
			goToTodayGoal: function(e) {
				const scorllElement = document.querySelector(".scroll-Y")
				const pageInfo = this.getPageInfo();
				console.log(pageInfo)
				this.scrollTop = scorllElement.clientHeight*(pageInfo.currentPage-1);
		
			},
			upper: function(e) {

			},
			lower: function(e) {

			},
			scroll: function(e) {
				this.scrollHeight = e.detail.scrollHeight
				this.scrollTop = e.detail.scrollTop
			},
			chunkArray: function(arr, chunkSize) {
				let result = [];
				let remain = arr.length > 0 ? arr.length%4 === 0 ? 0 : 4 - arr.length%4 : 0;
				for(let i = 0; i < remain; i++) {
					 arr.unshift({ id: -1, type: LevelType.EMPTY, name: "" });
				}
				for (let i = 0; i < arr.length; i += chunkSize) {
				  result.push(arr.slice(i, i + chunkSize));
				}

				return result;
			},
		  getPageInfo: function() {
			  let result = [];
			  let index = 0;
			  let remain = this.campInfo.levelItem.filter((item) => {return item.type !== LevelType.EMPTY}).length;
			  for (let i = 0; i < this.campInfo.levelItem.length; i ++) {
				  index++;
			    if(this.campInfo.levelItem[i].type === LevelType.END_EXAM_LEVEL) {
					break;
				}
			  }
			  console.log("remain:", remain, this.campInfo.levelItem.length%4, this.campInfo.levelItem.length)
			  return {currentPage: index%4===0?index/4:(index-index%4)/4+1, remain: (this.campInfo.levelItem.length-remain)/4};
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