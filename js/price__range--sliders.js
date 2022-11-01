const priceRangeSlider = document.getElementById('price__range-slider');

if (priceRangeSlider) {
  noUiSlider.create(priceRangeSlider, {
    start: [1, 9999999],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [9999999],
    },
  });

  const input0 = document.getElementById('input__price-0');
  const input1 = document.getElementById('input__price-1');
  const inputs = [input0, input1];

  priceRangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setPriceRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    priceRangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setPriceRangeSlider(index, e.currentTarget.value);
    });
  });
}
