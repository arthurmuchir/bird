var gulp = require('gulp');

gulp.task('build', ['clean'], function() {
	gulp.start('postbuild');
});

gulp.task('postbuild', ['css', 'copy', 'librairies', 'browserify', 'lint'], function() {
	process.exit();
});
