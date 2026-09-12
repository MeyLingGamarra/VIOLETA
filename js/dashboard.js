/* =====================================================
   DASHBOARD DE VIOLETA
===================================================== */


/*
    Estos datos son SIMULADOS.

    Se utilizan porque nuestro prototipo
    todavía no está conectado a una
    base de datos real.
*/


const datos = {

    consultas: 128,

    emergencias: 18,

    legales: 35,

    informacion: 75,

    ayuda: 24,

    recursos: 96

};


/* =====================================================
   CARGAR DATOS EN EL DASHBOARD
===================================================== */

function cargarDatos() {


    document.getElementById("totalConsultas").textContent =
        datos.consultas;


    document.getElementById("totalEmergencias").textContent =
        datos.emergencias;


    document.getElementById("totalLegales").textContent =
        datos.legales;


    document.getElementById("totalInformacion").textContent =
        datos.informacion;


    document.getElementById("totalAyuda").textContent =
        datos.ayuda;


    document.getElementById("totalRecursos").textContent =
        datos.recursos;

}


/* =====================================================
   INICIAR DASHBOARD
===================================================== */

cargarDatos();

