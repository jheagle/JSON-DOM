"use strict";(function(){var e=this||{},t=e.document;Object.keys(e).length||("undefined"!=typeof require?(e=require("../../pseudoDom/objects.js").generate(e),t=e.document):console.error("objects.js requires pseudoDom/objects"));var r=e.jDomObjects||{},n={};e.jDomObjects=n,n.noConflict=function(){return e.jDomObjects=r,n};var o=e.functionalHelpers;void 0===o&&("undefined"!=typeof require?o=require("../core.js"):console.error("core/dom/objects requires core/core")),n.createDomItem=function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o).mergeObjectsMutable.apply(e,[{tagName:"div",attributes:{style:{}},element:{},eventListeners:{},parentItem:{},children:[]}].concat(r))};var c=function(){return[n.createDomItem({tagName:"head",attributes:{},element:t.head,children:[]}),n.createDomItem({tagName:"body",attributes:{},element:t.body,children:[]})]},i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.createDomItem({tagName:"html",attributes:{},element:t,eventListeners:r,children:e,head:e[0],body:e[1]})};n.documentDomItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i(c(),e);return t.children=t.children.map((function(e){return n.createDomItem(e,{parentItem:t})})),Object.assign(t.head,t.children[0]),Object.assign(t.body,t.children[1]),n.createDomItem(t)},n.documentItem=n.documentDomItem(),"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports=Object.assign(exports,n))}).call(window||{});