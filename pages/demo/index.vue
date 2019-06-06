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
				<mm_grid class="space_x">
					<!-- 格子 -->
					<mm_col>
						<mm_block>
							<mm_head><mm_title class="font_small">A</mm_title></mm_head>
							<mm_body>
								<mm_list col="1" class="lr">
									<mm_item url="http://www.elins.cn" class="mini">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>菜单项</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn" class="mini">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>菜单项</mm_title>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</mm_page>
</template>

<script>

</script>

<style>
	mm_warp {
		height: 500px;
	}
</style>
