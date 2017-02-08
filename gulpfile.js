var gulp = require('gulp');
var server = require('gulp-server-livereload');
var clean = require('gulp-dest-clean');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var css = require('gulp-csso');
var js = require('gulp-uglify');

//server
gulp.task('start', function() {
    gulp.src('app')
        .pipe(server({
        livereload: true,
        open: true
    }))
});

//images
gulp.task('images', function() {
    gulp.src('app/img/**/*')
        .pipe(clean('build/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});

//fonts
gulp.task('fonts', function() {
    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
});

//styles
gulp.task('style', function() {
    gulp.src('app/sass/*.+(sass|scss)')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 15 versions']
        }))
        .pipe(gulp.dest('app/css'))
});

//watch css
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.+(sass|scss)', ['style'])
});

//default
gulp.task('default', ['start', 'watch']);

//build
gulp.task('build', ['images', 'fonts'], function() {
    gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif("*.css", css()))
        .pipe(gulpif("*.js", js()))
        .pipe(gulp.dest('build'))
});