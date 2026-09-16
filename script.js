document.addEventListener('DOMContentLoaded', () => {

  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animasi cuma sekali
      }
    });
  }, {
    threshold: 0.2
  });

  timelineItems.forEach(item => observer.observe(item));

});

document.addEventListener('DOMContentLoaded', () => {

  // Konfirmasi untuk GitHub
  const githubLink = document.querySelector('.github-link');
  if (githubLink) {
    githubLink.addEventListener('click', (e) => {
      const yakin = window.confirm('Anda akan diarahkan ke GitHub saya. Lanjutkan?');
      if (!yakin) e.preventDefault();
    });
  }

  // Konfirmasi untuk Email
  const emailLink = document.querySelector('.email-link');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      const yakin = window.confirm('Anda akan membuka aplikasi email untuk mengirim pesan. Lanjutkan?');
      if (!yakin) e.preventDefault();
    });
  }

  // Konfirmasi untuk WhatsApp
  const waLink = document.querySelector('.wa-link');
  if (waLink) {
    waLink.addEventListener('click', (e) => {
      const yakin = window.confirm('Anda akan diarahkan ke WhatsApp saya. Lanjutkan?');
      if (!yakin) e.preventDefault();
    });
  }

});