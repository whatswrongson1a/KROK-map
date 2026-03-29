els.forEach(el => io.observe(el));

 const locationsData = [
  {
    id: 1,
    program: "journalism",
    programLabel: "С7 Журналістика",
    title: "«Медіуми». Подкаст про медіаіндустрію",
    url: "journalists-location.html",
    description: "Інформаційна локація для абітурієнтів освітньої програми «Журналістика».",
    levels: ["bachelor", "master"]
  },
  {
    id: 2,
    program: "psychology",
    programLabel: "С4 Психологія",
    title: "Профорієнтаційне тестування ",
    url: "psychology-location.html",
    description: "Тут можна дізнатися деталі про навчання, вступ та програму кафедри психології.",
    levels: ["bachelor", "master"]
  },
  {
    id: 3,
    program: "law",
    programLabel: "D8 Право",
    title: "«Право в дії - твій старт у професії»",
    url: "pravo-location.html",
    description: "Локація для консультацій щодо освітньої програми юридичного напряму.",
    levels: ["bachelor", "master"]
  },
  {
    id: 4,
    program: "cs",
    programLabel: "F3 Комп’ютерні науки",
    title: "Локація ННІІКТ аудиторія 301",
    url: "cs-location-301.html",
    description: "Одна з основних локацій для ознайомлення з напрямом «Комп`ютерні науки».",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 5,
    program: "cs",
    programLabel: "F3 Комп’ютерні науки",
    title: "ІТ-КРОК – КОМП’ЮТЕРНІ НАУКИ",
    url: "cs-location-106.html",
    description: "Додаткова локація для освітньої програми «Комп`ютерні науки».",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 6,
    program: "economics",
    programLabel: "D2 Фінанси, банківська справа, страхування та фондовий ринок",
    title: "Фінансові-економічні тренди в епоху цифровізації",
    url: "economics-and-finances-location.html",
    description: "Локація для абітурієнтів, які цікавляться економічними та фінансовими спеціальностями.",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 7,
    program: "psychology",
    programLabel: "С4 Психологія",
    title: "Поринь у світ психології",
    url: "psychology-location.html",
    description: "Тут можна дізнатися деталі про навчання, вступ та програму кафедри психології.",
    levels: ["bachelor", "master"]
  },
  {
    id: 8,
    program: "managment",
    programLabel: "D3 Менеджмент",
    title: "Leader of the Future",
    url: "psychology-location.html",
    description: "Тут можна дізнатися деталі про навчання, вступ та програму кафедри психології.",
    levels: ["college", "bachelor", "master"]
  }
];

  const levelMap = {
    college: "Коледж",
    bachelor: "Бакалаврат",
    master: "Магістратура"
  };

  const levelShortMap = {
    college: "К",
    bachelor: "Б",
    master: "М"
  };

  const educationLevel = document.getElementById("educationLevel");
  const programType = document.getElementById("programType");
  const locationsGrid = document.getElementById("locationsGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsInfo = document.getElementById("resultsInfo");

  const showResultsBtn = document.getElementById("showResultsBtn");
  const showAllBtn = document.getElementById("showAllBtn");
  const resetBtn = document.getElementById("resetBtn");

  function createBadges(levels) {
    return levels.map(level => {
      return `<span class="level-badge" title="${levelMap[level]}">${levelShortMap[level]}</span>`;
    }).join("");
  }

  function createCard(item) {
  return `
    <a href="${item.url}" class="location-card">
      <div class="card-top">
        <span class="card-program">📘 ${item.programLabel}</span>
        <div class="level-badges">
          ${createBadges(item.levels)}
        </div>
      </div>

      <h3>${item.title}</h3>
      <p>${item.description}</p>

      <div class="card-footer">
        <span class="card-tag">Доступно для: ${item.levels.map(level => levelMap[level]).join(", ")}</span>
      </div>
    </a>
  `;
}

  function renderCards(items) {
    locationsGrid.innerHTML = "";

    if (!items.length) {
      emptyState.classList.add("show");
      return;
    }

    emptyState.classList.remove("show");
    locationsGrid.innerHTML = items.map(createCard).join("");
  }

  function filterLocations() {
    const selectedLevel = educationLevel.value;
    const selectedProgram = programType.value;

    if (!selectedLevel || !selectedProgram) {
      resultsInfo.textContent = "Будь ласка, оберіть і ступінь освіти, і спеціальність.";
      renderCards([]);
      return;
    }

    const filtered = locationsData.filter(item => {
      return item.program === selectedProgram && item.levels.includes(selectedLevel);
    });

    resultsInfo.textContent = `Показано результат для: ${levelMap[selectedLevel]} / ${programType.options[programType.selectedIndex].text}`;
    renderCards(filtered);
  }

  function showAllLocations() {
    resultsInfo.textContent = "Показано весь список доступних локацій.";
    renderCards(locationsData);
  }

  function resetFilters() {
    educationLevel.value = "";
    programType.value = "";
    locationsGrid.innerHTML = "";
    emptyState.classList.remove("show");
    resultsInfo.textContent = "Оберіть критерії або перегляньте весь список.";
  }

  showResultsBtn.addEventListener("click", filterLocations);
  showAllBtn.addEventListener("click", showAllLocations);
  resetBtn.addEventListener("click", resetFilters);

  educationLevel.addEventListener("change", () => {
    if (educationLevel.value && programType.value) {
      filterLocations();
    }
  });

  programType.addEventListener("change", () => {
    if (educationLevel.value && programType.value) {
      filterLocations();
    }
  });