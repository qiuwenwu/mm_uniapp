<template>
	<!-- 支付完成页提示页面 -->
	<mm_page class="page_tip" id="pay_tip">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 状态提示 -->
						<mm_block class="message">
							<mm_icon src="/static/img/state_success.png" class="b-c"></mm_icon>
							<mm_title>付款成功</mm_title>
							<mm_desc><text>您的订单会在工作日内1-2小时确认并生效</text></mm_desc>
						</mm_block>
					</mm_col>
					<mm_col>
						<!-- 确认完成按钮 -->
						<mm_div>
							<mm_btn type="default" class="full" url="/pages/mall/order_list">完成</mm_btn>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_footer class="center">
			<mm_grid col="1">
				<mm_col>
					<mm_div class="footer_info">
						<navigator url="../home/article_view?title=关于我们" class="footer_link">比特中心</navigator>
						<text class="copyright">Copyright © 2019-2022 weui.io</text>
					</mm_div>
				</mm_col>
			</mm_grid>
		</mm_footer>
	</mm_page>
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
	#pay_tip .message {
		font_size: 0.75rem;
		color: #666;
		padding: 1.5rem 1rem;
		text-align: center;
	}

	#pay_tip .mm_title {
		font-weight: 800;
		font-size: 1.3rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	#pay_tip .mm_icon {
		width: 6rem;
		height: 6rem;
		margin: auto;
	}

	#pay_tip .mm_btn {
		background: #333;
		color: #fff;
		border-color: #333;
	}
</style>
