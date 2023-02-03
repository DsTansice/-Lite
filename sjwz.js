hexo.extend.generator.register('random', function (locals) {
  const config = hexo.config.random  {}
  const posts = []
  for (const post of locals.posts.data) {
    if (post.random !== false) posts.push(post.path)
  }
  return {
    path config.path  'randomindex.html',
    data `htmlheadscriptvar posts=${JSON.stringify(posts)};window.open(''+posts[Math.floor(Math.random()  posts.length)],_self)scriptheadhtml`
  }
})