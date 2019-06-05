<template>
	<!-- 卡片 -->
	<view class="mm_card">
		<!-- 卡片头 -->
		<mm_head>
			<mm_title>标题</mm_title>
		</mm_head>
		<!-- 卡片主体 -->
		<mm_body></mm_body>
		<!-- 卡片脚 -->
		<mm_foot>页脚</mm_foot>
	</view>
</template>

<script>
	export default {
		props: {
			// 显示方式
			display: {
				type: String,
				default: "1"
			},
			// 显示隐藏
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {

		},
		created() {

		}
	}
</script>

<style>
</style>
