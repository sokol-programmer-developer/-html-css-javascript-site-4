const btnFilter = document.querySelector('.btn-info--filter');
const filterSection = document.querySelector('.section__filters');
const toggleFilter = function () {
  filterSection.classList.toggle('visibility');
};

btnFilter.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleFilter();
});

document.addEventListener('click', function (e) {
  const target_Filter = e.target;
  const its_filterSection = target_Filter == filterSection || filterSection.contains(target_Filter);
  const its_btnFilter = target_Filter == btnFilter;
  const filterSection_is_active = filterSection.classList.contains('visibility');

  if (!its_filterSection && !its_btnFilter && filterSection_is_active) {
    toggleFilter();
  }
});
