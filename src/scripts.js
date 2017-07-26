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

function DashboardEvent(delay1, delay2){
	var delay1 = delay1;
	var	delay2 = delay2;
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
	
		// Bithumb_BTC = bithumb_getprice("Bithumb_BTC", 'https://api.bithumb.com/public/ticker?currency=btc');
		// Bithumb_ETH = bithumb_getprice("Bithumb_ETH", 'https://api.bithumb.com/public/ticker?currency=eth');
		// Bithumb_XRP = bithumb_getprice("Bithumb_XRP", 'https://api.bithumb.com/public/ticker?currency=xrp');
		// Bithumb_ETC = bithumb_getprice("Bithumb_ETC", 'https://api.bithumb.com/public/ticker?currency=etc');
		// Bithumb_LTC = bithumb_getprice("Bithumb_LTC", 'https://api.bithumb.com/public/ticker?currency=ltc');
		// Bithumb_DASH = bithumb_getprice("Bithumb_DASH", 'https://api.bithumb.com/public/ticker?currency=dash');
		
		Coinone_BTC = Coinone_getprice("Coinone_BTC", 'https://api.coinone.co.kr/ticker?currency=btc');
		Coinone_ETH = Coinone_getprice("Coinone_ETH", 'https://api.coinone.co.kr/ticker?currency=eth');
		Coinone_XRP = Coinone_getprice("Coinone_XRP", 'https://api.coinone.co.kr/ticker?currency=xrp');
		Coinone_ETC = Coinone_getprice("Coinone_ETC", 'https://api.coinone.co.kr/ticker?currency=etc');
		Coinone_LTC = Coinone_getprice("Coinone_LTC");
		Coinone_DASH = Coinone_getprice("Coinone_DASH");
	}, delay1);
	var loopTimer2 = window.setInterval(function(){
		Korbit_BTC = Korbit_getprice("Korbit_BTC", 'https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw');
		Korbit_ETH = Korbit_getprice("Korbit_ETH", 'https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw');
		Korbit_XRP = Korbit_getprice("Korbit_XRP", 'https://api.korbit.co.kr/v1/ticker?currency_pair=xrp_krw');
		Korbit_ETC = Korbit_getprice("Korbit_ETC", 'https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw');
		Korbit_LTC = Korbit_getprice("Korbit_LTC");
		Korbit_DASH = Korbit_getprice("Korbit_DASH");
	}, delay2);
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
		setDashboardEvent_price(id, price);
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
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
		}
	});
	return price;
}

function bithumb_getprice(id, url){
	var id = id;
	var url = url;
	var price = 0.0;
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_price(id, price);
		return 0;
	}
	$.ajax({
		crossOrigin: true,
		origin:"https://api.bithumb.com/",
		url:url,
		dataType:'json',
		type: 'GET',
		success:function(data){
			price = data["data"]["closing_price"];
			setDashboardEvent_KRW_price(id, price);
			return price;
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
		}
	});
}

function Coinone_getprice(id, url){
	var id = id;
	var url = url;
	var price = 0.0;
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_KRW_price(id, price);
		return 0;
	}
	$.ajax({
		origin:"https://api.coinone.co.kr/",
		url:url,
		dataType:'json',
		type: 'GET',
		success:function(data){
			price = data["last"];
			setDashboardEvent_KRW_price(id, price);	
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return price;
		}
	});
}

function Korbit_getprice(id, url){
	var id = id;
	var url = url;
	var price = 0.0;
	if(url == '' || url == null || url == undefined || url == 0 || url == NaN){
		setDashboardEvent_KRW_price(id, price);
		return 0;
	}
	$.ajax({
		origin:"https://apidocs.korbit.co.kr/",
		crossOrigin: true,
		url:url,
		dataType:'json',
		type: 'GET',
		success:function(data){
			price = data["last"];
			setDashboardEvent_KRW_price(id, price);	
		},
		error: function(xhr) {
			setDashboardEvent_SC_status_Check(id);
			console.log('api실패 - ', xhr);
			return price;
		}
	});
}

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
	DashboardEvent(1000, 4000);		//1초
});
