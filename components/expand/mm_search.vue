<template>
	<!-- 搜索栏 -->
	<view class="mm_search">
		<view class="fr"><text>取消</text></view>
		<view class="mm_search_warp">
			<input type="text" :value="value" :placeholder="desc"  @input="$emit('input', $event.target.value)"></input>
		</view>
		<text class="fa fa-search"></text>
		<slot></slot>
	</view>
</template>

<script>
	import mixin from '@/mixins/form'

	export default {
		mixins: [mixin]
	}
</script>

<style>
	.mm_search {
		padding: 0.5rem 1rem;
		background: rgba(0,0,0,0.1);
		position: absolute;
	}
	
	.mm_search_warp {
		background: #fff;
		border-radius: 0.25rem;
		padding: 0.125rem 0.5rem;
	}
	.mm_search { font-size: 0.625rem; }
</style>
