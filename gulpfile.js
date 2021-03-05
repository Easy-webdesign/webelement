const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackFile = require('./webpack.config.js');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
// const { urlLoader } = require('gulp-url-loader');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('webpack', function() {
    return gulp.src('./src/js/app.js')
        .pipe(webpackStream(webpackFile), webpack)
        .pipe(gulp.dest('dist/'));
});

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
});



// outputStyle
// :nested
// :compact
// :expanded
// :compressed

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '', prefix: '' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());
});

// gulp.task('loader', () => {gulp
//   .src('src/**/*')
//   .pipe(urlLoader())
//   .pipe(gulp.dest('dist'))
// })



gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.scss", gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('webpack', 'watch', 'server', 'styles'));