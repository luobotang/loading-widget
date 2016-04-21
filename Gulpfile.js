var gulp = require('gulp')
var uglify = require('gulp-uglify')
var less = require('gulp-less')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var rename = require('gulp-rename')

gulp.task('js:build', function () {
	gulp.src('index.js')
		.pipe(uglify())
		.pipe(rename('loading-widget.min.js'))
		.pipe(gulp.dest('dist'))
})

gulp.task('css:build', function () {
	gulp.src('index.less')
		.pipe(less())
		.pipe(postcss([autoprefixer]))
		.pipe(rename('loading-widget.css'))
		.pipe(gulp.dest('dist'))
})

gulp.task('default', ['js:build', 'css:build'])