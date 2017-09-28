var gulp = require('gulp')
var webserver = require('gulp-webserver')
var urlTool = require('url')
var qs = require('qs')
var database = {
	goodslist:[
       {
       	 name:"铅笔",
       	 price:.2
       },
       {
       	name:"橡皮",
       	price:.5
       }
	],
	name:[
		"张三",
		"李四",
		"王五",
		"二狗子"

	],
	users:[
		{
	      userName:"zhangsan",
	      password:123456
		},{
	      userName:"lisi",
	      password:12345678
		}
    ]
}


function login(userName,password){

    var exist = false;

    var success = false;
    
    var users = database['users'];

    for(var i = 0,length = users.length ;i < length ; i++){

        if(userName ==  users[i].userName){
            exist = true;
            if(users[i].password == password){
                success = true;
            }
            break;
        }

    }

    return exist ? {success:success} : exist;
}


gulp.task("mockServer",function(){
	gulp.src('.')
	    .pipe(webserver({
	    	port:8800,
	    	middleware:function(req,res,next){
	    		res.setHeader('Access-Control-Allow-Origin','*');
                var method = req.method;

                var urlObj = urlTool.parse(req.url)

                var pathname = urlObj.pathname;

                var getParams = urlObj.query;
                console.log(urlObj)
                if(method == "GET"){
                   switch(pathname){
                      case "/goodslist":
                      res.setHeader("content-type","application/json;charset=utf-8")

                      res.write(JSON.stringify(database['goodslist']))

                      res.end();
                      break;
                      case "/name":
                      res.setHeader("content-type","application/json;charset=utf-8")

                      res.write(JSON.stringify(database['name']))

                      res.end();
                      break;
                      default:
                      res.setHeader("content-type","application/json;charset=utf-8")
                      res.end("没有这个路径");
                      break
                   }
                }else if(method == "POST"){
                   var postParams = "";
                   req.on('data',function(chunk){
                      postParams += chunk;
                   })
                   req.on('end',function(){
                   	  // console.log('接收完毕',postParams);
                   	  // console.log(typeof postParams);
                      
                      var postParamsObj = qs.parse(postParams);
                      console.log(postParamsObj)
                   	  // postParams.userName;
                   	  // postParams.password;
                   	  

                   	 
                      switch(pathname){
                      	case '/login':
                      	res.setHeader("content-type","application/json;charset=utf-8");

                   	    var exist = login(postParamsObj.userName,postParamsObj.password);

                   	     if(exist){
	                         if(exist.success){
                                var data = {
                                	message:'登录成功'
                                }
	                            res.write(JSON.stringify(data));
	                         }else{
	                   	  	    var error = {
                                	message:'密码错误'
                                }
	                   	  	    res.write(JSON.stringify(error));
                             }
	                   	  }else{
	                   	  	res.write('账号不存在')
	                   	  }
	                   	  res.end();

                      	break;
                      	case '/register':
                      	break;
                      	default:
                      	res.end();
                      	break;
                        
                      }

                   })
                }else if(method == "OPTIONS"){

                }
	    	}
	    }))
})

gulp.task('default',['mockServer'])
