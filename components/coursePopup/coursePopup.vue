<template>
	<uni-popup ref="coursePopup" type="bottom" background-color="#202125">
			<view class="course-body">
				<uni-title type="h1" title="课程 " color="#ffffff" align="center" style="margin-top: 5px;"></uni-title>
				<view class="close-btn-box">
					<image class="close-btn" mode="heightFix" src="/static/close.svg" :draggable="false" @click="closeCoursePopup"></image>
				</view>
				
				<scroll-view
					:scroll-top="scrollTop"
					scroll-y="true" 
					:show-scrollbar="false"
					class="scroll-Y" 
					@scroll="scroll">
				
					<uni-list  :border="true">
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
						<uni-list-item title="列表文字" />
					</uni-list>
				</scroll-view>	

			</view>
	</uni-popup>
</template>

<script>
	import eventBus from "@/common/eventbus.js";
	export default {
		data() {
			return {
					scrollTop: 0
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
			}
		}
	}
</script>

<style scoped>
.course-body {
		height: 300px;
	}
	.close-btn-box {
		position: fixed;
		top: 15px;
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		height: 42px;
		
	}
	.close-btn {
		height: 30px;
		width: 30px;
		margin-right: 30px;
	}
	::v-deep .uni-h1 {
		font-size: 25px;
	}
	
	.scroll-Y{
		height: 100%;
	}
	
	::v-deep .uni-list-item__container {
		background-color: #202125;
	}
	::v-deep .uni-list-item__content-title {
		color: #ffffff;
	}
</style>