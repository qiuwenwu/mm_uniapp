<template>
	<!-- 二级代理首页 -->
	<view class="page_agent" id="agent_member_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="big">
									<mm_item>
										<mm_side class="headimg">
											<mm_icon src="/static/img/headimg.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_tip><view class="people">邀请人数 <text class="num">5</text></view><view class="count">持有DBD<text class="num">66</text></view></mm_tip>
											<mm_title>昵称</mm_title>
											<mm_desc><text class="vip">VIP2</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_side class="headimg">
											<mm_icon src="/static/img/headimg.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_tip><view class="people">邀请人数 <text class="num">5</text></view><view class="count">持有DBD<text class="num">66</text></view></mm_tip>
											<mm_title>昵称</mm_title>
											<mm_desc><text class="vip">VIP1</text></mm_desc>
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
				oauth: true,
				value: 8.888888888888,
				value1: 0.123123123123,
			}
		}
	}
</script>

<style>
	.mm_tip { float: right; color: #999; font-size: 85%; }
	.people { margin-bottom: 0.05rem; }
	.count { margin-top: 0.4rem; }
	.num { float: right; width: 1.5rem; text-align: right; color: #999; font-weight: 400;  }
</style>
