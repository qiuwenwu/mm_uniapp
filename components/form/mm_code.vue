<template>
	<!-- 验证码 -->
	<mm_item class="mm_code">
		<mm_group><mm_btn :func="func">发送验证码</mm_btn></mm_group>
		<mm_side v-if="icon">
			<mm_icon :icon="icon"></mm_icon>
		</mm_side>
		<mm_main>
			<mm_title v-if="title">{{ title }}</mm_title>
			<input type="text" :value="value" :placeholder="desc" v-if="type == 'text'" @input="$emit('input', $event.target.value)"></input>
			<mm_tip>
				<slot></slot>
			</mm_tip>
		</mm_main>
	</mm_item>
</template>

<script>
	import mixin from '@/mixins/form'

	export default {
		mixins: [mixin]
	}
</script>

<style>
</style>
