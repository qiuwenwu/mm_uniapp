<template>
	<!-- 页面 -->
	<view class="mm_page" id="demo_index">
		<!-- 页头 -->
		<view class="mm_header">
			<!-- 外套 -->
			<view class="mm_warp"></view>
		</view>
		<!-- 页主体 -->
		<view class="mm_bodyer">
			<!-- 外套 -->
			<view class="mm_warp">
				<!-- 栅格 -->
				<view class="mm_grid space_x">
					<!-- 格子 -->
					<view class="mm_col_50">
						<!-- 块:卡片结构 -->
						<view class="mm_block">
							<!-- 块头 -->
							<view class="mm_head"></view>
							<!-- 块主体 -->
							<view class="mm_body">
								<!-- 列表 -->
								<view class="mm_list">
									<!-- 项目 -->
									<view class="mm_item">
										<view class="mm_box">
											<view class="mm_side"></view>
											<view class="mm_main"></view>
										</view>
										<!-- 盒子 -->
										<view class="mm_box">
											<view class="mm_group">
												<button class="btn">测试</button>
												<button class="btn">按钮</button>
											</view>
										</view>
									</view>
									<!-- 项目 -->
									<view class="mm_item">
										<!-- 带链接块 -->
										<navigator class="mm_block" url="/pages/home/index"></navigator>
									</view>
								</view>
							</view>
							<!-- 块脚 -->
							<view class="mm_foot"></view>
						</view>
					</view>
					<!-- 格子 -->
					<view class="mm_col_50">
						<!-- 块 -->
						<view class="mm_block">
							<!-- 块头 -->
							<view class="mm_head"></view>
							<!-- 块主体 -->
							<view class="mm_body">
								<!-- 次内容 -->
								<view class="mm_side">
									<text class="fa fa-map"></text>
									<text class="mm_badge"></text>
								</view>
								<!-- 主内容 -->
								<view class="mm_main">
									<text class="title"></text>
									<text class="desc"></text>
								</view>
							</view>
							<!-- 块脚 -->
							<view class="mm_foot"></view>
						</view>
					</view>
					<!-- 格子 -->
					<view class="mm_col_25">
						<view></view>
					</view>
					<!-- 格子 -->
					<view class="mm_col_75">
						<view></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 页脚 -->
		<view class="mm_footer">
			<!-- 外套 -->
			<view class="mm_warp"></view>
		</view>
		<!-- 模态窗 -->
		<view class="mm_modal">
			<!-- 外套 -->
			<view class="mm_warp">
				<!-- 栅格 -->
				<view class="mm_grid">
					<!-- 块 -->
					<view class="mm_block">
						<view class="mm_head"></view>
						<view class="mm_body">
							<view class="mm_side"></view>
							<view class="mm_main"></view>
						</view>
						<view class="mm_foot"></view>
					</view>
				</view>
			</view>
			<!-- 遮罩 -->
			<view class="mm_mask"></view>
		</view>
	</view>
</template>

<script>

</script>

<style>
</style>
