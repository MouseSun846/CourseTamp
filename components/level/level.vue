<template name="train-level">
	<view class="page-level-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 641.8597412109375">
            <!-- 定义S曲线 -->
            <path id="s-curve" stroke="rgba(255, 255, 255, 1)" stroke-width="5" fill="none" transform="translate(120, 0)"
                d="M17.8285 641.376C-48.2092 306.372 127.286 293.372 17.8285 0"></path>			
				 
			<svg  v-for="(content, index) in Levels" :key="index" v-html="content.icon" @click="onLevelItemClick(index, content.item)" style="cursor: pointer;"></svg>
			
			<svg v-html="cursorSvg.content" v-show="cursorSvg.isShowCursor"></svg>
			
			<svg  v-for="(svg, index) in LevelContents" :key="index" v-html="svg"></svg>
	
			
        </svg>

	</view>
</template>

<script>
	import {LevelType, LevelStatus} from "@/common/util.js";
	import { getCursorLevelIcon, getLevelTipIcon} from "@/common/icon.js";
	import { getCampLevelFinishIcon, getCampLevelLearningIcon, getCampLevelLockIcon} from "@/common/camp_level.js";
	import { getEndExamLevelLockIcon, getEndExamLevelLearningIcon, getEndExamLevelFinishIcon, getEndExamLevelIcon} from "@/common/end_exam_level.js";
	import { getExamLevelLockIcon, getExamLevelLearningIcon, getExamLevelFinishIcon} from "@/common/exam_level.js";
	import { getGeneralLevelLockIcon, getGeneralLevelLearningIcon, getGeneralLevelFinishIcon} from "@/common/general_level.js";
	import { getGoalLevelLockIcon, getGoalLevelLearningIcon, getGoalLevelFinishIcon} from "@/common/goal_level.js";
	import { getHotLevelLockIcon, getHotLevelLearningIcon, getHotLevelFinishIcon} from "@/common/hot_level.js";
	import { getGoalHotLevelFinishIcon, getGoalHotLevelLearningIcon, getGoalHotLevelLockIcon} from "@/common/goal_hot_level.js";
	import { getReviewLevelLockIcon, getReviewLevelLearningIcon, getReviewLevelFinishIcon} from "@/common/review_level.js";

	export default {
	  data() {
			return {
				cursorSvg: {
					content:'',
					position:{x:0, y:0},
					isShowCursor: false
				}
			}
		},
		props: {
			name: {
				type: String,
				default: ""
			},
			levelItem: {
				type: Array,
				default: []
			},
		},
		created() {
			this.initPos()
		},
		mounted(){
			this.updatePos()
		},
		computed: {
			LevelContents() {
				// 显示关卡名称
				let items = [];
				this.levelItem.map((item, index)=> {
					if( item.levelType === LevelType.GENERAL_LEVEL || 
					item.levelType === LevelType.GOAL_LEVEL || 
					item.levelType === LevelType.HOT_LEVEL ||
					 item.levelType === LevelType.HOT_GOAL_LEVEL) {
						items.push(getLevelTipIcon({x: item.x-100, y:item.y+10},  item.levelName.length < 7 ? item.levelName : item.levelName.slice(0, 7) + '...')) 
					}
				});
				return items;
			},
			Levels() {
				let items = [];
				this.levelItem.map((item, index)=> {
					if( item.levelType !== LevelType.EMPTY) {
						items.push(item) 
					}
				});
				return items.map((item, index) => {
				  if(item.levelType === LevelType.CAMP_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getCampLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getCampLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getCampLevelFinishIcon(item), item: item}
					}
				  }

				  if(item.levelType === LevelType.GENERAL_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getGeneralLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getGeneralLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getGeneralLevelFinishIcon(item), item: item}
					}
				  }
			
				  if(item.levelType === LevelType.GOAL_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getGoalLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getGoalLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getGoalLevelFinishIcon(item), item: item}
					}
				  }
				  
				  
				  if(item.levelType === LevelType.HOT_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getHotLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getHotLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getHotLevelFinishIcon(item), item: item}
					}
				  }

				  if(item.levelType === LevelType.HOT_GOAL_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getGoalHotLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getGoalHotLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getGoalHotLevelFinishIcon(item), item: item}
					}
				  }

				  if(item.levelType === LevelType.REVIEW_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getReviewLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getReviewLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getReviewLevelFinishIcon(item), item: item}
					}
				  }

				  if(item.levelType === LevelType.EXAM_LEVEL) {
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getExamLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getExamLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getExamLevelFinishIcon(item), item: item}
					}
				  }

				  if(item.levelType === LevelType.END_EXAM_LEVEL) {
					if(item.levelStatus === LevelStatus.LOCK) {
						return {icon:getEndExamLevelLockIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.LEARNING) {
						return {icon:getEndExamLevelLearningIcon(item), item: item}
					}
					if(item.levelStatus === LevelStatus.FINISH) {
						return {icon:getEndExamLevelFinishIcon(item), item: item}
					}
					
				  }
				  
				  if(item.levelType === LevelType.END_EXAM) {
					return {icon:getEndExamLevelIcon(item), item: item}
				  }
														  
				});
			}
		},
		methods: {
			initPos() {
				for(let index = 0;index<this.levelItem.length;index++) {
					this.levelItem[index].x = 0;
					this.levelItem[index].y = 0;
				}
				
				
			},
			updatePos () {
				const path = document.getElementById('s-curve');
				const pathLength = path.getTotalLength();
				this.cursorSvg.isShowCursor = false
				this.cursorSvg.content = '';
				for(let index = 0;index<this.levelItem.length;index++) {
					const point = path.getPointAtLength(pathLength-index * pathLength/this.levelItem.length);
					this.levelItem[index].x = point.x+100;
					this.levelItem[index].y = point.y;
					// 判断今日目标
					if(this.levelItem[index].type === LevelType.END_EXAM_LEVEL) {
						this.cursorSvg.isShowCursor = true;		
						this.cursorSvg.position.x = point.x+50;
						this.cursorSvg.position.y = point.y+10;
						this.cursorSvg.content = getCursorLevelIcon(this.cursorSvg.position)
					}
					
				}
			},
			onLevelItemClick(index, levelItem) {
				uni.navigateTo({
					url: '/pages/level-detail/level-detail',
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('onLevelItemClickEvent', { data: levelItem })
					},
					fail: function(err) {
						console.log(err)
					}
				});
			}
		}
	}
</script>
<style>
	.page-level-line {
		height: 100%;
	}
</style>
