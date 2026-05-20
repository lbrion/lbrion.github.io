---
layout: page
title: Search
permalink: /search/
---

<input type="text" id="search-input" placeholder="Search posts…" autocomplete="off" style="width:100%;padding:0.5em;font-size:1em;box-sizing:border-box;margin-bottom:1em;">
<ul id="search-results"></ul>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js"></script>
<script>
(function () {
  var idx, posts;

  fetch('/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      posts = data;
      idx = lunr(function () {
        this.ref('url');
        this.field('title', { boost: 10 });
        this.field('content');
        data.forEach(function (doc) { this.add(doc); }, this);
      });
    });

  document.getElementById('search-input').addEventListener('input', function () {
    var q = this.value.trim();
    var el = document.getElementById('search-results');
    if (!q || !idx) { el.innerHTML = ''; return; }
    var results = idx.search(q);
    if (!results.length) { el.innerHTML = '<li>No results.</li>'; return; }
    el.innerHTML = results.map(function (r) {
      var p = posts.find(function (d) { return d.url === r.ref; });
      return '<li><a href="' + p.url + '">' + p.title + '</a><br><small>' + p.date + '</small></li>';
    }).join('');
  });
}());
</script>
