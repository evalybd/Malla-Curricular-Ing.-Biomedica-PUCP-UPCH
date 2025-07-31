// script.js - Versión completa con todos los cursos y dependencias

const courses = [
  // Primer Ciclo
  { code: "1MAT04", title: "Álgebra matricial y geometría analítica", unlocks: ["1MAT06", "1MAT07"], requirements: [] },
  { code: "1MAT05", title: "Fundamentos de cálculo", unlocks: ["1MAT06"], requirements: [] },
  { code: "1FIS01", title: "Fundamentos de física", unlocks: ["1FIS02"], requirements: [] },
  { code: "1CAY01", title: "Introducción a la ingeniería biomédica", unlocks: [], requirements: [] },
  { code: "1CAY04", title: "Comunicación y redacción", unlocks: [], requirements: [] },
  { code: "1CAY42", title: "Filosofía", unlocks: [], requirements: [] },

  // Segundo Ciclo
  { code: "1MAT06", title: "Cálculo diferencial", unlocks: ["1MAT07"], requirements: ["1MAT04", "1MAT05"] },
  { code: "1FIS02", title: "Física 1", unlocks: ["1FIS04"], requirements: ["1FIS01"] },
  { code: "1FIS03", title: "Laboratorio de física 1", unlocks: ["1FIS04"], requirements: [] },
  { code: "1ING03", title: "Diseño industrial", unlocks: [], requirements: [] },
  { code: "1CAY38", title: "Química general", unlocks: ["1CAY06", "1CAY07"], requirements: [] },
  { code: "1CAY39", title: "Procesos de innovación en bioingeniería", unlocks: ["1CAY41"], requirements: [] },
  { code: "CDR123", title: "Pensamiento cristiano y realidad social", unlocks: [], requirements: [] },

  // Tercer Ciclo
  { code: "1MAT07", title: "Cálculo integral", unlocks: ["1MAT23"], requirements: ["1MAT06"] },
  { code: "1FIS04", title: "Física 2", unlocks: ["1FIS06"], requirements: ["1FIS02", "1FIS03"] },
  { code: "1FIS05", title: "Laboratorio de física 2", unlocks: ["1FIS06"], requirements: ["1FIS02"] },
  { code: "1INF01", title: "Fundamentos de programación", unlocks: ["1CAY46", "1IEE09"], requirements: [] },
  { code: "1CAY06", title: "Química orgánica", unlocks: ["1CAY40", "1CAY45"], requirements: ["1CAY38"] },
  { code: "1CAY07", title: "Biología", unlocks: ["1CAY44", "1CAY45"], requirements: ["1CAY06"] },

  // Cuarto Ciclo
  { code: "1MAT23", title: "Cálculo vectorial", unlocks: ["1MAT32", "1CAY43"], requirements: ["1MAT07"] },
  { code: "1FIS06", title: "Física 3", unlocks: ["1IBM14", "1CAY48"], requirements: ["1FIS04", "1IEE08"] },
  { code: "1FIS07", title: "Laboratorio de física 3", unlocks: [], requirements: ["1FIS06"] },
  { code: "1CAY40", title: "Fundamentos de análisis instrumental", unlocks: [], requirements: ["1CAY06"] },
  { code: "1IEE08", title: "Circuitos eléctricos", unlocks: ["1IEE09"], requirements: [] },
  { code: "1CAY41", title: "Fundamentos de biodiseño", unlocks: [], requirements: ["1CAY39"] },

  // Quinto Ciclo
  { code: "1MAT32", title: "Series y Transformadas", unlocks: ["1IBM03", "1ING09"], requirements: ["1MAT23"] },
  { code: "1CAY44", title: "Anatomía y Fisiología", unlocks: ["1CAY49"], requirements: ["1CAY07"] },
  { code: "1CAY45", title: "Bioquímica", unlocks: ["1CAY14", "1CAY47"], requirements: ["1CAY06", "1CAY07"] },
  { code: "1CAY46", title: "Programación Avanzada", unlocks: [], requirements: ["1INF01"] },
  { code: "1IBM14", title: "Ciencia e Ingeniería de Materiales", unlocks: ["1ING06", "1ING07", "1CAY15"], requirements: ["1FIS06"] },
  { code: "1IEE09", title: "Circuitos y Sistemas Digitales", unlocks: ["1IEE10"], requirements: ["1IEE08", "1INF01"] },

  // Sexto Ciclo
  { code: "1CAY14", title: "Microbiología y Cultivo Celular", unlocks: ["1CAY21"], requirements: ["1CAY45"] },
  { code: "1CAY47", title: "Molecular biology for engineers", unlocks: [], requirements: ["1CAY45"] },
  { code: "1CAY48", title: "Proyectos de Biodiseño 1", unlocks: ["1IBM15"], requirements: ["1CAY41", "1FIS06"] },
  { code: "1ING06", title: "Fundamentos de Mecánica de los Biomateriales", unlocks: ["1ING10"], requirements: ["1IBM14"] },
  { code: "1IEE10", title: "Electrónica Básica", unlocks: ["1CAY50", "1CAY51"], requirements: ["1IEE09"] },
  { code: "1ING09", title: "Digital Signal Processing", unlocks: ["ING340"], requirements: ["1MAT32"] },

  // Séptimo Ciclo
  { code: "1CAY15", title: "Mecánica y Transporte de Fluidos", unlocks: [], requirements: ["1IBM14"] },
  { code: "1CAY43", title: "Bioestadística", unlocks: [], requirements: ["1MAT23"] },
  { code: "1CAY49", title: "Fisiopatología", unlocks: [], requirements: ["1CAY44"] },
  { code: "1CAY50", title: "Instrumentación Biomédica", unlocks: ["1IBM16"], requirements: ["1IEE10"] },
  { code: "1CAY51", title: "Introducción a Señales Biomédicas", unlocks: [], requirements: ["1IEE10"] },
  { code: "1IBM15", title: "Proyectos de Biodiseño 2", unlocks: ["1CAY52"], requirements: ["1CAY48"] },
  { code: "1ING07", title: "Biomateriales", unlocks: [], requirements: ["1IBM14"] },

  // Octavo Ciclo
  { code: "1IBM16", title: "Ingeniería Clínica 1", unlocks: ["1CAY53"], requirements: ["1CAY50"] },
  { code: "1CAY21", title: "Introducción a Ingeniería de Tejidos", unlocks: [], requirements: ["1CAY14"] },
  { code: "1CAY36", title: "Antropología", unlocks: [], requirements: [] },
  { code: "1CAY52", title: "Modelos de Negocios en Bioingeniería", unlocks: ["1CAY57"], requirements: ["1IBM15"] },
  { code: "1IBM03", title: "Teoría de Control en Sistemas Biológicos", unlocks: [], requirements: ["1MAT32"] },
  { code: "1ING10", title: "Biomecánica", unlocks: [], requirements: ["1ING06"] },
  { code: "ING340", title: "Introduction to Medical Imaging", unlocks: [], requirements: ["1ING09"] },

  // Noveno Ciclo
  { code: "1CAY53", title: "Ingeniería Clínica 2", unlocks: [], requirements: ["1IBM16"] },
  { code: "1CAY37", title: "Ética", unlocks: [], requirements: [] },
  { code: "1CAY54", title: "Desarrollo Profesional en Bioingeniería 1", unlocks: ["1IBM18"], requirements: [] },
  { code: "1IBM18", title: "Desarrollo Profesional en Bioingeniería 2", unlocks: ["1CAY56"], requirements: ["1CAY54"] },

  // Décimo Ciclo
  { code: "1CAY56", title: "Desarrollo Profesional en Bioingeniería 3", unlocks: ["1IBM19"], requirements: ["1IBM18"] },
  { code: "1CAY57", title: "Normas y Regulaciones en Bioingeniería", unlocks: [], requirements: ["1CAY52"] },
  { code: "1IBM19", title: "Desarrollo Profesional en Bioingeniería 4", unlocks: [], requirements: ["1CAY56"] },
];

const courseState = {};

function getCourseStatus(course) {
  if (!course.requirements.length) return 'unlocked';
  const allMet = course.requirements.every(req => courseState[req] === 'completed');
  return allMet ? 'unlocked' : 'locked';
}
function getCycleFromCode(code) {
  if (["1MAT04", "1MAT05", "1FIS01", "1CAY01", "1CAY04", "1CAY42"].includes(code)) return 1;
  if (["1MAT06", "1FIS02", "1FIS03", "1ING03", "1CAY38", "1CAY39", "CDR123"].includes(code)) return 2;
  if (["1MAT07", "1FIS04", "1FIS05", "1INF01", "1CAY06", "1CAY07"].includes(code)) return 3;
  if (["1MAT23", "1FIS06", "1FIS07", "1CAY40", "1IEE08", "1CAY41"].includes(code)) return 4;
  if (["1MAT32", "1CAY44", "1CAY45", "1CAY46", "1IBM14", "1IEE09"].includes(code)) return 5;
  if (["1CAY14", "1CAY47", "1CAY48", "1ING06", "1IEE10", "1ING09"].includes(code)) return 6;
  if (["1CAY15", "1CAY43", "1CAY49", "1CAY50", "1CAY51", "1IBM15", "1ING07"].includes(code)) return 7;
  if (["1IBM16", "1CAY21", "1CAY36", "1CAY52", "1IBM03", "1ING10", "ING340"].includes(code)) return 8;
  if (["1CAY53", "1CAY37", "1CAY54", "1IBM18"].includes(code)) return 9;
  if (["1CAY56", "1CAY57", "1IBM19"].includes(code)) return 10;
  return 0; // En caso de que no encuentre coincidencia
}
function renderCourses() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  const grouped = {};
  courses.forEach(course => {
    const cycle = getCycleFromCode(course.code);
    if (!grouped[cycle]) grouped[cycle] = [];
    grouped[cycle].push(course);
  });

  Object.keys(grouped).sort().forEach(cycle => {
    const column = document.createElement('div');
    column.className = 'cycle-column';

    const heading = document.createElement('h3');
    heading.textContent = `Ciclo ${cycle}`;
    column.appendChild(heading);

    grouped[cycle].forEach(course => {
      const status = courseState[course.code] || getCourseStatus(course);
      courseState[course.code] = status;

      const div = document.createElement('div');
      div.className = `course ${status}`;
      div.dataset.code = course.code;

      const code = document.createElement('div');
      code.className = 'code';
      code.textContent = course.code;

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = course.title;

      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      if (status === 'locked') {
        tooltip.textContent = `Falta: ${course.requirements.filter(req => courseState[req] !== 'completed').join(', ')}`;
      }

      div.appendChild(code);
      div.appendChild(title);
      div.appendChild(tooltip);

      if (status !== 'locked') {
        div.addEventListener('click', () => {
          courseState[course.code] = 'completed';
          course.unlocks.forEach(cod => {
            if (courseState[cod] !== 'completed') {
              const nextCourse = courses.find(c => c.code === cod);
              courseState[cod] = getCourseStatus(nextCourse);
            }
          });
          renderCourses();
        });
      }

      column.appendChild(div);
    });

    grid.appendChild(column);
  });
}

renderCourses();
