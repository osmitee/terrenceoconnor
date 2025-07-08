const wrapper = document.querySelector('.iphone-wrapper');

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const offsetX = (x - centerX) / centerX;
  const offsetY = (centerY - y) / centerY; 

  const maxRotate = 5;

  const rotateX = offsetY * maxRotate;
  const rotateY = offsetX * maxRotate;

  wrapper.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

wrapper.addEventListener('mouseleave', () => {
  wrapper.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
});

if (!window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('no-tilt');
  }
  