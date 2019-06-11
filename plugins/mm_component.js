import Vue from 'vue'

// 容器组件
import mm_actionsheet from '@/components/container/mm_actionsheet'
import mm_alert from '@/components/container/mm_alert'
import mm_dialog from '@/components/container/mm_dialog'
import mm_drawer from '@/components/container/mm_drawer'
import mm_gradient from '@/components/container/mm_gradient'
import mm_price from '@/components/container/mm_price'
import mm_toast from '@/components/container/mm_toast'


// 拓展组件
import mm_chart from '@/components/expand/mm_chart'
import mm_editor from '@/components/expand/mm_editor'
import mm_indexer from '@/components/expand/mm_indexer'
import mm_keyboard from '@/components/expand/mm_keyboard'
import mm_qrcode from '@/components/expand/mm_qrcode'
import mm_uploader from '@/components/expand/mm_uploader'
import mm_picker from '@/components/expand/mm_picker'

// 表单组件
import mm_checkbox from '@/components/form/mm_checkbox'
import mm_email from '@/components/form/mm_email'
import mm_input from '@/components/form/mm_input'
import mm_number from '@/components/form/mm_number'
import mm_radio from '@/components/form/mm_radio'
import mm_select from '@/components/form/mm_select'
import mm_switch from '@/components/form/mm_switch'
import mm_slider from '@/components/form/mm_slider'

// 列表组件
import mm_list_article from '@/components/list/mm_list_article'
import mm_list_base from '@/components/list/mm_list_base'
import mm_list_form from '@/components/list/mm_list_form'
import mm_list_media from '@/components/list/mm_list_media'
import mm_list_menu from '@/components/list/mm_list_menu'
import mm_list_message from '@/components/list/mm_list_message'
import mm_list_news from '@/components/list/mm_list_news'
import mm_list_number from '@/components/list/mm_list_number'
import mm_list_product from '@/components/list/mm_list_product'
import mm_list_user from '@/components/list/mm_list_user'


// 支付组件
import mm_pay_ali from '@/components/pay/mm_pay_ali'
import mm_pay_coin from '@/components/pay/mm_pay_coin'
import mm_pay_wechat from '@/components/pay/mm_pay_wechat'

// 滑动组件
import mm_swiper_banner from '@/components/swiper/mm_swiper_banner'
import mm_swiper_box from '@/components/swiper/mm_swiper_box'
import mm_swiper_card from '@/components/swiper/mm_swiper_card'


let mm_ui = {
	/// 安装
	/// Vue: 框架
	/// options: 配置参数
	install(Vue, options) {
		/* === 创建全局组件 === */
		// 容器组件
		Vue.component('mm_actionsheet', mm_actionsheet);
		Vue.component('mm_alert', mm_alert);
		Vue.component('mm_dialog', mm_dialog);
		Vue.component('mm_drawer', mm_drawer);
		Vue.component('mm_gradient', mm_gradient);
		Vue.component('mm_price', mm_price);
		Vue.component('mm_toast', mm_toast);
		
		// 拓展组件
		Vue.component('mm_chart', mm_chart);
		Vue.component('mm_editor', mm_editor);
		Vue.component('mm_indexer', mm_indexer);
		Vue.component('mm_keyboard', mm_keyboard);
		Vue.component('mm_qrcode', mm_qrcode);
		Vue.component('mm_uploader', mm_uploader);
		Vue.component('mm_picker', mm_picker);
		
		// 表单组件
		Vue.component('mm_checkbox', mm_checkbox);
		Vue.component('mm_email', mm_email);
		Vue.component('mm_input', mm_input);
		Vue.component('mm_number', mm_number);
		Vue.component('mm_radio', mm_radio);
		Vue.component('mm_select', mm_select);
		Vue.component('mm_switch', mm_switch);
		Vue.component('mm_slider', mm_slider);

		// 列表组件
		Vue.component('mm_list_article', mm_list_article);
		Vue.component('mm_list_base', mm_list_base);
		Vue.component('mm_list_form', mm_list_form);
		Vue.component('mm_list_media', mm_list_media);
		Vue.component('mm_list_menu', mm_list_menu);
		Vue.component('mm_list_message', mm_list_message);
		Vue.component('mm_list_news', mm_list_news);
		Vue.component('mm_list_number', mm_list_number);
		Vue.component('mm_list_product', mm_list_product);
		Vue.component('mm_list_user', mm_list_user);

		// 支付组件
		Vue.component('mm_pay_ali', mm_pay_ali);
		Vue.component('mm_pay_coin', mm_pay_coin);
		Vue.component('mm_pay_wechat', mm_pay_wechat);

		// 滑动组件
		Vue.component('mm_swiper_banner', mm_swiper_banner);
		Vue.component('mm_swiper_box', mm_swiper_box);
		Vue.component('mm_swiper_card', mm_swiper_card);
	}
}

export default mm_ui;
