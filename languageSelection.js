document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");
    const registrationContainer = document.getElementById("registration-container");
    const languageSelection = document.getElementById("language-selection");
    const levelSelection = document.getElementById("level-selection");
    const nextButton = document.getElementById("next-to-level");
    const startButton = document.getElementById("start-lessons");

    let selectedLanguage = null;
    let selectedLevel = null;

    // Обработка регистрации
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            localStorage.setItem("username", username);
            registrationContainer.style.display = "none";
            languageSelection.style.display = "block";
        }
    });

    // Обработка выбора языка
    document.querySelectorAll("#language-selection .option").forEach(option => {
        option.addEventListener("click", () => {
            document.querySelectorAll("#language-selection .option").forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");
            option.querySelector("input").checked = true;
            selectedLanguage = option.dataset.value;
        });
    });

    nextButton.addEventListener("click", () => {
        if (!selectedLanguage) {
            alert("Lūdzu izvēlieties valodu!"); // Просим выбрать язык
            return;
        }
        languageSelection.style.display = "none";
        levelSelection.style.display = "block";
    });

    // Обработка выбора уровня
    document.querySelectorAll("#level-selection .option").forEach(option => {
        option.addEventListener("click", () => {
            document.querySelectorAll("#level-selection .option").forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");
            option.querySelector("input").checked = true;
            selectedLevel = option.dataset.value;
        });
    });

    startButton.addEventListener("click", () => {
        if (!selectedLevel) {
            alert("Lūdzu izvēlieties līmeni!");
            return;
        }

        localStorage.setItem("language", selectedLanguage);
        localStorage.setItem("level", selectedLevel);

        window.location.href = `../hearai-app/html/${selectedLanguage}-${selectedLevel}.html`;
    });
});
