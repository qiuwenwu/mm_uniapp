<template>
	<!-- 签到页面 -->
	<mm_page class="page_account" id="account_checkin">
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
						<mm_block class="remain">
							<mm_body>
								<mm_div>
									<mm_title>获得昨日（2019-06-08）所有挖矿收益</mm_title>
									<h4 class="center">0.00012345<text class="unit">BTC</text></h4>
								</mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head class="font_big">
								<mm_title class="center">签到说明</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>1.算力挖矿有效时间共365天。</mm_title>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>2.签到后获得所有算力的挖矿收益，算力的有效时间将减少1天。</mm_title>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>3.未签到无法获得挖矿收益，算力有效时间不变。</mm_title>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>注：已成功购买的算力才可产生收益</mm_title>
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
	#account_checkin .remain{height: 9rem;display: flex;align-items: center;justify-content: center;}
</style>