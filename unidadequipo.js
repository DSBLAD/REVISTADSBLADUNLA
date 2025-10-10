const miembros = [
  {
    nombre: "Dra. DI Clara Tapia",
    cargo: "Editora responsable",
    bio: "Clara Tapia es Doctora en Artes, y Diseñadora Industrial (UNLP). Ganadora de la Beca de Estancia Corta de investigación doctoral BEC.AR en el Politécnico de Milano. Donde estudió en el Doctorado de Investigación en Diseño POLIMI y trabajó en el laboratorio de fabricación digital Polifactory. Sus proyectos cruzan el diseño, la industria textil y el arte. Es Profesora Adjunta de Historia y Metodología del Diseño (UNLa) y ayudante en Historia del Diseño Industrial (UNLP). Como investigadora trabaja en programas de I+D para promover la innovación en la economía social. Es performer y diseñadora de vestuario en varios colectivos de artistas de la ciudad de La Plata.",
    institucion: "UNLa, UNLP, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "clara.jpeg",
  },
  {
    nombre: "Esp. Estefania Fondevila Sancet",
    cargo: "Dirección editorial DI · Programación web",
    bio: "Estefanía Fondevila Sancet, es Especialista en Metodología de la Investigación Científica UNLa, Diplomada en Ciencia y Tecnología UNQ y programadora web, Responsable de la coordinacion de Investigación del Departamento de Humanidades y Artes de la UNLa, fundadora del HUB de Diseño Industrial de la UNLa, desarrolla herramientas de planificación, diagnóstico, desarrollo y seguimiento de proyectos y emprendimientos. Articula con empresas, instituciones y equipos interdisciplinarios. Se desempeña como Directora de proyectos de investigación, de becarios y pasantes, con instituciones nacionales e internacionales. Actualmente su actividad docente se desarrolla en UNLa, como profesora adjunta concursada en la materia Ciencia aplicada al Diseño Industrial, Taller de Prácticas Preprofesionales y en Taller Integrador Final en la Licenciatura en Diseño Industrial. Participa de redes nacionales de Gestión de la Ciencia y la Tecnología. 1er premio innovar 2012 y 2016, Distinguida con Diploma de Honor en el concurso Arte, ciencia, tecnologia e innovación",
    institucion: "UNLa, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "estefi.jpg",
  },
  {
    nombre: "DG. Diana Corvalán",
    cargo: "Dirección editorial DyCV",
    bio: "Diana G. Corvalán es Diseñadora gráfica egresada de FADU, UBA, tiene estudios de posgrado en Comunicación y Creación Cultural, en el instituto Walter Benjamin en convenio con CAECE. Realizó la carrera docente especializada en arquitectura, diseño y urbanismo en FADU UBA. Se desempeñó como docente en diferentes universidades, donde también coordinó proyectos de cooperación y de extensión con instituciones nacionales e internacionales. En la actualidad su actividad docente se concentra en UNLa, es coordinadora académica de la Licenciatura en Diseño y Comunicación Visual y es profesora asociada concursada en la materia Espacio Tipográfico 1 en DyCV y en la materia Imagen, tipografía e identidad cultural en la Licenciatura en Audiovisión. Participa de equipos de investigación, redes y grupos de estudio vinculados con la tipografía, la caligrafía, el libro y la cultura gráfica. Siempre interesada por el universo de la imagen y el diseño en general, ávida lectora, le interesan las diferentes dimensiones del mundo",
    institucion: "UNLa, UBA, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "diana.jpeg",
  },
  {
    nombre: "Mg. DI Guillermo Andrade",
    cargo: "Consejo científico · Dirección Lic. Diseño Industrial",
    bio: "Guillermo Andrade es Diseñador Industrial y Magister en Marketing Internacional. Actualmente se encuentra en la realización de su tesis de Doctorado en Artes. Se desempeña como Director del posgrado 'Especialización en Tecnologías de Fabricación Digital' y Director de la carrera 'Licenciatura en Diseño Industrial' en la Universidad Nacional de Lanús. Investigador categoría II del sistema de incentivos de la Nación. Profesor Titular de la Universidad Nacional de La Plata y Profesor Asociado de la Universidad Nacional de Lanús. Miembro del Consejo Departamental del Departamento de Humanidades y Artes de la UNLa. Evaluador externo de proyectos de Ciencia, Tecnología e Innovación Productiva (Agencia Nacional de Promoción Científica y Tecnológica, Consejo Interuniversitario Nacional).",
    institucion: "UNLa, UNLP, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "guillermo-andrade.jpg",
  },
  {
    nombre: "Mg. DG Andrea Gergich",
    cargo: "Consejo científico · Dirección Lic. Diseño y Comunicación Visual",
    bio: "Andrea Gergich es Diseñadora Gráfica, Magister en Diseño Comunicacional (FADU, UBA) y doctoranda en Historia del Arte (EIDAES-UNSAM). Docente universitaria e investigadora especializada en historia del diseño gráfico en Argentina y cultura gráfica local. Coordinadora Académica de la Licenciatura en Diseño y Comunicación Visual (UNLa) y Coordinadora técnica DyCV en el LaD-Laboratorio de Diseño (UNLa). Titular de Historia Social del Diseño y Coordinadora del Taller de Trabajo Final Integrador. Co-titular del Seminario de grado Historia del diseño en Argentina, y docente concursada en Historia de la Comunicación Visual en la FADU-UBA. Investigadora y directora de proyectos Amílcar Herrera (UNLa), UBACyT y PIA (FADU, UBA), Mecenazgo (CABA), e investigadora externa (CIAP-UNSAM-CONICET). Autora de artículos y capítulos de libros, disertante en congresos nacionales e internacionales. Fue Coordinadora del equipo de Diseño del Campus Virtual UNLa (2008-2020) y Directora de Estudios en Fundación Gutenberg (2001-2018).",
    institucion: "UNLa, UBA, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "andrea-gergich.jpg",
  },
  {
    nombre: "Lic. en DI Emilia Di Nuzzo",
    cargo: "Consejo de redacción",
    bio: "María Emilia Di Nuzzo es Diseñadora Industrial UNLa y maestranda en Metodologías de la Investigación Científica en la misma institución. Posee un posgrado en Diseño de Juegos, Juguetes e Interfaces Lúdicas FADU-UBA. Su perfil académico se ha centrado en el diseño inclusivo y en el estudio y aplicación de metodologías de diseño. Desde 2021 se desempeña como docente en las materias Métodos de Diseño, Semiótica Aplicada al Diseño e Historia Social del Diseño I y II. Actualmente, su campo de trabajo se orienta al desarrollo de soluciones proyectuales basadas en metodologías de diseño, dentro de una red de Talleres Protegidos del Área Metropolitana de Buenos Aires (AMBA), con foco en la mejora de procesos y entornos inclusivos.",
    institucion: "UNLa, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "emilia.jpg",
  },
  {
    nombre: "Lic. en DCV Andrea Baffigi",
    cargo: "Consejo de redacción",
    bio: "Andrea Soledad Baffigi, Licenciada en Diseño y Comunicación Visual graduada en la UNLa. Desde el 2017 se desempeña como docente investigadora en dicha institución educativa, actualmente formando parte la cátedra de Espacio Tipográfico 1 y Taller de Diseño Orientado. Además, forma parte del equipo docente de Tramo Inicial a la carrera y coopera en la organización y gestión de los Talleres Finales Integradores y el Laboratorio de Diseño. En 2024 se incorporó en la Diplomatura en Artes del Libro (UNA) como docente de las Clínicas de Diseño de proyectos editoriales. Fuera del ámbito académico, es diseñadora freelance.",
    institucion: "UNLa, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "andrea.jpeg",
  },
  {
    nombre: "DT Cecilia Dorado",
    cargo: "Consejo de redacción",
    bio: "Cecilia Dorado es Diseñadora Textil FADU UBA. Especialista en Gestión de la Tecnología y la Innovación (UNSAM) y Diplomada en Desarrollo Local y Economía Social (FLACSO). Docente adjunta e investigadora de la Licenciatura en Diseño Industrial y Coordinadora General del LAD Laboratorio de Diseño (UNLa). Investiga en diseño textil, innovación sustentable y biotextiles. Diseñadora en el Centro de Diseño Industrial del Instituto Nacional de Tecnología Industrial (INTI). Responsable del Biofablab y de la línea 'Materiales, procesos y productos innovadores biobasados'.",
    institucion: "UNLa, INTI, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "dorado.png",
  },
  {
    nombre: "Esp. DI Diego Velazco",
    cargo: "Consejo de redacción",
    bio: "Diego Velazco es Diseñador Industrial (UNLP) y Especialista en Metodología de la Investigación Científica (UNLa). Coordinador académico de la Licenciatura en Diseño Industrial (UNLa) y Coordinador Técnico del Laboratorio de Diseño (LAD-UNLA). Profesor adjunto concursado de Fundamentos de la Forma (UNLP) y de Modelado Digital, Taller de Diseño Industrial V y Taller de Trabajo Integrador Final (UNLa). Docente de Posgrado en la Especialización en Tecnologías de Fabricación Digital (UNLa). Director y codirector de proyectos Amílcar Herrera (UNLa), PAD (MINCyT), PROCODAS (MINCyT) y PIO (CONICET). Evaluador de la Agencia Nacional de Promoción de la Investigación, el Desarrollo Tecnológico y la Innovación. Profesional independiente en diseño y producción de mobiliario y capacitador en modelado digital.",
    institucion: "UNLa, UNLP, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "diego-velazco.jpg",
  },
  {
    nombre: "Mg. DI Edgardo Chanquia",
    cargo: "Consejo de redacción",
    bio: "Edgardo Rafael Chanquia, es Magister en Metodología de la Investigación Científica UNLa. Posee los títulos de Diseñador Industrial UNLP, Prof. en Diseño Industrial UNLP y Diseñador Gráfico ESAV. Cuenta con amplia experiencia previa en investigación académica. Actualmente en la UNLa se desempeña como profesor adjunto concursado en las asignaturas: Dibujo Técnico; Morfología; Desarrollos Visuales; Taller de Diseño Industrial 1 y 3. Además, es docente del Seminario en Diseño de Paneles de Presentación de Productos y está a cargo de la organización, montaje y publicación de muestras y productos de los estudiantes de la Licenciatura en Diseño Industrial. Es Miembro del Consejo Departamental del Departamento de Humanidades y Artes de la UNLa.",
    institucion: "UNLa, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "chanqui.jpeg",
  },
  {
    nombre: "Esp. DG Angelina Sanchez",
    cargo: "Dirección de Diseño Editorial · Consejo de redacción",
    bio: "Angelina Sánchez es diseñadora gráfica y especialista en diseño de tipografías (FADU-UBA). Desde 2005 dicta clases en la Universidad Nacional de Lanús (UNLa) en materias vinculadas al diseño editorial y uso tipográfico. Trabaja en forma independiente en proyectos de identidad visual, difusión y diseño editorial asociados al ámbito de la cultura y la música independiente. Participó en proyectos colaborativos en diseño, investigación y difusión como «Soytutype» fundidiora tipográfica; «AEZpress» letterpress; «Epígrafes porteños» tipografía en fachadas de Bs. As.; «Etnotipografías» proyecto de diseño en UNLa.; «Birras y letras» y «Chancho-va» colectivos de diseño tipográfico y divulgación. Algunos de sus diseños fueron seleccionados en la Bienal Latinoamericana «Tipos Latinos» y en la Bienal de Diseño FADU. «Ruda», tipografía publicada en Google Fonts recibió en 2023 la distinción del Sello Buen Diseño argentino y es utilizada actualmente en la identidad visual de la Escuela de Bellas Artes (ESAD) de Reims en Francia.",
    institucion: "UNLa, UBA, Argentina",
    contacto: "dsbladunla@gmail.com",
    foto: "angelina.jpeg",
  },
  {
    nombre: "Lic. en DCV Melisa Cerda",
    cargo: "Coordinación de Diseño Editorial · Diseño y programación web",
    bio: "Melisa Beatriz Cerda es Licenciada en Diseño y Comunicación Visual graduada en la Universidad de Lanús, donde actualmente trabaja como docente e investigadora. Docente de las materias Espacio Tipográfico 1, Taller de Diseño 4 y Computación 1. Investigadora en el proyecto 'Cartografía formal de la letra en torno a la obra de Francisco Salamone durante la década 1930 en la Provincia de Buenos Aires'. Diseñadora gráfica, desarrolladora web y bordadora, le apasiona todo lo que tenga que ver con el mundo gráfico y poder compartirlo a través de la docencia.",
    institucion: "UNLa, Argentina",
    contacto: "dsblad.diseno@gmail.com",
    foto: "melisa.jpeg",
  },

  {
    nombre: "Dra. DI Edurne Battista",
    institucion: "INTA, UNDAV, Argentina",
    cargo: "Consejo científico",
    contacto: "dsbladunla@gmail.com",
  },
  {
    nombre: "Dra. Verónica Devalle",
    institucion: "CONICET, UBA",
    cargo: "Consejo científico",
    contacto: "dsbladunla@gmail.com",
  },
  {
    nombre: "DI. Roxana Garbarini",
    institucion: "",
    cargo: "Consejo científico",
    contacto: "dsbladunla@gmail.com",
  },
  {
    nombre: "Prof. DG Juan Lo Bianco",
    institucion: "UNLa, Argentina",
    cargo: "Consejo científico",
    contacto: "dsbladunla@gmail.com",
  },
  {
    nombre: "Mg. DI Alejandra Sivila Soza",
    institucion: "CONICET, UNLP, UNAJ, UNLa",
    cargo: "Consejo científico",
    contacto: "dsbladunla@gmail.com",
  },
  {
    nombre: "Ariadna Jaime Schröpfer",
    cargo: "Diseño y Maquetación editorial",
    contacto: "dsblad.diseno@gmail.com",
    institucion: "UNLa, Argentina",
    bio: "Estudiante avanzada DyCV",
  },
  {
    nombre: "Camila Giampietro",
    cargo: "Maquetación editorial",
    contacto: "dsblad.diseno@gmail.com",
    institucion: "UNLa, Argentina",
    bio: "Estudiante avanzada DyCV",
  },
  {
    nombre: "Abril Costa",
    cargo: "Maquetación editorial",
    contacto: "dsblad.diseno@gmail.com",
    institucion: "UNLa, Argentina",
    bio: "Estudiante avanzada DyCV",
  },
  {
    nombre: "Agustina Quiroga",
    cargo: "Maquetación editorial",
    contacto: "dsblad.diseno@gmail.com",
    institucion: "UNLa, Argentina",
    bio: "Estudiante avanzada DyCV",
  },
  {
    nombre: "Sol Martinez",
    cargo: "Maquetación editorial",
    contacto: "dsblad.diseno@gmail.com",
    institucion: "UNLa, Argentina",
    bio: "Estudiante avanzada DyCV",
  },
  {
    nombre: "Camila Costilla",
    cargo: "Maquetación editorial",
    contacto: "dsblad.diseno@gmail.com",
    institucion: "UNLa, Argentina",
    bio: "Estudiante avanzada DyCV",
  },
];

const contenedor = document.getElementById("equipo-dsblad");

miembros.forEach((m) => {
  contenedor.innerHTML += `
    <div class="miembro-equipo flex items-start p-4 gap-2 bg-bg">
      <img src="images/equipo/${m.foto || "placeholder.png"}" alt="" />
      <div class="flex flex-col justify-center">
        <h3 class="font-bold">${m.nombre || ""}</h3>
        <h4 class="text-sm font-semibold">${
          m.cargo || "Cargo no disponible"
        }</h4>
        <p class="text-sm font-extralight">${m.institucion || ""}</p>
        <details>
          <summary class="text-sm">Ver bio</summary>
          <div>
          <p class="text-sm font-light">${m.bio || "Bio no disponible."}</p>
          <a class="text-xs" href="mailto:${
            m.contacto || "dsbladunla@gmail.com"
          }" >Contacto</a>
          </div>
        </details>
      </div>
    </div>
  `;
});
