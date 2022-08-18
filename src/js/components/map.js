ymaps.ready(['Panel']).then(function () {
  var map = new ymaps.Map("map", {
    center: [55.762090, 37.633095],
    zoom: 14,
    controls: []
  });
  // Создадим контент для меток.
  var office = '<h3 class="map__title">Студия «High pass»</h3> + <p class="map__text">107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82</p> + <a class="map__link" href="tel:+749542423532"><img src="img/telMap.svg" alt="Телефонная трубка">+7 495 424-23-532</a>';
  // Создадим и добавим панель на карту.
  var panel = new ymaps.Panel();
  map.controls.add(panel, {
    // float: 'left'
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

