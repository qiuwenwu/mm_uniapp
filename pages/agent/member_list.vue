<template>
	<!-- 代理首页 -->
	<view class="page_account" id="agent_index">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="big">
									<mm_item url="/pages/info/index">
										<mm_side class="headimg">
											<mm_icon src="/static/img/headimg.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>昵称</mm_title>
											<mm_desc><text class="vip">VIP4</text></mm_desc>
											<mm_tip><view class="people">邀请人数 <text class="num">5</text></view><view class="count">持有DBD<text class="num">66</text></view></mm_tip>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/info/index">
										<mm_side class="headimg">
											<mm_icon src="/static/img/headimg.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>昵称</mm_title>
											<mm_desc><text class="vip">VIP4</text></mm_desc>
											<mm_tip><view class="people">邀请人数 <text class="num">5</text></view><view class="count">持有DBD<text class="num">66</text></view></mm_tip>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				value: 8.888888888888,
				value1: 0.123123123123,
			}
		}
	}
</script>

<style>
	.mm_tip { position: absolute; top:0.5rem; right: 1rem; color: #666; font-size: 0.875rem; }
	.mm_tip>* { margin-top: 0.125rem; }
	.num { float: right;  }
</style>
