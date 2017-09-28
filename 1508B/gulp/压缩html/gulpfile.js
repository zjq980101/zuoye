var gulp = require("gulp");
var minhtml = require("gulp-htmlmin");


gulp.task("minhtml",function(){
	gulp.src("./index.html")
	    .pipe(minhtml({
	    	removeComments:true,
	    	collapseWhitespace:true,
	    	minifyCSS:true,
	    	minifyJS:true
	    }))
	    .pipe(gulp.dest('./minhtml/'))
})
gulp.task("default",["minhtml"])