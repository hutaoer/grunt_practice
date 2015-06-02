var gulp = require('gulp')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
gulp.task('js', function() {
    // 1. 找到文件
    gulp.src('src/**/*.js')
    // 2. 压缩文件
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    // 3. 另存压缩后的文件
    .pipe(gulp.dest('gulp_build'))
})

gulp.task('css', function() {
    gulp.src('src/**/*.css')
    .pipe(minifycss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('gulp_build'))
})


gulp.task('default', function() {
    gulp.run('js','css');
})