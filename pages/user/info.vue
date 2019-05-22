<template>
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
	import container_group from '@/components/container/group'
	import form_input from '@/components/form/input'

	export default {
		components: {
			container_group,
			form_input
		}
	}
</script>

<style>
	.form { border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(0, 0, 0, 0.1); }
</style>
