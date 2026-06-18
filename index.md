---
layout: home
---

<section class="project-carousel" aria-label="Featured projects">
  <h2 class="project-carousel__heading">Projects</h2>
  <div class="project-carousel__viewport">
    <button type="button" class="project-carousel__nav project-carousel__nav--prev" aria-label="Previous project" hidden>&lsaquo;</button>
    <ul class="project-carousel__track">
      {%- for project in site.data.projects -%}
      <li class="project-carousel__slide">
        <a class="project-card" href="{{ project.url }}"{% if project.external %} target="_blank" rel="noopener"{% endif %}>
          {%- if project.image -%}
          <span class="project-card__img" style="background-image:url('{{ project.image | relative_url }}')" role="img" aria-label="{{ project.title }} screenshot"></span>
          {%- endif -%}
          <span class="project-card__body">
            <span class="project-card__title">{{ project.title }}</span>
            <span class="project-card__desc">{{ project.description }}</span>
          </span>
        </a>
      </li>
      {%- endfor -%}
    </ul>
    <button type="button" class="project-carousel__nav project-carousel__nav--next" aria-label="Next project" hidden>&rsaquo;</button>
  </div>
</section>

<style>
.project-carousel { margin: 0 0 2.5rem; }
.project-carousel__heading { margin: 0 0 1rem; }
.project-carousel__viewport { position: relative; }
.project-carousel__track {
  list-style: none; margin: 0; padding: 0;
  display: flex; gap: 1rem;
  overflow-x: auto; scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; scrollbar-width: none;
}
.project-carousel__track::-webkit-scrollbar { display: none; }
.project-carousel__slide { flex: 0 0 100%; scroll-snap-align: start; }
@media (min-width: 700px) { .project-carousel__slide { flex-basis: calc(50% - 0.5rem); } }
.project-card {
  display: flex; flex-direction: column; height: 100%;
  border: 1px solid #e8e8e8; border-radius: 10px; overflow: hidden;
  text-decoration: none; color: inherit; background: #fff;
  transition: box-shadow .15s ease, transform .15s ease;
}
.project-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,.08); transform: translateY(-2px); text-decoration: none; }
.project-card__img { display: block; width: 100%; padding-top: 56%; background-size: cover; background-position: top center; background-color: #14181f; }
.project-card__body { display: block; padding: 1rem 1.1rem 1.2rem; }
.project-card__title { display: block; font-weight: 700; font-size: 1.15rem; margin-bottom: .35rem; }
.project-card__desc { display: block; font-size: .95rem; line-height: 1.45; color: #555; }
.project-carousel__nav {
  position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
  width: 2.4rem; height: 2.4rem; border-radius: 50%;
  border: 1px solid #e0e0e0; background: rgba(255,255,255,.95);
  font-size: 1.4rem; line-height: 1; cursor: pointer; color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
}
.project-carousel__nav--prev { left: -.6rem; }
.project-carousel__nav--next { right: -.6rem; }
.project-carousel__nav:hover { background: #fff; }
</style>

<script>
(function () {
  var track = document.querySelector('.project-carousel__track');
  if (!track) return;
  var slides = track.querySelectorAll('.project-carousel__slide');
  if (slides.length < 2) return;
  var prev = document.querySelector('.project-carousel__nav--prev');
  var next = document.querySelector('.project-carousel__nav--next');

  function step() {
    var slide = track.querySelector('.project-carousel__slide');
    return slide ? slide.getBoundingClientRect().width + 16 : track.clientWidth;
  }
  function update() {
    var max = track.scrollWidth - track.clientWidth - 1;
    prev.hidden = track.scrollLeft <= 0;
    next.hidden = track.scrollLeft >= max;
  }

  prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
  next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}());
</script>
