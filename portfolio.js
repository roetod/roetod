(function () {
  'use strict';

  /* 1) سال فوتر */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* 2) هایلایت لینک منو بر اساس بخشی که روی صفحه است */
  var links = document.querySelectorAll('.site-header nav a[href^="#"]');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = map[entry.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* 3) دکمه‌ی کپی ایمیل */
  var emailLink = document.getElementById('email-link');
  if (emailLink && navigator.clipboard) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy email address');
    emailLink.parentNode.appendChild(btn);

    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(emailLink.textContent.trim()).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
      }).catch(function () {
        btn.textContent = 'Copy failed';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
      });
    });
  }
})();
