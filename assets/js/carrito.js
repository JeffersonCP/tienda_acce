const btnAddDeseo = document.querySelectorAll('.btnAddDeseo');
const btnDeseo = document.querySelector('#btnCantidadDeseo');
let listaDeseo = [];
document. addEventListener('DOMContentLoaded ', function() {
    cantidadDeseo();
    for (let i = 0; i < btnAddDeseo.length; i++) {
        btnAddDeseo[i].addEventListener('click', function(){
            let idProducto = btnAddDeseo[i].getAttribute('pro');
            agregarDeseo(idProducto);
        })        
    }
})
function agregarDeseo(idProducto){
    listaDeseo.push({
        "idProducto" : idProducto,
        "cantidad" : 1
    })
    localStorage.setItem('listaDeseo', JSON.stringify(listaDeseo));
    cantidadDeseo();
}
function cantidadDeseo() {
    let listas = JSON.parse(localStorage.getItem('listaDeseo'));
    if (listas != null) {
        btnDeseo.textContent = listas.length;    
    } else {
        btnDeseo.textContent = 0;       
    }   
}
