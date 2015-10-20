var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var connectPHP  = require('gulp-connect-php');

var paths = {
      php:['*.php'],
      css:['*.css']
    };

gulp.task('php', function(){
    gulp.src(paths.php)
    .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
    gulp.watch(paths.css).on('change', function () {
      browserSync.reload();
    });
    gulp.watch(paths.php).on('change', function () {
      browserSync.reload();
    });
});

gulp.task('php', function() {
  connectPHP.server({}, function (){
    browserSync({
      proxy: 'localhost:8000'
    });
  });
});

gulp.task('default', ['php', 'watcher']);
