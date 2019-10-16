import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
import mainContent from "@/components/mainContent"
import ContentNoBTN from "@/components/ContentNoBTN";
import Product from "@/components/Product";
import mainPage from "@/components/mainPage";
import vuetify from './plugins/vuetify';
import TestPolygon from "@/TestPolygon";

Vue.config.productionTip = false
Vue.use(VueRouter)

const types=[{name:'КАТАЛОГ',id:1,},{name:'о нас'},{name:'контакты'}]
//const subtypes=[{name:'Колесные опоры'},{name:'Стеллажи'},{name:'Металлическая мебель'},{name:'Грузоподъемное оборудование'},] subtype:subtypes[0]

const routes = [
    { path: '/catalog', component:mainContent, props:{type:types[0]}},
    // { path: '/sklad-oborud/kolesa', component:mainContent, props:{type:types[0],}},
    // { path: '/sklad-oborud/stellazhi', component:mainContent, props:{type:types[0], }},
    // { path: '/sklad-oborud/metall-mebel', component:mainContent, props:{type:types[0], }},
    // { path: '/sklad-oborud/domkrat', component:mainContent, props:{type:types[0] , }},
    // { path: '/metall-construct', component:mainContent, props:{type:types[1]}},
    // {path: '/ventellation',component:mainContent, props:{type:types[2]}},
    { path: '/about',component:ContentNoBTN, props:{type:types[1] }},
    { path: '/contacts',component:ContentNoBTN, props:{type:types[2]}},
    { path: '/product/:id', component:Product, props:true},
    { path: '/', name: 'homePage', component:mainPage, },


    { path: '/test', component:TestPolygon, },


    { path:'/*',redirect:{name:'homePage'}}
]






const router = new VueRouter({
  routes
})

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#navig')



