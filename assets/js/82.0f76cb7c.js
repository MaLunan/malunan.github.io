(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{450:function(s,e,n){"use strict";n.r(e);var a=n(5),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),e("p",[s._v("Navicat试用时间到期怎么办，卸载重装方法也太麻烦了吧，用脚本一键更新试用时间，对麻烦说不！")]),s._v(" "),e("h2",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),e("ol",[e("li",[s._v("创建txt文件")])]),s._v(" "),e("div",{staticClass:"language-bat line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@echo off\nset dn=Info\nset dn2=ShellFolder\nset rp=HKEY_CURRENT_USER\\Software\\Classes\\CLSID\n:: reg delete HKEY_CURRENT_USER\\Software\\PremiumSoft\\NavicatPremium\\Registration14XCS /f  %针对<strong><font color="#FF0000">navicat</font></strong>15%\nreg delete HKEY_CURRENT_USER\\Software\\PremiumSoft\\NavicatPremium\\Registration16XCS /f\nreg delete HKEY_CURRENT_USER\\Software\\PremiumSoft\\NavicatPremium\\Update /f\necho finding.....\nfor /f "tokens=*" %%a in (\'reg query "%rp%"\') do (\n echo %%a\nfor /f "tokens=*" %%l in (\'reg query "%%a" /f "%dn%" /s /e ^|findstr /i "%dn%"\') do (\n  echo deleteing: %%a\n  reg delete %%a /f\n)\nfor /f "tokens=*" %%l in (\'reg query "%%a" /f "%dn2%" /s /e ^|findstr /i "%dn2%"\') do (\n  echo deleteing: %%a\n  reg delete %%a /f\n)\n)\necho re trial done!\n  \npause\nexit\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("修改后缀名为 .bat")]),s._v(" "),e("li",[s._v("管理员启动")])])])}),[],!1,null,null,null);e.default=t.exports}}]);