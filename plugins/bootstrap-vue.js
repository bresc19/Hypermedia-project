import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { DropdownPlugin } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { IconsPlugin } from 'bootstrap-vue'
import VueSocial from "@growthbunker/vuesocial";
import { BreadcrumbPlugin } from 'bootstrap-vue'

Vue.use(BreadcrumbPlugin)
Vue.use(VueSocial);
Vue.use(IconsPlugin)
Vue.use(CardPlugin)
Vue.use(CarouselPlugin)
Vue.use(DropdownPlugin)
Vue.use(BootstrapVue)
