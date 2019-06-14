<style src="@/static/css/font-awesome.min.css"></style>
<style src="@/static/css/mm_layout.css"></style>
<style src="@/static/css/mm_component.css"></style>
<style src="@/static/css/mm_theme.css"></style>

<script>
	export default {
		onLaunch: function() {
			console.log('应用程序启动')
		},
		onShow: function() {
			console.log('应用显示')
		},
		onHide: function() {
			console.log('应用隐藏')
		},
		onError: function(err) {
			console.log('应用错误:' + err)
		}
	}
</script>

<style>
	/* ===  每个页面公共css  === */
	.uni-page-head-btn { top: 0.25rem }
	.navigator-hover { background: #e5e5e5; z-index:2; }
	/* .article_list .uni-list-item__container:after { left: 52px !important; } */
	
	/* .uni-list-item__container[data-v-1623cbff]:after { left: 52px !important; }
	.uni-icon-arrowright[data-v-29cd6af3]:before { content: none !important; } */
	
	/* 页面通用 */
	#tabs { text-align: center;  }
	#tabs .active:after { position: absolute; bottom: 0; left: 0; right: 0; width: 100%; border-bottom: 2px solid #317EF3; }
	
	.dbd .mm_icon {
		width: 5.625rem;
		height: 4.625rem;
	}
	
	.introduce .mm_title {
		font-size: 1.25rem;
	}
	
	.introduce .price {
		font-size: 1rem;
	}
	
	.introduce .price:before {
		content: "￥";
		font-size: .75rem;
	}
	
	.introduce .days {
		float: right;
	}
	
	/* 临时测试 */
	.mm_col>*,[class*=mm_col_]>* { background: #fff; }

	/* .mm_col>*,[class*=mm_col_]>* { min-height: 200px; } */
</style>
