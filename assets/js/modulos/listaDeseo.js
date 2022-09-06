const tableLista = document.querySelector('#tableListaDeseo tbody');
document.addEventListener('DOMContentLoaded', function () {
    getListaDeseo()
});
function getListaDeseo() {
    const url = base_url + 'principal/listaDeseo';
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.send(JSON.stringify(listaDeseo));
    http.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
           console.log(res);
            //let html = '';
           //res.forEach(producto =>{
            //html += `<tr>
              //<td>${producto.imagen}</td>
              //<td>${producto.nombre}</td>
              //<td>${producto.precio}</td>
              // <td>${producto.cantidad}</td>
               //<td><button class="btn btn-danger" type="button">Eliminar</button></td>
            //</tr>`;
           //});
           //tableLista.innerHTML = html;
        }
    }
}