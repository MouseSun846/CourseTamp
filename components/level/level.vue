<template name="train-level">
	<view class="page-level-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 641.8597412109375">
            <!-- 定义S曲线 -->
            <path id="s-curve" stroke="rgba(255, 255, 255, 1)" stroke-width="5" fill="none" transform="translate(18, 0)"
                d="M17.8285 641.376C-48.2092 306.372 127.286 293.372 17.8285 0"></path>		
			<svg  v-for="(svg, index) in Levels" :key="index" v-html="svg"></svg>
        </svg>

	</view>
</template>

<script>
	const LervelType = {
		// 入营
		JOIN_CAMP: 0, 
		// 完成关卡
		FINISH_LEVEL: 1,
		// 今日目标
		TODAY_GOAL: 2,
		// 结营关卡
		FINISH_CAMP: 3,
		// 结营模考
		CAMP_EXAM: 4,
		// 测试关卡
		EXAM_LEVEL: 5,
		// 热点关卡
		HOT_LEVEL: 6,
		// 复习关卡
		REVIEW_LEVEL: 7,
		// 带解锁关卡
		LOCK_LEVEL: 8,
		// 当前关卡游标
		LEVEL_CURSOR: 9
		
	}
	export default {
	  name: "train-level",
	  data() {
			return {
			  levelItem: [
				{ x: 0, y: 0, id: 10, type: LervelType.JOIN_CAMP, name: "名称1"},
				{ x: 0, y: 0, id:100, type: LervelType.FINISH_LEVEL, name: "名称2"},
				{ x: 0, y: 0, id: 999, type: LervelType.FINISH_LEVEL, name: "名称3"},
				{ x: 0, y: 0, id: 888, type: LervelType.FINISH_LEVEL, name: "名称4"}
			  ],
		  }
		},
		props: {
			name: {
				type: String,
				default: ""
			},
			posIndex: {
				type: Number,
				required: true
			}
		},
		mounted(){
			this.updatePos()
		},
		computed: {
			
			Levels() {
				return this.levelItem.map((item, index) => {
				  if( item.type === LervelType.JOIN_CAMP) {
					  return this.getJoinCampIcon(item)
				  }
				  if(item.type === LervelType.FINISH_CAMP) {
					  return this.getFinishLevelIcon(item)
				  }
				   return this.getFinishLevelIcon(item)
				});
			}
		},
		methods: {
			// 入营关卡
			getJoinCampIcon(item) {
				return `<svg xmlns="http://www.w3.org/2000/svg" 
				xmlns:xlink="http://www.w3.org/1999/xlink" 
				width="33" 
				height="43.99998474121094" 
				viewBox="0 0 33 43.99998474121094" 
				fill="none"
				x="${item.x}"
				y="${item.y}">
				>
						<path d="M33 26.862L33 26.862ZM33 0L0 0L0 26.862L10.3949 26.862L12.2101 31.6951C10.725 32.7694 9.90015 34.202 9.90015 35.814L13.2001 35.814C13.2001 35.0973 14.5187 34.023 16.5 34.023C18.4811 34.023 19.7998 35.0973 19.7998 35.814L23.0997 35.814C23.0997 34.202 22.2749 32.7694 20.7898 31.6951L22.605 26.8585L33 26.862L33 0Z"   fill="url(#linear_fill_349d3797-e454-42b8-9652-050bc77f16fb)" >
						</path>
						<path d="M7.41248 13.9894L11.048 13.9894L11.048 19.8676L7.41248 19.8676L7.41248 13.9894Z"   fill="url(#linear_fill_7953e272-05ba-4799-b719-a92835785ef8)" >
						</path>
						<path d="M14.6833 10.0709L18.3189 10.0709L18.3189 19.8676L14.6833 19.8676L14.6833 10.0709Z"   fill="url(#linear_fill_25fcddef-57c1-4f91-8a29-df3d2779651d)" >
						</path>
						<path d="M17.7734 31.82L17.7734 31.82ZM19.2277 27.7054L13.7756 27.7054L15.2285 31.82C15.5922 31.624 16.1372 31.624 16.5009 31.624C16.8646 31.624 17.4097 31.624 17.7734 31.82L19.2277 27.7054Z"   fill="#FFFFFF" >
						</path>
						<path d="M21.9547 6.15211L25.5903 6.15211L25.5903 19.8674L21.9547 19.8674L21.9547 6.15211Z"   fill="url(#linear_fill_a561e69a-69c7-4a60-ba8f-a942f5a64454)" >
						</path>
						<rect  x="4.125" y="29.674407958984375" width="24.75" height="14.325576782226562" rx="5"    fill="#FFFFFF" >
						</rect>
						<rect  x="5.15625" y="30.697677612304688" width="22.6875" height="12.279067993164062" rx="5"    fill="#FD9F1C" >
						</rect>
						<g >
						<path     fill="#FFFFFF"  d="M12.57 34.5842Q12.762 36.3282 13.558 37.6682Q14.354 39.0082 15.914 40.0642L15.474 40.6242Q14.17 39.6642 13.39 38.5922Q12.61 37.5202 12.25 36.0722Q11.554 38.5762 8.994 40.6402L8.506 40.0962Q10.178 38.8482 10.978 37.4842Q11.778 36.1202 11.954 34.6722Q11.874 34.5522 11.71 34.5002Q11.546 34.4482 11.266 34.4482L10.13 34.4482L10.13 33.7762L11.514 33.7762Q12.026 33.7762 12.278 33.9602Q12.53 34.1442 12.57 34.5842ZM21.738 33.4642L21.738 34.1122L23.794 34.1122L23.794 34.6562L21.738 34.6562L21.738 35.0162L21.106 35.0162L21.106 34.6562L19.298 34.6562L19.298 35.0162L18.666 35.0162L18.666 34.6562L16.61 34.6562L16.61 34.1122L18.666 34.1122L18.666 33.4642L19.298 33.4642L19.298 34.1122L21.106 34.1122L21.106 33.4642L21.738 33.4642ZM17.594 36.7922L16.97 36.7922L16.97 35.3842L23.426 35.3842L23.426 36.7922L22.818 36.7922L22.818 35.8962L17.594 35.8962L17.594 36.7922ZM18.018 38.0002L18.018 36.3762L22.394 36.3762L22.394 38.0002L18.018 38.0002ZM18.65 37.5202L21.77 37.5202L21.77 36.8562L18.65 36.8562L18.65 37.5202ZM18.034 40.6242L17.386 40.6242L17.386 38.4402L23.018 38.4402L23.018 40.6322L22.37 40.6322L22.37 40.2722L18.034 40.2722L18.034 40.6242ZM22.37 39.7602L22.37 38.9602L18.034 38.9602L18.034 39.7602L22.37 39.7602Z">
						</path>
						</g>
						<defs>
						<linearGradient id="linear_fill_349d3797-e454-42b8-9652-050bc77f16fb" x1="0" y1="-250.61978149414062" x2="33" y2="-250.61978149414062" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#F5D848"  />
						<stop offset="0.9900000095367432" stop-color="#FF9514"  />
						</linearGradient>
						<linearGradient id="linear_fill_7953e272-05ba-4799-b719-a92835785ef8" x1="7.4124755859375" y1="-274.91400146484375" x2="11.0479736328125" y2="-274.91400146484375" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#FBF1D4"  />
						<stop offset="1" stop-color="#F5DA90"  />
						</linearGradient>
						<linearGradient id="linear_fill_25fcddef-57c1-4f91-8a29-df3d2779651d" x1="14.683349609375" y1="-272.95526123046875" x2="18.31884765625" y2="-272.95526123046875" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#FBF1D4"  />
						<stop offset="1" stop-color="#F5DA90"  />
						</linearGradient>
						<linearGradient id="linear_fill_a561e69a-69c7-4a60-ba8f-a942f5a64454" x1="21.9547119140625" y1="-270.995361328125" x2="25.5902099609375" y2="-270.995361328125" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#FBF1D4"  />
						<stop offset="1" stop-color="#F5DA90"  />
						</linearGradient>
						</defs>
						</svg>`;
			},
			// 获取完成关卡
			getFinishLevelIcon(item) {
				return `
					<svg xmlns="http://www.w3.org/2000/svg"
						 xmlns:xlink="http://www.w3.org/1999/xlink" 
						 width="36" 
						 height="42.996917724609375" 
						 viewBox="0 0 36 42.996917724609375" 
						 fill="none" 
						 x="${item.x}" 
						 y="${item.y}">
						<circle cx="18" cy="21" r="18"   fill="#CBD3F9" >
						</circle>
						<circle cx="18" cy="18" r="18"   fill="#F5F6FA" >
						</circle>
						<circle cx="18" cy="18" r="15"   fill="#71D25E" >
						</circle>
						<ellipse cx="18.5" cy="37.458457946777344" rx="5.5" ry="5.538459777832031"   fill="#CBD3F9" >
						</ellipse>
						<ellipse cx="18.5" cy="35.53845977783203" rx="5.5" ry="5.538459777832031"   fill="#F5F6FA" >
						</ellipse>
						<path   fill="rgba(113, 210, 94, 1)"  d="M17.1933 35.7521L18.3552 36.8979L17.8286 37.4319L18.3552 36.8979C18.191 36.7359 17.9265 36.7382 17.7651 36.9029L18.3007 37.4278L17.7651 36.9029L20.7977 33.8084L21.869 34.8583L18.8364 37.9528L18.8364 37.9528C18.4167 38.3811 17.7289 38.3869 17.302 37.9659L17.302 37.9659L16.1401 36.8201L17.1933 35.7521ZM17.302 37.9659L17.8286 37.4319L17.302 37.9659L17.302 37.9659ZM18.8364 37.9528L18.3007 37.4278L18.8364 37.9528L18.8364 37.9528ZM16.6667 37.0361C16.2525 37.0361 15.9167 36.7003 15.9167 36.2861C15.9167 35.8719 16.2525 35.5361 16.6667 35.5361C17.0809 35.5361 17.4167 35.8719 17.4167 36.2861C17.4167 36.7003 17.0809 37.0361 16.6667 37.0361ZM21.3334 35.0833C20.9191 35.0833 20.5834 34.7475 20.5834 34.3333C20.5834 33.9191 20.9191 33.5833 21.3334 33.5833C21.7476 33.5833 22.0834 33.9191 22.0834 34.3333C22.0834 34.7475 21.7476 35.0833 21.3334 35.0833Z">
						</path>
					  <text x="18" y="21" text-anchor="middle" dominant-baseline="middle" fill="#ffffff" font-size="15" style="font-family: 'Arial', sans-serif;">
						${item.id} <!-- 这里是要显示的数字 -->
					  </text>
					</svg>`;
			},
			updatePos() {
				const path = document.getElementById('s-curve');
				const rect = path.getBoundingClientRect();
				const pathLength = path.getTotalLength();
				for(let index = 0;index<4;index++) {
					const point = path.getPointAtLength(index * pathLength/4 +pathLength/8);
					this.levelItem[index].x = point.x;
					this.levelItem[index].y = point.y;
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
