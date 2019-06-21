<template>
	<!-- 搜索栏 -->
	<view class="mm_search">
		<view class="reset" v-show="val"><text class="font_default" @click="clear()">取消</text></view>
		<view class="search_warp">
			<view class="mm_icon"><text class='fa fa-search'></text></view>
			<input type="text" :value="value" :placeholder="desc" @input="input_fun"></input>
		</view>
		<view class="search_ret lr" v-if="list.length > 0">
			<mm_list col="1" class="mini">
				<mm_item :url="o[vm.url]" v-for="(o, k) in list" :key="k">
					<mm_side>
						<mm_icon v-if="o[vm.icon]"></mm_icon>
						<view class="mm_icon" v-else><text class='fa fa-search'></text></view>
					</mm_side>
					<mm_main>{{ o[vm.title] }}<text class="arrouw_up"></text></mm_main>
				</mm_item>
			</mm_list>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	import mixin from '@/mixins/form'

	export default {
		mixins: [mixin],
		props: {
			list: {
				type: Array,
				default: function() {
					return []
				}
			},
			vm: {
				type: Object,
				default: function() {
					return {
						icon: 'icon',
						title: 'title',
						url: 'url'
					}
				}
			},
			desc: {
				type: String,
				default: "搜索关键词"
			}
		},
		data() {
			return {
				val: this.value
			}
		},
		methods: {
			clear() {
				this.val = '';
				this.send();
			},
			input_fun(e) {
				this.val = e.target.value;
				this.send();
			},
			send() {
				this.$emit('input', this.val);
				if (this.func) {
					this.func(this.val);
				}
			}
		}
	}
</script>

<style>
	.reset {
		float: right;
		padding: 0.55rem 1rem 0.45rem 1rem;
		position: relative;
		z-index: 4;
	}

	.search_warp {
		padding: 0.5rem 1rem;
		background: #EDEDED;
		position: relative;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		color: #888;
		z-index: 2;
	}

	.search_warp .mm_icon {
		position: absolute;
		top: 50%;
		left: 1.5rem;
		z-index: 3;
		width: 1rem;
		height: 1rem;
		transform: translate(0, -65%);
	}

	.search_warp input {
		background: #fff;
		border-radius: 0.25rem;
		padding: 0 0.5rem;
	}

	.search_warp .mm_icon ~ input {
		padding-left: 1.75rem;
	}

	.search_ret {
		background: #fff;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.search_ret .mm_icon {
		color: #999;
	}
	
	.search_ret .arrouw_up {
		display: inline-block;
		background: url('/static/img/arrow-up-left.png') center center no-repeat;
		background-size: 100% 100%;
		height: 1.25rem;
		width: 1.25rem;
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translate(0, -50%);
	}
</style>
