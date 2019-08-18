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
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Gaia</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Pablo Neruda 2986, Providencia.</p>'+
            '</div>'+
            '</div>'
          },{
            position: new google.maps.LatLng(20.696256, -103.389965),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">El Merkader</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Nueva Escocia 1476, Providencia.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.692709, -103.436469),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Super Sol Naciones Unidas</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Naciones Unidas 6396, Parque de la Castellana.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.706899, -103.382067),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Punto Yoga</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Niño Obrero 300, Int 1, Col. Camino Real.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.671944, -103.409997),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Dhakata Yoga</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Niño Obrero 300, Int 1, Col. Camino Real.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.678776, -103.369071),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Super Wow</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Mexico 2015, Ladron de Guevara.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.673326, -103.365392),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Abarrotes Providencia</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Libertad 1858, Americana.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.708493, -103.414648),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Centro Médico Puerta de Hierro: Norte</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Sta Margarita 4950, Valle Real.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.588751, -103.443574),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Centro Médico Puerta de Hierro: Sur</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Lopez Mateos Sur 1401, Las Amapas.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.688041, -103.389487),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Hospital San Javier</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Pablo Casals 640, Padros Providencia.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.617218, -103.420910),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">HP Las Fuentes</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Camino al Iteso 8270, El Mante, 45080.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.636363, -103.408027),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">HP Montemorelos</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Calle Montemorelos 299, Loma Bonita, 45060.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.700863, -103.468760),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Colegio Franco Mexicano</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Francisco Villa 235, El Bajio.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.672998, -103.368595),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Chapultepec</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Chapultepec Sur 208, Col. Lafayette.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.674944, -103.392185),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Minerva</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Vallarta Eje Poniente 3298, Vta norte.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.750283, -103.420017),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Aleira</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Juan Gil Preciado 2000, Los Robles.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.712467, -103.409817),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Andares</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Acueducto 4851, Puerta de Hierro.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.726578, -103.457546),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Solares</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Paseo el Alba 44, Residencial Solares.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.675809, -103.407678),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Camara de Comercio</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Vallarta 4095, Don Bosco Vallarta.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.575461, -103.442106),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Nueva Galicia</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Blvd Valle del Silicio 2, Nueva Galicia.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.664843, -103.409159),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Chapalita</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Guadalupe 4015, Cd de los niños.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.639368, -103.312239),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Tlaquepaque</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Andador Independencia eje 132, San Pedro Tlaquepaque.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.676947, -103.376021),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Hidalgo</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Av Hidalgo 1798, Col. Ladron de Guevara.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.679788, -103.382555),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Cititower</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Av Mexico 2582, Col. Ladron de Guevara.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.651693, -103.389901),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Faro</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Av Faro 2350, Verde Valle, 44550.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.709239, -103.405706),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Pabellon</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Acueducto 2380, Col. Colomos.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.738218, -103.430498),
            type: 'natubaOccidente',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Servidor Publico</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Servidor Publico 1262, Jardines del Valle.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.647696, -103.319622),
            type: 'natubaOccidente',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Plaza Forum</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Blvd. Gral. Marcelino García Barragán 2077, Prados del Nilo.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.673775, -103.405152),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Gran Plaza</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av Vallarta 3959, La Gran Plaza.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.618999, -103.249426),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Tonala</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jal.</p>' +
            '<p><b>Dirección:</b> Av Tonala 206, Tonala Centro.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.678415, -103.456419),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe UVM</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Periferico Poniente 7900, Jardines del Colli.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.676830, -103.413228),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Iconia</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Camino Real, Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Vallarta #5145, Local L-25 planta baja.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.684496, -103.441945),
            type: 'natubaOccidente',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Meridiano</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Vallarta 6025, Condominio. Mestro Meridiano 103 Local No. 3, Col. Ciudad Granja.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.712478, -103.379182),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Plaza Patria</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Patria S/N Col. Jacarandas. Local N15.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.739330, -103.362266),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Tabachines</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Zapopan, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Tabachines #3220 int 7, fraccionamiento Tabachines C.P. 45188.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.730870, -103.433139),
            type: 'natubaOccidente',
            information:'<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Superama</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Tepatitlán de Morelos, Jal.</p>' +
            '<p><b>Dirección:</b> Av. Sta Margarita 4001, Poniente, 45136.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.809027, -102.776710),
            type: 'natubaOccidente',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Tepatitlan</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Tepatitlán de Morelos, Jal.</p>' +
            '<p><b>Dirección:</b> Cto. Interior S S Juan Pablo II N.325, La Gloria, 47600.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.698800, -103.385899),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra de Cafe Madre de Dios</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jalisco.</p>' +
            '<p><b>Dirección:</b> Calle Bogota 2936, Providencia 4a. Secc, 44639.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.663919, -103.448863),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Metropark </h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jalisco.</p>' +
            '<p><b>Dirección:</b> Plaza Metropark, Metropark, Av. Ecónomos, Parque Metropolitano, 45030.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.672938, -103.368897),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Honey Market Chapultepec </h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jalisco.</p>' +
            '<p><b>Dirección:</b> Av Chapultepec Sur 208, Col Americana, Lafayette, 44160.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.651670, -103.389904),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Honey Market Mind</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jalisco.</p>' +
            '<p><b>Dirección:</b> Av Faro 2350, Verde Valle, 44550.</p>'+
            '</div>'+
            '</div>'
          },{
            position: new google.maps.LatLng(20.651670, -103.389904),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Escuela de Ballet: Carla Restelli</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jalisco.</p>' +
            '<p><b>Dirección:</b> Av Sta Margarita 4950, Valle Real.</p>'+
            '</div>'+
            '</div>'
          },{
            position: new google.maps.LatLng(20.651670, -103.389904),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Hotel Westin Expo Guadalajara</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Guadalajara, Jalisco.</p>' +
            '<p><b>Dirección:</b> Av de Las Rosas 2911, Verde Valle.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.255050, -103.713989),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Colima</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Colima, Col.</p>' +
            '<p><b>Dirección:</b> Plaza Country, Av. Felipe Sevilla del Río 201, Local 5, Jardines Vista Hermosa III, Jardines Vista Hermosa I.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(28.646734, -106.115748),
            type: 'natubaZonaNoreste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Chihuahua</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Chihuahua, Chih.</p>' +
            '<p><b>Dirección:</b> Plaza Tres Vias, Avenida Mirador 1600, Campestre.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.585102, -100.402405),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Querétaro Tecnológico</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Santiago de Querétaro, Querétaro.</p>' +
            '<p><b>Dirección:</b> Avenida Tecnológico Esq. Zaragoza Local-03, Niños Heroes.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(20.594516, -100.385346),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Menos Kilos</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Santiago de Querétaro, Querétaro.</p>' +
            '<p><b>Dirección:</b> Manuel Gutiérrez Nájera 1A, La Santa Cruz, Centro.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(25.653191, -100.294380),
            type: 'natubaZonaNorte',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Monterrey Zona Roma</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Monterrey, Nuevo Leon.</p>' +
            '<p><b>Dirección:</b> Av. Eugenio Garza Sada 2410, Local 6 Planta Baja, Roma, Tecnológico, 64700.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(25.670270, -100.311570),
            type: 'natubaZonaNorte',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Monterrey Mariano Escobedo</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Monterrey, Nuevo Leon.</p>' +
            '<p><b>Dirección:</b> Calle Gral. Mariano Escobedo 588, Centro.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(21.490250, -104.864988),
            type: 'natubaOccidente',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Borra Del Café Tepic</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Tepic, Nayarit.</p>' +
            '<p><b>Dirección:</b> Blvd. Gobernadores 302, Benito Juárez Oriente.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.168626, -96.125737),
            type: 'natubaZonaSureste',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">MSA CONSINTIENDOME SPA</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Alonso Hernández de Portocarrero 52, Reforma.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.170259, -96.125583),
            type: 'natubaZonaSureste',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Appetit</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Calle España 448, poligono 1, Reforma.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.168064, -96.122328),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">YogaLoft</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> J. de Grijalva 763, Virginia.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.216640, -96.183489),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Om Shanti</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Amparo de la Torre 991, 91800.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.180385, -96.127595),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Yoga Estudio en Equilibrio</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Tuero Molina 318 esq. Juan de Dios Pesa.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.166740, -96.118163),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Yoga Estudio en Equilibrio</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Plaza Maryn, Av Costa Verde, Boca del Rio.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.174234, -96.121412),
            type: 'natubaZonaSureste',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">La Semilla</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Calle Vasco Núñez de Balboa 72, Reforma.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.154016, -96.112637),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Arya Yoga Room</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Av. Palmeras No 646 Local 13 fracc. Jardines de Virginia, Boca del Rio.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.103666, -96.108400),
            type: 'natubaZonaSureste',
            information:  '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Buddha Institute</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Privada Santiago Tuxtla, Fracc La Tampiquera, 94290 Boca del Río, Veracruz de Ignacio de la Llave.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.167906, -96.123046),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Gabby Contreras</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> Av. Martin Alonso Pinzon #865, Fracc. Reforma.</p>'+
            '</div>'+
            '</div>'
          }, {
            position: new google.maps.LatLng(19.168606, -96.124999),
            type: 'natubaZonaSureste',
            information: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading greens">Diana Sierra</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ciudad:</b> Veracruz, Ver.</p>' +
            '<p><b>Dirección:</b> España 645-A entre Catolica Y Marti Gracc. Colonia Reforma.</p>'+
            '</div>'+
            '</div>'
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
