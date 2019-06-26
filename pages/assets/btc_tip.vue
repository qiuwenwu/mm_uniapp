<template>
	<!-- 提现结果提示页面 -->
	<mm_page class="page_calculation" id="calculation_withdraw_tip">
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
							<mm_title>申请提现成功</mm_title>
							<mm_desc>我们将在72小时内处理提现申请</mm_desc>
						</mm_block>
					</mm_col>
					<mm_col>
						<!-- 确认完成按钮 -->
						<mm_block class="bg_no">
							<mm_btn type="default" class="full" url="./dbd_list">完成</mm_btn>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_footer class="center">
			<mm_warp>
				<mm_div url="/" class="font_dark">比特中心</mm_div>
				<mm_desc class="font_small">Copyright © 2008-2016 bitcenter.com</mm_desc>
			</mm_warp>
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
	#calculation_withdraw_tip .message{font_size:0.75rem; color:#666; padding: 1.5rem 1rem; text-align: center;}
	#calculation_withdraw_tip .mm_title{font-weight: 800;font-size: 1.3rem;margin-top: 1rem;margin-bottom: 0.5rem;}
	#calculation_withdraw_tip .mm_icon{ width: 6rem; height: 6rem; margin: auto; }
	#calculation_withdraw_tip .mm_footer{margin-top: 14rem;background:transparent; color: #999;}
	#calculation_withdraw_tip .mm_btn{background:#333;color:#fff;border-color:#333;  }
</style>
