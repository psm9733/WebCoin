import requests
import bs4
import os
import json

xrp_ticker_url = "https://api.coinone.co.kr/ticker?currency=xrp"

def getXrpPrice(url):
    
    request = requests.get(url);
    #요청 확인
    if request.status_code != 200 & request.ok == True:
        return
    
    datas = request.json() 
    price = datas["last"]
    return price



if __name__ == "__main__":
    xrp_Price = getXrpPrice(xrp_ticker_url)
    print(xrp_Price)
