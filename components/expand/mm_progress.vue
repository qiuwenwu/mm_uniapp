<template>
	<view class="mm_progress">
		<view class="progress_desc">
			<slot></slot>
		</view>
		<view class="progress_warp">
			<view class="progress_pointer" v-show="val > 15" :style="'left:' + val + '%'">完成{{ val }}%</view>
			<view class="progress_bar">
				<view class="progress_value" :style="'width:'+ val + '%'"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 显示方式
			display: {
				type: String,
				default: "1"
			},
			// 显示隐藏
			show: {
				type: Boolean,
				default: false
			},
			num: {
				type: Number,
				default: 0
			}
		},
		computed: {
			val() {
				var ret = this.num;
				if (ret > 100) {
					ret = 100;
				} else if (ret < 0) {
					ret = 0;
				}
				return ret;
			}
		}
	}
</script>

<style>
	.progress_desc {
		float: right;
		padding-left: 1rem;
		padding-top: 0.5rem;
	}

	.progress_warp {
		padding-top: 1.5rem;
		overflow: hidden;
		position: relative;
	}

	.progress_bar {
		background-color: #f5f5f5;
		-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
		border-radius: .5rem;
		height: .35rem;
		overflow: hidden;
	}

	.progress_pointer {
		position: absolute;
		display: inline-block;
		line-height: 1;
		font-size: 0.625rem;
		top: 0;
		left: 0;
		transform: translateX(-50%);
	}

	.progress_pointer:after {
		content: "";
		display: block;
		margin: 0.2rem auto;
		width: 0;
		height: 3;
		border-right: .2rem solid transparent;
		border-top: .4rem solid #999;
		border-left: .2rem solid transparent;
	}

	.progress_value {
		height: .35rem;
		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffb1c2+0,c9ddff+50,9fff9d+100 */
		background: #ffb1c2;
		/* Old browsers */
		background: -moz-linear-gradient(45deg, #ffb1c2 0%, #c9ddff 50%, #9fff9d 100%);
		/* FF3.6-15 */
		background: -webkit-linear-gradient(45deg, #ffb1c2 0%, #c9ddff 50%, #9fff9d 100%);
		/* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(45deg, #ffb1c2 0%, #c9ddff 50%, #9fff9d 100%);
		/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffb1c2', endColorstr='#9fff9d', GradientType=1);
		/* IE6-9 fallback on horizontal gradient */
	}
</style>
