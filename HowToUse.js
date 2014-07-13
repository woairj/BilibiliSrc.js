javascript:/*请将这一行到最下面的内容复制下来，填入地址栏*/
if(typeof(document.getElementsByClassName) == "undefined")
{
	alert("浏览器不被支持。\r\n支持的浏览器有：IE>=9、FireFox、Chrome、Opera、Safari");
	throw "document.getElementsByClassName undefined";
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var site = "http://192.168.1.101:8080";
var body=document.getElementsByTagName("body")[0];

var js1=document.createElement("script");
js1.setAttribute("src", site + "/util.js");
body.appendChild(js1);

var js2=document.createElement("script");
js2.setAttribute("src", site + "/md5-min.js");
insertAfter(js1, js2);

var js3=document.createElement("script");
js3.innerHTML = "Replace();";
insertAfter(js2, js3);
/*文件末尾*/
