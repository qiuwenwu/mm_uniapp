<template>
	<!-- 页面 -->
	<mm_page id="demo_index">
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
				<mm_grid col="4" class="space_x">
					<!-- 格子 -->
					<mm_col width="50">
						<mm_block></mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col width="50">
						<!-- 块 -->
						<mm_block>
							<!-- 块头 -->
							<mm_head></mm_head>
							<!-- 块主体 -->
							<mm_body>
								<!-- 次内容 -->
								<mm_side>
									<text class="fa fa-map"></text>
									<mm_badge>9</mm_badge>
								</mm_side>
								<!-- 主内容 -->
								<mm_main>
									<text class="title"></text>
									<text class="desc"></text>
								</mm_main>
							</mm_body>
							<!-- 块脚 -->
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col width="25"></mm_col>
					<!-- 格子 -->
					<mm_col width="75"></mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 页脚 -->
		<mm_footer>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_footer>
		<!-- 模态窗 -->
		<mm_modal>
			<!-- 栅格 -->
			<mm_grid col="2">
				<!-- 格子 -->
				<mm_col>
					<!-- 块 -->
					<mm_block>
						<mm_head>网站</mm_head>
						<mm_body>
							<mm_side></mm_side>
							<mm_main></mm_main>
						</mm_body>
						<mm_foot></mm_foot>
					</mm_block>
				</mm_col>
				<!-- 格子 -->
				<mm_col>
					<!-- 块 -->
					<mm_block>
						<mm_head>网站</mm_head>
						<mm_body>
							<mm_side></mm_side>
							<mm_main></mm_main>
						</mm_body>
						<mm_foot></mm_foot>
					</mm_block>
				</mm_col>
			</mm_grid>
		</mm_modal>
	</mm_page>
</template>

<script>

</script>

<style>
	mm_warp {
		height: 500px;
	}
</style>
