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
				<mm_grid col="1" class="space">
					<!-- 格子 -->
					<mm_col>
						<mm_block class="card">
							<mm_head class="lr">
								<mm_div class="mini">
									<mm_side>
										<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
									</mm_side>
									<mm_main>
										<mm_title>昵称</mm_title>
										<mm_desc>2019-06-10</mm_desc>
									</mm_main>
								</mm_div>
							</mm_head>
							<mm_body>
								<mm_div>
									<mm_desc>现今，各个行业也在加速智能化，数据加速积累，人工智能技术越来越多地被应用到家电产品上，使得我们的家电产品越来越聪明。</mm_desc>
									<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
								</mm_div>
							</mm_body>
							<mm_foot>
								<mm_group>
									<mm_btn url="/pages/mall/index">赞</mm_btn>
									<mm_btn url="http://www.baidu.com" type="success">分享</mm_btn>
									<mm_btn>评论</mm_btn>
								</mm_group>
							</mm_foot>
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
</style>
