"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3758],{3636:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(7294),o=a(6010),n=a(5742);function r(){return(0,s.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),s.createElement(s.Fragment,null,s.createElement(n.Z,null,s.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),s.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),s.createElement("span",{className:(0,o.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const a=0===t?"active":"";return s.createElement("button",{className:(0,o.Z)(a,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},s.createElement("span",{className:(0,o.Z)(e.icon,"pr-2")}),e.label)}))))}},3883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var s=a(7462),o=a(7294),n=a(3905),r=a(814),l=a(3636);function i(){return(0,o.useEffect)((()=>{$("#input-tags").selectize({delimiter:",",persist:!1,onDelete:function(e){return confirm(e.length>1?"Are you sure you want to remove these "+e.length+" items?":'Are you sure you want to remove "'+e[0]+'"?')}})})),o.createElement(o.Fragment,null,o.createElement("div",{style:{marginBottom:"1rem"}},o.createElement(l.Z,null),o.createElement("h4",null,"Using the Confirm Delete dialog"),o.createElement("div",{className:"control-group"},o.createElement("label",{htmlFor:"input-tags"},"Tags:"),o.createElement("input",{type:"text",id:"input-tags",className:"demo-default",defaultValue:"awesome,neat,yeah"}))),o.createElement(r.Z,{className:"language-html",title:"Html"},'<div class="control-group">\n  <label for="input-tags">Tags:</label>\n  <input type="text" id="input-tags" class="demo-default" value="awesome,neat,yeah">\n</div>'),o.createElement(r.Z,{className:"language-javascript",title:"Javascript"},"$('#input-tags').selectize({\n  delimiter: ',',\n  persist: false,\n  onDelete: function(values) {\n    return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove \"' + values[0] + '\"?');\n  }\n});"))}const c={id:"confirm",title:"Confirm Delete",description:"Examples of how to use delete confirmation dialogs."},m=void 0,u={unversionedId:"demos/confirm",id:"demos/confirm",title:"Confirm Delete",description:"Examples of how to use delete confirmation dialogs.",source:"@site/docs/demos/confirm.mdx",sourceDirName:"demos",slug:"/demos/confirm",permalink:"/docs/demos/confirm",draft:!1,tags:[],version:"current",frontMatter:{id:"confirm",title:"Confirm Delete",description:"Examples of how to use delete confirmation dialogs."},sidebar:"demoSidebar",previous:{title:"Using the API",permalink:"/docs/demos/api"},next:{title:"Diacritics",permalink:"/docs/demos/diacritics"}},d={},f=[],p={toc:f};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i,{mdxType:"ConfirmDelete"}))}h.isMDXComponent=!0}}]);