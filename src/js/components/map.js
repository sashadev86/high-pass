ymaps.ready(['Panel']).then(function () {
  var map = new ymaps.Map("map", {
    center: [55.762809, 37.624040],
    zoom: 14,
    controls: []
  });
  // Создадим контент для меток.
  var office = '<h3 style="margin-bottom: 5px; margin-left: 10px; font-family: TT Firs Neue; font-style: normal; font-weight: 400; font-size: 24px; line-height: 22px; color: var(--white-color);">Студия «High pass»</h3>' +
    '<p style="max-width: 300px; margin-bottom: 3px; margin-left: 10px; font-family: Roboto; font-style: normal; font-weight: 400; font-size: 16px; line-height: 28px; color: var(--white-color);">107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82</p>' +
    '<a href="tel:+749542423532" style="margin-left: 14px; font-family: TT Firs Neue; font-style: normal; font-weight: 400; font-size: 16px; line-height: 21px; display: flex; align-items: center; color: var(--burnt-orange-color);"><img src="img/telMap.svg" alt="Телефонная трубка">+7 495 424-23-532</a>';
  // Создадим и добавим панель на карту.
  var panel = new ymaps.Panel();
  map.controls.add(panel, {
    float: 'left'
  });
  // Создадим коллекцию геообъектов.
  var collection = new ymaps.GeoObjectCollection(null, {
    // Запретим появление балуна.
    hasBalloon: false,
    iconLayout: 'default#image',
    iconImageHref: 'img/dot.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [7, 5],
  });
  // Добавим геообъекты в коллекцию.
  collection
  .add(new ymaps.Placemark([55.769651, 37.639383], {
    balloonContent: office
  }));
  // Добавим коллекцию на карту.
  map.geoObjects.add(collection);
  // Подпишемся на событие клика по коллекции.
  collection.events.add('click', function (e) {
    // Получим ссылку на геообъект, по которому кликнул пользователь.
    var target = e.get('target');
    // Зададим контент боковой панели.
    panel.setContent(target.properties.get('balloonContent'));
    // Переместим центр карты по координатам метки с учётом заданных отступов.
    // map.panTo(target.geometry.getCoordinates(), { useMapMargin: true });
  });
});

