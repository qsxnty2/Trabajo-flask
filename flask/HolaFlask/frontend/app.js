function enviar() {
    var contenido = document.querySelector('#contenido');
    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;
    var v3 = document.querySelector('#t3').value;
    var url = "";

    if (document.querySelector('#opcion1').checked) {
        url = 'http://127.0.0.1:5000';
    } else if (document.querySelector('#opcion2').checked) {
        url = 'http://127.0.0.1:5000/notas/' + encodeURIComponent(v1) + '/' + encodeURIComponent(v2) + '/' + encodeURIComponent(v3);
    } else if (document.querySelector('#opcion3').checked) {
        url = 'http://127.0.0.1:5000/edades/' + encodeURIComponent(v1);
    } else if (document.querySelector('#opcion4').checked) {
        url = 'http://127.0.0.1:5000/arreglos/' + encodeURIComponent(v1) + '/' + encodeURIComponent(v2) + '/' + encodeURIComponent(v3);
    } else {
        swal("Mensaje", "Seleccione una opción", "warning");
        return; // Se evita continuar en caso de no seleccionar una opción
    }

    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.text();
            } else {
                throw "Error en la llamada";
            }
        })
        .then(function (texto) {
            console.log(texto);
            contenido.innerHTML = texto;
            swal("Mensaje", "Proceso realizado correctamente", "success");
        })
        .catch(function (error) {
            console.log(error);
            document.write(error);
            swal({
                title: "Advertencia",
                text: String(error), // Asegúrate de que sea una cadena
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        });
}

// Opción para mensaje
function opcion1() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    t1.disabled = true;
    t2.disabled = true;
    t3.disabled = true;
    t1.value = "";
    t2.value = "";
    t3.value = "";
    t1.placeholder = "";
    t2.placeholder = "";
    t3.placeholder = "";
}

// Opción para notas
function opcion2() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    t1.disabled = false;
    t2.disabled = false;
    t3.disabled = false;
    t1.value = "";
    t2.value = "";
    t3.value = "";
    t1.placeholder = "Nota 1";
    t2.placeholder = "Nota 2";
    t3.placeholder = "Nota 3";
}

// Opción para edad
function opcion3() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    t1.disabled = false;
    t2.disabled = true;
    t3.disabled = true;
    t1.value = "";
    t2.value = "";
    t3.value = "";
    t1.placeholder = "Edad";
    t2.placeholder = "";
    t3.placeholder = "";
}

// Opción para arreglos
function opcion4() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    t1.disabled = false;
    t2.disabled = false;
    t3.disabled = false;
    t1.value = "";
    t2.value = "";
    t3.value = "";
    t1.placeholder = "Valores permitidos";
    t2.placeholder = "Columnas";
    t3.placeholder = "Filas";
}
