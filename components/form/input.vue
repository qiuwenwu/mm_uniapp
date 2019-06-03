<template>
	<view class="form_input" @click="setting()">
		<view class="form_desc">
			<slot>
				<switch v-if="type == 'switch'" @click="setting()" />
				<checkbox :value="val" :checked="ck" v-else-if="type == 'checkbox'" />
			</slot>
		</view>
		<view class="form_title" :style="'width:' + width" v-if="icon || title"><text class="form_icon" v-html="icon"></text>{{ title }}{{ ck }}</view>
		<view class="form_main" v-if="type == 'text' || type == 'number' || type == 'password'">
			<input type="text" v-model="val" :placeholder="tip" v-if="type == 'text'"></input>
			<input type="number" v-model="val" :placeholder="tip" v-else-if="type == 'number'"></input>
			<input type="password" v-model="val" :placeholder="tip" v-else-if="type == 'password'"></input>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 回调函数
			func: {
				type: Object,
				default: function(fun, param1, param2) {
					return null
				}
			},
			// 宽度
			width: {
				type: String,
				default: "210upx"
			},
			value: {
				type: String,
				default: ""
			},
			title: {
				type: String,
				default: ""
			},
			icon: {
				type: String,
				default: '<text class="fa fa-user"></text>'
			},
			tip: {
				type: String,
				default: '请输入验证码'
			},
			type: {
				type: String,
				default: 'text'
			},
			checked: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				val: this.value,
				ck: this.checked
			}
		},
		methods: {
			submit() {
				if (this.fun) {
					this.fun(this.val);
				}
			},
			setting() {
				if (this.type == 'checkbox') {
					this.ck = !this.ck;
				}
			}
		}
	}
</script>

<style>

</style>
