const btnBanner = document.querySelector('.btn-info--catalog');
const bannerSection = document.querySelector('.widget__section ');
const toggleBanner = function () {
  bannerSection.classList.toggle('visible');
};

btnBanner.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleBanner();
});

document.addEventListener('click', function (e) {
  const target_Banner = e.target;
  const its_bannerSection = target_Banner == bannerSection || bannerSection.contains(target_Banner);
  const its_btnBanner = target_Banner == btnBanner;
  const bannerSection_is_active = bannerSection.classList.contains('visible');

  if (!its_bannerSection && !its_btnBanner && bannerSection_is_active) {
    toggleBanner();
  }
});
