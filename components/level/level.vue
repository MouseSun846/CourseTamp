<template name="train-level">
	<view class="page-level-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 641.8597412109375">
            <!-- 定义S曲线 -->
            <path id="s-curve" stroke="rgba(255, 255, 255, 1)" stroke-width="5" fill="none" transform="translate(120, 0)"
                d="M17.8285 641.376C-48.2092 306.372 127.286 293.372 17.8285 0"></path>			
				 
			<svg  v-for="(svg, index) in Levels" :key="index" v-html="svg"></svg>
			
			<svg v-html="cursorSvg.content" v-show="cursorSvg.isShowCursor"></svg>
        </svg>

	</view>
</template>

<script>
	import LevelType from "@/common/util.js";
	import {    getJoinCampIcon,
			getJoinCampLockIcon,
			getFinishLevelIcon,
			getTodayGoalIcon,
			getFinishCampIcon,
			getFinishExamCampIcon,
			getExamLevelIcon,
			getHotLevelIcon,
			getReviewLevelIcon,
			getCampLearningIcon,
			getCursorLevelIcon,
			getLocklevelIcon} from "@/common/icon.js";
	export default {
	  name: "train-level",
	  data() {
			return {
				cursorSvg: {
					content:'',
					position:{x:0, y:0},
					isShowCursor: false
				},
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

			Levels() {
				let items = [];
				this.levelItem.map((item, index)=> {
					if( item.type !== LevelType.EMPTY) {
						items.push(item) 
					}
				});
				return items.map((item, index) => {
				  if(item.type === LevelType.JOIN_CAMP) {
					  return getJoinCampIcon(item)
				  }
				  if(item.type === LevelType.FINISH_LEVEL) {
						return getFinishLevelIcon(item)
				  }
				
					if(item.type === LevelType.TODAY_GOAL) {
						return getTodayGoalIcon(item)
					}
					if(item.type === LevelType.FINISH_CAMP) {
						return getFinishCampIcon(item)
					}
					if(item.type === LevelType.CAMP_EXAM) {
						return getFinishExamCampIcon(item)
					}

					if(item.type === LevelType.EXAM_LEVEL) {
						return getExamLevelIcon(item)
					}
					if(item.type === LevelType.HOT_LEVEL) {
						return getHotLevelIcon(item)
					}
					if(item.type === LevelType.REVIEW_LEVEL) {
						return getReviewLevelIcon(item)
					}
					if(item.type === LevelType.LOCK_LEVEL) {
						return getLocklevelIcon(item)
					}
					if(item.type === LevelType.CAMP_LEARNING) {
						return getCampLearningIcon(item)
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
					if(this.levelItem[index].type === LevelType.TODAY_GOAL) {
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
