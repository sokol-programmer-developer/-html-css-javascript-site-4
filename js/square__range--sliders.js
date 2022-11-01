const squareRangeSlider = document.getElementById('square__range-slider');

if (squareRangeSlider) {
  noUiSlider.create(squareRangeSlider, {
    start: [1, 200],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [200],
    },
  });

  const input0 = document.getElementById('input__square-0');
  const input1 = document.getElementById('input__square-1');
  const inputs = [input0, input1];

  squareRangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setSquareRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    squareRangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setSquareRangeSlider(index, e.currentTarget.value);
    });
  });
}
