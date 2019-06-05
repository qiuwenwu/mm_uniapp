<template>
	<!-- 输入框 -->
	<view class="mm_input" @click="setting()">
		<mm_side :style="'width:' + width" v-if="icon || title">
			<text class="form_icon" v-html="icon"></text>
			<text class="form_title">{{ title }}</text>
		</mm_side>
		<mm_main v-if="type == 'text' || type == 'number' || type == 'password'">
			<input type="text" v-model="val" :placeholder="desc" v-if="type == 'text'"></input>
			<input type="number" v-model="val" :placeholder="desc" v-else-if="type == 'number'"></input>
			<input type="password" v-model="val" :placeholder="desc" v-else-if="type == 'password'"></input>
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
