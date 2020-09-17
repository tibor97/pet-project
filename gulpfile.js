var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-uglifycss');

gulp.task('sass', function(){
  return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', gulp.series(['sass']));
 })