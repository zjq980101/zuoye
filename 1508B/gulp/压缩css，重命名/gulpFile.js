var gulp = require("gulp");
var minCss = require("gulp-clean-css")
var rename = require("gulp-rename")

gulp.task('minAndRenameCss',function(){
   gulp.src('./*.css')
       .pipe(minCss())
       .pipe(rename("style.min.css"))
       .pipe(gulp.dest('./mincss/'))
})

gulp.task('default',['minAndRenameCss'])