<template>
	<!-- 联系人页面 -->
	<view class="page_home" id="home_contact">
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
					<mm_col class="pn-tb">
					</mm_col>
					<!-- 格子 -->
					<mm_col class="pn-tb" v-for="(p, k) in pinyin_group" v-if="has_contact(p)" :key="k">
						<!-- 联系人 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">{{ p }}</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list_contact :list="get_contact(p)"></mm_list_contact>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 联系方式 -->

		<!-- 地理位置 -->
	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				pinyin_group: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
					'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				list: [{
						uid: '3',
						name: '张三',
						pinyin: "ZhanSan",
						icon: "http://img.sccnn.com/bimg/334/0957.jpg",
						url: './contact_view?uid=3',
					},
					{
						uid: '1',
						name: '李四',
						pinyin: "LiBai?uid=1",
						icon: "http://img.sccnn.com/bimg/334/0957.jpg",
						url: './contact_view?uid=1',
					},
					{
						uid: '2',
						name: '李白',
						pinyin: "LiBai?uid=2",
						icon: "http://img.sccnn.com/bimg/334/0957.jpg",
						url: './contact_view?uid=2',
					},
					{
						uid: '4',
						name: '李寻欢',
						pinyin: "LiBai?uid=4",
						icon: "http://img.sccnn.com/bimg/334/0957.jpg",
						url: './contact_view?uid=4',
					}
				]
			}
		},
		methods: {
			has_contact(p) {
				var bl = this.list.has('pinyin', function(val){
					console.log(val.substring(0, 1));
					return val.substring(0, 1) == p;
				});
				return bl;
			},
			get_contact(p) {
				return this.list.get('pinyin', function(val){
					return val.substring(0, 1) == p;
				});
			}
		}
	}
</script>

<style>
</style>
