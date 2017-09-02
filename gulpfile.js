var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
  gulp.src('./css/style.scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
);