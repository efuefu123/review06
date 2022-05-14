!function(e){var t={};function l(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=85)}({0:function(e,t){e.exports=window.wp.components},1:function(e,t){e.exports=window.wp.blockEditor},15:function(e,t){e.exports=window.wp.serverSideRender},2:function(e,t){e.exports=window.wp.element},3:function(e,t){e.exports=window.wp.i18n},4:function(e,t,l){"use strict";l.d(t,"c",(function(){return a})),l.d(t,"a",(function(){return n})),l.d(t,"d",(function(){return c})),l.d(t,"b",(function(){return o}));const a="swell",n=" #04384c",c="swell-block-settings",o="/wp/v2/swell-block-settings"},5:function(e,t){e.exports=window.wp.blocks},6:function(e,t,l){"use strict";var a=l(4);t.a=e=>({foreground:a.a,src:e})},66:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"loos/post-list","title":"投稿リスト","category":"swell-blocks","keywords":["swell"],"supports":{"anchor":true,"className":false},"example":{"attributes":{"showDate":"1","pcCol":"2","catPos":"none","listCount":4}},"attributes":{"className":{"type":"string","default":""},"listType":{"type":"string","default":"card"},"postID":{"type":"string","default":""},"catID":{"type":"string","default":""},"tagID":{"type":"string","default":""},"taxName":{"type":"string","default":""},"termID":{"type":"string","default":""},"catRelation":{"type":"string","default":"IN"},"tagRelation":{"type":"string","default":"IN"},"termRelation":{"type":"string","default":"IN"},"queryRelation":{"type":"string","default":"AND"},"excID":{"type":"string","default":""},"catPos":{"type":"string","default":"on_thumb"},"listCount":{"type":"number","default":3},"pcCol":{"type":"string","default":"3"},"spCol":{"type":"string","default":"1"},"showTitle":{"type":"string","default":""},"showDate":{"type":"string","default":"1"},"showModified":{"type":"string","default":""},"showAuthor":{"type":"string","default":""},"showPV":{"type":"string","default":""},"moreText":{"type":"string","default":""},"moreUrl":{"type":"string","default":""},"pcExcerptLength":{"type":"number","default":0},"spExcerptLength":{"type":"number","default":0},"pcHideLast":{"type":"boolean","default":false},"spHideLast":{"type":"boolean","default":false},"order":{"type":"string","default":"DESC"},"orderby":{"type":"string","default":"date"},"exCatChildren":{"type":"boolean","default":false},"authorID":{"type":"number","default":0},"postType":{"type":"string","default":"post"},"hTag":{"type":"string","default":"h2"},"addSticky":{"type":"boolean","default":false}},"textdomain":"swell"}')},8:function(e,t){e.exports=window.wp.data},85:function(e,t,l){"use strict";l.r(t);var a=l(3),n=l(8),c=l(5),o=l(1),r=l(0),s=l(15),i=l.n(s),u=l(66),m=l(2);const p=[{label:"新着順",value:"date"},{label:"更新日順",value:"modified"},{label:"人気順",value:"pv"},{label:"ランダム",value:"rand"}],d=[{label:"降順",val:"DESC"},{label:"昇順",val:"ASC"}],b=[{label:Object(a.__)("Card type","swell"),value:"card"},{label:Object(a.__)("List type","swell"),value:"list"},{label:Object(a.__)("List type","swell")+Object(a.__)("(Alternate left and right)","swell"),value:"list2"},{label:Object(a.__)("Thumbnail type","swell"),value:"thumb"},{label:Object(a.__)("Text type","swell"),value:"simple"}],R=[{label:"表示しない",value:"none"},{label:"サムネイル画像の上",value:"on_thumb"},{label:"日付の横",value:"beside_date"}],y=[{label:"1列",val:"1"},{label:"2列",val:"2"},{label:"3列",val:"3"}],g=[{label:"1列",val:"1"},{label:"2列",val:"2"}],h=[{label:"h2",val:"h2"},{label:"h3",val:"h3"},{label:"div",val:"div"}],E=[{label:"0",val:0},{label:"40",val:40},{label:"80",val:80},{label:"120",val:120},{label:"160",val:160}];var C=function({attributes:e,setAttributes:t}){const{listType:l,listCount:n,pcCol:c,spCol:o,showDate:s,showModified:i,showAuthor:u,showPV:C,showTitle:f,addSticky:w,order:v,orderby:_,catPos:N,hTag:O,moreText:x,moreUrl:B,pcExcerptLength:k,spExcerptLength:j,pcHideLast:T,spHideLast:P}=e,I=Object(m.useMemo)(()=>[{name:"showDate",label:"公開日を表示する",description:"",attrVal:s},{name:"showModified",label:"更新日を表示する",description:"",attrVal:i},{name:"showAuthor",label:"著者を表示する",attrVal:u},{name:"showPV",label:"PV数を表示する",attrVal:C},{name:"showTitle",label:"タイトルを表示する",description:"※ サムネイル型でのみ有効です",attrVal:f}],[s,i,u,C,f]);return React.createElement(r.PanelBody,{title:"表示設定",initialOpen:!0,className:"post_list_controles"},React.createElement(r.RangeControl,{className:"u-mb-10",label:"表示する投稿数",value:n,onChange:e=>{t({listCount:e})},min:1,max:24}),React.createElement(r.ToggleControl,{label:"先頭固定記事を追加する",checked:w,onChange:e=>{t({addSticky:e})}}),React.createElement(r.RadioControl,{label:"レイアウトを選択",selected:l,options:b,onChange:e=>{t({listType:e})}}),React.createElement(r.RadioControl,{className:"u-mb-10",label:"投稿の表示順序",selected:_,options:p,onChange:e=>{t({orderby:e})}}),React.createElement("div",{className:"components-base-control","data-swl-disable":"rand"===_||null},React.createElement(r.ButtonGroup,{className:"swl-btns--minWidth"},d.map(e=>React.createElement(r.Button,{isPrimary:e.val===v,onClick:()=>{t({order:e.val})},key:"order_"+e.val},e.label)))),React.createElement(r.BaseControl,{className:"toggle_group"},React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("各種表示設定","swell")),I.map(e=>{const l="1"===e.attrVal,a=""===e.description?e.label:React.createElement("span",null,e.label,React.createElement("br",null),React.createElement("small",null,e.description));return React.createElement(r.ToggleControl,{label:a,checked:l,onChange:l=>{t(l?{[e.name]:"1"}:{[e.name]:""})},key:"toggle_"+e.name})})),React.createElement(r.RadioControl,{label:Object(a.__)("Category display position","swell"),selected:N,options:R,onChange:e=>{t({catPos:e})}}),React.createElement(r.BaseControl,null,React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("HTML tag for title","swell")),React.createElement(r.ButtonGroup,{className:"swl-btns--minWidth"},h.map(e=>{const l=e.val===O;return React.createElement(r.Button,{isPrimary:l,onClick:()=>{t({hTag:e.val})},key:"hTag_"+e.val},e.label)}))),React.createElement(r.BaseControl,null,React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("最大カラム数（PC）","swell")),React.createElement("small",{className:"button_group_help"},"※ カード型またはサムネイル型でのみ有効"),React.createElement(r.ButtonGroup,{className:"swl-btns--minWidth"},y.map(e=>{const l=e.val===c;return React.createElement(r.Button,{isSecondary:!l,isPrimary:l,onClick:()=>{t({pcCol:e.val})},key:"pcCol_"+e.val},e.label)}))),React.createElement(r.BaseControl,null,React.createElement("small",{className:"button_group_help"},"※ カード型またはサムネイル型でのみ有効"),React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("最大カラム数（SP）","swell")),React.createElement(r.ButtonGroup,{className:"swl-btns--minWidth"},g.map(e=>{const l=e.val===o;return React.createElement(r.Button,{isSecondary:!l,isPrimary:l,onClick:()=>{t({spCol:e.val})},key:"spCol_"+e.val},e.label)}))),React.createElement(r.BaseControl,null,React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("Number of characters in the excerpt","swell")+"(PC)"),React.createElement(r.ButtonGroup,{className:"swl-btns--minWidth"},E.map(e=>{const l=e.val===k;return React.createElement(r.Button,{isSecondary:!l,isPrimary:l,onClick:()=>{t({pcExcerptLength:e.val})},key:"pcExcerptLength_"+e.val},e.label)}))),React.createElement(r.BaseControl,null,React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("Number of characters in the excerpt","swell")+"(SP)"),React.createElement(r.ButtonGroup,{className:"swl-btns--minWidth"},E.map(e=>{const l=e.val===j;return React.createElement(r.Button,{isSecondary:!l,isPrimary:l,onClick:()=>{t({spExcerptLength:e.val})},key:"spExcerptLength_"+e.val},e.label)}))),React.createElement(r.BaseControl,null,React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("MOREリンクの表示テキスト","swell")),React.createElement(r.TextControl,{value:x,placeholder:"もっと見る",onChange:e=>t({moreText:e})})),React.createElement(r.BaseControl,{help:React.createElement("small",null,"※ カテゴリーを指定した場合などは自動でURLを取得しますので、入力する必要はありません。")},React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("MOREリンクのURL","swell")),React.createElement(r.TextControl,{value:B,onChange:e=>t({moreUrl:e})})),React.createElement(r.BaseControl,{className:"checkbox_group"},React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("最後の投稿を非表示にするかどうか","swell")),React.createElement(r.CheckboxControl,{label:"PC表示で非表示にする",checked:T,onChange:e=>t({pcHideLast:e})}),React.createElement(r.CheckboxControl,{label:"SP表示で非表示にする",checked:P,onChange:e=>t({spHideLast:e})})))};const{groupBy:f}=lodash;function w(e){if(!e)return[];const t=e.map(e=>({children:[],parent:null,...e})),l=f(t,"parent");if(l.null&&l.null.length)return t;const a=e=>e.map(e=>{const t=l[e.id];return{...e,children:t&&t.length?a(t):[]}});return a(l[0]||[])}var v=function({attributes:e,setAttributes:t,authors:l}){const{postID:c,catID:o,tagID:s,taxName:i,termID:u,catRelation:m,tagRelation:p,termRelation:d,queryRelation:b,excID:R,exCatChildren:y,authorID:g,postType:h}=e,E=o.split(","),C=s.split(","),f=u.split(","),v=Object(n.useSelect)(e=>e("core").getEntityRecords("taxonomy","category",{per_page:-1})),_=Object(n.useSelect)(e=>e("core").getEntityRecords("taxonomy","post_tag",{per_page:-1})),N=Object(n.useSelect)(e=>e("core").getEntityRecords("taxonomy",i,{per_page:-1}),[i]),O=Object(n.useSelect)(e=>e("core").getPostTypes({per_page:-1}),[]),x=[{label:Object(a.__)("All","swell"),value:"any"}];if(null!==O)for(const e of O){const t=["attachment","lp"];e.viewable&&-1===t.indexOf(e.slug)&&x.push({label:e.name,value:e.slug})}const B=[{label:"----",value:0}];l.forEach(e=>{B.push({label:e.name,value:e.id})});const k=(e,l,a)=>React.createElement(r.ButtonGroup,{className:"swl-btns--small"},1<e.length?React.createElement(React.Fragment,null,React.createElement(r.Button,{isSecondary:"IN"!==l,isPrimary:"IN"===l,onClick:()=>{t({[a]:"IN"})}},"1つでも含む"),React.createElement(r.Button,{isSecondary:"AND"!==l,isPrimary:"AND"===l,onClick:()=>{t({[a]:"AND"})}},"全て含む")):React.createElement(r.Button,{isSecondary:"NOT IN"===l,isPrimary:"NOT IN"!==l,onClick:()=>{t({[a]:"IN"})}},"含む"),React.createElement(r.Button,{isSecondary:"NOT IN"!==l,isPrimary:"NOT IN"===l,onClick:()=>{t({[a]:"NOT IN"})}},"含まない"));return React.createElement(React.Fragment,null,React.createElement(r.PanelBody,{title:"投稿IDで絞り込む",initialOpen:!0,className:"swell-panel-postList--postid"},React.createElement(r.TextControl,{label:"投稿IDを直接指定",placeholder:"ex) 8,120,272",help:"※ 複数の場合は , 区切りで入力して下さい。",value:c||"",onChange:e=>{t({postID:e})}}),React.createElement(r.TextControl,{label:"除外する投稿ID",placeholder:"ex) 6,112,264",help:"※ 複数の場合は , 区切りで入力して下さい。",value:R||"",onChange:e=>{t({excID:e})}})),!c&&React.createElement(React.Fragment,null,React.createElement(r.PanelBody,{title:"投稿タイプで絞り込む",initialOpen:!0,className:"swell-panel-postList--postType"},React.createElement(r.SelectControl,{value:h,options:x,onChange:e=>{t({postType:e})}})),React.createElement(r.PanelBody,{title:"タクソノミーの条件設定",initialOpen:!0,className:"swell-panel-postList--pickup"},React.createElement(r.BaseControl,null,React.createElement("div",{className:"u-mb-5"},"以下の各タクソノミーの条件に..."),React.createElement(r.ButtonGroup,null,React.createElement(r.Button,{isSecondary:"OR"!==b,isPrimary:"OR"===b,onClick:()=>{t({queryRelation:"OR"})}},"1つでも"),React.createElement(r.Button,{isSecondary:"AND"!==b,isPrimary:"AND"===b,onClick:()=>{t({queryRelation:"AND"})}},"全てに")),React.createElement("div",{className:"u-mt-5"},"該当する投稿を表示する"),React.createElement("hr",null)),React.createElement("div",{className:"u-mb-20 u-fz-s"},"以下、",React.createElement("code",null,"command(Ctrl)"),"キーを押しながらクリックすると複数選択できます。"),React.createElement(r.TreeSelect,{label:"カテゴリー",className:"-category",noOptionLabel:"----",onChange:e=>{t({catID:e.join(",")})},selectedId:E,tree:w(v),multiple:!0}),React.createElement(r.CheckboxControl,{className:"-exCatChildren",label:"子カテゴリのみの記事を除外",checked:y,onChange:e=>{t({exCatChildren:e})}}),o&&React.createElement(React.Fragment,null,React.createElement(r.BaseControl,{className:"swell-control-catRelation"},React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("選択したカテゴリーを…","swell")),k(E,m,"catRelation"))),React.createElement(r.TreeSelect,{label:"タグ",className:"-tag",noOptionLabel:"----",onChange:e=>t({tagID:e.join(",")}),selectedId:C,tree:w(_),multiple:!0}),s&&React.createElement(r.BaseControl,{className:"swell-control-tagRelation"},React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("選択したタグを…","swell")),k(C,p,"tagRelation")),React.createElement(r.TextControl,{label:"任意のタクソノミー",placeholder:"タクソノミー名（slug）を入力",value:i||"",onChange:e=>{t({taxName:e}),e||t({termID:""})}}),i&&React.createElement(React.Fragment,null,React.createElement(r.TreeSelect,{label:"ターム",className:"-term",noOptionLabel:"----",onChange:e=>{t({termID:e.join(",")})},selectedId:f,tree:w(N),multiple:!0}),u&&React.createElement(r.BaseControl,{className:"swell-control-termRelation"},React.createElement(r.BaseControl.VisualLabel,null,Object(a.__)("選択したタームを…","swell")),k(f,d,"termRelation")))),React.createElement(r.PanelBody,{title:"著者で絞り込む",initialOpen:!0,className:"swell-panel-postList--author"},React.createElement(r.SelectControl,{value:g,options:B,onChange:e=>{t({authorID:parseInt(e)})}}))))},_=l(6);Object(c.registerBlockType)(u.name,{title:Object(a.__)("投稿リスト","swell"),description:Object(a.__)("投稿リストを好きな条件で呼び出すことができます。","swell"),icon:Object(_.a)("screenoptions"),edit:({attributes:e,setAttributes:t})=>{const l=Object(n.useSelect)(e=>e("core").getAuthors()),a=Object(o.useBlockProps)({className:"loos-block-post-list post_content"});return React.createElement(React.Fragment,null,React.createElement(o.InspectorControls,null,React.createElement(r.TabPanel,{className:"swell-tab-panel -postList",activeClass:"is-active",tabs:[{name:"display",title:React.createElement(React.Fragment,null,React.createElement("i",{className:"dashicons-before dashicons-admin-settings"}),"Settings"),className:"__display"},{name:"pickup",title:React.createElement(React.Fragment,null,React.createElement("i",{className:"dashicons-before dashicons-post-status"}),"Pickup"),className:"__pickup"}],initialTabName:"display"},a=>"pickup"===a.name?React.createElement(v,{attributes:e,setAttributes:t,authors:l}):"display"===a.name?React.createElement(C,{attributes:e,setAttributes:t}):void 0)),React.createElement("div",a,React.createElement(i.a,{block:"loos/post-list",attributes:e})))},save:()=>null})}});