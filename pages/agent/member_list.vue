<template>
	<!-- 代理首页 -->
	<view class="page_agent" id="agent_member_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="big">
									<mm_item v-for="(o,k) in list" :key="k" @click.native="toPage(o.userId, o.people)">
										<mm_side class="headimg">
											<mm_icon :src="setImg(o.avatar)"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_tip><view class="people">邀请人数 <text class="num">{{ o.people }}</text></view><view class="count">持有DBD<text class="num">{{ o.dbd }}</text></view></mm_tip>
											<mm_title>{{ o.name }}</mm_title>
											<mm_desc><text class="vip">VIP{{ o.level }}</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				oauth: true,
				url_get_list: "~/user/under",
				query: {
					userId: this.$store.state.user.userId
				}
			}
		},
		methods:{
			setImg(img){
				return img ? img : '/static/img/headImg.png'
			},
			toPage(id, p){
				if(p > 0){
					var url = './member_list_next?userId=' + id;
					uni.navigateTo({
						url: url
					});
				}
				else {
					this.alert('该代理没有邀请他人');
				}
			}
		}
	}
</script>

<style>
	.mm_tip { float: right; color: #999; font-size: 85%; }
	.people { margin-bottom: 0.05rem; }
	.count { margin-top: 0.4rem; }
	.num { float: right; width: 1.5rem; text-align: right; color: #999; margin-right: 0.5rem; font-weight: 400;  }
</style>
