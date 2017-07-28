import requests
import bs4
import os
import json

class Exchange():
    ex_name = ""
    homepage = ""
    request = ""
    jsonkey = { }
    
    def __init__(self, ex_name, address):
        self.ex_name = ex_name
        aelf.address = address
        
    def setup(self):
        request = request.get(url)
        if request.status_code != 200 and request.ok == True:
            return
        
    def setkey(self, key):
        self.jsonkey = key
        
class Coin(Exchange):
    coin_name = ""
    def __init__(self, ex_name, address, coin_name):
        super(Coin, self).__init__(ex_name, address)
        self.coin_name = coin_name

    def get_coinname(self):
        return coin_name

    def get_price(self, api):
        super().request = requests.get(api)
        super().setup()
        datas = super().request.json()
        price = datas[coin_name]["last"]
        return price
        
if __name__ == "__main__":
    poloniex_USDT_BTC = Coin("poloniex", "https://poloniex.com/", "USDT_BTC")
    poloniex_USDT_BTC.setkey(poloniex_USDT_BTC.get_coinname())
    poloniex_USDT_BTC.get_price("https://poloniex.com/public?command=returnTicker")
        
"""
xrp_ticker_url = "https://api.bithumb.com/public/ticker?currency=btc"

def getXrpPrice(url):
    
    request = requests.get(url);
    #요청 확인
    if request.status_code != 200 & request.ok == True:
        return
    
    datas = request.json() 
    price = datas["data"]["closing_price"]
    return price



if __name__ == "__main__":
    xrp_Price = getXrpPrice(xrp_ticker_url)
    print(xrp_Price)
"""
