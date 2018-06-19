var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    server = require('gulp-server-livereload');



  gulp.task('css', function() {
  	return gulp.src('assets/sass/*.scss')
  	.pipe(sourcemaps.init())
  	.pipe(sass({
  		includePaths: require('node-normalize-scss').includePaths
  	}))
  	.pipe(autoprefixer({
  		browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12'
  		],
  		cascade: true
  	}))
  	.pipe(sourcemaps.write('.'))
  	.pipe(gulp.dest('app/dist/css/'));
  });



  gulp.task('webserver', function(){
	gulp.src('app')
	.pipe(server({
		livereload:true,
		directoryListing:false,
		defaultFile:'send_page.php',
		open:true
	}));
});

  gulp.task('watch', function() {
	gulp.watch('assets/sass/*.*', ['css']);
});


 //  gulp.task('default', ['css', 'watch'], function() {

	// });
    gulp.task('default', ['css','webserver', 'watch'], function() {

    });


