document.querySelectorAll('.bts').forEach(button => {
    button.addEventListener('click', () => {
      const liElement = button.closest('li');
      const ansDiv = liElement.querySelector('.ans');
      const svgElement = button.querySelector('svg');
      const isVisible = ansDiv.classList.contains('show');

      if (isVisible) {
        ansDiv.style.height = `${ansDiv.scrollHeight}px`; // Set the height to the current height
        requestAnimationFrame(() => {
          ansDiv.style.height = '0'; // Then animate to height 0
          ansDiv.style.opacity = '0';
        });
      } else {
        ansDiv.style.height = '0';
        ansDiv.style.opacity = '0';
        ansDiv.classList.add('show');
        requestAnimationFrame(() => {
          ansDiv.style.height = `${ansDiv.scrollHeight}px`; // Animate to the actual height
          ansDiv.style.opacity = '1';
        });
      }

      svgElement.classList.toggle('rotate', !isVisible);

      ansDiv.addEventListener('transitionend', function handler() {
        if (!isVisible) {
          ansDiv.style.height = 'auto'; // Ensure height is auto after animation
        } else {
          ansDiv.classList.remove('show'); // Remove class after collapsing
        }
        ansDiv.removeEventListener('transitionend', handler);
      });
    });
  });