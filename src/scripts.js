poloniex = "https://poloniex.com";
bithumb = "https://www.bithumb.com";
coinone = "https://coinone.co.kr";
okcoin = "https://www.okcoin.com";
bitflyer = "https://bitflyer.jp/";
bitfinex = "https://www.bitfinex.com/";
korbit = "www.korbit.co.kr/";
huobi = "https://www.huobi.com";
gimini = "https://gemini.com";

function LogoEvent(){
	$('#homepage_icon').click(function(){
		location.href = "./main.html";
	});
}

function MenuEvent(){
	$('.exchange').click(function(){
		location.href = "./exchange.html";
	});
	$('.transactional_information').click(function(){
		location.href = "./transactional_information.html";
	});
	$('.coin').click(function(){
		location.href = "./coin.html";
	});
	$('.chart').click(function(){
		location.href = "./chart.html";
	});
	$('.chat').click(function(){
		location.href = "./chat.html";
	});
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function ExchangeEvent(){
	$('#linkone').click(function(){
		location.href = poloniex;
	});
	$('#linktwo').click(function(){
		location.href = bithumb;
	});
	$('#linkthree').click(function(){
		location.href = coinone;
	});
	$('#linkfour').click(function(){
		location.href = okcoin;
	});
	$('#linkfive').click(function(){
		location.href = bitflyer;	
	});
	$('#linksix').click(function(){
		location.href = bitfinex;
	});
	$('#linkseven').click(function(){
		location.href = gdax;
	});
	$('#linkeight').click(function(){
		location.href = korbit;
	});
	$('#linknine').click(function(){
		location.href = huobi;
	});
	$('#linkten').click(function(){
		location.href = gemini;
	});
}

function DashboardEvent(delay){
	var delay = delay;
	var Poloniex_BTC = Poloniex_ETH = Poloniex_XRP = Poloniex_ETC = Poloniex_LTC = Poloniex_DASH = 0.0;
	var Bithumb_BTC = Bithumb_ETH = Bithumb_xrp = Bithumb_ETC = Bithumb_LTC = Bithumb_DASH = 0.0;
	var coinone_BTC = coinone_ETH = coinone_xrp = coinone_ETC = coinone_LTC = coinone_DASH = 0.0;
	var OKCoin_BTC = OKCoin_ETH = OKCoin_XRP = OKCoin_ETC = OKCoin_LTC = OKCoin_DASH = 0.0;
	var bitFlyer_BTC = bitFlyer_ETH = bitFlyer_XRP = bitFlyer_ETC = bitFlyer_LTC = bitFlyer_DASH = 0.0;
	var Bitfinex_BTC = Bitfinex_ETH = Bitfinex_XRP = Bitfinex_ETC = Bitfinex_LTC = Bitfinex_DASH = 0.0;
	var GDAX_BTC = GDAX_ETH = GDAX_XRP = GDAX_ETC = GDAX_LTC = GDAX_DASH = GDAX_VOULME = 0.0;
	var Korbit_BTC = Korbit_ETH = Korbit_XRP = Korbit_ETC = Korbit_LTC = Korbit_DASH =0.0;
	var Huobi_BTC = Huobi_ETH = Huobi_XRP = Huobi_ETC = Huobi_LTC = Huobi_DASH = 0.0;
	var Gemini_BTC = Gemini_ETH = Gemini_XRP = Gemini_ETC = Gemini_LTC = Gemini_DASH =0.0;
	var loopTimer1 = window.setInterval(function(){
		Poloniex_BTC = Poloniex_getprice("Poloniex_BTC", 'https://poloniex.com/public?command=returnTicker', 'USDT_BTC');
		Poloniex_ETH = Poloniex_getprice("Poloniex_ETH", 'https://poloniex.com/public?command=returnTicker', 'USDT_ETH');
		Poloniex_XRP = Poloniex_getprice("Poloniex_XRP", 'https://poloniex.com/public?command=returnTicker', 'USDT_XRP');
		Poloniex_ETC = Poloniex_getprice("Poloniex_ETC", 'https://poloniex.com/public?command=returnTicker', 'USDT_ETC');
		Poloniex_LTC = Poloniex_getprice("Poloniex_LTC", 'https://poloniex.com/public?command=returnTicker', 'USDT_LTC');
		Poloniex_DASH = Poloniex_getprice("Poloniex_DASH", 'https://poloniex.com/public?command=returnTicker', 'USDT_DASH');
	
		Bithumb_BTC = bithumb_getprice("Bithumb_BTC", 'https://api.bithumb.com/public/ticker?currency=BTC');
		Bithumb_ETH = bithumb_getprice("Bithumb_ETH", 'https://api.bithumb.com/public/ticker?currency=ETH');
		Bithumb_XRP = bithumb_getprice("Bithumb_XRP", 'https://api.bithumb.com/public/ticker?currency=XRP');
		Bithumb_ETC = bithumb_getprice("Bithumb_ETC", 'https://api.bithumb.com/public/ticker?currency=ETC');
		Bithumb_LTC = bithumb_getprice("Bithumb_LTC", 'https://api.bithumb.com/public/ticker?currency=LTC');
		Bithumb_DASH = bithumb_getprice("Bithumb_DASH", 'https://api.bithumb.com/public/ticker?currency=DASH');
		
		Coinone_BTC = Coinone_getprice("Coinone_BTC", 'https://api.coinone.co.kr/ticker?currency=btc');
		Coinone_ETH = Coinone_getprice("Coinone_ETH", 'https://api.coinone.co.kr/ticker?currency=eth');
		Coinone_XRP = Coinone_getprice("Coinone_XRP", 'https://api.coinone.co.kr/ticker?currency=xrp');
		Coinone_ETC = Coinone_getprice("Coinone_ETC", 'https://api.coinone.co.kr/ticker?currency=etc');
		Coinone_LTC = Coinone_getprice("Coinone_LTC", '');
		Coinone_DASH = Coinone_getprice("Coinone_DASH", '');
		
		OKCoin_BTC = OKCoin_getprice("OKCoin_BTC", 'https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd');
		OKCoin_ETH = OKCoin_getprice("OKCoin_ETH", 'https://www.okcoin.com/api/v1/ticker.do?symbol=eth_usd');
		OKCoin_XRP = OKCoin_getprice("OKCoin_XRP", '');
		OKCoin_ETC = OKCoin_getprice("OKCoin_ETC", 'https://www.okcoin.com/api/v1/ticker.do?symbol=etc_usd');
		OKCoin_LTC = OKCoin_getprice("OKCoin_LTC", 'https://www.okcoin.com/api/v1/ticker.do?symbol=ltc_usd');
		OKCoin_DASH = OKCoin_getprice("OKCoin_DASH", '');
		
		bitFlyer_BTC = bitFlyer_getprice("bitFlyer_BTC", 'https://api.bitflyer.jp/v1/ticker?productcode=btc_jpy');
		bitFlyer_ETH = bitFlyer_getprice("bitFlyer_ETH", 'https://api.bitflyer.jp/v1/ticker?productcode=eth_jpy');
		bitFlyer_XRP = bitFlyer_getprice("bitFlyer_XRP", 'https://api.bitflyer.jp/v1/ticker?productcode=xrp_jpy');
		bitFlyer_ETC = bitFlyer_getprice("bitFlyer_ETC", 'https://api.bitflyer.jp/v1/ticker?productcode=etc_jpy');
		bitFlyer_LTC = bitFlyer_getprice("bitFlyer_LTC", 'https://api.bitflyer.jp/v1/ticker?productcode=ltc_jpy');
		bitFlyer_DASH = bitFlyer_getprice("bitFlyer_DASH", 'https://api.bitflyer.jp/v1/ticker?productcode=dash_jpy');
		
		Bitfinex_BTC = Bitfinex_getprice("Bitfinex_BTC", 'https://api.bitfinex.com/v1/pubticker/BTCUSD');
		Bitfinex_ETH = Bitfinex_getprice("Bitfinex_ETH", 'https://api.bitfinex.com/v1/pubticker/ETHUSD');
		Bitfinex_XRP = Bitfinex_getprice("Bitfinex_XRP", '');
		Bitfinex_ETC = Bitfinex_getprice("Bitfinex_ETC", 'https://api.bitfinex.com/v1/pubticker/ETCUSD');
		Bitfinex_LTC = Bitfinex_getprice("Bitfinex_LTC", 'https://api.bitfinex.com/v1/pubticker/LTCUSD');
		Bitfinex_DASH = Bitfinex_getprice("Bitfinex_DASH", '');
		
		Korbit_BTC = Korbit_getprice("Korbit_BTC", 'https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw');
		Korbit_ETH = Korbit_getprice("Korbit_ETH", 'https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw');
		Korbit_XRP = Korbit_getprice("Korbit_XRP", 'https://api.korbit.co.kr/v1/ticker?currency_pair=xrp_krw');
		Korbit_ETC = Korbit_getprice("Korbit_ETC", 'https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw');
		Korbit_LTC = Korbit_getprice("Korbit_LTC", '');
		Korbit_DASH = Korbit_getprice("Korbit_DASH", '');
		
	}, delay);
}

function setDashboardEvent_SC_status_Check(id){
	$("#"+id).html("Server Connection Fail!");
}

function setDashboardEvent_KRW_price(id, value){
	if(value == '' || value == null || value == undefined || value == 0 || value == NaN){
		$("#"+id).html("X");
		return;
	}
	$("#"+id).html(numberWithCommas(value) + "원");
}

function setDashboardEvent_USDT_price(id, value){
	if(value == '' || value == null || value == undefined || value == 0 || value == NaN){
		$("#"+id).html("X");
		return;
	}
	$("#"+id).html(numberWithCommas("$" + value.toFixed(3)));
}

function setDashboardEvent_JPY_price(id, value){
	if(value == '' || value == null || value == undefined || value == 0 || value == NaN){
		$("#"+id).html("X");
		return;
	}
	$("#"+id).html(numberWithCommas("¥" + value.toFixed(3)));
}

function setDashboardEvent_str(id, value){
	if(value == '' || value == null || value == undefined || value == 0 || value == NaN){
		$("#"+id).html("X");
		return;
	}
	$("#"+id).html("<b>환율 = " + value + "KRW</b>");
}

function Poloniex_getprice(id, url, cointype){
	var id = id;
	var url = url;
	var price = 0.0;
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_USDT_price(id, price);
		return 0;
	}
	$.ajax({
		origin:"https://poloniex.com/",
		url:url,
		dataType:'json',
		type: 'GET',
		success:function(data){
			price = parseFloat(data[cointype]["last"]);
			setDashboardEvent_USDT_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function bithumb_getprice(id, url){
	var data = { };
	var id = id;
	var url = url;
	var price = 0.0;
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_KRW_price(id, price);
		return 0;
	}
	
	$.ajax({
		crossOrigin: true, 
		url:url,
		dataType:'jsonp',
		data: data,
		success:function(data){
			var json = $.parseJSON(data);
			price = json["data"]["closing_price"];
			setDashboardEvent_KRW_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function Coinone_getprice(id, url){
	var id = id;
	var url = url;
	var price = 0.0;
	var data = { };
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_KRW_price(id, price);
		return 0;
	}
	
	$.ajax({
		origin:"https://api.coinone.co.kr/",
		url:url,
		dataType:'json',
		data: data,
		success:function(data){
			price = data["last"];
			setDashboardEvent_KRW_price(id, price);	
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function OKCoin_getprice(id , url){
	var id = id;
	var url = url;
	var price = 0.0;
	var data = { };
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_USDT_price(id, price);
		return 0;
	}
	$.ajax({
		crossOrigin: true,
		url:url,
		dataType:'jsonp',
		type: 'GET',
		data: data,
		success:function(data){
			var json = $.parseJSON(data);
			price = parseFloat(json["ticker"]["last"]);
			setDashboardEvent_USDT_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function bitFlyer_getprice(id , url){
	var id = id;
	var url = url;
	var price = 0.0;
	var data = { };
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_USDT_price(id, price);
		return 0;
	}
	$.ajax({
		crossOrigin: true,
		url:url,
		dataType:'jsonp',
		type: 'GET',
		data: data,
		success:function(data){
			var json = $.parseJSON(data);
			price = parseFloat(json["ltp"]);
			setDashboardEvent_JPY_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function Bitfinex_getprice(id, url){
	var id = id;
	var url = url;
	var price = 0.0;
	var data = { };
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_USDT_price(id, price);
		return 0;
	}
	$.ajax({
		crossOrigin: true,
		url:url,
		dataType:'jsonp',
		type: 'GET',
		data: data,
		success:function(data){
			var json = $.parseJSON(data);
			price = parseFloat(json["last_price"]);
			setDashboardEvent_USDT_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function Korbit_getprice(id, url){
	var id = id;
	var url = url;
	var price = 0.0;
	var data = { };
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_KRW_price(id, price);
		return 0;
	}
	
	$.ajax({
		crossOrigin: true,
		url:url,
		dataType:'jsonp',
		type: 'GET',
		data: data,
		success:function(data){
			var json = $.parseJSON(data);
			price = json["last"];
			setDashboardEvent_KRW_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return null;
		}
	});
}

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
https://api.bitfinex.com/v1/pubticker/Symbol
// function XdomainSetting(){
	// $.ajaxPrefilter('json', function(options, orig, jqXHR) {
		// return 'json';
	// });
// }
// function comma(num){
    // var len, point, str; 
    // num = num + ""; 
    // point = num.length % 3 ;
    // len = num.length; 
    // str = num.substring(0, point); 
    // while (point < len) { 
        // if (str != "") str += ","; 
        // str += num.substring(point, point + 3); 
        // point += 3; 
    // } 
    // return str;
 
// }

//main
$(document).ready(function(){
	LogoEvent();
	MenuEvent();
	ExchangeEvent();
	DashboardEvent(1000, 1000);		//1초
});
