const courses = [
  { code: "1MAT04", title: "Álgebra matricial", unlocks: ["1MAT06"], requirements: [] },
  { code: "1MAT05", title: "Fundamentos de cálculo", unlocks: ["1MAT06"], requirements: [] },
  { code: "1FIS01", title: "Fundamentos de física", unlocks: ["1FIS02"], requirements: [] },
  { code: "1CAY01", title: "Intro a la ingeniería biomédica", unlocks: [], requirements: [] },
  { code: "1MAT06", title: "Cálculo diferencial", unlocks: [], requirements: ["1MAT04", "1MAT05"] },
  { code: "1FIS02", title: "Física 1", unlocks: [], requirements: ["1FIS01"] }
];

const courseState = {};

function getCourseStatus(course) {
  if (!course.requirements.length) return 'unlocked';
  return course.requirements.every(req => courseState[req] === 'completed') ? 'unlocked' : 'locked';
}

function getCycleFromCode(code) {
  if (["1MAT04", "1MAT05", "1FIS01", "1CAY01"].includes(code)) return 1;
  if (["1MAT06", "1FIS02"].includes(code)) return 2;
  return 0;
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

  Object.keys(grouped).sort((a, b) => a - b).forEach(cycle => {
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
          renderCourses();
        });
      }

      column.appendChild(div);
    });

    grid.appendChild(column);
  });
}

renderCourses();
