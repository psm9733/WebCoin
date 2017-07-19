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
	$('#one').click(function(){
		location.href = "https://poloniex.com";
	});
	$('#two').click(function(){
		location.href = "https://www.bithumb.com";
	});
	$('#three').click(function(){
		location.href = "https://coinone.co.kr";
	});
	$('#four').click(function(){
		location.href = "https://www.okcoin.com";
	});
	$('#five').click(function(){
		location.href = "https://bitflyer.jp/";
	});
	$('#six').click(function(){
		location.href = "https://www.bitfinex.com/";
	});
	$('#seven').click(function(){
		location.href = "https://www.gdax.com";
	});
	$('#eight').click(function(){
		location.href = "www.korbit.co.kr/";
	});
	$('#nine').click(function(){
		location.href = "https://www.huobi.com";
	});
	$('#ten').click(function(){
		location.href = "https://gemini.com";
	});
}

function DashboardEvent(delay){
	var delay = delay;
	var loopTimer = window.setInterval(function(){
		$.getJSON("https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw", function(data){
			$.each(result, function(i, field){
				$("div").append(field + " ");
			});
		});
	}, delay);
}


//main
$(document).ready(function(){
	LogoEvent();
	MenuEvent();
	ExchangeEvent();
	DashboardEvent(1000);		//1초
});
