var body=$response.body.replace(/\u006D\u0065\u006D\u0062\u0065\u0072\u0054\u0079\u0070\u0065\u0022\u003A\u0030/g,'memberType":1').replace(/\u006D\u0065\u006D\u0062\u0065\u0072\u0044\u0061\u0074\u0065\u0022\u003A\u0022\u0031\u0039\u0037\u0030/g,'memberDate":"2029');$done({body:body});