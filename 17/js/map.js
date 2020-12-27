ymaps.ready(function () {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.938635, 30.323118],
      zoom: 18,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myMap.behaviors
    // Отключаем часть включенных по умолчанию поведений:
    //  - drag - перемещение карты при нажатой левой кнопки мыши;
    //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
    .disable("scrollZoom")
    // Включаем линейку.
    .enable("ruler");

  myMap.options.set("scrollZoomSpeed", 0.5);

  // Создаём макет содержимого.
  (MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  )),
    (myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "images/myIcon.gif",
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    )),
    (myPlacemarkWithContent = new ymaps.Placemark(
      [59.938635, 30.323118],
      {
        hintContent: "Собственный значок метки с контентом",
        balloonContent: "А эта — новогодняя",
        iconContent: "12",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "../img/map-pin.svg",
        // Размеры метки.
        iconImageSize: [113, 106],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    ));

  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
