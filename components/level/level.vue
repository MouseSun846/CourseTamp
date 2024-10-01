<template name="train-level">
	<view class="page-level-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 641.8597412109375">
            <!-- 定义S曲线 -->
            <path id="s-curve" stroke="rgba(255, 255, 255, 1)" stroke-width="5" fill="none" transform="translate(120, 0)"
                d="M17.8285 641.376C-48.2092 306.372 127.286 293.372 17.8285 0"></path>			
				 
			<svg  v-for="(svg, index) in Levels" :key="index" v-html="svg"></svg>
			
			<svg v-html="cursorSvg.content" v-show="cursorSvg.isShowCursor"></svg>
			
			<svg  v-for="(svg, index) in LevelContents" :key="index" v-html="svg"></svg>
	
			
        </svg>

	</view>
</template>

<script>
	import LevelType from "@/common/util.js";
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
	  name: "train-level",
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
					if( item.type === LevelType.FINISH_LEVEL || 
					item.type === LevelType.LOCK_LEVEL || 
					item.type === LevelType.CAMP_LEARNING ) {
						items.push(getLevelTipIcon({x: item.x-100, y:item.y},  item.name.length < 7 ? item.name : item.name.slice(0, 7) + '...')) 
					}
				});
				return items;
			},
			Levels() {
				let items = [];
				this.levelItem.map((item, index)=> {
					if( item.type !== LevelType.EMPTY) {
						items.push(item) 
					}
				});
				return items.map((item, index) => {
				  if(item.type === LevelType.CAMP_LEVEL_LEARNING) {
					return getCampLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.CAMP_LEVEL_LOCK) {
					return getCampLevelLockIcon(item)
				  }
				  if(item.type === LevelType.CAMP_LEVEL_FINISH) {
					return getCampLevelFinishIcon(item)
				  }
				  if(item.type === LevelType.GENERAL_LEVEL_LEARNING) {
					return getGeneralLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.GENERAL_LEVEL_LOCK) {
					return getGeneralLevelLockIcon(item)
				  }
				  if(item.type === LevelType.GENERAL_LEVEL_FINISH) {
					return getGeneralLevelFinishIcon(item)
				  }
			
				  if(item.type === LevelType.GOAL_LEVEL_LEARNING) {
					return getGoalLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.GOAL_LEVEL_LOCK) {
					return getGoalLevelLockIcon(item)
				  }
				  if(item.type === LevelType.GOAL_LEVEL_FINISH) {
					return getGoalLevelFinishIcon(item)
				  }
				  if(item.type === LevelType.HOT_LEVEL_LEARNING) {
					return getHotLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.HOT_LEVEL_LOCK) {
					return getHotLevelLockIcon(item)
				  }
				  if(item.type === LevelType.HOT_LEVEL_FINISH) {
					return getHotLevelFinishIcon(item)
				  }
				  if(item.type === LevelType.HOT_GOAL_LEVEL_LEARNING) {
					return getGoalHotLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.HOT_GOAL_LEVEL_LOCK) {
					return getGoalHotLevelLockIcon(item)
				  }
				  if(item.type === LevelType.HOT_GOAL_LEVEL_FINISH) {
					return getGoalHotLevelFinishIcon(item)
				  }
				  if(item.type === LevelType.REVIEW_LEVEL_LEARNING) {
					return getReviewLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.REVIEW_LEVEL_LOCK) {
					return getReviewLevelLockIcon(item)
				  }
				  if(item.type === LevelType.REVIEW_LEVEL_FINISH) {
					return getReviewLevelFinishIcon(item)
				  }
				  if(item.type === LevelType.EXAM_LEVEL_LEARNING) {
					return getExamLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.EXAM_LEVEL_LOCK) {
					return getExamLevelLockIcon(item)
				  }
				  if(item.type === LevelType.EXAM_LEVEL_FINISH) {
					return getExamLevelFinishIcon(item)
				  }
				  if(item.type === LevelType.END_EXAM_LEVEL_LOCK) {
					return getEndExamLevelLockIcon(item)
				  }
				  if(item.type === LevelType.END_EXAM_LEVEL_LEARNING) {
					return getEndExamLevelLearningIcon(item)
				  }
				  if(item.type === LevelType.END_EXAM_LEVEL_FINISH) {
					return getEndExamLevelFinishIcon(item)
				  }
				  
				  if(item.type === LevelType.END_EXAM_LEVEL) {
					return getEndExamLevelIcon(item)
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
				const rect = path.getBoundingClientRect();
				const pathLength = path.getTotalLength();
				console.log(this.levelItem.length)
				this.cursorSvg.isShowCursor = false
				this.cursorSvg.content = '';
				console.log(this.levelItem)
				for(let index = 0;index<this.levelItem.length;index++) {
					const point = path.getPointAtLength(pathLength-index * pathLength/this.levelItem.length - pathLength/(this.levelItem.length*2));
					this.levelItem[index].x = point.x+100;
					this.levelItem[index].y = point.y;
					// 判断今日目标
					if(this.levelItem[index].type === LevelType.END_EXAM_LEVEL) {
						this.cursorSvg.isShowCursor = true;		
						this.cursorSvg.position.x = point.x+50;
						this.cursorSvg.position.y = point.y+10;
						console.log(point, this.cursorSvg.position)
						this.cursorSvg.content = getCursorLevelIcon(this.cursorSvg.position)
					}
					
				}
			}
		}
	}
</script>
<style>
	.page-level-line {
		height: 100%;
	}
</style>
