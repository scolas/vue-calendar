module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pages: {
    index: {
      // entry for the page
      entry: 'src/pages/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    dashboard: {
      // entry for the page
      entry: 'src/pages/dashboard/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/dashboard.html
      filename: 'dashboard.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'dashboard Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'dashboard']
    },
    todo: {
      // entry for the page
      entry: 'src/pages/todo/main.js',
      // the source template
      template: 'public/todo.html',
      // output as dist/dashboard.html
      filename: 'todo.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'todo Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'todo']
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    subpage: 'src/pages/index/main.js'
  }
}


