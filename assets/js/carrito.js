const btnAddDeseo = document.querySelectorAll('.btnAddDeseo');
const btnDeseo = document.querySelector('#btnCantidadDeseo');
let listaDeseo = [];
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('listaDeseo') != null) {
        listaDeseo = JSON.parse(localStorage.getItem('listaDeseo'));
    }
    CantidadDeseo();
    for (let i = 0; i < btnAddDeseo.length; i++) {
    btnAddDeseo[i].addEventListener('click', function(){
        let idProducto = btnAddDeseo[i].getAttribute('prod');
        agregarDeseo(idProducto);
    })    
  }  
})

function agregarDeseo(idProducto) {
    if (localStorage.getItem('listaDeseo') == null) {
        listaDeseo = [];
    } else {
        let listaExiste = JSON.parse(localStorage.getItem('listaDeseo'));
        for (let i = 0; i < listaExiste.length; i++) {
            if (listaExiste[i]['idProducto'] ==idProducto) {
                Swal.fire(
                    'Aviso?',
                    'EL PRODUCTO YA ESTA EN LISTA DE DESEO',
                    'warning'
                )
                return;
            }
        }  
        listaDeseo.concat(localStorage.getItem('listaDeseo'));
    }
    listaDeseo.push({
        "idProducto" : idProducto,
        "cantiadd" : 1
    })
    localStorage.setItem('listaDeseo', JSON.stringify(listaDeseo));
    Swal.fire(
        'Aviso?',
        'PRODUCTO AGREGADO A LA LISTA DE DESEO',
        'success'
      )
    CantidadDeseo();
}
function CantidadDeseo() {
    let listas = JSON.parse(localStorage.getItem('listaDeseo'));
    if (listas != null) {
        btnDeseo.textContent = listas.length
    } else {
        btnDeseo.textContent = 0
    }
    
}