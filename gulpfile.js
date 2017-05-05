//引入gulp模块
//commonjs规范引用模块
var gulp = require('gulp');
var sass = require('gulp-sass');



//这里创建gulp任务
//用来编译sass文件
gulp.task('compileSass',function(){
	//先查找sass文件所在的位置
	gulp.src(['src/sass/common.scss','src/sass/home.scss'])
	//通过pipe放大导入到gulp的插件中实现编译sass
	.pipe(sass())

	//把编译后的文件输出
	.pipe(gulp.dest('src/css'))
});


//监听文件修改，执行相应任务
gulp.task('jsSass',function(){
	//监听sass文件，如果有修改,则编译
	gulp.watch('src/sass/*.scss',['compileSass'])
})

//用于js文件的压缩
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('compressJs',function(){
	gulp.src('src/js/*.js')

	//压缩
	.pipe(uglify())

	//重命名
	.pipe(rename({
		suffix:'.min';
	}))

	//输出
	.pipe(gulp.dest('src/js/'))

});