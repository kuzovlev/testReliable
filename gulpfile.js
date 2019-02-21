let gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    notify = require("gulp-notify"),
    mincss = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(notify("Changed and compiled file: <%= file.relative %>!"));
});
gulp.task('mincss', function () {
   return gulp.src('css/style.css')
       .pipe(mincss())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('minified'))
       .pipe(notify('Minified to <%= file.relative %>!'));
});
gulp.task('uglify', function(){
   return gulp.src('js/js.js')
       .pipe(uglify())
       .pipe(gulp.dest('minified'))
       .pipe(notify('Minified JS'));
});
gulp.task('watch', function () {
    console.log("Watcher started");
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('css/**/*.css', gulp.series('mincss'));
    gulp.watch('js/**/*.js' , gulp.series('uglify'));
});
