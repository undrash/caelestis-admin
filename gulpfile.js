var gulp = require('gulp');


gulp.task( "copy", function () {
    gulp.src( "./common/output.js" )
        .pipe( gulp.dest( "./build/js" ) );

    gulp.src( "./common/lib/**/*" )
        .pipe( gulp.dest( "./build/lib" ) );

    gulp.src( "./common/fonts/**/*" )
        .pipe( gulp.dest( "./build/fonts" ) );
});

gulp.task( "default", ["copy"], function () {
    console.info("Copy task executed.");
});