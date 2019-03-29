webpackJsonp([1],{"1/oy":function(t,a){},"8v9K":function(t,a){},"9M+g":function(t,a){},GfHa:function(t,a){},Id91:function(t,a){},LXZ1:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),o=e("e6fC"),r=(e("LXZ1"),e("9M+g"),e("P0qF"),e("01M/")),n=e.n(r),i={name:"App",created:function(){n.a.load({typekit:{id:"egx1cmg"}})}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"m-3",attrs:{id:"app"}},[a("h1",[this._v("Impresso interface elements")]),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var v=e("VU/8")(i,d,!1,function(t){e("kRbo")},null,null).exports,l=e("/ocq"),p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app-content"}},[e("h2",{staticClass:"small-caps"},[t._v("Components")]),t._v(" "),e("b-card",{attrs:{title:"Inputs"}},[e("p",[t._v("Badges with close button")]),t._v(" "),e("b-badge",[t._v("Badge with close button "),e("a",{staticClass:"dripicons dripicons-cross"})]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Checkboxes")]),t._v(" "),e("b-form-group",{attrs:{label:"Inline checkboxes (default)"}},[e("b-form-checkbox-group",{attrs:{name:"flavour1",options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"}]}})],1),t._v(" "),e("b-form-group",{attrs:{label:"Stacked  checkboxes"}},[e("b-form-checkbox-group",{attrs:{stacked:"",name:"flavour2",options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"}]}})],1)],1),t._v(" "),e("hr"),t._v(" "),e("b-card",{attrs:{title:"Dropdown"}},[e("p",[t._v("Dropdowns work with trigger buttons of all sizes,\n      including default and split dropdown buttons")]),t._v(" "),e("b-dropdown",{attrs:{id:"ddown0",text:"outline-primary",size:"sm",variant:"outline-primary"}},[e("b-dropdown-item",[t._v("First Action")]),t._v(" "),e("b-dropdown-item",[t._v("Second Action")]),t._v(" "),e("b-dropdown-item",[t._v("Third Action")]),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item",[t._v("Something else here...")]),t._v(" "),e("b-dropdown-item",{attrs:{disabled:""}},[t._v("Disabled action")])],1),t._v(" "),e("b-dropdown",{attrs:{id:"ddown-header",text:"secondary with headers",size:"sm",variant:"secondary"}},[e("b-dropdown-header",[t._v("Dropdown header")]),t._v(" "),e("b-dropdown-item-button",[t._v("First item")]),t._v(" "),e("b-dropdown-item-button",[t._v("Second Item")]),t._v(" "),e("b-dropdown-header",[t._v("Another header")]),t._v(" "),e("b-dropdown-item-button",[t._v("First item")]),t._v(" "),e("b-dropdown-item-button",[t._v("Second Item")])],1),t._v(" "),e("b-dropdown",{staticClass:"dropdown-dark",attrs:{id:"ddown-dark-modeheader",text:"dark mode",size:"sm",variant:"dark"}},[e("b-dropdown-header",[t._v("Dropdown header")]),t._v(" "),e("b-dropdown-item-button",[t._v("First item")]),t._v(" "),e("b-dropdown-item-button",[t._v("Second Item")]),t._v(" "),e("b-dropdown-header",[t._v("Another header")]),t._v(" "),e("b-dropdown-item-button",[t._v("First item")]),t._v(" "),e("b-dropdown-item-button",[t._v("Second Item")])],1),t._v(" "),e("b-dropdown",{attrs:{id:"ddown-sm-split",size:"sm",split:"",text:"outline-secondary Split",variant:"outline-secondary"}},[e("b-dropdown-item-button",[t._v("Action")]),t._v(" "),e("b-dropdown-item-button",[t._v("Another action")]),t._v(" "),e("b-dropdown-item-button",[t._v("Something else here...")])],1),t._v(" "),e("br"),t._v(" "),e("small",[t._v("Use bootstrap element "),e("code",[t._v("<b-dropdown>")])]),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Small size "),e("code",[t._v('size="sm"')])]),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Variant primary",size:"sm",variant:"primary"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Variant secondary",size:"sm",variant:"secondary"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Variant success",size:"sm",variant:"success"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Variant warning",size:"sm",variant:"warning"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Variant danger",size:"sm",variant:"danger"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("p",[t._v("Medium size "),e("code",[t._v('size="md"')])]),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"md",variant:"primary"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"md",variant:"secondary"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"md",variant:"success"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"md",variant:"warning"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"md",variant:"danger"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("p",[t._v("Outline and fill-color variants "),e("code",[t._v('variant="outline-*"')])]),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"sm",variant:"outline-primary"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"sm",variant:"outline-secondary"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"sm",variant:"outline-success"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"sm",variant:"outline-warning"}}),t._v(" "),e("b-dropdown",{attrs:{id:"",text:"Dropdown Button",size:"sm",variant:"outline-danger"}}),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Use the "),e("code",[t._v('<label for="id">')]),t._v(" element for related text.")]),t._v(" "),e("label",{attrs:{for:"sel1"}},[t._v("Select a vegetable")]),t._v(" "),e("b-dropdown",{staticClass:"ml-1",attrs:{id:"sel1",text:"potato",variant:"outline-primary",size:"sm"}}),t._v(" "),e("label",{attrs:{for:"sel1"}},[t._v("and a fruit")]),t._v(" "),e("b-dropdown",{staticClass:"ml-1",attrs:{id:"sel1",text:"apple",variant:"outline-primary",size:"sm"}})],1),t._v(" "),e("hr"),t._v(" "),e("b-card",{attrs:{title:"Tabs <code>.nav.nav-tabs</code>"}},[e("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Home")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Profile")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"messages-tab","data-toggle":"tab",href:"#messages",role:"tab","aria-controls":"messages","aria-selected":"false"}},[t._v("Messages")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link disabled",attrs:{id:"settings-tab","data-toggle":"tab",href:"#settings",role:"tab","aria-controls":"settings","aria-selected":"false"}},[t._v("Settings")])])]),t._v(" "),e("div",{staticClass:"tab-content py-3"},[e("div",{staticClass:"tab-pane active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[t._v("home")]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[t._v("Profile")]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"messages",role:"tabpanel","aria-labelledby":"messages-tab"}},[t._v("Messages")])]),t._v(" "),e("hr"),t._v(" "),e("ul",{staticClass:"nav nav-tabs pl-3",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link small-caps active",attrs:{"data-toggle":"tab",href:"#tab-1"}},[t._v("Active"),e("br"),t._v("Tab")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link small-caps",attrs:{"data-toggle":"tab",href:"#tab-2"}},[t._v("Link"),e("br"),e("code",[t._v(".small-caps")])])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{staticClass:"small-caps"},[t._v("Icons")]),t._v(" "),e("b-card",[e("p",[t._v("Dripicons can be referenced with class names as shown below.")]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"http://demo.amitjakhu.com/dripicons/"}},[t._v("full reference")]),t._v(".")]),t._v(" "),e("p",[e("span",{staticClass:"dripicons-paperclip"}),t._v(" "),e("code",[t._v(".dripicons-paperclip")])]),t._v(" "),e("p",[e("span",{staticClass:"dripicons-tags"}),t._v(" "),e("code",[t._v(".dripicons-tags")])]),t._v(" "),e("p",[e("span",{staticClass:"dripicons-to-do"}),t._v(" "),e("code",[t._v(".dripicons-to-do")])])]),t._v(" "),e("hr"),t._v(" "),e("b-card",{attrs:{title:"Section <code>.textbox-fancy</code>"}},[e("section",{staticClass:"textbox-fancy"},[e("span",{staticClass:"label"},[t._v("Search Summary "),e("code",[t._v(".label")])]),t._v(" "),e("p",{staticClass:"serif"},[t._v("Found "),e("strong",[t._v("153")]),t._v(" pages "),e("a",{attrs:{href:"fsdf"}},[t._v("matching\n        exactly “Indoeuropean”")]),t._v(" next to “people” published in La Gazette de\n        Lausanne between 19 May 1810 and 01 Jan 1835 or between 20 March 1861 and\n        30 March March 1861 ")])])])],1)},staticRenderFns:[]};var c=e("VU/8")({},p,!1,function(t){e("8v9K")},null,null).exports;s.a.use(l.a);var _=new l.a({routes:[{path:"/",name:"Components",component:c}]});e("7t+N"),e("K3J8"),s.a.use(o.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:v},template:"<App/>"})},P0qF:function(t,a){},kRbo:function(t,a){},zj2Q:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.2ff4d51de0f5f5f3242a.js.map