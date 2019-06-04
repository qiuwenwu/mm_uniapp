<template>
	<!-- 用户信息页面 -->
	<view class="page" id="user_info">
		<!-- 用户信息表单 -->
		<view class="form">
			<form_input><button type="primary" plain="true" @click="submit()">发送验证码</button></form_input>
			<form_input type="switch"></form_input>
			<form_input type="checkbox" :checked="true" value="123123" />
			<form_input type="password" />
		</view>
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
	.form { border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(0, 0, 0, 0.1); }
</style>
