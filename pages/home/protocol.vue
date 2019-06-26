<template>
	<!-- 用户协议页 -->
	<div class="page_home" id="home_protocol" v-html="obj.content">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 协议详情 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">简约</mm_title>
							</mm_head>
							<mm_body v-html="obj.content"></mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</div>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
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
