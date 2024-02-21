function FindProxyForURL(url, host) {
// Your proxy server name and port

  var proxy_yes = "PROXY proxylb.schoolsbroadband.net:31969";
  var proxy_no = "DIRECT";

 if(dnsResolve("proxylb.schoolsbroadband.net") == "10.129.96.50")
    return proxy_no;
 else
    return proxy_yes;
}