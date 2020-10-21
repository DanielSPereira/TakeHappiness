// create map
const map = L.map('mapid').setView([-15.8013995,-47.9243885], 13);

// create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon 
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

// create and add marker 
map.on('click',(event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map);
})

// adicionar o campo de fotos 
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da última imagem adicionada 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // verificar se está vazio para não adicionar
    const input =  newFieldContainer.children[0];

    if(input.value == ''){
        return
    }
    
    // limpar o campo antes de adicionar
    input.value = '';    
    // adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    if(fieldsContainer.length <= 1){
        // limpar o campo
        span.parentNode.children[0].value = '';
        return
    }
    
    // deletar campo
    span.parentNode.remove();
}

// selecionar sim ou não 
function toggleSelect(event) {
    // retirar a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active') );
    // colocar a classe active
    const button = event.currentTarget;

    button.classList.add('active');

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('input[name="open_on_weekends"]');
    
    input.value = button.dataset.value;
}

function validate(event) {

    // validar se lat e lng estão preenchidos
    if(document.querySelector('[name=lat]').value == '' && document.querySelector('[name=lng]').value == ''){    
        event.preventDefault();
        alert("Selecione um ponto no mapa!");
    }
}