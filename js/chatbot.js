/* =====================================================
   VIOLETA - CHATBOT
   Prototipo de orientación y acceso a recursos
===================================================== */


/* =====================================================
   FUNCIÓN PRINCIPAL PARA AGREGAR MENSAJES
===================================================== */

function agregarMensaje(texto, tipo = "violeta") {

    const chat = document.getElementById("chatMensajes");

    const mensaje = document.createElement("div");

    mensaje.classList.add("mensaje");
    mensaje.classList.add(tipo);

    mensaje.innerHTML = texto;

    chat.appendChild(mensaje);

    chat.scrollTop = chat.scrollHeight;
}


/* =====================================================
   MOSTRAR LA OPCIÓN ELEGIDA POR LA PERSONA
===================================================== */

function mostrarEleccion(texto) {

    agregarMensaje(texto, "usuario");

}


/* =====================================================
   LIMPIAR BOTONES
===================================================== */

function limpiarOpciones() {

    document.getElementById("opcionesChat").innerHTML = "";

}


/* =====================================================
   BOTÓN PARA VOLVER AL INICIO
===================================================== */

function agregarBotonVolver() {

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `
        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>
    `;

}


/* =====================================================
   EMERGENCIA
===================================================== */

function mostrarEmergencia() {

    mostrarEleccion("🚨 Estoy en una emergencia");

    limpiarOpciones();

    agregarMensaje(
        "Si vos o alguien más se encuentra en peligro inmediato, es importante buscar ayuda de emergencia."
    );

    agregarMensaje(
        "<strong>🚨 911</strong><br>Emergencias y situaciones de peligro inmediato."
    );

    agregarMensaje(
        "<strong>💜 144</strong><br>Orientación y asistencia ante situaciones de violencia por motivos de género."
    );

    agregarMensaje(
        "Si existe un peligro inmediato, priorizá tu seguridad y contactá a los servicios de emergencia."
    );

    agregarBotonVolver();

}


/* =====================================================
   ORIENTACIÓN SOBRE DENUNCIA
===================================================== */

function mostrarLegal() {

    mostrarEleccion(
        "⚖️ Necesito orientación sobre una denuncia"
    );

    limpiarOpciones();

    agregarMensaje(
        "Puedo brindarte información general para orientarte."
    );

    agregarMensaje(
        "Una denuncia puede realizarse a través de los canales y organismos correspondientes según la situación."
    );

    agregarMensaje(
        "VIOLETA no reemplaza el asesoramiento jurídico ni la atención de profesionales."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <button onclick="mostrarDondeDenunciar()">
            📍 ¿Dónde puedo denunciar?
        </button>

        <button onclick="mostrarQueNecesito()">
            📄 ¿Qué información necesito?
        </button>

        <button onclick="mostrarDerechosDenuncia()">
            ⚖️ Quiero conocer mis derechos
        </button>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   ¿DÓNDE DENUNCIAR?
===================================================== */

function mostrarDondeDenunciar() {

    mostrarEleccion("📍 ¿Dónde puedo denunciar?");

    limpiarOpciones();

    agregarMensaje(
        "Los canales para realizar una denuncia pueden variar según la jurisdicción y la situación."
    );

    agregarMensaje(
        "Podés consultar los organismos oficiales de tu localidad para conocer el lugar y procedimiento correspondiente."
    );

    agregarMensaje(
        "También podés consultar la Línea 144 para recibir orientación."
    );

    agregarBotonVolver();

}


/* =====================================================
   ¿QUÉ NECESITO?
===================================================== */

function mostrarQueNecesito() {

    mostrarEleccion("📄 ¿Qué información necesito?");

    limpiarOpciones();

    agregarMensaje(
        "La documentación o información requerida puede depender del organismo donde se realice la denuncia."
    );

    agregarMensaje(
        "Si no tenés toda la información o documentación, podés solicitar orientación antes de realizar el trámite."
    );

    agregarBotonVolver();

}


/* =====================================================
   DERECHOS
===================================================== */

function mostrarDerechosDenuncia() {

    mostrarEleccion("⚖️ Quiero conocer mis derechos");

    limpiarOpciones();

    agregarMensaje(
        "Las personas que atraviesan situaciones de violencia tienen derechos y pueden acceder a orientación y asistencia."
    );

    agregarMensaje(
        "Para obtener información específica sobre tu situación, es recomendable consultar organismos oficiales o profesionales especializados."
    );

    agregarBotonVolver();

}


/* =====================================================
   ORIENTACIÓN Y ACOMPAÑAMIENTO
===================================================== */

function mostrarContencion() {

    mostrarEleccion(
        "💜 Necesito orientación o acompañamiento"
    );

    limpiarOpciones();

    agregarMensaje(
        "Lamento que estés atravesando una situación difícil. 💜"
    );

    agregarMensaje(
        "No tenés que resolver todo de una sola vez."
    );

    agregarMensaje(
        "Existen organismos y profesionales que pueden brindarte orientación y acompañamiento."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <button onclick="mostrarLinea144()">
            💜 Quiero contactar orientación
        </button>

        <button onclick="mostrarAyudaSegura()">
            🛡️ Necesito pensar cómo pedir ayuda
        </button>

        <button onclick="mostrarContencionInformacion()">
            ℹ️ Quiero conocer recursos
        </button>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   LÍNEA 144
===================================================== */

function mostrarLinea144() {

    mostrarEleccion(
        "💜 Quiero contactar orientación"
    );

    limpiarOpciones();

    agregarMensaje(
        "La Línea 144 brinda orientación, atención y asesoramiento ante situaciones de violencia por motivos de género."
    );

    agregarMensaje(
        "Podés conocer más información y los canales disponibles desde la sección de Recursos."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <a
            href="recursos.html"
            class="boton-recurso">
            📚 Ver recursos
        </a>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   PEDIR AYUDA DE FORMA SEGURA
===================================================== */

function mostrarAyudaSegura() {

    mostrarEleccion(
        "🛡️ Necesito pensar cómo pedir ayuda"
    );

    limpiarOpciones();

    agregarMensaje(
        "Si pedir ayuda puede generar una situación de riesgo, es importante priorizar tu seguridad."
    );

    agregarMensaje(
        "Podés buscar un momento y un lugar seguro para comunicarte con una persona de confianza o con un organismo especializado."
    );

    agregarMensaje(
        "Si existe peligro inmediato, contactá a los servicios de emergencia."
    );

    agregarBotonVolver();

}


/* =====================================================
   RECURSOS
===================================================== */

function mostrarContencionInformacion() {

    mostrarEleccion(
        "ℹ️ Quiero conocer recursos"
    );

    limpiarOpciones();

    agregarMensaje(
        "Podés consultar nuestra sección de Recursos para encontrar información sobre diferentes canales de asistencia."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <a
            href="recursos.html"
            class="boton-recurso">
            📚 Ver recursos disponibles
        </a>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   INFORMACIÓN
===================================================== */

function mostrarInformacion() {

    mostrarEleccion(
        "ℹ️ Necesito información"
    );

    limpiarOpciones();

    agregarMensaje(
        "Claro. ¿Sobre qué tema querés obtener información?"
    );

    agregarBotonesInformacion();

}


/* =====================================================
   OPCIONES DE INFORMACIÓN
===================================================== */

function agregarBotonesInformacion() {

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <button onclick="informacionViolencia()">
            🛡️ Tipos de violencia
        </button>

        <button onclick="informacionDerechos()">
            ⚖️ Derechos y recursos
        </button>

        <button onclick="informacionOrganismos()">
            🏢 Organismos de asistencia
        </button>

        <button onclick="volverInicio()">
            ⬅ Volver
        </button>

    `;

}


/* =====================================================
   TIPOS DE VIOLENCIA
===================================================== */

function informacionViolencia() {

    mostrarEleccion(
        "🛡️ Quiero conocer los tipos de violencia"
    );

    limpiarOpciones();

    agregarMensaje(
        "La violencia por motivos de género puede presentarse de diferentes formas."
    );

    agregarMensaje(
        "<strong>Violencia física:</strong> acciones que provocan daño o riesgo de daño físico."
    );

    agregarMensaje(
        "<strong>Violencia psicológica:</strong> acciones que afectan la autoestima, generan miedo, control, aislamiento o sufrimiento emocional."
    );

    agregarMensaje(
        "<strong>Violencia económica y patrimonial:</strong> acciones destinadas a controlar o limitar recursos económicos o bienes."
    );

    agregarMensaje(
        "<strong>Violencia simbólica:</strong> mensajes, imágenes o comportamientos que reproducen desigualdad y discriminación."
    );

    agregarMensaje(
        "<strong>Violencia digital:</strong> situaciones de violencia que pueden producirse mediante tecnologías, redes sociales u otros medios digitales."
    );

    agregarBotonVolver();

}


/* =====================================================
   DERECHOS Y RECURSOS
===================================================== */

function informacionDerechos() {

    mostrarEleccion(
        "⚖️ Quiero conocer mis derechos y recursos"
    );

    limpiarOpciones();

    agregarMensaje(
        "Las personas que atraviesan situaciones de violencia pueden acceder a información, orientación y asistencia."
    );

    agregarMensaje(
        "También pueden recurrir a organismos especializados para conocer las alternativas disponibles según cada situación."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <a
            href="recursos.html"
            class="boton-recurso">
            📚 Ver recursos
        </a>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   ORGANISMOS
===================================================== */

function informacionOrganismos() {

    mostrarEleccion(
        "🏢 Quiero conocer organismos de asistencia"
    );

    limpiarOpciones();

    agregarMensaje(
        "Existen organismos y espacios especializados que pueden brindar orientación, asistencia y acompañamiento."
    );

    agregarMensaje(
        "La disponibilidad de servicios puede variar según la localidad."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <a
            href="recursos.html"
            class="boton-recurso">
            📚 Consultar recursos
        </a>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   AYUDAR A OTRA PERSONA
===================================================== */

function mostrarAyudaOtraPersona() {

    mostrarEleccion(
        "👥 Quiero ayudar a otra persona"
    );

    limpiarOpciones();

    agregarMensaje(
        "Es valioso que quieras acompañar a alguien que atraviesa una situación de violencia. 💜"
    );

    agregarMensaje(
        "Podés escucharla, creer en lo que cuenta y respetar sus decisiones."
    );

    agregarMensaje(
        "Evitá presionarla para tomar una decisión para la que todavía no está preparada."
    );

    agregarMensaje(
        "Si existe un peligro inmediato, es importante recurrir a los servicios de emergencia."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <button onclick="mostrarComoAcompanar()">
            💜 ¿Cómo puedo acompañarla?
        </button>

        <button onclick="mostrarRecursosOtraPersona()">
            📚 Quiero conocer recursos
        </button>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   CÓMO ACOMPAÑAR
===================================================== */

function mostrarComoAcompanar() {

    mostrarEleccion(
        "💜 ¿Cómo puedo acompañarla?"
    );

    limpiarOpciones();

    agregarMensaje(
        "Podés comenzar escuchando sin juzgar y dejando que la persona exprese lo que necesita."
    );

    agregarMensaje(
        "Respetá sus decisiones y evitá hacerla sentir culpable por la situación."
    );

    agregarMensaje(
        "También podés ayudarla a encontrar información y recursos confiables."
    );

    agregarBotonVolver();

}


/* =====================================================
   RECURSOS PARA AYUDAR A OTRA PERSONA
===================================================== */

function mostrarRecursosOtraPersona() {

    mostrarEleccion(
        "📚 Quiero conocer recursos"
    );

    limpiarOpciones();

    agregarMensaje(
        "Podés consultar la sección de Recursos para conocer diferentes canales de orientación y asistencia."
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <a
            href="recursos.html"
            class="boton-recurso">
            📚 Ver recursos
        </a>

        <button onclick="volverInicio()">
            ⬅ Volver al inicio
        </button>

    `;

}


/* =====================================================
   VOLVER AL INICIO
===================================================== */

function volverInicio() {

    limpiarOpciones();

    agregarMensaje(
        "¿Cómo puedo ayudarte?"
    );

    const opciones = document.getElementById("opcionesChat");

    opciones.innerHTML = `

        <button onclick="mostrarEmergencia()">
            🚨 Estoy en una emergencia
        </button>

        <button onclick="mostrarLegal()">
            ⚖️ Necesito orientación
            sobre una denuncia
        </button>

        <button onclick="mostrarContencion()">
            💜 Necesito orientación
            o acompañamiento
        </button>

        <button onclick="mostrarInformacion()">
            ℹ️ Necesito información
        </button>

        <button onclick="mostrarAyudaOtraPersona()">
            👥 Quiero ayudar a otra persona
        </button>

    `;

}
