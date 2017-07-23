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
		location.href = "https://poloniex.com";
	});
	$('#linktwo').click(function(){
		location.href = "https://www.bithumb.com";
	});
	$('#linkthree').click(function(){
		location.href = "https://coinone.co.kr";
	});
	$('#linkfour').click(function(){
		location.href = "https://www.okcoin.com";
	});
	$('#linkfive').click(function(){
		location.href = "https://bitflyer.jp/";
	});
	$('#linksix').click(function(){
		location.href = "https://www.bitfinex.com/";
	});
	$('#linkseven').click(function(){
		location.href = "https://www.gdax.com";
	});
	$('#linkeight').click(function(){
		location.href = "www.korbit.co.kr/";
	});
	$('#linknine').click(function(){
		location.href = "https://www.huobi.com";
	});
	$('#linkten').click(function(){
		location.href = "https://gemini.com";
	});
}

function DashboardEvent(delay){
	var delay = delay;
	var Poloniex_BTC = Poloniex_ETH = Poloniex_XRP = Poloniex_ETC = Poloniex_LTC = Poloniex_DASH = 0.0;
	var Bithumb_BTC = Bithumb_eth = Bithumb_xrp = Bithumb_etc = Bithumb_LTC = Bithumb_DASH = 0.0;
	var coinone_btc = coinone_eth = coinone_xrp = coinone_etc = coinone_LTC = coinone_DASH = 0.0;
	var OKCoin_BTC = OKCoin_eth = OKCoin_xrp = OKCoin_etc = OKCoin_LTC = OKCoin_DASH = 0.0;
	var bitFlyer_BTC = bitFlyer_eth = bitFlyer_xrp = bitFlyer_etc = bitFlyer_LTC = bitFlyer_DASH = 0.0;
	var Bitfinex_BTC = Bitfinex_eth = Bitfinex_xrp = Bitfinex_etc = Bitfinex_LTC = Bitfinex_DASH = 0.0;
	var GDAX_BTC = GDAX_eth = GDAX_xrp = GDAX_etc = GDAX_LTC = GDAX_DASH = GDAX_VOULME = 0.0;
	var Korbit_BTC = Korbit_eth = Korbit_xrp = Korbit_etc = Korbit_LTC = Korbit_DASH =0.0;
	var Huobi_BTC = Huobi_eth = Huobi_xrp = Huobi_etc = Huobi_LTC = Huobi_DASH = 0.0;
	var Gemini_BTC = Gemini_eth = Gemini_xrp = Gemini_etc = Gemini_LTC = Gemini_DASH =0.0;
	var loopTimer = window.setInterval(function(){
		// Poloniex_BTC = Coinone_getprice("Poloniex_BTC", 'https://api.coinone.co.kr/ticker?currency=btc');
		// Poloniex_ETH = Coinone_getprice("Poloniex_ETH", 'https://api.coinone.co.kr/ticker?currency=eth');
		// Poloniex_XRP = Coinone_getprice("Poloniex_XRP", 'https://api.coinone.co.kr/ticker?currency=xrp');
		// Poloniex_ETC = Coinone_getprice("Poloniex_ETC", 'https://api.coinone.co.kr/ticker?currency=etc');
		// Poloniex_LTC = Coinone_getprice("Poloniex_LTC");
		// Poloniex_DASH = Coinone_getprice("Poloniex_DASH");
	
		Bithumb_BTC = bithumb_getprice("Bithumb_BTC", 'https://api.bithumb.com/public/ticker?currency=btc');
		Bithumb_ETH = bithumb_getprice("Bithumb_ETH", 'https://api.bithumb.com/public/ticker?currency=eth');
		Bithumb_XRP = bithumb_getprice("Bithumb_XRP", 'https://api.bithumb.com/public/ticker?currency=xrp');
		Bithumb_ETC = bithumb_getprice("Bithumb_ETC", 'https://api.bithumb.com/public/ticker?currency=etc');
		Bithumb_LTC = bithumb_getprice("Bithumb_LTC", 'https://api.bithumb.com/public/ticker?currency=ltc');
		Bithumb_DASH = bithumb_getprice("Bithumb_DASH", 'https://api.bithumb.com/public/ticker?currency=dash');
		
		Coinone_BTC = Coinone_getprice("Coinone_BTC", 'https://api.coinone.co.kr/ticker?currency=btc');
		Coinone_ETH = Coinone_getprice("Coinone_ETH", 'https://api.coinone.co.kr/ticker?currency=eth');
		Coinone_XRP = Coinone_getprice("Coinone_XRP", 'https://api.coinone.co.kr/ticker?currency=xrp');
		Coinone_ETC = Coinone_getprice("Coinone_ETC", 'https://api.coinone.co.kr/ticker?currency=etc');
		Coinone_LTC = Coinone_getprice("Coinone_LTC");
		Coinone_DASH = Coinone_getprice("Coinone_DASH");
	}, delay);
}

function setDashboardEvent(id, value){
	if(value == '' || value == null || value == undefined || value == 0 || value == NaN){
		$("#"+id).html("X");
		return;
	}
	
	$("#"+id).html(numberWithCommas(value) + "KRW");
}

function bithumb_getprice(id, api){
	var id = id;
	var api = api;
	var price;
	if(api == '' || api == null || api == undefined || api == 0 || api == NaN){
		setDashboardEvent(id, price);
		return 0;
	}

	$.ajax({
		url:api,
		dataType:'json',
		success:function(data){
			price = data["closing_price"];
			setDashboardEvent(id, price, type);
		}
	});
	return price;
}

function Coinone_getprice(id, api){
	var id = id;
	var api = api;
	var price;
	var type = 'V';
	if(api == '' || api == null || api == undefined || api == 0 || api == NaN){
		setDashboardEvent(id, price);
		return 0;
	}
	$.ajax({
		url:api,
		dataType:'json',
		success:function(data){
			price = data["last"];
			setDashboardEvent(id, price, type);		
		}
	});
	return price;
}

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function comma(num){
    var len, point, str; 
       
    num = num + ""; 
    point = num.length % 3 ;
    len = num.length; 
   
    str = num.substring(0, point); 
    while (point < len) { 
        if (str != "") str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    } 
     
    return str;
 
}

//main
$(document).ready(function(){
	LogoEvent();
	MenuEvent();
	ExchangeEvent();
	DashboardEvent(1000);		//1초
});
