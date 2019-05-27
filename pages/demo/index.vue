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
						<!-- 块:卡片结构 -->
						<mm_block class="card">
							<!-- 块头 -->
							<mm_head>123123</mm_head>
							<!-- 块主体 -->
							<mm_body>
								<!-- 列表 -->
								<mm_list col="4">
									<!-- 项目 -->
									<mm_item class="hover">
										<mm_div>
											<mm_side>侧边</mm_side>
											<mm_main>主要</mm_main>
										</mm_div>
										<!-- 盒子 -->
										<mm_box>
											<mm_group>
												<button class="btn">测试</button>
												<button class="btn">按钮</button>
											</mm_group>
										</mm_box>
									</mm_item>
									<!-- 项目 -->
									<mm_item class="foucs">
										<mm_div>
											<mm_side>选中</mm_side>
											<mm_main>选中侧边</mm_main>
										</mm_div>
										<!-- 盒子 -->
										<mm_box>
											<mm_group>
												<button class="btn">测试</button>
												<button class="btn">按钮</button>
											</mm_group>
										</mm_box>
									</mm_item>
									<!-- 项目 -->
									<mm_item>
										<!-- 带链接块 -->
										<navigator url="/pages/home/index">
											<mm_div>
												<mm_side>123213</mm_side>
												<mm_main>123213</mm_main>
											</mm_div>
										</navigator>
									</mm_item>
								</mm_list>
							</mm_body>
							<!-- 块脚 -->
							<mm_foot>页脚</mm_foot>
						</mm_block>
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
			<!-- 外套 -->
			<mm_warp>
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
				</mm_grid>
			</mm_warp>
			<!-- 遮罩 -->
			<mm_mask></mm_mask>
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
