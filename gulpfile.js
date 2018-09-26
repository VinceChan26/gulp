let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let rename = require("gulp-rename");

gulp.task('cssBuilder', () => {
return gulp.src(['./css/*.css', './css/*.css'])
  .pipe(concat('bundles.css'))
  .pipe(cleanCSS())
  .pipe(rename(function(path) {
    path.basename += ".min";
    path.extname = ".css";
  }))
  .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('JSuglify', function() {
  return gulp.src(['./js/*.js'])
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += ".min";
      path.extname = ".js";
    }))
    .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('uglify-concat', function() {
  return gulp.src(['./js/*.js'])
    .pipe(concat('bundles.js'))
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += ".min";
      path.extname = ".js";
    }))
    .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('default', ['cssBuilder', 'JSuglify', 'uglify-concat']);