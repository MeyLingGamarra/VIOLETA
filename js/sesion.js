/* =====================================================
   VIOLETA - SISTEMA DE SESIÓN
   Prototipo académico
===================================================== */


/* =====================================================
   DATOS DE DEMOSTRACIÓN
===================================================== */

const USUARIO_DEMO = "admin";

const CONTRASENA_DEMO = "violeta123";


/* =====================================================
   VERIFICAR SESIÓN
===================================================== */

function sesionIniciada() {

    return localStorage.getItem("violetaSesion") === "activa";

}


/* =====================================================
   INICIAR SESIÓN
===================================================== */

function iniciarSesion() {

    localStorage.setItem(
        "violetaSesion",
        "activa"
    );

}


/* =====================================================
   CERRAR SESIÓN
===================================================== */

function cerrarSesion() {

    localStorage.removeItem(
        "violetaSesion"
    );

    window.location.href = "index.html";

}


/* =====================================================
   CONFIGURAR LOGIN
===================================================== */

function configurarLogin() {

    const formulario =
        document.getElementById("formLogin");


    if (!formulario) {

        return;

    }


    formulario.addEventListener(
        "submit",
        function(evento) {

            evento.preventDefault();


            const usuario =
                document
                    .getElementById("usuario")
                    .value
                    .trim();


            const contrasena =
                document
                    .getElementById("contrasena")
                    .value;


            const mensaje =
                document.getElementById(
                    "mensajeLogin"
                );


            /* =========================
               DATOS CORRECTOS
            ========================== */

            if (
                usuario === USUARIO_DEMO &&
                contrasena === CONTRASENA_DEMO
            ) {

                iniciarSesion();


                mensaje.textContent =
                    "Inicio de sesión correcto.";


                mensaje.classList.add(
                    "login-exito"
                );


                setTimeout(
                    function() {

                        window.location.href =
                            "dashboard.html";

                    },
                    500
                );


            } else {

                mensaje.textContent =
                    "Usuario o contraseña incorrectos.";


                mensaje.classList.remove(
                    "login-exito"
                );

            }

        }
    );

}


/* =====================================================
   PROTEGER PÁGINAS ADMINISTRATIVAS
===================================================== */

function protegerPaginaAdmin() {

    const paginaActual =
        window.location.pathname;


    const esDashboard =
        paginaActual.includes(
            "dashboard.html"
        );


    const esEstadisticas =
        paginaActual.includes(
            "estadisticas.html"
        );


    if (
        (esDashboard || esEstadisticas) &&
        !sesionIniciada()
    ) {

        window.location.replace(
            "login.html"
        );

    }

}


/* =====================================================
   MOSTRAR USUARIO
===================================================== */

function mostrarUsuario() {

    const zonaUsuario =
        document.getElementById(
            "zonaUsuario"
        );


    if (!zonaUsuario) {

        return;

    }


    if (sesionIniciada()) {

        zonaUsuario.innerHTML = `

            <div class="usuario-conectado">

                <span>
                    👤 Administrador
                </span>

                <button
                    onclick="cerrarSesion()">

                    Cerrar sesión

                </button>

            </div>

        `;

    } else {

        zonaUsuario.innerHTML = `

            <a
                href="login.html"
                class="boton-iniciar-sesion">

                👤 Iniciar sesión

            </a>

        `;

    }

}


/* =====================================================
   AGREGAR OPCIONES ADMINISTRATIVAS
===================================================== */

function agregarMenuAdmin() {

    const menu =
        document.querySelector(
            ".menu-lateral"
        );


    if (!menu) {

        return;

    }


    /* Si no hay sesión, no hacemos nada */

    if (!sesionIniciada()) {

        return;

    }


    /* Evitar duplicados */

    if (
        document.querySelector(
            ".menu-admin-generado"
        )
    ) {

        return;

    }


    /* =========================
       DASHBOARD
    ========================== */

    const dashboard =
        document.createElement("a");

    dashboard.href =
        "dashboard.html";

    dashboard.className =
        "menu-admin-generado";

    dashboard.innerHTML =
        "📊 Dashboard";


    /* =========================
       ESTADÍSTICAS
    ========================== */

    const estadisticas =
        document.createElement("a");

    estadisticas.href =
        "estadisticas.html";

    estadisticas.className =
        "menu-admin-generado";

    estadisticas.innerHTML =
        "📈 Estadísticas";


    /* =========================
       AGREGAR AL MENÚ
    ========================== */

    menu.appendChild(
        dashboard
    );

    menu.appendChild(
        estadisticas
    );

}


/* =====================================================
   INICIAR SISTEMA
===================================================== */

configurarLogin();

protegerPaginaAdmin();

mostrarUsuario();

agregarMenuAdmin();