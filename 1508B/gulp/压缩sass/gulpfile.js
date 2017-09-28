var gulp = require("gulp");
var gulpSass = require("gulp-sass");

gulp.task("com",function(){
   gulp.src('./*.sass')
       .pipe(gulpSass())
       .pipe(gulp.dest("./minSass"))
})
gulp.task('default',["com"])