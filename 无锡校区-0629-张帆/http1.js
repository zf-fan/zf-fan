/**
 * Created by Administrator on 2017/6/29 0029.
 */
var http = require("http");
var fs = require("fs");

//if语句书写
//http.createServer(function (req, res) {
//    console.log(req.url);
//    //处理/的请求
//    if (req.url == "/") {
//        fs.readFile("index.html", "utf-8", function (err, data) {
//            if (err) {
//                console.log("读取失败");
//                console.log(err);
//            } else {
//                res.writeHead(200, {"content-type": "text/html;charset:utf8"});
//                res.end(data);//发送数据
//            }
//        })
//    } else if (req.url == "/index2.html") {
//        fs.readFile("index2.html", "utf-8", function (err, data) {
//            if (err) {
//                console.log("读取失败");
//                console.log(err);
//            } else {
//                res.writeHead(200, {"content-type": "text/html;charset:utf8"});
//                res.end(data);//发送数据
//            }
//        })
//    } else if (req.url == "/index.css") {
//        fs.readFile("index.css", "utf-8", function (err, data) {
//            if (err) {
//                console.log("读取失败");
//                console.log(err);
//            } else {
//                res.writeHead(200, {"content-type": "text/css;charset:utf8"});
//                res.end(data);//发送数据
//            }
//        })
//    }else if (req.url == "/index.js") {
//        fs.readFile("index.js", "utf-8", function (err, data) {
//            if (err) {
//                console.log("读取失败");
//                console.log(err);
//            } else {
//                res.writeHead(200, {"content-type": "text/javascript;charset:utf8"});
//                res.end(data);//发送数据
//            }
//        })
//    }else if (req.url == "/1.jpg") {
//        fs.readFile("1.jpg", function (err, data) {
//            if (err) {
//                console.log("读取失败");
//                console.log(err);
//            } else {
//                res.writeHead(200, {"content-type": "image/jpg"});
//                res.end(data);//发送数据
//            }
//        })
//    }
//
//}).listen(3000);


//switch书写
http.createServer(function(req,res){
    var url=req.url;
    switch (url) {
        case "/":
            fs.readFile("index.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset:utf8"});
                    res.end(data);//发送数据
                }
            });
            break;
        case "/index2.html":
            fs.readFile("index2.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset:utf8"});
                    res.end(data);//发送数据
                }
            });
            break;
        case "/index.css":
            fs.readFile("index.css", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/css;charset:utf8"});
                    res.end(data);//发送数据
                }
            });
            break;
        case "/index.js":
            fs.readFile("index.js", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/javascript;charset:utf8"});
                    res.end(data);//发送数据
                }
            });
            break;
        case "/1.jpg":
            fs.readFile("02.jpg", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "image/jpg"});
                    res.end(data);//发送数据
                }
            });
            break;
        default:
            res.end("404 not found")
            break;
    }
}).listen(3000);
