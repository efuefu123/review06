!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=102)}({1:function(e,t){e.exports=window.wp.blockEditor},102:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(5),a=n(1),o=n(62),l=React.createElement("svg",{viewBox:"0 0 512 512"},React.createElement("path",{d:"M199.4,322c16.5-20.2,22.9-46.3,22.9-72.7c0-67.6-40.5-103.3-94-103.3c-53.2,0-93.7,35.7-93.7,103.3 c0,67.6,40.5,103.6,93.7,103.6c30.4,0,48.2-11.7,53.8-15.4l31.7,25.3l14.4-17.8L199.4,322z M175.5,303.1L156,287.4l-14.4,17.8 l16.2,13c-3.2,1.9-13,7.2-29.5,7.2c-39.7,0-62.8-32.5-62.8-76.1c0-43.7,23.2-76.1,62.8-76.1c39.9,0,63.1,32.5,63.1,76.2 C191.4,262.1,189.3,284.4,175.5,303.1z"}),React.createElement("path",{d:"M315.4,366l18.4-56.5H423l18.8,56.5h35.6l-77.9-216.7h-41.8L279.7,366H315.4z M342.2,283.9l36.3-106.5 l36.3,106.5"})),s=n(6);const i=[["core/paragraph"]];Object(c.registerBlockType)(o.name,{icon:Object(s.a)(l),parent:["loos/faq"],edit:({attributes:e,setAttributes:t})=>{const{contentQ:n}=e,c=Object(a.useBlockProps)({className:"swell-block-faq__item"}),o=Object(a.__experimentalUseInnerBlocksProps)({className:"faq_a swl-inner-blocks swl-has-margin--s"},{template:i,templateLock:!1});return React.createElement("div",c,React.createElement(a.RichText,{className:"faq_q",tagName:"div",placeholder:Object(r.__)("Text…","swell"),value:n,onChange:e=>t({contentQ:e})}),React.createElement("div",o))},save:({attributes:e})=>{const{contentQ:t}=e,n=a.useBlockProps.save({className:"swell-block-faq__item"});return React.createElement("div",n,React.createElement(a.RichText.Content,{tagName:"dt",className:"faq_q",value:t}),React.createElement("dd",{className:"faq_a"},React.createElement(a.InnerBlocks.Content,null)))}})},3:function(e,t){e.exports=window.wp.i18n},4:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o}));const r="swell",c=" #04384c",a="swell-block-settings",o="/wp/v2/swell-block-settings"},5:function(e,t){e.exports=window.wp.blocks},6:function(e,t,n){"use strict";var r=n(4);t.a=e=>({foreground:r.a,src:e})},62:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"loos/faq-item","title":"項目","category":"swell-blocks","parent":["loos/faq"],"supports":{"anchor":true,"className":false,"reusable":false},"attributes":{"contentQ":{"type":"string","source":"html","selector":"dt","default":""}}}')}});