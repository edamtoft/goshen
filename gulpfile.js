const gulp = require("gulp");
const sass = require("gulp-sass");


gulp.task("default", () => gulp.src(["_styles/**/*.scss", "!_styles/**/_*.scss"])
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(gulp.dest("_includes/styles")));