!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=14)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.apiFetch},function(e,t){e.exports=window.wp.url},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.hooks},function(e,t){e.exports=window.wp.i18n},function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=l.apply(null,n);s&&e.push(s)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},function(e,t,a){(function(t){var n;e.exports=(n=a(13),function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var n=a(3);function l(){}function r(){}r.resetWarningCache=l,e.exports=function(){function e(e,t,a,l,r,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:l};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(0),s=a.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,s=e.activeClassName,c=e.activeLinkClassName,i=e.getEventListener,u=e.pageSelectedHandler,p=e.href,m=e.extraAriaContext,d=e.pageLabelBuilder,b=e.ariaLabel||"Page "+n+(m?" "+m:""),g=null;return r&&(g="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),l.a.createElement("li",{className:t},l.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":b,"aria-current":g,onKeyPress:u},i(u)),d(n)))};c.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired,pageLabelBuilder:s.a.func.isRequired};var i=c;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,s=e.getEventListener,o=a||"break";return l.a.createElement("li",{className:o},l.a.createElement("a",u({className:n,role:"button",tabIndex:"0",onKeyPress:r},s(r)),t))};p.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var m=p;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(n,e);var t,a=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=_(e);if(t){var l=_(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return f(this,a)}}(n);function n(e){var t,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),h(v(t=a.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),h(v(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),h(v(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),h(v(t),"getEventListener",(function(e){return h({},t.props.eventListener,e)})),h(v(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),h(v(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),h(v(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),h(v(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,s=a.marginPagesDisplayed,o=a.breakLabel,c=a.breakClassName,i=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,b,g,f=n/2,v=n-f;u>r-n/2?f=n-(v=r-u):u<n/2&&(v=n-(f=u));var _=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(b=d+1)<=s||b>r-s||d>=u-f&&d<=u+v?e.push(_(d)):o&&e[e.length-1]!==g&&(g=l.a.createElement(m,{key:d,breakLabel:o,breakClassName:c,breakLinkClassName:i,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(g))}return e})),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return(t=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,s=a.activeClassName,o=a.activeLinkClassName,c=a.extraAriaContext,u=a.pageLabelBuilder;return l.a.createElement(i,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,s=e.previousClassName,o=e.previousLinkClassName,c=e.previousAriaLabel,i=e.prevRel,u=e.nextLabel,p=e.nextClassName,m=e.nextLinkClassName,d=e.nextAriaLabel,g=e.nextRel,f=this.state.selected,v=s+(0===f?" ".concat(t):""),_=p+(f===a-1?" ".concat(t):""),h=0===f?"true":"false",y=f===a-1?"true":"false";return l.a.createElement("ul",{className:n},l.a.createElement("li",{className:v},l.a.createElement("a",b({className:o,href:this.hrefBuilder(f-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":h,"aria-label":c,rel:i},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),l.a.createElement("li",{className:_},l.a.createElement("a",b({className:m,href:this.hrefBuilder(f+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":y,"aria-label":d,rel:g},this.getEventListener(this.handleNextPage)),u)))}}])&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(n.prototype,t),n}(n.Component);h(y,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,onPageActive:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,pageLabelBuilder:s.a.func,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),h(y,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=y}]))}).call(this,a(12))},function(e,t){e.exports=window.wp.mediaUtils},,function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(e){"object"==typeof window&&(a=window)}e.exports=a},function(e,t){e.exports=window.React},function(e,t,a){"use strict";a.r(t),a.d(t,"swellApiPath",(function(){return A})),a.d(t,"iconPlaceholder",(function(){return I}));var n=a(0),l=a(6),r=a(3),s=a.n(r),o=a(1),c=a(4),i=a(2),u=Object(n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(i.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}));function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=function(e){var t=e.icon,a=e.size,l=void 0===a?24:a,r=function(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}(e,["icon","size"]);return Object(n.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({width:l,height:l},r))},b=Object(n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(i.Path,{d:"M9.737 18.011L3.98 12.255l5.734-6.28 1.107 1.012-4.103 4.494h13.3v1.5H6.828l3.97 3.97-1.06 1.06z"})),g=a(5);const f=[{label:"枠なし",val:"square"},{label:"枠あり",val:"circle"}],v=[{label:"発言",val:"speaking"},{label:"心の声",val:"thinking"}],_=[{label:"左",val:"left"},{label:"右",val:"right"}],h=[{label:"なし",val:"none"},{label:"あり",val:"on"}],y=[{name:"グレー",color:"var(--color_bln_gray)"},{name:"グリーン",color:"var(--color_bln_green)"},{name:"ブルー",color:"var(--color_bln_blue)"},{name:"レッド",color:"var(--color_bln_red)"},{name:"イエロー",color:"var(--color_bln_yellow)"}];function w({id:e,setId:t}){const[a,l]=Object(n.useState)(""),[r,i]=Object(n.useState)(),[p,m]=Object(n.useState)({icon:void 0,name:void 0,shape:"square",type:"speaking",align:"left",border:"none",col:"gray"}),[w,E]=Object(n.useState)(!e),[R,N]=Object(n.useState)(!1),[C,k]=Object(n.useState)(),x=e?"ふきだしセットを編集":"ふきだしセットを新規登録",O=e?"更新":"登録";Object(n.useEffect)(()=>{e&&s()({path:`${A}?id=${e}`,method:"GET"}).then(e=>{l(e.title),m({...p,...e.data}),E(!0)}).catch(()=>{t(),E(!0)})},[]);const P=Object(c.addQueryArgs)("admin.php",{page:"swell_settings_editor",tab:"balloon"}),L=Object(c.addQueryArgs)("admin.php",{page:"swell_balloon"}),j=n=>{n.preventDefault(),""!==a?(N(!0),s()({path:A,method:"POST",data:{id:e,title:a,data:p}}).then(e=>{k({status:"updated",text:e.message||"設定を保存しました。"}),e.insertId&&t(e.insertId),N(!1)}).catch(e=>{k({status:"error",text:e.message||"エラーが発生しました。"}),N(!1)})):i({item:"title",message:"※ ふきだしセットのタイトルを入力してください"})},S=Object(n.createInterpolateElement)("※ ふきだしカラーは「SWELL設定」内の「<a>エディター設定</a>」から編集できます。",{a:React.createElement("a",{href:P,target:"_blank",rel:"noreferrer"})});return React.createElement(React.Fragment,null,React.createElement("h1",{className:"swl-setting__title"},x),React.createElement("hr",{className:"wp-header-end"}),C&&!R&&React.createElement("div",{className:"notice is-dismissible "+C.status},React.createElement("p",null,C.text,React.createElement("a",{href:L,style:{marginLeft:"8px"}},"ふきだしセットの一覧に戻る")),React.createElement(o.Button,{className:"notice-dismiss",onClick:()=>{k()}},React.createElement("span",{className:"screen-reader-text"},"この通知を非表示にする。"))),w&&React.createElement("div",{className:"swl-setting__body"},React.createElement("div",{className:"swl-setting__controls"},React.createElement(o.Button,{disabled:R,isPrimary:!0,onClick:j},O),!!e&&React.createElement(React.Fragment,null,React.createElement(o.Button,{disabled:R,isSecondary:!0,onClick:t=>{t.preventDefault(),window.confirm("本当に複製しますか？")&&s()({path:A+"-copy",method:"POST",data:{id:e}}).then(e=>{if(N(!1),e.id){const t=Object(c.addQueryArgs)("admin.php",{page:"swell_balloon",id:e.id});window.location.href=t}}).catch(e=>{k({status:"error",text:e.message||"エラーが発生しました。"}),N(!1)})}},"複製"),React.createElement(o.Button,{disabled:R,isDestructive:!0,onClick:()=>{e&&window.confirm("本当に削除してもいいですか？")&&(N(!0),s()({path:A,method:"DELETE",data:{id:e}}).then(()=>{window.location.href=L}).catch(e=>{k({status:"error",text:e.message||"エラーが発生しました。"}),N(!1)}))}},"削除"))),React.createElement("form",{onSubmit:j},React.createElement("div",{className:"swl-setting__editTitle"},React.createElement(o.TextControl,{placeholder:"ふきだしセットのタイトルを入力...",value:a,onChange:e=>{l(e)}}),"title"===(null==r?void 0:r.item)&&React.createElement("p",{className:"swl-setting__error"},r.message)),React.createElement("div",{className:"swell_settings_balloon_edit",disabled:R},React.createElement("div",{className:"swell_settings_balloon_edit__inner -left"},React.createElement("div",{className:"c-balloon -bln-"+p.align,"data-col":p.col},React.createElement("div",{className:"c-balloon__icon -"+p.shape},p.icon&&React.createElement(o.Button,{className:"swell_settings_balloon_edit__iconDelete",isDestructive:!0,icon:u,iconSize:12,label:"アイコン画像を削除",onClick:()=>{m({...p,icon:void 0})}}),React.createElement(g.MediaUpload,{allowedTypes:"image",onSelect:e=>{const t=e.sizes.thumbnail?e.sizes.thumbnail.url:e.url;m({...p,icon:t})},render:({open:e})=>React.createElement(o.Button,{onClick:e,className:"swell_settings_balloon_edit__iconSelect",label:"画像を選択",showTooltip:!1},React.createElement("span",null,"画像を選択"))}),React.createElement("img",{src:p.icon||I,alt:"",className:"c-balloon__iconImg",width:"80px"}),React.createElement(g.RichText,{className:"c-balloon__iconName",value:p.name,placeholder:"アイコン名...",onChange:e=>{m({...p,name:e})}})),React.createElement("div",{className:`c-balloon__body -${p.type} -border-${p.border}`},React.createElement("div",{className:"c-balloon__text"},"ふきだしの内容がここに入ります",React.createElement("span",{className:"c-balloon__shapes"},React.createElement("span",{className:"c-balloon__before"}),React.createElement("span",{className:"c-balloon__after"})))))),React.createElement("div",{className:"swell_settings_balloon_edit__inner -right"},React.createElement("div",{className:"swell_settings_balloon_edit__item"},React.createElement("div",{className:"swell_settings_balloon_edit__subttl"},"アイコンの丸枠"),React.createElement(o.ButtonGroup,null,f.map(e=>{const t=e.val===p.shape;return React.createElement(o.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{m({...p,shape:e.val})},key:"key_baloon_shape_"+e.val},e.label)}))),React.createElement("div",{className:"swell_settings_balloon_edit__item"},React.createElement("div",{className:"swell_settings_balloon_edit__subttl"},"ふきだしの形"),React.createElement(o.ButtonGroup,null,v.map(e=>{const t=e.val===p.type;return React.createElement(o.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{m({...p,type:e.val})},key:"key_baloon_type_"+e.val},e.label)}))),React.createElement("div",{className:"swell_settings_balloon_edit__item"},React.createElement("div",{className:"swell_settings_balloon_edit__subttl"},"ふきだしの向き"),React.createElement(o.ButtonGroup,null,_.map(e=>{const t=e.val===p.align;return React.createElement(o.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{m({...p,align:e.val})},key:"key_baloon_align_"+e.val},e.label)}))),React.createElement("div",{className:"swell_settings_balloon_edit__item"},React.createElement("div",{className:"swell_settings_balloon_edit__subttl"},"ふきだしの線"),React.createElement(o.ButtonGroup,null,h.map(e=>{const t=e.val===p.border;return React.createElement(o.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{m({...p,border:e.val})},key:"key_baloon_border_"+e.val},e.label)}))),React.createElement("div",{className:"swell_settings_balloon_edit__item"},React.createElement("div",{className:"swell_settings_balloon_edit__subttl"},"ふきだしの色"),React.createElement(g.ColorPalette,{value:`var(--color_bln_${p.col})`,colors:y,disableCustomColors:!0,clearable:!1,onChange:e=>{e=(e=(e=e||"").replace("var(--color_bln_","")).replace(")",""),m({...p,col:e})}}),React.createElement("p",{className:""},S))))),React.createElement("a",{href:L,className:"swl-setting__backLink"},React.createElement(d,{icon:b}),"ふきだしセットの一覧に戻る")))}var E=a(7),R=Object(n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(i.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),N=Object(n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(i.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),C=Object(n.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(i.Path,{d:"M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z"})),k=Object(n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(i.Path,{d:"M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"})),x=a(8),O=a.n(x);function P({idx:e,balloonData:t,copyBalloon:a,deleteBalloon:l,swapBallons:r,isFirst:s,isLast:i}){const{id:p,title:m,data:b}=t,[g,f]=Object(n.useState)(!1);Object(n.useEffect)(()=>{f(!1)},[p,e]);const v=Object(c.addQueryArgs)("admin.php",{page:"swell_balloon",id:p}),_=React.createElement("div",{className:"c-balloon -bln-"+b.align,"data-col":b.col,"aria-hidden":"true"},b.icon&&React.createElement("div",{className:"c-balloon__icon -"+b.shape},React.createElement("img",{src:b.icon,alt:"",className:"c-balloon__iconImg",width:"80px"}),React.createElement("span",{className:"c-balloon__iconName"},b.name)),React.createElement("div",{className:`c-balloon__body -${b.type} -border-${b.border}`},React.createElement("div",{className:"c-balloon__text"},"ふきだしテキスト",React.createElement("span",{className:"c-balloon__shapes"},React.createElement("span",{className:"c-balloon__before"}),React.createElement("span",{className:"c-balloon__after"})))));return React.createElement("li",{key:e,className:O()("swl-setting-balloon__item",{"show-code":g}),"data-id":p},!s&&React.createElement(o.Button,{className:"swl-setting-balloon__arrow -prev",label:"前に移動",onClick:()=>{r(e,"prev")}},React.createElement(d,{icon:R})),!i&&React.createElement(o.Button,{className:"swl-setting-balloon__arrow -next",label:"次に移動",onClick:()=>{r(e,"next")}},React.createElement(d,{icon:N})),React.createElement("div",{key:e,className:"swl-setting-balloon__item__inner"},React.createElement("div",{className:"swl-setting-balloon__btns"},React.createElement(o.Button,{className:"swl-setting-balloon__copyBtn swl-setting-balloon__btn",label:"ショートコードを表示する",onClick:()=>{g?f(!1):(f(!0),setTimeout((function(){document.querySelector(`.swl-setting-balloon__item[data-id="${p}"] .swl-setting__codeCopyBox`).select()}),100))}},React.createElement(d,{icon:g===p?u:C})),React.createElement(o.Button,{isSecondary:!0,className:"swl-setting-balloon__copy swl-setting-balloon__btn",label:"このセットを複製する",icon:k,onClick:()=>{a(p)}}),React.createElement(o.Button,{isDestructive:!0,className:"swl-setting-balloon__delete swl-setting-balloon__btn",label:"このセットを削除する",icon:u,onClick:()=>{l(p)}})),React.createElement("a",{href:v,className:"swl-setting-balloon__link"},React.createElement("div",{className:"swl-setting-balloon__ttl"},m),_),React.createElement("div",{className:"swl-setting-balloon__code",role:"button",tabIndex:"0",onClick:()=>{f(!1)},onKeyDown:e=>{e.stopPropagation(),13===e.keyCode&&f(!1)}},React.createElement("input",{className:"swl-setting__codeCopyBox code",type:"text",readOnly:!0,value:`[speech_balloon id="${p}"]${Object(E.__)("ふきだしテキストをここに入力","swell")}[/speech_balloon]`,onClick:e=>{e.stopPropagation()},onFocus:e=>{e.stopPropagation(),e.target.select()}}))))}var L=a(9),j=a.n(L);const S=(e,t,a)=>{const n=null!==e,l=null!==t;1===a?(n&&e.classList.add("-to-next"),l&&t.classList.add("-to-prev")):2===a?(n&&e.classList.add("-hide"),l&&t.classList.add("-hide")):3===a?(n&&e.classList.add("-show"),l&&t.classList.add("-show"),n&&e.classList.remove("-hide"),l&&t.classList.remove("-hide")):4===a&&(n&&e.classList.remove("-show"),l&&t.classList.remove("-show"),n&&e.classList.remove("-to-next"),l&&t.classList.remove("-to-prev"))};function B(){const[e,t]=Object(n.useState)(!1),[a,l]=Object(n.useState)(!1),[r,i]=Object(n.useState)(),[u,p]=Object(n.useState)([]),[m,d]=Object(n.useState)([]),[b,g]=Object(n.useState)(""),[f,v]=Object(n.useState)(30),[_,h]=Object(n.useState)(0),y=_*f;Object(n.useEffect)(()=>{s()({path:A,method:"GET"}).then(e=>{t(!0),p(e),d(e)})},[]);const w=Object(n.useCallback)(e=>{const t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(t.toLowerCase().trim());d((u||[]).filter(({title:e})=>e.toLowerCase().match(a)))},[u]);Object(n.useEffect)(()=>{e&&(b?w(b):d(u))},[u,b]);const E=Object(n.useCallback)(e=>{e&&window.confirm("本当に複製しますか？")&&(l(!0),s()({path:A+"-copy",method:"POST",data:{id:e}}).then(e=>{p([e,...u]),i({status:"updated",text:e.message||"複製しました。"}),l(!1)}).catch(e=>{i({status:"error",text:e.message||"エラーが発生しました。"}),l(!1)}))},[u]),R=Object(n.useCallback)(e=>{e&&window.confirm("本当に削除してもいいですか？")&&(l(!0),s()({path:A,method:"DELETE",data:{id:e}}).then(t=>{const a=u.filter(t=>t.id!==e);p(a),i({status:"updated",text:t.message||"削除しました。"}),l(!1)}).catch(e=>{i({status:"error",text:e.message||"エラーが発生しました。"}),l(!1)}))},[u]),N=Object(n.useCallback)((e,t)=>{if(void 0===e||!t)return;if("prev"!==t&&"next"!==t)return;const a=e+y,n="prev"===t?m[a-1]:m[a],l="prev"===t?m[a]:m[a+1];if(!n||!l)return;const r=document.querySelector(`.swl-setting-balloon__item[data-id="${n.id}"]`),o=document.querySelector(`.swl-setting-balloon__item[data-id="${l.id}"]`);S(r,o,1),setTimeout(()=>{S(r,o,2),s()({path:A+"-sort",method:"POST",data:{balloon1:n,balloon2:l}}).then(e=>{p(e),setTimeout(()=>{S(r,o,3)},100),setTimeout(()=>{S(r,o,4)},1100)}).catch(e=>{i({status:"error",text:e.message||"エラーが発生しました。"})})},400)},[m,y]);if(!e)return null;const C=Object(c.addQueryArgs)("admin.php",{page:"swell_balloon",post_new:null}),k=Math.ceil(m.length/f),x=m.slice(y,y+f);return React.createElement(React.Fragment,null,React.createElement("h1",{className:"swl-setting__title"},"ふきだしセット一覧"),React.createElement("hr",{className:"wp-header-end"}),r&&!a&&React.createElement("div",{className:"notice is-dismissible "+r.status},React.createElement("p",null,r.text),React.createElement(o.Button,{className:"notice-dismiss",onClick:()=>{i()}},React.createElement("span",{className:"screen-reader-text"},"この通知を非表示にする。"))),React.createElement("div",{className:"swl-setting__body swl-setting-balloon",disabled:a},React.createElement("div",{className:"swl-setting__controls"},React.createElement("a",{className:"components-button is-primary swl-setting__new",href:C},"新規ふきだし追加"),React.createElement("input",{className:"swl-setting__search",type:"text",placeholder:"ふきだしセットを検索...",value:b,onChange:e=>{g(e.target.value)}})),m.length?React.createElement(React.Fragment,null,React.createElement("ul",{className:"swl-setting-balloon__list"},x.map((e,t)=>React.createElement(P,{key:t,isFirst:t+y===0,isLast:t+y===m.length-1,idx:t,balloonData:e,copyBalloon:E,deleteBalloon:R,swapBallons:N}))),React.createElement(j.a,{pageCount:k,pageRangeDisplayed:5,marginPagesDisplayed:1,onPageChange:e=>{h(e.selected)},containerClassName:"pagination",pageClassName:"pagination__item",pageLinkClassName:"pagination__link",activeClassName:"active",previousLabel:"<",nextLabel:">",previousClassName:"pagination__item -prev",previousLinkClassName:"pagination__link -prev",nextClassName:"pagination__item -next",nextLinkClassName:"pagination__link -next",breakClassName:"pagination__item -break",breakLinkClassName:"pagination__link -break"})):React.createElement("p",null,"ふきだしデータがまだありません。")))}function D(){const[e,t]=Object(n.useState)(!1),[a,l]=Object(n.useState)("");return React.createElement(React.Fragment,null,React.createElement("h1",{className:"swl-setting__title"},"ふきだしセット一覧"),React.createElement("hr",{className:"wp-header-end"}),a&&React.createElement("div",{className:"notice is-dismissible error"},React.createElement("p",null,a)),React.createElement("div",{className:"swl-setting__body swl-setting-balloon",disabled:e},React.createElement("p",null,"旧バージョンの古いデータが残っています。以下のボタンからデータの変換を行ってください。"),React.createElement(o.Button,{isPrimary:!0,className:"",onClick:()=>{e||window.confirm("本当にデータを移行してもいいですか？")&&(t(!0),s()({path:A,method:"PATCH"}).then(e=>{"ok"===e.status?location.reload():l("データ移行に失敗しました。")}).catch(e=>{l(e.message)}))}},"旧データを新データへ移行する"),React.createElement("p",null,"※データの変換を行うと、SWELLのバージョンをダウングレードした時にふきだしが正常に呼び出せなくなる可能性があります。",React.createElement("br",null),"バックアップを取ってから実行してください。")))}var T=a(10);const A="/wp/v2/swell-balloon",I="https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g";Object(l.addFilter)("editor.MediaUpload","core/edit-post/components/media-upload/replace-media-upload",()=>T.MediaUpload);const M=({mode:e})=>{const t={};location.search.substring(1).split("&").forEach(e=>{const[a,...n]=e.split("=");""!==a&&(t[a]=decodeURI(n.join("=")))});const a="post_new"in t,[l,r]=Object(n.useState)(t.id);return"migrate"===e?React.createElement(D,null):l||a?React.createElement(w,{id:l,setId:r}):React.createElement(B,null)},V=document.getElementById("swell_setting_page");"1"===V.getAttribute("data-old")?Object(n.render)(React.createElement(M,{mode:"migrate"}),V):Object(n.render)(React.createElement(M,{mode:""}),V)}]);