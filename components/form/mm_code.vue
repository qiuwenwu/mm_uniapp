<template>
	<!-- 验证码 -->
	<view class="mm_code">
		<mm_side v-if="icon">
			<mm_icon :icon="icon"></mm_icon>
		</mm_side>
		<mm_main>
			<mm_title>{{ title }}</mm_title>
			<input type="number" v-model="val" :placeholder="desc"></input>
			<mm_tip><slot></slot></mm_tip>
		</mm_main>
	</view>
</template>

<script>
	import mixin from '@/mixins/form'

	export default {
		mixins: [mixin]
	}
</script>

<style>
</style>
