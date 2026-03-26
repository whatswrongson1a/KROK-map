els.forEach(el => io.observe(el));

 const locationsData = [
  {
    id: 1,
    program: "journalism",
    programLabel: "Журналістика",
    title: "Локація кафедри журналістики",
    url: "journalism-location.html",
    description: "Інформаційна локація для абітурієнтів освітньої програми «Журналістика».",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 2,
    program: "psychology",
    programLabel: "Психологія",
    title: "Локація кафедри психології",
    url: "psychology-location.html",
    description: "Тут можна дізнатися деталі про навчання, вступ та програму кафедри психології.",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 3,
    program: "law",
    programLabel: "Юридичний",
    title: "Локація кафедри юридичного факультету",
    url: "law-location.html",
    description: "Локація для консультацій щодо освітньої програми юридичного напряму.",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 4,
    program: "cs",
    programLabel: "Комп`ютерні науки",
    title: "Локація ННІІКТ аудиторія 301",
    url: "cs-location-301.html",
    description: "Одна з основних локацій для ознайомлення з напрямом «Комп`ютерні науки».",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 5,
    program: "cs",
    programLabel: "Комп`ютерні науки",
    title: "Локація ННІІКТ аудиторія 106",
    url: "cs-location-106.html",
    description: "Додаткова локація для освітньої програми «Комп`ютерні науки».",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 6,
    program: "economics",
    programLabel: "Економіка та фінанси",
    title: "Локація кафедри економіки та фінансів",
    url: "economics-and-finances-location.html",
    description: "Локація для абітурієнтів, які цікавляться економічними та фінансовими спеціальностями.",
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
      resultsInfo.textContent = "Будь ласка, оберіть і рівень освіти, і освітню програму.";
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