<template>
	<!-- 输入框 -->
	<view class="mm_input">
		<mm_side v-if="icon">
			<text class="form_icon" v-html="icon"></text>
		</mm_side>
		<mm_main v-if="type == 'text' || type == 'number' || type == 'password'">
			<mm_title>{{ title }}</mm_title>
			<mm_desc>
				<input type="text" :value="value" :placeholder="desc" v-if="type == 'text'" @input="$emit('input', $event.target.value)"></input>
				<input type="number" :value="value" :placeholder="desc" v-else-if="type == 'number'" @input="$emit('input', $event.target.value)"></input>
				<input type="password" :value="value" :placeholder="desc" v-else-if="type == 'password'" @input="$emit('input', $event.target.value)"></input>
			</mm_desc>
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
