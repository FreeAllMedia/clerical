import gulp from "gulp";
import paths from "../paths.json";

gulp.task("test-watch", ["suppress-errors", "test-local"], () => {
  gulp.watch([
    paths.source.lib,
    paths.source.spec,
    paths.source.specAssets
  ], ["test-local"]);
});
