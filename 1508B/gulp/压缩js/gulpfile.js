var gulp = require("gulp")

var uglifyJS = require("gulp-uglify");


gulp.task("minjs",function(){
   gulp.src('./*.js')
       .pipe(uglifyJS())
       .pipe(gulp.dest("./minjs/"))
})
gulp.task('default',["minjs"])