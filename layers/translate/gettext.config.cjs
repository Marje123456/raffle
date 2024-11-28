module.exports = {
  input: {
    path: "../../",
    include: [
      "components/**/*.*",
      "layouts/**/*.*",
      "pages/**/*.*",
      "composables/**/*.*",
      "layers/**/components/**/*.*",
      "layers/**/layouts/**/*.*",
      "layers/**/pages/**/*.*",
      "layers/**/composables/**/*.*",
      "app.vue",
    ],
  },

  output: {
    locales: ["en", "es"],
    path: "./language",
  },
};
