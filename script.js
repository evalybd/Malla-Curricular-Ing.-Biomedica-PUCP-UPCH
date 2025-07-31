// script.js

const cursos = {
  // Ciclo 1
  "1MAT04": { nombre: "Álgebra matricial y geometría analítica", ciclo: 1, abre: ["1MAT06", "1MAT07"], req: [] },
  "1MAT05": { nombre: "Fundamentos de cálculo", ciclo: 1, abre: ["1MAT06"], req: [] },
  "1FIS01": { nombre: "Fundamentos de física", ciclo: 1, abre: ["1FIS02"], req: [] },
  "1CAY01": { nombre: "Intro a la ingeniería biomédica", ciclo: 1, abre: [], req: [] },
  "1CAY04": { nombre: "Comunicación y redacción", ciclo: 1, abre: [], req: [] },
  "1CAY42": { nombre: "Filosofía", ciclo: 1, abre: [], req: [] },

  // Ciclo 2
  "1MAT06": { nombre: "Cálculo diferencial", ciclo: 2, abre: ["1MAT07"], req: ["1MAT04", "1MAT05"] },
  "1FIS02": { nombre: "Física 1", ciclo: 2, abre: ["1FIS04"], req: ["1FIS01"] },
  "1FIS03": { nombre: "Laboratorio de Física 1", ciclo: 2, abre: ["1FIS04"], req: ["1FIS01"] },
  "1ING03": { nombre: "Diseño industrial", ciclo: 2, abre: [], req: [] },
  "1CAY38": { nombre: "Química general", ciclo: 2, abre: ["1CAY06", "1CAY07"], req: [] },
  "1CAY39": { nombre: "Procesos de innovación en bioingeniería", ciclo: 2, abre: ["1CAY41"], req: [] },
  "CDR123": { nombre: "Pensamiento cristiano y realidad social", ciclo: 2, abre: [], req: [] },

  // Ciclo 3
  "1MAT07": { nombre: "Cálculo integral", ciclo: 3, abre: ["1MAT23"], req: ["1MAT06"] },
  "1FIS04": { nombre: "Física 2", ciclo: 3, abre: ["1FIS06"], req: ["1FIS02", "1FIS03", "1MAT07"] },
  "1FIS05": { nombre: "Laboratorio de Física 2", ciclo: 3, abre: ["1FIS06"], req: ["1FIS02", "1FIS03"] },
  "1INF01": { nombre: "Fundamentos de programación", ciclo: 3, abre: ["1CAY46", "1IEE09"], req: [] },
  "1CAY06": { nombre: "Química orgánica", ciclo: 3, abre: ["1CAY40", "1CAY45"], req: ["1CAY38"] },
  "1CAY07": { nombre: "Biología", ciclo: 3, abre: ["1CAY44", "1CAY45"], req: ["1CAY06"] },

  // Ciclo 4
  "1MAT23": { nombre: "Cálculo vectorial", ciclo: 4, abre: ["1MAT32", "1CAY43"], req: ["1MAT07"] },
  "1FIS06": { nombre: "Física 3", ciclo: 4, abre: ["1IBM14", "1IBM15"], req: ["1FIS04", "1FIS05"] },
  "1FIS07": { nombre: "Laboratorio de Física 3", ciclo: 4, abre: [], req: ["1FIS06"] },
  "1CAY40": { nombre: "Fund. de análisis instrumental", ciclo: 4, abre: [], req: ["1CAY06"] },
  "1IEE08": { nombre: "Circuitos eléctricos", ciclo: 4, abre: ["1IEE09"], req: [] },
  "1CAY41": { nombre: "Fund. de biodiseño", ciclo: 4, abre: [], req: ["1CAY39"] },

  // Ciclo 5
  "1MAT32": { nombre: "Series y transformadas", ciclo: 5, abre: ["1IBM03", "1ING09"], req: ["1MAT23"] },
  "1CAY44": { nombre: "Anatomía y fisiología", ciclo: 5, abre: ["1CAY49"], req: ["1CAY07"] },
  "1CAY45": { nombre: "Bioquímica", ciclo: 5, abre: ["1CAY14", "1CAY47"], req: ["1CAY06", "1CAY07"] },
  "1CAY46": { nombre: "Programación avanzada", ciclo: 5, abre: [], req: ["1INF01"] },
  "1IBM14": { nombre: "Ciencia e Ing. de materiales", ciclo: 5, abre: ["1ING06", "1ING07", "1CAY15"], req: ["1FIS06"] },
  "1IEE09": { nombre: "Circuitos y sistemas digitales", ciclo: 5, abre: ["1IEE10"], req: ["1INF01", "1IEE08"] },

  // Ciclo 6
  "1CAY14": { nombre: "Microbiología y cultivo celular", ciclo: 6, abre: ["1CAY21"], req: ["1CAY45"] },
  "1CAY47": { nombre: "Molecular biology for engineers", ciclo: 6, abre: [], req: ["1CAY45"] },
  "1CAY48": { nombre: "Proyectos de biodiseño 1", ciclo: 6, abre: ["1IBM15"], req: ["1FIS06"] },
  "1ING06": { nombre: "Fund. de mecánica de los biomateriales", ciclo: 6, abre: ["1ING10"], req: ["1IBM14"] },
  "1IEE10": { nombre: "Electrónica básica", ciclo: 6, abre: ["1CAY50", "1CAY51"], req: ["1IEE09"] },
  "1ING09": { nombre: "Digital Signal Processing", ciclo: 6, abre: ["ING340"], req: ["1MAT32"] },

  // Ciclo 7
  "1CAY15": { nombre: "Mecánica y transporte de fluidos", ciclo: 7, abre: [], req: ["1IBM14"] },
  "1CAY43": { nombre: "Bioestadística", ciclo: 7, abre: [], req: ["1MAT23"] },
  "1CAY49": { nombre: "Fisiopatología", ciclo: 7, abre: [], req: ["1CAY44"] },
  "1CAY50": { nombre: "Instrumentación biomédica", ciclo: 7, abre: ["1IBM16"], req: ["1IEE10"] },
  "1CAY51": { nombre: "Intro a señales biomédicas", ciclo: 7, abre: [], req: ["1IEE10"] },
  "1IBM15": { nombre: "Proyectos de biodiseño 2", ciclo: 7, abre: ["1CAY52"], req: ["1CAY48"] },
  "1ING07": { nombre: "Biomateriales", ciclo: 7, abre: [], req: ["1IBM14"] },

  // Ciclo 8
  "1IBM16": { nombre: "Ingeniería clínica 1", ciclo: 8, abre: ["1CAY53"], req: ["1CAY50"] },
  "1CAY21": { nombre: "Intro a ingeniería de tejidos", ciclo: 8, abre: [], req: ["1CAY14"] },
  "1CAY36": { nombre: "Antropología", ciclo: 8, abre: [], req: [] },
  "1CAY52": { nombre: "Modelos de negocios en bioingeniería", ciclo: 8, abre: ["1CAY57"], req: ["1IBM15"] },
  "1IBM03": { nombre: "Teoría de control en sistemas biológicos", ciclo: 8, abre: [], req: ["1MAT32"] },
  "1ING10": { nombre: "Biomecánica", ciclo: 8, abre: [], req: ["1ING06"] },
  "ING340": { nombre: "Intro to Medical Imaging", ciclo: 8, abre: [], req: ["1ING09"] },

  // Ciclo 9
  "1CAY53": { nombre: "Ingeniería clínica 2", ciclo: 9, abre: [], req: ["1IBM16"] },
  "1CAY37": { nombre: "Ética", ciclo: 9, abre: [], req: [] },
  "1CAY54": { nombre: "Desarrollo profesional 1", ciclo: 9, abre: ["1IBM18"], req: [] },
  "1IBM18": { nombre: "Desarrollo profesional 2", ciclo: 9, abre: [], req: ["1CAY54"] },
  "ELECTIVO1": { nombre: "Electivo de tesis 1", ciclo: 9, abre: [], req: [] },
  "ELECTIVO2": { nombre: "Curso electivo 1", ciclo: 9, abre: [], req: [] },
  "ELECTIVO3": { nombre: "Curso electivo 2", ciclo: 9, abre: [], req: [] },

  // Ciclo 10
  "1CAY56": { nombre: "Desarrollo profesional 3", ciclo: 10, abre: [], req: [] },
  "1CAY57": { nombre: "Normas y regulaciones", ciclo: 10, abre: ["1IBM19"], req: ["1CAY52"] },
  "1IBM19": { nombre: "Desarrollo profesional 4", ciclo: 10, abre: [], req: ["1CAY57"] },
  "ELECTIVO4": { nombre: "Electivo de tesis 2", ciclo: 10, abre: [], req: [] },
  "ELECTIVO5": { nombre: "Curso electivo 3", ciclo: 10, abre: [], req: [] },
  "ELECTIVO6": { nombre: "Curso electivo 4", ciclo: 10, abre: [], req: [] },
  "ELECTIVO7": { nombre: "Curso electivo 5", ciclo: 10, abre: [], req: [] },
  "ELECTIVO8": { nombre: "Curso electivo 6", ciclo: 10, abre: [], req: [] }
};

const malla = document.getElementById("malla");

function crearCiclos() {
  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "ciclo";
    columna.id = `ciclo${i}`;
    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${i}`;
    columna.appendChild(titulo);
    malla.appendChild(columna);
  }
}

function mostrarCursos() {
  for (let codigo in cursos) {
    const curso = cursos[codigo];
    const div = document.createElement("div");
    div.className = "curso bloqueado";
    div.id = codigo;
    div.innerHTML = `<strong>${codigo}</strong><br>${curso.nombre}`;

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = "Requiere: " + (curso.req.length ? curso.req.join(", ") : "Ninguno");
    div.appendChild(tooltip);

    div.addEventListener("click", () => aprobarCurso(codigo));
    document.getElementById(`ciclo${curso.ciclo}`).appendChild(div);
  }
  actualizarEstado();
}

function aprobarCurso(codigo) {
  const curso = document.getElementById(codigo);
  if (!curso.classList.contains("bloqueado")) {
    curso.classList.toggle("aprobado");
    actualizarEstado();
  }
}

function actualizarEstado() {
  for (let codigo in cursos) {
    const curso = cursos[codigo];
    const div = document.getElementById(codigo);
    const requisitos = curso.req;
    const aprobados = requisitos.every(req => {
      const elem = document.getElementById(req);
      return elem && elem.classList.contains("aprobado");
    });

    if (requisitos.length === 0 || aprobados) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  }
}

crearCiclos();
mostrarCursos();
