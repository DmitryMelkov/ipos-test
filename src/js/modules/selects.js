export function selects() {
  const dropDown = document.querySelectorAll('.dropdown');

  const btnClick = document.querySelector('.intro__circle-btn');
  const form = document.getElementById('form');

  btnClick.addEventListener('click', () => {
    btnClick.classList.add('active');
    form.classList.add('active');
  });

  dropDown.forEach((dropDaownWrapper) => {
    const dropDownBtn = dropDaownWrapper.querySelector('.select__header');
    const dropDownList = dropDaownWrapper.querySelector('.intro__select-body');
    const dropDownItem = dropDownList.querySelectorAll('.select__item');
    const dropDownInput = dropDaownWrapper.querySelector('.intro__input-hidden');

    dropDownBtn.addEventListener('click', () => {
      dropDownList.classList.add('select-body--visible');
      dropDownBtn.classList.add('intro__select-header--active');
    });

    dropDownItem.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('select-body--visible');
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('intro__select-header--active');
        dropDownList.classList.remove('select-body--visible');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('intro__select-header--active');
        dropDownList.classList.remove('select-body--visible');
      }
    });
  });

  const finish = document.querySelector('.intro__finish');

  const render = (markCar, modelCar, yearCar, delivery) => {
    return `
    <div class="intro__finish-body">
    <div class="intro__finish-content">
    <span class="intro__finish-span">Вы выбрали: ${markCar.value}-${modelCar.value}</span>
    <span class="intro__finish-span">Год: ${yearCar.value}</span>
    <span class="intro__finish-span">Доставка: ${delivery.value}</span>
    <button class="intro__finish-btn btn-reset">Начать заново</button>
    </div>
    </div>
    `;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const markCar = form.querySelector('[name="mark-car"]');
    const modelCar = form.querySelector('[name="model-car"]');
    const yearCar = form.querySelector('[name="year-car"]');
    const delivery = form.querySelector('[name="delivery"]');

    const values = {
      markCar: markCar.value,
      modelCar: modelCar.value,
      yearCar: yearCar.value,
      delivery: delivery.value,
    };

    form.classList.remove('active');
    finish.innerHTML = render(markCar, modelCar, yearCar, delivery);
    finish.classList.add('active');

    console.log(values);

    const btnRestart = document.querySelector('.intro__finish-btn');

    btnRestart.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        finish.classList.remove('active');

        const circle = document.querySelector('.circle-js');
        circle.classList.remove('intro__circle');
        btnClick.classList.remove('active');

        const square1 = document.querySelector('.intro__square-js-1');
        square1.classList.remove('intro__square-1');
        const square2 = document.querySelector('.intro__square-js-2');
        square2.classList.remove('intro__square-2');
        const square3 = document.querySelector('.intro__square-js-3');
        square3.classList.remove('intro__square-3');
        const square4 = document.querySelector('.intro__square-js-4');
        square4.classList.remove('intro__square-4');

        void circle.offsetWidth;
        void square1.offsetWidth;
        void square2.offsetWidth;
        void square3.offsetWidth;
        void square4.offsetWidth;

        square1.classList.add('intro__square-1');
        square2.classList.add('intro__square-2');
        square3.classList.add('intro__square-3');
        square4.classList.add('intro__square-4');

        circle.classList.add('intro__circle');
      },
      false
    );
  });
}
