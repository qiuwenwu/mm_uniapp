<template>
	<!-- 常见问题列表 -->
	<view class="mm_list_question">
		<mm_div :url="o[vm.url]" v-for="(o, k) in list" :key="k">
			<mm_list col="1" class="mini">
				<mm_item>
					<mm_side>
						<view class="mm_icon bg_danger">问</view>
					</mm_side>
					<mm_main>
						<mm_title>{{ o[vm.title] }}</mm_title>
					</mm_main>
				</mm_item>
				<mm_item>
					<mm_side>
						<view class="mm_icon bg_warning">答</view>
					</mm_side>
					<mm_main>
						<mm_desc>{{ o[vm.desc] }}</mm_desc>
					</mm_main>
				</mm_item>
			</mm_list>
		</mm_div>
	</view>
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin]
	}
</script>

<style>
	.mm_list_question {
		background: #E5E5E5;
	}

	.mm_div {
		background: #fff;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.mm_div:first-child {
		border-top: none;
	}

	.mm_div:last-child {
		border-bottom: none;
	}


	.mm_div~.mm_div {
		margin-top: 0.5rem;
	}

	.mm_list_question .mm_desc {
		float: left;
	}
</style>
