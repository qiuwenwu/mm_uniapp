<template>
	<!-- 邀请面板页面 -->
	<view class="page_agent" id="agent_invitation_panel">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid id="invitation">
					<mm_col>
						<mm_block>
							<mm_div>
								<text>99</text>
								<mm_desc>直推人数</mm_desc>
							</mm_div>
							<mm_div>
								<text>999</text>
								<mm_desc>二级推荐人数<text class=""></text></mm_desc>
							</mm_div>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_div>
								<text>99</text>
								<mm_desc>直推人数</mm_desc>
							</mm_div>
							<mm_div>
								<text>999</text>
								<mm_desc>二级推荐人数<text class=""></text></mm_desc>
							</mm_div>
						</mm_block>
					</mm_col>
				</mm_grid>
				<mm_grid id="info">
					<mm_col>
						<mm_block>
							<mm_list col="1" class="space">
								<mm_item>
									<mm_main>
										<mm_title>邀请码</mm_title>
										<mm_desc>
											<text id="#copyObj">123456</text>
											<text @click="copy">复制</text>
										</mm_desc>
									</mm_main>
								</mm_item>
								<mm_item>
									<mm_main>
										<mm_title>邀请链接</mm_title>
										<text>复制链接</text>
									</mm_main>
								</mm_item>
								<mm_item>
									<mm_div>
										<mm_title>邀请二维码</mm_title>
										<image src="/static/img/qrcode.png"></image>
										<text>保存到相册</text>
									</mm_div>
								</mm_item>
							</mm_list>
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
		components: {},
		data() {
			return {
				oauth: true
			}
		}
	}
</script>

<style>
	#invitation .mm_block {
		display: flex;
		padding: .8rem;
	}

	#invitation .mm_div {
		flex: 1;
		text-align: center;
		padding: .8rem 0;
	}

	#invitation .mm_div:first-of-type {
		border-right: 1px solid #999999;
	}

	#invitation .mm_desc {
		padding: .5rem 0;
	}
</style>
