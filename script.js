const cursos = [
  // Ciclo 1
  { ciclo: 1, orden: 1, id: "1MAT04", nombre: "Álgebra matricial", requisitos: [], desbloquea: ["1MAT06"] },
  { ciclo: 1, orden: 2, id: "1MAT05", nombre: "Fundamentos de cálculo", requisitos: [], desbloquea: ["1MAT06"] },
  { ciclo: 1, orden: 3, id: "1FIS01", nombre: "Fundamentos de física", requisitos: [], desbloquea: ["1FIS02"] },
  { ciclo: 1, orden: 4, id: "1CAY01", nombre: "Intro a la ing. biomédica", requisitos: [], desbloquea: [] },
  { ciclo: 1, orden: 5, id: "1CAY04", nombre: "Comunicación y redacción", requisitos: [], desbloquea: [] },
  { ciclo: 1, orden: 6, id: "1CAY42", nombre: "Filosofía", requisitos: [], desbloquea: [] },

  // Ciclo 2
  { ciclo: 2, orden: 1, id: "1MAT06", nombre: "Cálculo diferencial", requisitos: ["1MAT04", "1MAT05"], desbloquea: ["1MAT07"] },
  { ciclo: 2, orden: 2, id: "1FIS02", nombre: "Física 1", requisitos: ["1FIS01"], desbloquea: ["1FIS04"] },
  { ciclo: 2, orden: 3, id: "1FIS03", nombre: "Lab de física 1", requisitos: [], desbloquea: ["1FIS04"] },
  { ciclo: 2, orden: 4, id: "1ING03", nombre: "Diseño industrial", requisitos: [], desbloquea: [] },
  { ciclo: 2, orden: 5, id: "1CAY38", nombre: "Química general", requisitos: [], desbloquea: ["1CAY06", "1CAY07"] },
  { ciclo: 2, orden: 6, id: "1CAY39", nombre: "Procesos de innovación", requisitos: [], desbloquea: ["1CAY41"] },
  { ciclo: 2, orden: 7, id: "CDR123", nombre: "Pens. cristiano y sociedad", requisitos: [], desbloquea: [] },
// Ciclo 3
  { ciclo: 3, orden: 1, id: "1MAT07", nombre: "Cálculo integral", requisitos: ["1MAT06"], desbloquea: ["1MAT23"] },
  { ciclo: 3, orden: 2, id: "1FIS04", nombre: "Física 2", requisitos: ["1FIS02", "1FIS03"], desbloquea: ["1FIS06"] },
  { ciclo: 3, orden: 3, id: "1FIS05", nombre: "Lab de física 2", requisitos: ["1FIS02"], desbloquea: ["1FIS06"] },
  { ciclo: 3, orden: 4, id: "1INF01", nombre: "Fund. de programación", requisitos: [], desbloquea: ["1CAY46", "1IEE09"] },
  { ciclo: 3, orden: 5, id: "1CAY06", nombre: "Química orgánica", requisitos: ["1CAY38"], desbloquea: ["1CAY40", "1CAY45"] },
  { ciclo: 3, orden: 6, id: "1CAY07", nombre: "Biología", requisitos: ["1CAY06"], desbloquea: ["1CAY44", "1CAY45"] },

  // Ciclo 4
  { ciclo: 4, orden: 1, id: "1MAT23", nombre: "Cálculo vectorial", requisitos: ["1MAT07"], desbloquea: ["1MAT32", "1CAY43"] },
  { ciclo: 4, orden: 2, id: "1FIS06", nombre: "Física 3", requisitos: ["1FIS04"], desbloquea: ["1IBM14", "1CAY48"] },
  { ciclo: 4, orden: 3, id: "1FIS07", nombre: "Lab de física 3", requisitos: ["1FIS06"], desbloquea: [] },
  { ciclo: 4, orden: 4, id: "1CAY40", nombre: "Análisis instrumental", requisitos: ["1CAY06"], desbloquea: [] },
  { ciclo: 4, orden: 5, id: "1IEE08", nombre: "Circuitos eléctricos", requisitos: [], desbloquea: ["1IEE09"] },
  { ciclo: 4, orden: 6, id: "1CAY41", nombre: "Fund. de biodiseño", requisitos: ["1CAY39"], desbloquea: [] }
  
  // Ciclo 5
  { ciclo: 5, orden: 1, id: "1MAT32", nombre: "Series y Transformadas", requisitos: ["1MAT23"], desbloquea: ["1IBM03", "1ING09"] },
  { ciclo: 5, orden: 2, id: "1CAY44", nombre: "Anatomía y Fisiología", requisitos: ["1CAY07"], desbloquea: ["1CAY49"] },
  { ciclo: 5, orden: 3, id: "1CAY45", nombre: "Bioquímica", requisitos: ["1CAY06", "1CAY07"], desbloquea: ["1CAY14", "1CAY47"] },
  { ciclo: 5, orden: 4, id: "1CAY46", nombre: "Programación Avanzada", requisitos: ["1INF01"], desbloquea: [] },
  { ciclo: 5, orden: 5, id: "1IBM14", nombre: "Ciencia e Ing. Materiales", requisitos: ["1FIS06"], desbloquea: ["1ING06", "1ING07"] },
  { ciclo: 5, orden: 6, id: "1IEE09", nombre: "Circuitos y Sistemas Digitales", requisitos: ["1INF01", "1IEE08"], desbloquea: ["1IEE10"] },

  // Ciclo 6 
  { ciclo: 6, orden: 1, id: "1CAY14", nombre: "Microbiología", requisitos: ["1CAY45"], desbloquea: ["1CAY21"] },
  { ciclo: 6, orden: 2, id: "1CAY47", nombre: "Molecular Biology", requisitos: ["1CAY45"], desbloquea: [] },
  { ciclo: 6, orden: 3, id: "1CAY48", nombre: "Proyectos Biodiseño 1", requisitos: ["1FIS06"], desbloquea: ["1IBM15"] },
  { ciclo: 6, orden: 4, id: "1ING06", nombre: "Mecánica de Biomateriales", requisitos: ["1IBM14"], desbloquea: ["1ING10"] },
  { ciclo: 6, orden: 5, id: "1IEE10", nombre: "Electrónica Básica", requisitos: ["1IEE09"], desbloquea: ["1CAY50", "1CAY51"] },
  { ciclo: 6, orden: 6, id: "1ING09", nombre: "Digital Signal Processing", requisitos: ["1MAT32"], desbloquea: ["ING340"] },

  // Ciclo 7
  { ciclo: 7, orden: 1, id: "1CAY15", nombre: "Mecánica y Transporte", requisitos: [], desbloquea: [] },
  { ciclo: 7, orden: 2, id: "1CAY43", nombre: "Bioestadística", requisitos: ["1MAT23"], desbloquea: [] },
  { ciclo: 7, orden: 3, id: "1CAY49", nombre: "Fisiopatología", requisitos: ["1CAY44"], desbloquea: [] },
  { ciclo: 7, orden: 4, id: "1CAY50", nombre: "Instrumentación Biomédica", requisitos: ["1IEE10"], desbloquea: ["1IBM16"] },
  { ciclo: 7, orden: 5, id: "1CAY51", nombre: "Intro Señales Biomédicas", requisitos: ["1IEE10"], desbloquea: [] },
  { ciclo: 7, orden: 6, id: "1IBM15", nombre: "Proy. Biodiseño 2", requisitos: ["1CAY48"], desbloquea: ["1CAY52"] },
  { ciclo: 7, orden: 7, id: "1ING07", nombre: "Biomateriales", requisitos: ["1IBM14"], desbloquea: [] },

  // Ciclo 8
  { ciclo: 8, orden: 1, id: "1IBM16", nombre: "Ingeniería Clínica 1", requisitos: ["1CAY50"], desbloquea: ["1CAY53"] },
  { ciclo: 8, orden: 2, id: "1CAY21", nombre: "Ing. de Tejidos", requisitos: ["1CAY14"], desbloquea: [] },
  { ciclo: 8, orden: 3, id: "1CAY36", nombre: "Antropología", requisitos: [], desbloquea: [] },
  { ciclo: 8, orden: 4, id: "1CAY52", nombre: "Modelos de Negocio", requisitos: ["1IBM15"], desbloquea: ["1CAY57"] },
  { ciclo: 8, orden: 5, id: "1IBM03", nombre: "Teoría de Control", requisitos: ["1MAT32"], desbloquea: [] },
  { ciclo: 8, orden: 6, id: "1ING10", nombre: "Biomecánica", requisitos: ["1ING06"], desbloquea: [] },
  { ciclo: 8, orden: 7, id: "ING340", nombre: "Intro Medical Imaging", requisitos: ["1ING09"], desbloquea: [] },

  // Ciclo 9
  { ciclo: 9, orden: 1, id: "1CAY53", nombre: "Ing. Clínica 2", requisitos: ["1IBM16"], desbloquea: [] },
  { ciclo: 9, orden: 2, id: "1CAY37", nombre: "Ética", requisitos: [], desbloquea: [] },
  { ciclo: 9, orden: 3, id: "1CAY54", nombre: "Des. Prof. 1", requisitos: [], desbloquea: ["1IBM18"] },
  { ciclo: 9, orden: 4, id: "1IBM18", nombre: "Des. Prof. 2", requisitos: ["1CAY54"], desbloquea: [] },
  { ciclo: 9, orden: 5, id: "TESIS1", nombre: "Electivo Tesis 1", requisitos: [], desbloquea: [] },
  { ciclo: 9, orden: 6, id: "ELEC9A", nombre: "Electivo 1", requisitos: [], desbloquea: [] },
  { ciclo: 9, orden: 7, id: "ELEC9B", nombre: "Electivo 2", requisitos: [], desbloquea: [] },

  // Ciclo 10
  { ciclo: 10, orden: 1, id: "1CAY56", nombre: "Des. Prof. 3", requisitos: [], desbloquea: ["1IBM19"] },
  { ciclo: 10, orden: 2, id: "1CAY57", nombre: "Normas y Regulaciones", requisitos: ["1CAY52"], desbloquea: [] },
  { ciclo: 10, orden: 3, id: "1IBM19", nombre: "Des. Prof. 4", requisitos: ["1CAY56"], desbloquea: [] },
  { ciclo: 10, orden: 4, id: "TESIS2", nombre: "Electivo Tesis 2", requisitos: [], desbloquea: [] },
  { ciclo: 10, orden: 5, id: "ELEC10A", nombre: "Electivo 3", requisitos: [], desbloquea: [] },
  { ciclo: 10, orden: 6, id: "ELEC10B", nombre: "Electivo 4", requisitos: [], desbloquea: [] },
  { ciclo: 10, orden: 7, id: "ELEC10C", nombre: "Electivo 5", requisitos: [], desbloquea: [] },
  { ciclo: 10, orden: 8, id: "ELEC10D", nombre: "Electivo 6", requisitos: [], desbloquea: [] }
];

const aprobados = new Set();
const malla = document.getElementById("malla");
const info = document.getElementById("info");

function actualizarMalla() {
  malla.innerHTML = "";
  const porCiclo = {};

  cursos.forEach(c => {
    if (!porCiclo[c.ciclo]) porCiclo[c.ciclo] = [];
    porCiclo[c.ciclo].push(c);
  });

  Object.keys(porCiclo).sort((a, b) => a - b).forEach(ciclo => {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

    const contenedor = document.createElement("div");
    contenedor.className = "cursos";

    porCiclo[ciclo].sort((a, b) => a.orden - b.orden).forEach(curso => {
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

      contenedor.appendChild(div);
    });

    divCiclo.appendChild(contenedor);
    malla.appendChild(divCiclo);
  });
}

actualizarMalla();
