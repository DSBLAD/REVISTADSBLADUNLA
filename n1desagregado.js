const tipoA = [
  {
    autor: "andrade, guillermo",
    titulo: "Proyecto SEUCOO",
    subtitulo:
      "desarrollo de un sensor de CO2 para el monitoreo de la calidad del aire en la UNLa",
    tipo: "A",
    ruta: "01_andrade-seucoo",
  },
  {
    autor: "andrade, guillermo",
    titulo: "Polo Tecnológico / UNLa",
    subtitulo:
      "Edificio talleres. El diseño del espacio adaptado a una propuesta pedagógica",
    tipo: "A",
    ruta: "02_andrade-polo",
  },
  {
    autor: "corvalán, diana",
    titulo: "Las firmas metálicas en las obras de Francisco Salamone",
    subtitulo: "",
    tipo: "A",
    ruta: "05_corvalan-salamone",
  },
  {
    autor: "covas, sheila",
    titulo: "Diseñar para neuroconvivir",
    subtitulo: "Diseño accesible orientado a las neurodivergencias",
    tipo: "A",
    ruta: "06_covas-neuroconvivir",
  },
  {
    autor: "dorado, cecilia",
    titulo: "Innovación y sustentabilidad en diseño textil",
    subtitulo: "experiencias de investigación en biotextiles",
    tipo: "A",
    ruta: "08_dorado-sustentabilidad",
  },
  {
    autor: "fondevila, estefanía",
    titulo:
      "Inteligencia Artificial y Ética en la Comunicación Científica y de Divulgación",
    subtitulo:
      "El caso de las revistas del Departamento de Humanidades y Artes de la Universidad Nacional de Lanús",
    tipo: "A",
    ruta: "09_fondevilla-etica",
  },
  {
    autor: "gergich, andrea",
    titulo: "Patrimonio y Cultura Gráfica",
    subtitulo:
      "La revalorización de la memoria gráfica para una historia del diseño local",
    tipo: "A",
    ruta: "11_gergich-patrimonio",
  },
  {
    autor: "suarez, valeria",
    titulo: "El oficio de diseñadores en el mundo digital",
    subtitulo: "",
    tipo: "A",
    ruta: "14_suarez-oficio",
  },
  {
    autor: "tapia, clara",
    titulo:
      "Diseño para el fortalecimiento identitario y productivo de la Cooperativa Textil La Esperanza",
    subtitulo: "",
    tipo: "A",
    ruta: "15_tapia-cooperativa",
  },
  {
    autor: "tapia, clara",
    titulo: "Del diagnóstico a la gestión estratégica de diseño",
    subtitulo:
      "Experiencias didácticas en la materia Métodos del Diseño I durante el periodo 2019 - 2025 en la Universidad Nacional de Lanús",
    tipo: "A",
    ruta: "16_tapia-metodos",
  },
  {
    autor: "weissel, marcelo",
    titulo: "Grito Urbano",
    subtitulo:
      "Contexto y tipografía de las obras de Francisco Salamone en la Provincia de Buenos Aires",
    tipo: "A",
    ruta: "18_weissel-salamone",
  },
];

const tipoB = [
  {
    autor: "d'amico, enrique",
    titulo: "Diseño, poética y bien común",
    subtitulo: "Entrevista a María Gemma Sánchez",
    tipo: "B",
    ruta: "07_damico-poetica",
  },
];

const tipoC = [
  {
    autor: "caffaro, pablo",
    titulo: "Rediseñar para circular",
    subtitulo: "formación proyectual en clave de economía circular",
    tipo: "C",
    ruta: "03_caffaro-circular",
  },
  {
    autor: "carpintero, carlos",
    titulo: "Revolución IA: consecuencias para el Diseño",
    subtitulo:
      "Estado de la cuestión y estrategias didácticas en el uso de IA para la enseñanza y aprendizaje del Diseño y la Comunicación Visual en la Universidad Nacional de Lanús",
    tipo: "C",
    ruta: "04_carpintero-ia",
  },
  {
    autor: "fondevila, estefanía",
    titulo: "Universidades como semilleros de innovación",
    subtitulo:
      "el rol de los proyectos de Tesinas de grado y prácticas profesionalizantes en la transferencia tecnológica",
    tipo: "C",
    ruta: "10_fondevilla-semillero",
  },
  {
    autor: "ossorio domeq, mayte",
    titulo:
      "Paneles integradores: del análisis a la proyección en Textil II y III",
    subtitulo: "",
    tipo: "C",
    ruta: "12_osorio-paneles",
  },
  {
    autor: "ruscitti, andrés",
    titulo:
      "Herramientas de la industria 4.0 en la formación tecnológica del diseño industrial",
    subtitulo: "",
    tipo: "C",
    ruta: "13_ruscitti-industria",
  },
  {
    autor: "velazco, diego",
    titulo: "IA en el taller de diseño industrial",
    subtitulo:
      "Su aplicación en la transición hacia el trabajo integrador final",
    tipo: "C",
    ruta: "17_velazco-ia",
  },
  {
    autor: "moreira, leo",
    titulo: "La maratón",
    subtitulo:
      "Proyecto colectivo de celebración de los 20 años de la Carrera de Diseño y Comunicación Visual",
    tipo: "C",
    ruta: "19_moreira-maraton",
  },
  {
    autor: "sánchez, angelina",
    titulo: "Artículo sobre el diseño de la revista DSB LAD, en confección",
    subtitulo: "",
    tipo: "C",
    ruta: "20_sanchez-revista",
  },
  {
    autor: "faye, juan",
    titulo: "CHAMP",
    subtitulo:
      "Diseño industrial aplicado al cultivo de hongos para producción de baja escala y experimental",
    tipo: "C",
    ruta: "22_faye-champ",
  },
  {
    autor: "thomas y junco",
    titulo: "Experiencias estudiantes UNLa",
    subtitulo: "",
    tipo: "C",
    ruta: "23_junco-thomas-experiencias",
  },
];

const tipoD = [
  {
    autor: "bozzani, daniel",
    titulo: "Editorial",
    subtitulo: "",
    tipo: "D",
    ruta: "21_bozzani-editorial",
  },
];

const contenedorArticulos = document.getElementById("contenedor-articulos");

function renderPublicaciones({
  data = [],
  contenedorId,
  carpetaDocs = "./documents/n01/desagregado/",
  carpetaImgs = "./images/n1-desagregado-img/",
  placeholderImg = "./images/n1-desagregado-img/placeholder.png",
  numeroEdicion = "DSB LAD #1",
}) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "article-card";

    const autor = item?.autor || "";
    const titulo = item?.titulo || "";
    const subtitulo = item?.subtitulo || "";
    const enlaceDescarga = item?.ruta ? `${carpetaDocs}${item.ruta}.pdf` : "";

    card.innerHTML = `
      <div class="img-container"></div>
      <div class="article-card-description mt-3 flex flex-col justify-between">
        <p style="font-variant: small-caps">${autor}</p>
        <p class="font-bold tracking-wide">${titulo}</p>
        <span class="font-light text-xs">${subtitulo}</span>
        <a href="${enlaceDescarga}" class="hover:text-white hover:bg-black transition" target="_blank">Descargar PDF</a>
        <p class="text-xs mt-2">${numeroEdicion}</p>
      </div>
    `;

    // Imagen con fallback
    const imagen = document.createElement("img");
    imagen.src = `${carpetaImgs}${item.ruta}.png`;
    imagen.alt = titulo;
    imagen.onerror = () => {
      imagen.src = placeholderImg;
    };

    card.querySelector(".img-container").appendChild(imagen);
    contenedor.appendChild(card);
  });
}

renderPublicaciones({
  data: tipoA,
  contenedorId: "contenedor-articulos",
});

renderPublicaciones({
  data: tipoC,
  contenedorId: "contenedor-comunicaciones",
});

renderPublicaciones({
  data: [...tipoB, ...tipoD],
  contenedorId: "contenedor-otros",
});
