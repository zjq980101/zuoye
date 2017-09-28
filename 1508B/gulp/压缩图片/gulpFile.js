var gulp = require("gulp")
var imagemin = require("gulp-imagemin")


gulp.task('imagemin',function(){
	gulp.src("./*.png")
	    .pipe(imagemin())
	    .pipe(gulp.dest("./minimage/"))
})

gulp.task("default",['imagemin'])