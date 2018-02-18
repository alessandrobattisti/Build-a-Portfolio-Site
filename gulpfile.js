var gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('images', function () {
  return gulp.src('original_images/*.{png,jpg,jpeg,tiff,tif,TIF}')
    .pipe(responsive({
          '*.{png,jpg,jpeg,tiff,tif,TIF}': [
              {
                width: 600,
                rename: {
                  suffix: '-600px',
                  extname: '.jpg',
                },
              }, {
                width: 400,
                rename: {
                  suffix: '-400px',
                  extname: '.jpg',
                },
              },{
                width: 1200,
                rename: {
                  suffix: '-1200px',
                  extname: '.jpg',
                },
              },
          ],
      },
      {
          quality: 80,
          progressive: true,
          withMetadata: false,
          errorOnEnlargement: false,
      }))
    .pipe(gulp.dest('img'));
});
