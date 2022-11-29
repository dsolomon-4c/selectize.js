"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5697],{3636:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),a=o(6010),r=o(5742);function l(){return(0,n.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),n.createElement(n.Fragment,null,n.createElement(r.Z,null,n.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),n.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),n.createElement("span",{className:(0,a.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const o=0===t?"active":"";return n.createElement("button",{className:(0,a.Z)(o,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},n.createElement("span",{className:(0,a.Z)(e.icon,"pr-2")}),e.label)}))))}},3602:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=o(7462),a=o(7294),r=o(3905),l=o(814),s=o(3636);function i(){return(0,a.useEffect)((()=>{$("#dropdownHeader").selectize({plugins:{dropdown_header:{title:"Dropdown Header"}}})})),a.createElement("div",null,a.createElement("div",{style:{marginBottom:"1rem"}},a.createElement(s.Z,null),a.createElement("h4",{style:{textAlign:"left",marginBottom:"4rem"}},"A plugin by ",a.createElement("a",{href:"https://github.com/brianreavis"},"Brian Reavis")," for add dropdown header to native dropdown with a close button."),a.createElement("select",{id:"dropdownHeader"},a.createElement("option",{value:"1"},"Awesome"),a.createElement("option",{value:"2"},"Beast"),a.createElement("option",{value:"3"},"Compatible"),a.createElement("option",{value:"4"},"Thomas Edison"),a.createElement("option",{value:"5"},"Nikola"),a.createElement("option",{value:"6"},"Selectize"),a.createElement("option",{value:"7"},"Javascript"))),a.createElement(l.Z,{className:"language-html",title:"Html"},'<select id="dropdownHeader">\n  <option value="1" selected>Awesome</option>\n  <option value="2" selected>Beast</option>\n  <option value="3" selected>Compatible</option>\n  <option value="4">Thomas Edison</option>\n  <option value="5">Nikola</option>\n  <option value="6">Selectize</option>\n  <option value="7">Javascript</option>\n</select>'),a.createElement(l.Z,{className:"language-javascript",title:"Javascript"},"    $(\"#dropdownHeader\").selectize({\n  plugins: {\n    dropdown_header: {\n        title: 'Dropdown Header'\n    }\n  },\n});"))}const d={id:"dropdown-header",title:"Dropdown header",description:"Add dropdown header to native dropdown with a close button."},c=void 0,p={unversionedId:"plugins/dropdown-header",id:"plugins/dropdown-header",title:"Dropdown header",description:"Add dropdown header to native dropdown with a close button.",source:"@site/docs/plugins/dropdown-header.mdx",sourceDirName:"plugins",slug:"/plugins/dropdown-header",permalink:"/docs/plugins/dropdown-header",draft:!1,tags:[],version:"current",frontMatter:{id:"dropdown-header",title:"Dropdown header",description:"Add dropdown header to native dropdown with a close button."},sidebar:"demoSidebar",previous:{title:"Drag & Drop",permalink:"/docs/plugins/drag-drop"},next:{title:"Option Group Columns",permalink:"/docs/plugins/opt-group-col"}},u={},m=[],h={toc:m};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"DropdownHeader"}))}f.isMDXComponent=!0}}]);