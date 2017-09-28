var gulp = require("gulp")
var connect = require('gulp-connect')
var watch = require("gulp-watch")

gulp.task('httpServer',function(){
	connect.server({
    	port:8000,
    	livereload:true 
    })
})

gulp.task('刷新浏览器',function(){
	gulp.src('.')
	    .pipe(connect.reload());
})
//监听文件的内容变化

gulp.task('watch',function(){
   gulp.watch('./index.html',['刷新浏览器'])
})
gulp.task('default',["httpServer","watch"])