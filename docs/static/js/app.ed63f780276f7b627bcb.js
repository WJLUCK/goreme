webpackJsonp([1],{"/DBc":function(t,s,e){t.exports=e.p+"static/img/search.228b990.png"},"0agx":function(t,s){},NHcH:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tab"},[i("div",{staticClass:"header"},[i("ul",{staticClass:"nav"},[i("li",{staticClass:"douban",on:{click:t.douban}},[t._v("豆瓣")]),t._v(" "),i("li",{staticClass:"movie",on:{click:t.movie}},[t._v("电影")]),t._v(" "),i("li",{staticClass:"read",on:{click:t.read}},[t._v("图书")]),t._v(" "),i("li",{staticClass:"board",on:{click:t.board}},[t._v("广播")]),t._v(" "),i("li",{staticClass:"group",on:{click:t.group}},[t._v("小组")]),t._v(" "),i("li",{staticClass:"search",on:{click:t.login}},[i("img",{attrs:{src:e("/DBc")}}),t._v("登\n      ")])])])])},staticRenderFns:[]};var n={name:"App",components:{tab:e("VU/8")({data:function(){return{}},methods:{douban:function(){this.$router.push({path:"/"})},movie:function(){this.$router.push({path:"/movie"})},read:function(){this.$router.push({path:"/read"})},board:function(){this.$router.push({path:"/board"})},group:function(){this.$router.push({path:"/group"})},login:function(){this.$router.push({path:"/login"})}}},a,!1,function(t){e("0agx")},"data-v-29953f62",null).exports}},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("tab"),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")(n,r,!1,function(t){e("lhdW")},null,null).exports,c=e("/ocq"),l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){e("OVGu")},"data-v-d8ec41bc",null).exports;var v="http://api.douban.com/v2/movie/in_theaters",h="https://api.douban.com/v2/event/list?loc=118282&count=10",u=e("1RB9"),_=e.n(u).a.create({baseURL:"http://api.douban.com",timeout:1e4}),d=function(t,s){return _({method:"jsonp",url:t,params:s})},p=e("GQaK"),f={data:function(){return{articleList:[]}},created:function(){this.getCity()},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new p.a(t.$refs.wrapper,{})})},methods:{getCity:function(){var t=this;d(h).then(function(s){t.articleList=s.events})}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"douban"},[t._m(0),t._v(" "),e("div",{ref:"wrapper",staticClass:"wrapper"},[e("div",[e("ul",{staticClass:"douban-content"},t._l(t.articleList,function(s){return e("li",{key:s.id,staticClass:"douban-content-item"},[e("div",{staticClass:"douban-content-item-top"},[e("div",{staticClass:"douban-content-item-top-left"},[t._v("\n              "+t._s(s.title)+"\n            ")]),t._v(" "),e("div",{staticClass:"douban-content-item-top-right"},[e("img",{staticStyle:{width:"86px",height:"86px"},attrs:{src:s.image}})])]),t._v(" "),e("div",{staticClass:"douban-content-item-footer"},[t._v("\n            by "+t._s(s.owner.name)+"\n          ")])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("ul",{staticClass:"douban-header"},[s("li",[s("span",[s("strong",[this._v("影院热映")])]),this._v(" "),s("span",[s("strong",[this._v("豆瓣日历")])]),this._v(" "),s("span",[s("strong",[this._v("豆瓣时间")])]),this._v(" "),s("span",[s("strong",[this._v("使用豆瓣App")])])])])])}]};var g=e("VU/8")(f,m,!1,function(t){e("WxYN")},"data-v-015e79ce",null).exports,C={data:function(){return{hotmovies:[],position:-60}},computed:{styleObject:function(){return{backgroundPositionY:this.position+"px"}}},created:function(){var t=this;this.getIntheaters(),setTimeout(function(){t.getStar()},5e3)},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new p.a(t.$refs.wrapper,{})})},methods:{getIntheaters:function(){var t=this;d("/api/movie/in_theaters").then(function(s){t.hotmovies=s.subjects})},getStar:function(){for(var t=document.getElementsByClassName("hot-content-item-score"),s=0;s<t.length;s++)t[s].innerHTML>=8.5&&t[s].innerHTML<=10?this.position=0:t[s].innerHTML>=6.5&&t[s].innerHTML<=8.5?this.position=-30:this.position=-45}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"wrapper",staticClass:"wrapper"},[e("ul",[e("li",[e("section",[e("div",{staticClass:"hot"},[t._m(0),t._v(" "),e("div",{staticClass:"hot-content"},[e("ul",t._l(t.hotmovies,function(s){return e("li",{key:s.id},[e("img",{staticClass:"hot-content-item-images",staticStyle:{width:"100px",height:"142px"},attrs:{src:s.images.small}}),t._v(" "),e("div",{staticClass:"hot-content-item-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"hot-content-item-score",attrs:{id:"hh"}},[t._v(t._s(s.rating.average))]),t._v(" "),e("div",{staticClass:"hot-content-item-rank",style:t.styleObject})])}))])])])]),t._v(" "),e("li",[e("section",[e("div",{staticClass:"hot"},[t._m(1),t._v(" "),e("div",{staticClass:"hot-content"},[e("ul",t._l(t.hotmovies,function(s){return e("li",{key:s.id},[e("img",{staticClass:"hot-content-item-images",staticStyle:{width:"100px",height:"142px"},attrs:{src:s.images.small}}),t._v(" "),e("div",{staticClass:"hot-content-item-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"hot-content-item-score"},[t._v(t._s(s.rating.average))]),t._v(" "),e("div",{staticClass:"hot-content-item-rank",style:t.styleObject})])}))])])])]),t._v(" "),e("li",[e("section",[e("div",{staticClass:"hot"},[t._m(2),t._v(" "),e("div",{staticClass:"hot-content"},[e("ul",t._l(t.hotmovies,function(s){return e("li",{key:s.id},[e("img",{staticClass:"hot-content-item-images",staticStyle:{width:"100px",height:"142px"},attrs:{src:s.images.small}}),t._v(" "),e("div",{staticClass:"hot-content-item-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"hot-content-item-score"},[t._v(t._s(s.rating.average))]),t._v(" "),e("div",{staticClass:"hot-content-item-rank",style:t.styleObject})])}))])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"hot-title"},[s("div",{staticClass:"hot-title-left"},[this._v("影院热映")]),this._v(" "),s("div",{staticClass:"hot-title-right"},[this._v("更多")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"hot-title"},[s("div",{staticClass:"hot-title-left"},[this._v("影院热映")]),this._v(" "),s("div",{staticClass:"hot-title-right"},[this._v("更多")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"hot-title"},[s("div",{staticClass:"hot-title-left"},[this._v("影院热映")]),this._v(" "),s("div",{staticClass:"hot-title-right"},[this._v("更多")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("section",[e("div",{staticClass:"findgood"},[e("div",{staticClass:"findgood-title"},[t._v("发现好电影")]),t._v(" "),e("div",{staticClass:"findgood-content"},[e("ul",[e("li",{staticStyle:{"margin-bottom":"10px","margin-top":"10px"}},[e("a",{staticStyle:{color:"#FFC46C",border:"1px solid #FFC46C"},attrs:{href:"#"}},[t._v("同时入选IMDB250和豆瓣电影250的电影")]),t._v(" "),e("a",{staticStyle:{color:"#4F9DED",border:"1px solid #4F9DED"},attrs:{href:"#"}},[t._v("带你进入不正常的世界")]),t._v(" "),e("a",{staticStyle:{color:"#FFC46C",border:"1px solid #FFC46C"},attrs:{href:"#"}},[t._v("用电【影】来祭奠逝去的岁月")]),t._v(" "),e("a",{staticStyle:{color:"#FF4055",border:"1px solid #FF4055"},attrs:{href:"#"}},[t._v("女孩们的故事【电影】")])]),t._v(" "),e("li",[e("a",{staticStyle:{color:"#42BD56",border:"1px solid #42BD56"},attrs:{href:"#"}},[t._v("使用 App 【找电影】功能")]),t._v(" "),e("a",{staticStyle:{color:"#2384E8",border:"1px solid #2384E8"},attrs:{href:"#"}},[t._v("科幻是未来的钥匙——科幻启示录【科幻题材】")]),t._v(" "),e("a",{staticStyle:{color:"#CC3344",border:"1px solid #CC3344"},attrs:{href:"#"}},[t._v("美国生活面面观")]),t._v(" "),e("a",{staticStyle:{color:"#42BD56",border:"1px solid #42BD56"},attrs:{href:"#"}},[t._v("2015终极期待")]),t._v(" "),e("a",{staticStyle:{color:"#3BA94D",border:"1px solid #3BA94D"},attrs:{href:"#"}},[t._v("经典韩国电影——收集100部")])])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("section",[e("div",{staticStyle:{"margin-top":"70px"}},[e("div",{staticClass:"classify"},[t._v("分类浏览")]),t._v(" "),e("div",[e("ul",{staticClass:"groups"},[e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("经典")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("冷门佳片")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("豆瓣高分")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("动作")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("喜剧")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("爱情")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("悬疑")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("恐怖")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("科幻")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("治愈")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("文艺")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("成长")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("动画")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("华语")])]),t._v(" "),e("li",{staticClass:"group"},[e("a",{attrs:{href:"#"}},[t._v("欧美")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("韩国")])])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("section",[s("span",{staticClass:"footer-icon"},[s("img",{attrs:{src:"https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png"}}),this._v(" "),s("span",{staticClass:"footer-icon-text"},[this._v("豆瓣")])]),this._v(" "),s("div",{staticClass:"footer-detail"},[this._v("去 App Store 免费下载 iOS 客户端")])])])}]};var x=e("VU/8")(C,b,!1,function(t){e("mSYc")},"data-v-6c74e199",null).exports,y={data:function(){return{bookList:[]}},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new p.a(t.$refs.wrapper,{})})},created:function(){this.getbooks()},methods:{getbooks:function(){}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"wrapper",staticClass:"wrapper"},[e("div",[e("ul",[e("li",[e("section",[e("div",{staticClass:"popular"},[t._m(0),t._v(" "),e("div",{staticClass:"popular-content"},[e("ul",t._l(t.bookList,function(s){return e("li",{key:s.id},[e("img",{staticStyle:{width:"100px",height:"142px"},attrs:{src:s.images.small}}),t._v(" "),e("div",[t._v(t._s(s.title))]),t._v(" "),e("div",[t._v(t._s(s.rating.average))])])}))])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"popular-title"},[s("div",{staticClass:"popular-title-left"},[s("strong",[this._v("最受关注图书 | 虚构类")])]),this._v(" "),s("div",{staticClass:"popular-title-right"},[s("strong",[this._v("更多")])])])}]};var w=e("VU/8")(y,k,!1,function(t){e("NHcH")},null,null).exports,$={mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new p.a(t.$refs.wrapper,{})})}},E={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"board"},[s("div",{staticStyle:{width:"100%",height:"5px"}}),this._v(" "),s("div",{ref:"wrapper",staticClass:"wrapper"},[this._m(0)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",[e("div",{staticClass:"banner"},[e("div",{staticClass:"banner-left"},[e("strong",[t._v("打开App,回复广播")])]),t._v(" "),e("div",{staticClass:"banner-right"},[e("div",{staticClass:"banner-right-download"},[t._v("打开")]),t._v(" "),e("div",{staticClass:"banner-right-open"},[t._v("极速下载")])])])]),t._v(" "),e("section",[e("div",{staticClass:"content"},[e("div",{staticClass:"content-title"},[e("div",{staticClass:"content-title-left"},[e("img",{attrs:{src:"https://img1.doubanio.com/icon/user_normal.jpg"}}),t._v(" "),e("div",{staticStyle:{"margin-top":"-15px","margin-left":"5px"}},[e("strong",[t._v(" 登录发广播")])])]),t._v(" "),e("div",{staticClass:"content-title-right"})])])])])}]};var S=e("VU/8")($,E,!1,function(t){e("wCdz")},null,null).exports,F={data:function(){return{hotmovies:[]}},mounted:function(){this.getIntheaters()},methods:{getIntheaters:function(){var t=this;d(v).then(function(s){t.hotmovies=s.subjects})}}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"group"},[this._v("\n  group\n  "),this._v(" "),this._l(this.hotmovies,function(t){return s("div",{key:t.id},[s("img",{attrs:{src:t.images.small,alt:""}})])})],2)},staticRenderFns:[]};var D=e("VU/8")(F,j,!1,function(t){e("zS8Y")},"data-v-4af46a2f",null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var B=e("VU/8")({data:function(){return{}},mounted:function(){this.$nextTick(function(){})}},T,!1,function(t){e("l6zo")},"data-v-001eaad7",null).exports;i.default.use(c.a);var V=new c.a({routes:[{path:"/",component:g},{path:"/read",component:w},{path:"/movie",component:x},{path:"/board",component:S},{path:"/group",component:D},{path:"/login",component:B}]}),H=e("BTaQ"),L=e.n(H);i.default.config.productionTip=!1,i.default.use(L.a),new i.default({el:"#app",router:V,components:{App:o},template:"<App/>"})},OVGu:function(t,s){},WxYN:function(t,s){},l6zo:function(t,s){},lhdW:function(t,s){},mSYc:function(t,s){},wCdz:function(t,s){},zS8Y:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.ed63f780276f7b627bcb.js.map