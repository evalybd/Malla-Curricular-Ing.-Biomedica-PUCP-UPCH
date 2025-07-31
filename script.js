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
  // Continúa igual para ciclos 5 a 10 con campo "orden" para ordenarlos izquierda a derecha
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
