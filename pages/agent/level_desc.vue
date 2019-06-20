<template>
	<!-- 等级说明页面 -->
	<mm_page class="page_agent" id="agent_level_desc">
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
				<mm_grid col="l" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>等级3 升级条件</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>自己DBD数量</mm_title>
											<mm_desc><mm_icon src="/static/img/state_success.svg"></mm_icon>10/10</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>一级代理人数</mm_title>
											<mm_desc><mm_icon src="/static/img/state_success.svg"></mm_icon>201/200</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>一级DBD总数</mm_title>
											<mm_desc><mm_icon src="/static/img/state_warning.svg"></mm_icon>20/80</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>二级代理人数</mm_title>
											<mm_desc><mm_icon src="/static/img/state_warning.svg"></mm_icon>190/200</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>二级DBD总数</mm_title>
											<mm_desc><mm_icon src="/static/img/state_success.svg"></mm_icon>201/200</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_title><text class="font_info">已达成 50%</text></mm_title>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>当前权益</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="mini">
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>邀请注册</mm_title>
											<mm_desc>邀请用户注册并完成首次购买，奖励40</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>一级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>二级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>下级权益</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="mini">
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>邀请注册</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>一级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>二级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
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
	.ll {
		font-size: 0.875rem;
	}
	.ll .mm_desc {
		color: #333;
	}
	.font_info { margin-left: 0.5rem; font-weight: 600; }
	
	#agent_level_desc .mm_desc .mm_icon { float: right; margin-left: 0.5rem; width: 1.5rem; height: 1.5rem; }
</style>
