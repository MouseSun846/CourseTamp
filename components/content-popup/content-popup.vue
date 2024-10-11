<template>
	<uni-popup ref="contentPopup" type="bottom" background-color="rgb(207, 218, 254)"  :mask-click="false">
			<view class="content-body">
				<uni-title type="h1" title="目录" color="#ffffff" align="center" style="margin-top: 0px;"></uni-title>
				<view class="close-btn-box">
					<image class="close-btn" mode="heightFix" src="/static/close.svg" :draggable="false" @click="closeContentPopup"></image>
				</view>
				
				<view class="wrap">
					<view class="tabs">
						<view class="tab active">标签1</view>
					</view>
					<view class="content-wrap">

						<view class="content-box">
							<scroll-view
								:scroll-top="scrollTop"
								scroll-y="true" 
								:show-scrollbar="false"
								class="scroll-Y" 
								@scroll="scroll">
								<uni-list-item
										v-for="(item, index) in contentList"
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
					</view>
				</view>


		


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
					contentList:[
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
					],
					activeIndex: 0,
			}
		},
		mounted() {
			eventBus.on("show-content-popup", (e) => {
				this.showContentDialog()
			})
		},
		methods: {
			// 显示目录popup 
			showContentDialog: function() {
				this.$refs.contentPopup.open()
			},
			// 关闭目录popup
			closeContentPopup: function() {
				this.$refs.contentPopup.close()
			},
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop
			},
			// 列表点击事件
			onItemClick: function(item, index) {
				this.selectedIndex = index
			},
			
			onTabClick(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style scoped>
	.content-body {
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
		width: 90%;
	}
	
	::v-deep .uni-list-item__container {
		background:radial-gradient(at 96.49283077073736% 42.87202481763821%, hsla(211.03448275862067, 56.862745098039284%, 90%, 1) 0%, hsla(211.03448275862067, 56.862745098039284%, 90%, 0) 100%), radial-gradient(at 21.072147853117418% 8.332825325753301%, hsla(251.99999999999994, 38.46153846153849%, 94.90196078431372%, 1) 0%, hsla(251.99999999999994, 38.46153846153849%, 94.90196078431372%, 0) 100%), radial-gradient(at 78.47940016751653% 87.55551599150111%, hsla(211.03448275862067, 56.862745098039284%, 90%, 1) 0%, hsla(211.03448275862067, 56.862745098039284%, 90%, 0) 100%), radial-gradient(at 66.39976667942473% 94.72660681024504%, hsla(251.99999999999994, 38.46153846153849%, 94.90196078431372%, 1) 0%, hsla(251.99999999999994, 38.46153846153849%, 94.90196078431372%, 0) 100%);
		height: 45px;
		padding: 5px;
	}
	::v-deep .uni-list-item__content-title {
		color: #ffffff;
	}
	.slot-box { 
		height: 40px;
		width: 60%;
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

	.wrap {
        background-color: #eee;
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        box-sizing: border-box;
        background: linear-gradient(#cdd9fe, #e2e9fd);
        position: relative;
		height: 100%;
      }
 
      .tabs {
        display: flex;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;
        border-radius: 8px 8px 0 0;
      }
      .wrap .btn {
        width: 130px;
        height: 90px;
        background: pink;
        text-align: center;
        line-height: 50px;
        border-radius: 20px 20px 0px 0px;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 0;
      }
      .tab {
        flex: 0 0 200px;
        height: 50px;
        cursor: pointer;
        position: relative;
        text-align: center;
        line-height: 50px;
      }
 
      .tab.active {
        background-color: #fff;
        color: #4185ef;
      }
 
      .tab.active:after {
        content: "";
        position: absolute;
        top: 0.5px;
        right: -49.5px;
        height: 100%;
        width: 50px;
        z-index: 2;
        background-color: #fff;
        clip-path: path("M 0,0 C 25,0 25,50 50,50 L 0, 50 Z");
      }
 
      .content-wrap {
        height: 100%;
        background: #fff;
        border-radius: 0px 20px 0px 0px;
        position: relative;
        z-index: 1;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: center;
      }

	  .content-box {
		width: 100%;
		height: 100%;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	  }

</style>