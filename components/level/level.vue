<template name="train-level">
	<view class="page-level-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 641.8597412109375">
            <!-- 定义S曲线 -->
            <path id="s-curve" stroke="rgba(255, 255, 255, 1)" stroke-width="5" fill="none" transform="translate(18, 0)"
                d="M17.8285 641.376C-48.2092 306.372 127.286 293.372 17.8285 0"></path>		
			<svg  v-for="(svg, index) in greenLevels" :key="index" v-html="svg"></svg>
        </svg>

	</view>
</template>

<script>
	export default {
	  name: "train-level",
	  data() {
			return {
			  levelItem: [
				{ x: 0, y: 0 },
				{ x: 0, y: 0 },
				{ x: 0, y: 0 },
				{ x: 0, y: 0 }
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
			greenLevels() {
				return this.levelItem.map((item, index) => {
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
					  <text x="18" y="21" text-anchor="middle" dominant-baseline="middle" fill="#000" font-size="10">
						${index} <!-- 这里是要显示的数字 -->
					  </text>
					</svg>
				  `;
				});
			}
		},
		methods: {
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
