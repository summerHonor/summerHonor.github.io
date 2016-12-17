/**
 * Created by SWF
 */

var gulp = require('gulp');
var concat  =require('gulp-concat')
var uglify = require('gulp-uglify')
gulp.task('haha', function() {
    // 将你的默认的任务代码放在这

    // console.log('任务完成')
    //合并文件
    return gulp.src(['./app.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dest/'));
});

//压缩
gulp.task('ug',function () {
    
})