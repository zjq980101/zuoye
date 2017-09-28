var gulp = require("gulp")
var concat = require("gulp-concat")
gulp.task('concat',function(){
	gulp.src(['./a.txt','./b.txt'])
	    .pipe(concat("c.txt"))   //dest是一个目录
	    .pipe(gulp.dest('./'))
})
gulp.task('default',["concat"]);