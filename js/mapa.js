var mapa; 
var directionsService;
var directionsRenderer;
var marker = null;


window.addEventListener("load", () => {

  //Intentar obtener la ubicación del usuario 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        initMap(lat, lng, "Tu ubicación actual"); // Mostrar ubicación actual 
      },
      () => {
        // Si no hay permisos → ubicación por defecto
        initMap(39.46680701564032, -0.3851032069628001, "Ubicación por defecto: Master D Valencia");
      }
    );
  } else {
    // Si el navegador no soporta geolocalización
    initMap(39.46680701564032, -0.3851032069628001, "Ubicación por defecto: Master D Valencia");
  }
});

// Función para cargar el mapa 
function initMap(lat, lng, mensaje){
  const punto = { lat, lng };
  const opciones = {
    zoom: 15,
    center: punto,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }; 

  // Crear el mapa 
  mapa = new google.maps.Map(document.getElementById('mapa'), opciones);

  // Configurar marcador 
  const marca = new google.maps.Marker({
    map: mapa,
    position: punto,
    title: mensaje
  });

  // InfoWindow
  const content = `<div class="content-inforWindow">${mensaje}</div>`;
  const caja = new google.maps.InfoWindow({
    content: content,
    maxWidth: 300
  });

  // Abrir automáticamente al cargar
  caja.open(mapa, marca);

  marca.addListener('click', function () {
    caja.open(mapa, marca);
  });

  // Configurar servicio de direcciones
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: mapa,
    suppressMarkers: true
  });
}
