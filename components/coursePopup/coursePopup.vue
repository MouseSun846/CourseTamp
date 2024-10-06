<template>
	<uni-popup ref="coursePopup" type="bottom" background-color="#202125"  :mask-click="false">
			<view class="course-body">
				<uni-title type="h1" title="课程" color="#ffffff" align="center" style="margin-top: 0px;"></uni-title>
				<view class="close-btn-box">
					<image class="close-btn" mode="heightFix" src="/static/close.svg" :draggable="false" @click="closeCoursePopup"></image>
				</view>
				<scroll-view
					:scroll-top="scrollTop"
					scroll-y="true" 
					:show-scrollbar="false"
					class="scroll-Y" 
					@scroll="scroll">
					<uni-list-item
							v-for="(item, index) in courseList"
							:key="index"
							@click="onItemClick(item, index)"
							:class="{ 'selected': selectedIndex === index }"
							:clickable="true">
							<template v-slot:body>
								<image class="item-choosing" mode="heightFix" src="/static/choosing.svg" :draggable="false" v-if="selectedIndex === index"></image>
								<text class="slot-box slot-text">{{item}}</text>
							</template>
						</uni-list-item>

				</scroll-view>	


			</view>
	</uni-popup>
</template>

<script>
	import eventBus from "@/common/eventbus.js";
	export default {
		data() {
			return {
					scrollTop: 0,
					selectedIndex: null, 
					courseList:[
						'列表文字列表文字1列表文字列表文字',
						'列表文字2',
						'列表文字3',
						'列表文字4',
						'列表文字5',
						'列表文字1',
						'列表文字2',
						'列表文字3',
						'列表文字4',
						'列表文字5'
					]
			}
		},
		mounted() {
			eventBus.on("show-course-popup", (e) => {
				this.showCourseDialog()
			})
		},
		methods: {
			// 显示课程popup 
			showCourseDialog: function() {
				this.$refs.coursePopup.open()
			},
			// 关闭课程popup
			closeCoursePopup: function() {
				this.$refs.coursePopup.close()
			},
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop
			},
			// 列表点击事件
			onItemClick: function(item, index) {
				this.selectedIndex = index
			}
		}
	}
</script>

<style scoped>
	.course-body {
		height: 370px;
	}
	.close-btn-box {
		position: fixed;
		top: 8px;
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		height: 42px;
		cursor: pointer;
		
	}
	.close-btn {
		height: 30px;
		width: 30px;
		margin-right: 30px;
	}
	::v-deep .uni-h1 {
		font-size: 20px;
	}
	
	.scroll-Y{
		position: absolute;
		height: 300px;
	}
	
	::v-deep .uni-list-item__container {
		background-color: #202125;
		height: 45px;
		padding: 5px;
	}
	::v-deep .uni-list-item__content-title {
		color: #ffffff;
	}
	.slot-box { 
		height: 40px;
		width: 100%;
		border: 2px solid transparent; /* 默认透明边框 */
		border-radius: 10px;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.uni-list-item.selected .slot-box { 
		border-color: #0055FF; /* 选中时的边框颜色 */
	}

	.slot-text {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-size: 18px;
	}
	.item-choosing {
		position: absolute;
		right: 5px;
		width: 20px;
		height: 20px;
		border-radius: 7px; 
	}

</style>