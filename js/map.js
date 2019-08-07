document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyAOgdcnYspbhgXiRsb_RsP_a96B0DQiQ5c&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

      var map;
      function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(20.659698, -103.349609), zoom: 5.4});

        var iconName = "img/icon/";
        var icons = {
          natubaZonaNorte:{
            name: 'Natuba en Zona Noroeste',
            icon: iconName + 'natnoreste.png'
          },
          natubaZonaNoreste:{
            name: 'Natuba en Zona Noreste',
            icon: iconName + 'natnoroeste.png'
          },
          natubaOccidente: {
            name: 'Natuba en Zona Occidental',
            icon: iconName + 'naticon.png'
          },
          natubaZonaSureste:{
            name: 'Natuba en Zona Sureste',
            icon: iconName + 'natsureste.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(20.698176, -103.387046),
            type: 'natubaOccidente',
            information: '<b>Gaia</b>'
          },{
            position: new google.maps.LatLng(20.696256, -103.389965),
            type: 'natubaOccidente',
            information: '<b>El Merkader</b>'
          }, {
            position: new google.maps.LatLng(20.692709, -103.436469),
            type: 'natubaOccidente',
            information: '<b>Super Sol</b>'
          }, {
            position: new google.maps.LatLng(20.706899, -103.382067),
            type: 'natubaOccidente',
            information: '<b>Punto Yoga</b>'
          }, {
            position: new google.maps.LatLng(20.671944, -103.409997),
            type: 'natubaOccidente',
            information: '<b>Dhakatha Yoga</b>'
          }, {
            position: new google.maps.LatLng(20.678776, -103.369071),
            type: 'natubaOccidente',
            information: '<b>Super Wow</b>'
          }, {
            position: new google.maps.LatLng(20.673326, -103.365392),
            type: 'natubaOccidente',
            information: '<b>Abarrotes Providencia</b>'
          }, {
            position: new google.maps.LatLng(20.708493, -103.414648),
            type: 'natubaOccidente',
            information: '<b>Centro Médico Puerta de Hierro: Norte</b>'
          }, {
            position: new google.maps.LatLng(20.588751, -103.443574),
            type: 'natubaOccidente',
            information: '<b>Centro Médico Puerta de Hierro: Sur</b>'
          }, {
            position: new google.maps.LatLng(20.688041, -103.389487),
            type: 'natubaOccidente',
            information: '<b>Hospital San Javier</b>'
          }, {
            position: new google.maps.LatLng(20.617218, -103.420910),
            type: 'natubaOccidente',
            information: '<b>HP Inc. Las Fuentes</b>'
          }, {
            position: new google.maps.LatLng(20.636363, -103.408027),
            type: 'natubaOccidente',
            information: '<b>HP Inc. Guadalajara</b>'
          }, {
            position: new google.maps.LatLng(20.700863, -103.468760),
            type: 'natubaOccidente',
            information: '<b>Colegio Franco Mexicano</b>'
          }, {
            position: new google.maps.LatLng(20.672998, -103.368595),
            type: 'natubaOccidente',
            information: '<b>La Borra del Cafe Chapultepec</b>'
          }, {
            position: new google.maps.LatLng(20.674944, -103.392185),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Minerva</b>'
          }, {
            position: new google.maps.LatLng(20.750283, -103.420017),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Plaza Aleira</b>'
          }, {
            position: new google.maps.LatLng(20.712467, -103.409817),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Andares</b>'
          }, {
            position: new google.maps.LatLng(20.726578, -103.457546),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Solares</b>'
          }, {
            position: new google.maps.LatLng(20.675809, -103.407678),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Cámara de Comercio</b>'
          }, {
            position: new google.maps.LatLng(20.575461, -103.442106),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Nueva Galicia</b>'
          }, {
            position: new google.maps.LatLng(20.664843, -103.409159),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Chapalita / Guadalupe</b>'
          }, {
            position: new google.maps.LatLng(20.639368, -103.312239),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Tlaquepaque</b>'
          }, {
            position: new google.maps.LatLng(20.676947, -103.376021),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Hidalgo</b>'
          }, {
            position: new google.maps.LatLng(20.679788, -103.382555),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Citi Tower</b>'
          }, {
            position: new google.maps.LatLng(20.651693, -103.389901),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Faro</b>'
          }, {
            position: new google.maps.LatLng(20.709239, -103.405706),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Pabellón</b>'
          }, {
            position: new google.maps.LatLng(20.738218, -103.430498),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Av. Servidor Público</b>'
          }, {
            position: new google.maps.LatLng(20.649290, -103.322096),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Plaza Forum</b>'
          }, {
            position: new google.maps.LatLng(20.673775, -103.405152),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Gran Plaza</b>'
          }, {
            position: new google.maps.LatLng(20.618999, -103.249426),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Tonala</b>'
          }, {
            position: new google.maps.LatLng(20.678415, -103.456419),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café UVM</b>'
          }, {
            position: new google.maps.LatLng(20.676830, -103.413228),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Iconia</b>'
          }, {
            position: new google.maps.LatLng(20.684496, -103.441945),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Meridiano</b>'
          }, {
            position: new google.maps.LatLng(20.712478, -103.379182),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Plaza Patria</b>'
          }, {
            position: new google.maps.LatLng(20.739330, -103.362266),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Tabachines</b>'
          }, {
            position: new google.maps.LatLng(20.730870, -103.433139),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Superama</b>'
          }, {
            position: new google.maps.LatLng(20.809027, -102.776710),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Tepatitlan</b>'
          }, {
            position: new google.maps.LatLng(20.698800, -103.385899),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Madre de Dios</b>'
          }, {
            position: new google.maps.LatLng(20.663919, -103.448863),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Metropark</b>'
          }, {
            position: new google.maps.LatLng(20.672938, -103.368897),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Honey Market Chapultepec</b>'
          }, {
            position: new google.maps.LatLng(20.651670, -103.389904),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Honey Market Mind</b>'
          }, {
            position: new google.maps.LatLng(19.255050, -103.713989),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Colima</b>'
          }, {
            position: new google.maps.LatLng(28.646734, -106.115748),
            type: 'natubaZonaNoreste',
            information: '<b>La Borra Del Café Chihuahua</b>'
          }, {
            position: new google.maps.LatLng(20.585102, -100.402405),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Querétaro Tecnológico</b>'
          }, {
            position: new google.maps.LatLng(20.594516, -100.385346),
            type: 'natubaOccidente',
            information: '<b>Menos Kilos</b>'
          }, {
            position: new google.maps.LatLng(25.653191, -100.294380),
            type: 'natubaZonaNorte',
            information: '<b>La Borra Del Café Monterrey zona Roma</b>'
          }, {
            position: new google.maps.LatLng(25.670270, -100.311570),
            type: 'natubaZonaNorte',
            information: '<b>La Borra Del Café Monterrey Mariano Escobedo</b>'
          }, {
            position: new google.maps.LatLng(21.490250, -104.864988),
            type: 'natubaOccidente',
            information: '<b>La Borra Del Café Tepic</b>'
          }, {
            position: new google.maps.LatLng(19.168626, -96.125737),
            type: 'natubaZonaSureste',
            information: '<b>MSA CONSINTIENDOME SPA</b>'
          }, {
            position: new google.maps.LatLng(19.170259, -96.125583),
            type: 'natubaZonaSureste',
            information: '<b>Apetit</b>'
          }, {
            position: new google.maps.LatLng(19.168064, -96.122328),
            type: 'natubaZonaSureste',
            information: '<b>Yoga Loft</b>'
          }, {
            position: new google.maps.LatLng(19.216640, -96.183489),
            type: 'natubaZonaSureste',
            information: '<b>OM Shanti</b>'
          }, {
            position: new google.maps.LatLng(19.180385, -96.127595),
            type: 'natubaZonaSureste',
            information: '<b>Yoga Studio en Equilibrio Veracruz</b>'
          }, {
            position: new google.maps.LatLng(19.166740, -96.118163),
            type: 'natubaZonaSureste',
            information: '<b>PILATESSTUDIO CRISTY FERREIRA</b>'
          }, {
            position: new google.maps.LatLng(19.174234, -96.121412),
            type: 'natubaZonaSureste',
            information: '<b>La Semilla</b>'
          }, {
            position: new google.maps.LatLng(19.154016, -96.112637),
            type: 'natubaZonaSureste',
            information: '<b>Arya Yoga Room</b>'
          }, {
            position: new google.maps.LatLng(19.103666, -96.108400),
            type: 'natubaZonaSureste',
            information: '<b>Buddha Institute</b>'
          }, {
            position: new google.maps.LatLng(19.167906, -96.123046),
            type: 'natubaZonaSureste',
            information: '<b>Gabby Contreras Salon</b>'
          }, {
            position: new google.maps.LatLng(19.168606, -96.124999),
            type: 'natubaZonaSureste',
            information: '<b>Diana Sierra</b>'
          }
        ];

var infowindow = new google.maps.InfoWindow();
        // Create markers.
        for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
          });
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(features[i].information);
            infowindow.open(map, marker);
          }
        })(marker, i));
      };

      var legend = document.getElementById('legend');
       for (var key in icons) {
         var type = icons[key];
         var name = type.name;
         var icon = type.icon;
         var div = document.createElement('div');
         div.innerHTML = '<img src="' + icon + '"> ' + name;
         legend.appendChild(div);
       }

       map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);



      }
