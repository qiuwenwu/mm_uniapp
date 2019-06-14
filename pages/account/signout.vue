<template>
	<!-- 退出页面 -->
	<view class="page_account" id="account_signout">
		<!-- 退出提示 -->
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						您已退出，稍后将跳转到登录页面
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
				url_obj: "~/test",
			}
		}
	}
</script>

<style>
</style>
