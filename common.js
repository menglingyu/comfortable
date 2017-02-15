var dpr = window.devicePixelRatio;
meta.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no');
document.addEventListener('DOMContentLoaded', function(e) {
                document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
}, false);
// 1 解决了图片高清问题。
// 2 解决了border 1px问题（我们设置的1px，在iphone上，由于viewport的scale是0.5，所以就自然缩放成0.5px）