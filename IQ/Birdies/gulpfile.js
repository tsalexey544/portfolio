const gulp = require('gulp'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      gulpIf = require('gulp-if'),
      useref = require('gulp-useref'),
      browserSync = require('browser-sync').create(),
      replace = require('gulp-replace'),
      fs = require('fs');

//compile scss into css
function style() {
  //1.where is my scss
  return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('./dist/assets/css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}

//compile scss into css
function html_task() {

  return gulp.src('*.html')
    .pipe(replace(/<link href="styles.css"[^>]*>/, function(s) {
        var style = fs.readFileSync('dist/assets/css/styles.css', 'utf8');
        return '<style>\n' + style + '\n</style>';
    }))
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))

  // //1.where is my scss
  // return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
  // //2. pass that file through sass compiler
  // .pipe(sass().on('error',sass.logError))
  // //3. where do I save the compiled css file
  // .pipe(gulp.dest('./library/css'))
  // //4. stream change to all browsers
  // .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "dist",
      index: ""
    }
  });

  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./src/scss/**/*.scss', html_task);
  gulp.watch('./src/scss/**/*.scss', html_task).on('change', browserSync.reload);
  gulp.watch('./*.html', html_task).on('change', browserSync.reload);
  gulp.watch('./js/**/*.js', html_task).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
