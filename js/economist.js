// ==UserScript==
// @name         经济学人无限制助手
// @namespace    https://github.com/esmusssein777/awesome-script
// @version      1.0
// @description  让你无弹窗、无限制的阅读经济学人。
// @author       Ligz
// @match        *.economist.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('the economist script run!')
    let ad = ['fe-blogs__top-ad-wrapper','#piano__in-line-regwall','#bottom-page-wrapper','ribbon__clickable-banner','[aria-label="Advertisement"]']
    setInterval(() => {
        ad.forEach(item => {
            if ($(item)) {$(item).remove();}
        })
    }, 1000)
    let oldContent = "";
    if ($('.blog-post__text')) {
        oldContent = $('.blog-post__text').html();
        setInterval (() => {
            let newContent = $('.blog-post__text').html();
            if (newContent !== oldContent) {
                $('.blog-post__text').html(oldContent);
            }
        }, 1000)
    }
})();
