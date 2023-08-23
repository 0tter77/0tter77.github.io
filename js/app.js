'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});
(function($) {
    var areas = $('map[name="sample"] area');
    var coords = areas.map(function(i, area) { return [$(area).attr('coords').split(',')] });
    var image = $('img[usemap="#sample"]');
    var setup = function() {
      var ratio = image.width() / image[0].naturalWidth;
      coords.forEach(function(coord, i) {
        areas.eq(i).attr('coords', coord.map(function(c) { return Math.round(c * ratio) }).join(','));
      });
    };
    if (image[0].complete) {
      setup();
    } else {
      image.on('load', setup);
    }
    $(window).on('orientationchange resize', setup);
  })(Zepto);