var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        browser: 'chrome'
    });
    browserSync.watch('src', browserSync.reload)
});

gulp.task('watch', ['serve'], function() {
	gulp.watch(['./src/js/*.js']);
}); 
