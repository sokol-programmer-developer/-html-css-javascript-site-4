const text = document.querySelectorAll('.widget__link');
const figure = document.querySelectorAll('.hidden__section');

text.forEach((s, i) => {
  s.addEventListener('mouseover', () => {
    figure[i].style.visibility = 'visible';
  });

  s.addEventListener('mouseout', () => {
    figure[i].style.visibility = 'hidden';
  });
});
