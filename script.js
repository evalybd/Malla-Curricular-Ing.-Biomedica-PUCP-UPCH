const cursos = [
  { id: "1MAT04", nombre: "Álgebra matricial", requisitos: [], desbloquea: ["1MAT06"] },
  { id: "1MAT05", nombre: "Fundamentos de cálculo", requisitos: [], desbloquea: ["1MAT06"] },
  { id: "1FIS01", nombre: "Fundamentos de física", requisitos: [], desbloquea: ["1FIS02"] },
  { id: "1CAY01", nombre: "Intro a la ing. biomédica", requisitos: [], desbloquea: [] },
  { id: "1CAY04", nombre: "Comunicación y redacción", requisitos: [], desbloquea: [] },
  { id: "1CAY42", nombre: "Filosofía", requisitos: [], desbloquea: [] },

  { id: "1MAT06", nombre: "Cálculo diferencial", requisitos: ["1MAT04", "1MAT05"], desbloquea: ["1MAT07"] },
  { id: "1FIS02", nombre: "Física 1", requisitos: ["1FIS01"], desbloquea: ["1FIS04"] },
  { id: "1FIS03", nombre: "Lab de física 1", requisitos: [], desbloquea: ["1FIS04"] },
  { id: "1ING03", nombre: "Diseño industrial", requisitos: [], desbloquea: [] },
  { id: "1CAY38", nombre: "Química general", requisitos: [], desbloquea: ["1CAY06", "1CAY07"] },
  { id: "1CAY39", nombre: "Procesos de innovación", requisitos: [], desbloquea: ["1CAY41"] },
  { id: "CDR123", nombre: "Pens. cristiano y sociedad", requisitos: [], desbloquea: [] },

  { id: "1MAT07", nombre: "Cálculo integral", requisitos: ["1MAT06"], desbloquea: ["1MAT23"] },
  { id: "1FIS04", nombre: "Física 2", requisitos: ["1FIS02", "1FIS03"], desbloquea: ["1FIS06"] },
  { id: "1FIS05", nombre: "Lab de física 2", requisitos: ["1FIS02"], desbloquea: ["1FIS06"] },
  { id: "1INF01", nombre: "Fund. de programación", requisitos: [], desbloquea: ["1CAY46", "1IEE09"] },
  { id: "1CAY06", nombre: "Química orgánica", requisitos: ["1CAY38"], desbloquea: ["1CAY40", "1CAY45"] },
  { id: "1CAY07", nombre: "Biología", requisitos: ["1CAY06"], desbloquea: ["1CAY44", "1CAY45"] },

  { id: "1MAT23", nombre: "Cálculo vectorial", requisitos: ["1MAT07"], desbloquea: ["1MAT32", "1CAY43"] },
  { id: "1FIS06", nombre: "Física 3", requisitos: ["1FIS04", "1IEE08"], desbloquea: ["1IBM14", "1CAY48"] },
  { id: "1FIS07", nombre: "Lab de física 3", requisitos: ["1FIS06"], desbloquea: [] },
  { id: "1CAY40", nombre: "Análisis instrumental", requisitos: ["1CAY06"], desbloquea: [] },
  { id: "1IEE08", nombre: "Circuitos eléctricos", requisitos: [], desbloquea: ["1IEE09"] },
  { id: "1CAY41", nombre: "Fund. de biodiseño", requisitos: ["1CAY39"], desbloquea: [] },

  { id: "1MAT32", nombre: "Series y Transformadas", requisitos: ["1MAT23"], desbloquea: ["1IBM03", "1ING09"] },
  { id: "1CAY44", nombre: "Anatomía y Fisiología", requisitos: ["1CAY07"], desbloquea: ["1CAY49"] },
  { id: "1CAY45", nombre: "Bioquímica", requisitos: ["1CAY06", "1CAY07"], desbloquea: ["1CAY14", "1CAY47"] },
  { id: "1CAY46", nombre: "Programación avanzada", requisitos: ["1INF01"], desbloquea: [] },
  { id: "1IBM14", nombre: "Ciencia e Ing. Materiales", requisitos: ["1FIS06"], desbloquea: ["1ING06", "1ING07"] },
  { id: "1IEE09", nombre: "Circuitos y sistemas digitales", requisitos: ["1INF01", "1IEE08"], desbloquea: ["1IEE10"] },

  { id: "1CAY14", nombre: "Microbiología y cultivo", requisitos: ["1CAY45"], desbloquea: ["1CAY21"] },
  { id: "1CAY47", nombre: "Molecular biology", requisitos: ["1CAY45"], desbloquea: [] },
  { id: "1CAY48", nombre: "Proy. Biodiseño 1", requisitos: ["1FIS06"], desbloquea: ["1IBM15"] },
  { id: "1ING06", nombre: "Mecánica de Biomateriales", requisitos: ["1IBM14"], desbloquea: ["1ING10"] },
  { id: "1IEE10", nombre: "Electrónica básica", requisitos: ["1IEE09"], desbloquea: ["1CAY50", "1CAY51"] },
  { id: "1ING09", nombre: "DSP", requisitos: ["1MAT32"], desbloquea: ["ING340"] },

  { id: "1CAY15", nombre: "Mecánica y Transporte", requisitos: [], desbloquea: [] },
  { id: "1CAY43", nombre: "Bioestadística", requisitos: ["1MAT23"], desbloquea: [] },
  { id: "1CAY49", nombre: "Fisiopatología", requisitos: ["1CAY44"], desbloquea: [] },
  { id: "1CAY50", nombre: "Instrumentación", requisitos: ["1IEE10"], desbloquea: ["1IBM16"] },
  { id: "1CAY51", nombre: "Intro señales biomédicas", requisitos: ["1IEE10"], desbloquea: [] },
  { id: "1IBM15", nombre: "Proyectos de Biodiseño 2", requisitos: ["1CAY48"], desbloquea: ["1CAY52"] },
  { id: "1ING07", nombre: "Biomateriales", requisitos: ["1IBM14"], desbloquea: [] },

  { id: "1IBM16", nombre: "Ing. Clínica 1", requisitos: ["1CAY50"], desbloquea: ["1CAY53"] },
  { id: "1CAY21", nombre: "Ing. tejidos", requisitos: ["1CAY14"], desbloquea: [] },
  { id: "1CAY36", nombre: "Antropología", requisitos: [], desbloquea: [] },
  { id: "1CAY52", nombre: "Modelos de negocio", requisitos: ["1IBM15"], desbloquea: ["1CAY57"] },
  { id: "1IBM03", nombre: "Teoría de control", requisitos: ["1MAT32"], desbloquea: [] },
  { id: "1ING10", nombre: "Biomecánica", requisitos: ["1ING06"], desbloquea: [] },
  { id: "ING340", nombre: "Intro imaging", requisitos: ["1ING09"], desbloquea: [] },

  { id: "1CAY53", nombre: "Ing. Clínica 2", requisitos: ["1IBM16"], desbloquea: [] },
  { id: "1CAY37", nombre: "Ética", requisitos: [], desbloquea: [] },
  { id: "1CAY54", nombre: "Des. prof. 1", requisitos: [], desbloquea: ["1IBM18"] },
  { id: "1IBM18", nombre: "Des. prof. 2", requisitos: ["1CAY54"], desbloquea: [] },
  { id: "1CAY56", nombre: "Des. prof. 3", requisitos: [], desbloquea: ["1IBM19"] },
  { id: "1CAY57", nombre: "Normas y reg. bioing.", requisitos: ["1CAY52"], desbloquea: [] },
  { id: "1IBM19", nombre: "Des. prof. 4", requisitos: ["1CAY56"], desbloquea: [] }
];

const aprobados = new Set();

const malla = document.getElementById("malla");
const info = document.getElementById("info");

function actualizarMalla() {
  malla.innerHTML = "";
  cursos.forEach(curso => {
    const puedeDesbloquear = curso.requisitos.every(r => aprobados.has(r));
    const div = document.createElement("div");
    div.className = "curso";
    div.textContent = `${curso.id}\n${curso.nombre}`;
    if (aprobados.has(curso.id)) {
      div.classList.add("aprobado");
    } else if (!puedeDesbloquear && curso.requisitos.length > 0) {
      div.classList.add("bloqueado");
      div.title = `Falta: ${curso.requisitos.filter(r => !aprobados.has(r)).join(", ")}`;
    }
    div.onclick = () => {
      if (puedeDesbloquear || curso.requisitos.length === 0) {
        if (aprobados.has(curso.id)) {
          aprobados.delete(curso.id);
        } else {
          aprobados.add(curso.id);
        }
        info.textContent = "";
        actualizarMalla();
      } else {
        info.textContent = `Para desbloquear '${curso.nombre}' necesitas aprobar: ${curso.requisitos.filter(r => !aprobados.has(r)).join(", ")}`;
      }
    };
    malla.appendChild(div);
  });
}

actualizarMalla();
