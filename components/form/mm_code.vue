<template>
	<!-- 验证码 -->
	<mm_item class="mm_code">
		<slot>
			<mm_group>
				<mm_btn :func="func" :type="type" :disabled="ds">{{ btn }}</mm_btn>
			</mm_group>
		</slot>
		<mm_side v-if="icon">
			<mm_icon :icon="icon"></mm_icon>
		</mm_side>
		<mm_main>
			<mm_title v-if="title">{{ title }}</mm_title>
			<input type="text" :value="value" :placeholder="desc" @input="$emit('input', $event.target.value)"></input>
			<mm_tip v-if="tip" v-html="tip"></mm_tip>
		</mm_main>
	</mm_item>
</template>

<script>
	import mixin from '@/mixins/form'

	export default {
		mixins: [mixin],
		props:{
			btn: {
				type: String,
				default:"发送验证码"
			}
		},
		computed: {
			ds() {
				if(this.btn.indexOf('s') == -1){
					return false;
				}
				else{
					return true;
				}
			}
		}
	}
</script>

<style>
</style>
