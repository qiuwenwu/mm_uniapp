<template>
	<!-- 输入框 -->
	<mm_item class="mm_input">
		<slot></slot>
		<mm_side v-if="icon">
			<mm_icon :icon="icon"></mm_icon>
		</mm_side>
		<mm_main v-if="type == 'text' || type == 'number' || type == 'password'">
			<mm_title v-if="title">{{ title }}</mm_title>
			<mm_desc>
				<input type="text" :value="value" :maxlength="max" :placeholder="desc" v-if="type == 'text'" @input="$emit('input', $event.target.value)"></input>
				<input type="number" :value="value" :max="max" :placeholder="desc" v-else-if="type == 'number'" @input="$emit('input', $event.target.value)"></input>
				<input type="password" :value="value" :maxlength="max" :placeholder="desc" v-else-if="type == 'password'" @input="$emit('input', $event.target.value)"></input>
				<input :type="type" :value="value" :maxlength="max" :placeholder="desc" @input="$emit('input', $event.target.value)" v-else></input>
			</mm_desc>
			<view class="mm_line"></view>
			<mm_tip v-if="tip" v-html="tip"></mm_tip>
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
