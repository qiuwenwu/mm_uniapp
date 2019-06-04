<template>
	<!-- 用户协议页 -->
	<div class="page_home" id="home_protocol" v-html="obj.content">
		<!-- 用户协议框 -->
	</div>
</template>

<script>
	import mixin from '@/mixins/page'
	
	export default {
		mixins: [mixin],
		data() {
			return {
				url: "~/home/article?"
			}
		}
	}
</script>

<style>
	#protocol h2 {
		text-align: center;
		padding: 1rem 0;
	}

	#protocol h5 {
		margin-top: 1rem;
	}

	#protocol article {
		padding: 4rem 0;
	}
</style>
