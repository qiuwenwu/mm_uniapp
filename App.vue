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
	/* .article_list .uni-list-item__container:after { left: 52px !important; } */
	
	/* .uni-list-item__container[data-v-1623cbff]:after { left: 52px !important; }
	.uni-icon-arrowright[data-v-29cd6af3]:before { content: none !important; } */
	
	/* 页面通用 */
	
	/* 临时测试 */
	.mm_col>*,[class*=mm_col_]>* { background: #fff; }
	.mm_col>*,[class*=mm_col_]>* { height: 200px; }
</style>
