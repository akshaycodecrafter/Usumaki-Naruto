// Sticky nav border on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? '' : 'flex';
    links.style.position = open ? '' : 'absolute';
    links.style.top = open ? '' : '64px';
    links.style.left = open ? '' : '0';
    links.style.right = open ? '' : '0';
    links.style.flexDirection = open ? '' : 'column';
    links.style.background = open ? '' : 'var(--background)';
    links.style.padding = open ? '' : '24px';
    links.style.borderBottom = open ? '' : '1px solid var(--border)';
  });

  // Scroll reveal via IntersectionObserver
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));