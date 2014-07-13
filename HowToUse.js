javascript:/*请将这一行到最下面的内容复制下来，填入地址栏*/
if(typeof(document.getElementsByClassName) == "undefined")
{
	alert("浏览器不被支持。\r\n支持的浏览器有：IE>=9、FireFox、Chrome、Opera、Safari");
	throw "document.getElementsByClassName undefined";
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var site = "http://raw.githubusercontent.com/LYF610400210/BilibiliSrc.js/master";
var body=document.getElementsByTagName("body")[0];

var js1=document.createElement("script");
js1.setAttribute("src", site + "/util.js");
body.appendChild(js1);

var js2=document.createElement("script");
js2.setAttribute("src", site + "/md5-min.js");
insertAfter(js1, js2);

var js3=document.createElement("script");
js3.innerHTML = "try{ Replace(); }catch(err){ alert('切换失败，请再点击一次！'); }";
insertAfter(js2, js3);
/*文件末尾*/
