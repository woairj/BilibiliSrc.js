// JavaScript Document
function GetVID(cid)
{
	var req = createRequest();
	if(req == null)
	{
		console.log("XMLHttpRequest创建出错！");
		alert("浏览器太老了吧……");
		return;
	}
	//var url = "http://interface.bilibili.com/player?id=cid:" + cid;
	//因为跨域问题，使用自己搭的站
	var url = "http://bilibiliheikeji.0ad.info/parse.php?cid=" + cid;
	req.open("GET", url, false);
	req.send(null);
	var resp = CutBetween(req.responseText, "<oriurl>", "</oriurl>")
	var keyword = "vid=";
	if(resp.indexOf(keyword) < 0)
	{
		var err = "OriURL格式不正确：" + resp + "\r\n" + "没有找到vid=";
		console.log(err);
		alert(err);
		return;
	}
	var vid = resp.substr(resp.indexOf(keyword) + keyword.length);
	return vid;
}

function SecretNumber(param1)
{
     var _loc_2 = param1.toString(2);
     var _loc_3 = _loc_2.substring(0, _loc_2.length - 6);
     var _loc_4 = parseInt(_loc_3, 2);
     return parseInt(_loc_3, 2);
}
			
function createRequest()
{
	var xmlHttp = null;
	try
  	{
  		xmlHttp = new XMLHttpRequest();
  	}
	catch(e)
  	{
  		try
    	{
    		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		catch(e)
    	{}
  	}
	return xmlHttp;
}

function CutBetween(source, start, end)
{
	var str = source;
	var startIndex = str.indexOf(start);
	str = str.substr(startIndex + start.length);
	var endIndex = str.indexOf(end);
	str = str.substr(0, endIndex);
	return str;
}

function Replace()//黑科技主体
{
	var title = document.title;
	document.title = "正在获取VID…… " + title;
	var cidsrc = document.getElementsByClassName("player")[0].getAttribute("src");
	var cid = CutBetween(cidsrc, "cid=", "&");
	var vid = GetVID(cid);
	console.log("cid vid "+ cid +" " + vid);
	document.title = title;
	if(vid == null)
	{
		throw "Get VID Failed!";
	}
	var ran = Math.random();
	var unixTimeSec = parseInt(new Date().getTime() / 100);
	var secretStr = "Z6prk18aWxP278cVAH";
	var secretNum = SecretNumber(parseInt(unixTimeSec / 1000));
	var combine = vid.toString() + secretStr + secretNum + ran.toString();
	var hash = hex_md5(combine);
	var encode = hash.substr(0,16).toString() + secretNum.toString();
	var param = "vid=" + encodeURIComponent(vid) + encodeURIComponent("&uid=1&pid=1&tid=334&plid=4001&prid=ja_7_5986379099&referrer=http%3A%2F%2Fvideo.sina.com.cn%2F&" + ran + "&r=video.sina.com.cn&v=4.1.42.51&p=i&k=" + encode);
	console.log(param);
	var player = document.getElementsByClassName("player")[0];
	player.setAttribute("src", "https://static-s.bilibili.com/play.swf?" + param);
	console.log("Player Changed");
}
