// https://github.com/tailwindlabs/tailwindcss-setup-examples/pull/97/commits/377beee15972251cc1ab9d265f8297ebbe52e45b?short_path=45c973b#diff-45c973b67eeb0061ff1a956d2857618e14f6811ec09dd83929f237621e6f8e69
module.exports = function (grunt) {
  grunt.config.set("postcss", {
    options: {
      map: true,
      processors: [require("tailwindcss")("./tailwind.config.js")],
    },
    dist: {
      expand: true,
      cwd: "assets/styles/tailwindcss",
      src: ["tailwind.css"],
      dest: ".tmp/public/styles",
      ext: ".css",
    },
  });

  grunt.loadNpmTasks("grunt-postcss");
};
