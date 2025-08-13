// Creamos las variables que vamos a necesitar para añadir el mapa 
let mapa; 
let directionsService;
let directionsRenderer;
let punto;
let origen = null;
let marker = null;

// Función encargada de cargar el mapa 
function initMap(){
    punto = new google.maps.LatLng(39.271940, -0.467393);
    var opciones = {
        zoom: 15,
        center: punto,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 

    // Creamos el mapa 
    mapa = new google.maps.Map(document.getElementById('mapa'), opciones);

    // Configuramos el marcador del mapa 
    var marca = new google.maps.Marker({
        map: mapa,
        position: punto,
        title: "Dynanmo Vibe"
    });

    // Información del marcador 
    const content = `<div class="content-inforWindow">
        <b>Dynanmo Vibe<br>
        Entrena con nosotros</b><br>
        Dirección: Carrer Berenguera, 9, 46230 <br>
        Alginet, Valencia <br>
        CP: 46230
    </div>`;

    var caja = new google.maps.InfoWindow({
        content: content,
        maxWidth: 300
    });

    marca.addListener('click', function () {
        caja.open(mapa, marca);
    });

    // Configuramos el servicio de direcciones
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: mapa,
        suppressMarkers: true
    });
    directionsRenderer.setMap(mapa);
}
// Esta función se debe cargar nada más cargue el archivo script
window.addEventListener("load", initMap);
