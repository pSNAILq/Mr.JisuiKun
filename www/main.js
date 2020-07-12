// This is a JavaScript file

 // Page init event
    document.addEventListener('init', function(event) {
      var page = event.target;

      if (page.matches('#stock-page')) {

        // page.querySelector('#push-button').onclick = function() {
        //   document.querySelector('#navigator').pushPage('page2.html');
        // };
        // page.querySelector('#detal0').onclick = function() {
        //   document.querySelector('#navigator').pushPage('detail.html');
        // };
        page.querySelector('#add').onclick = function() {
          document.querySelector('#navigator').pushPage('add.html');
        };
        page.querySelector(".item").onclick = function() {
          document.querySelector('#navigator').pushPage('detail.html');
        };

      } else if (page.matches('#second-page')) {

        page.querySelector('#pop-button').onclick = function() {
          document.querySelector('#navigator').popPage();
        };

      }
    });

    if (ons.platform.isIPhoneX()) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }