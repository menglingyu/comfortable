# comfortable
便携的SCSS库

1，SCSS库里包含定制的栅格系统，可以在移动端，ipad端，PC端分
别设置不同的间距，只需要改变变量。
2，可以更改container-fluid 的宽度。
3,自动加前缀函数只需要 @include prefix($property, $value)；
4，配合JS很好的移动端rem解决方案，引入这个库之后设置所有长度单位
都要用 px2rem($px)来设置。
5，通过变量$list，循环给相通前缀的类名设置样式。
6，通过设置$condition 使用三元判断符，为元素加样式。
7，还有文本隐藏的mixin；
7，给div设置class="gotop-pc",在PC端即可完成固定返回顶部。
