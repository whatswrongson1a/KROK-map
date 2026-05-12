els.forEach(el => io.observe(el));

 const locationsData = [
  {
    id: 1,
    program: "cs",
    programLabel: "F3 Комп’ютерні науки",
    title: "ІТ-КРОК – КОМП’ЮТЕРНІ НАУКИ",
    url: "nniikt-location-106.html",
    description: "Презентація освітніх програм: Комп’ютерні науки (бакалавр), UI/UX проєктування та розробка (бакалавр), Agile-технології в проєктному менеджменті (магістр)",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 2,
    program: "journalism",
    programLabel: "С7 Журналістика",
    title: "«Медіуми». Подкаст про медіаіндустрію",
    url: "journalists-location.html",
    description: "Презентація освітніх програм: Журналістика (бакалавр та магістр)",
    levels: ["bachelor", "master"]
  },
  {
    id: 3,
    program: "gotelno-restoranna-sprava",
    programLabel: "J2 Готельно-ресторанна справа та кейтеринг",
    title: "Ділова-гра «ЯК добратись? Де зупинитись? Що подивитись?»",
    url: "gotel-restoran.html",
    description: "Презентація освітніх програм: Журналістика (бакалавр та магістр)",
    levels: ["bachelor", "master"]
  },
  {
    id: 4,
    program: "law",
    programLabel: "D8 Право",
    title: "«Право в дії - твій старт у професії»",
    url: "pravo-location.html",
    description: "Презентація освітніх програм: Право (бакалавр та магістр)",
    levels: ["bachelor", "master"]
  },
  {
    id: 5,
    program: "cs",
    programLabel: "F3 Комп’ютерні науки",
    title: "ІТ-КРОК - 3D-ДРУК & РОБОТОТЕХНІКА (IoT)",
    url: "nniikt-location-301.html",
    description: "Презентація освітніх програм: Комп’ютерні науки (бакалавр), UI/UX проєктування та розробка (бакалавр)",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 6,
    program: "economics",
    programLabel: ["D2 Фінанси, банківська справа, страхування та фондовий ринок", " С1 Економіка"],
    title: "Фінансові-економічні тренди в епоху цифровізації",
    url: "d2-location-finances-economics.html",
    description: "Презентація освітніх програм кафедри економіки та фінансів. Датльніше на сторінці локації",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 7,
    program: "psychology",
    programLabel: "С4 Психологія",
    title: "Поринь у світ психології",
    url: "poryn-u-svit-psyhologii.html",
    description: "Презентація освітніх програм: Організаційна психологія (бакалавр), Екстремальна та кризова психологія (бакалавр), Психологія (магістр)",
    levels: ["bachelor", "master"]
  },
  {
    id: 8,
    program: "management",
    programLabel: "D3 Менеджмент",
    title: "Leader of the Future",
    url: "leader-of-the-future.html",
    description: "Презентація освітніх програм: Менедмент (коледж), Менедмент (бакалавр), Менедмент організацій (магістр), Управління логістичною діяльністью (магістр)",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 9,
    program: "management",
    programLabel: "D3 Менеджмент",
    title: "Територія лідерства",
    url: "terytoria-liderstva.html",
    description: "Презентація освітніх програм: Менедмент (коледж), Менедмент (бакалавр), Менедмент організацій (магістр), Управління логістичною діяльністью (магістр)",
    levels: ["bachelor", "master"]
  },
  {
    id: 10,
    program: "marketing",
    programLabel: "D5 Маркетинг",
    title: "Маркетинговий хаб «Точка росту»",
    url: "marketingoviy-hub.html",
    description: "Презентація освітніх програм: Маркетинг (коледж, бакалавр, магістр)",
    levels: ["college", "bachelor", "master"]
  },
  {
    id: 11,
    program: "marketing",
    programLabel: "D5 Маркетинг",
    title: "Освіта чи ілюзія: що насправді дає маркетинг",
    url: "marketing-college.html",
    description: "Презентація освітніх програм: Маркетинг (коледж)",
    levels: ["college"]
  },
  {
    id: 12,
    program: "design",
    programLabel: "B2 Дизайн",
    title: "Design Lab: Простір креативних ідей",
    url: "b2-design.html",
    description: "Презентація освітніх програм: Дизайн середовища (бакалавр), Графічний дизайн (бакалавр)",
    levels: ["bachelor"]
  },
  {
    id: 13,
    program: "management",
    programLabel: "D3 Менеджмент",
    title: "Бізнес-школа КРОК",
    url: "biznes-shkola.html",
    description: "Презентація освітніх програм: Бізнес-адміністрування, Медіація та менеджмент конфліктів, Менеджмент проектів та процесів",
    levels: ["master"]
  },
  {
    id: 14,
    program: "fahoviy koledge",
    programLabel: "Фаховий коледж",
    title: "Коло друзів (для слухачів підготовчих курсів)",
    url: "fahovyi-koledge.html",
    description: "",
    levels: ["college"]
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