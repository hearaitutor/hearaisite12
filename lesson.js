function checkAnswers() {
    // Проверка задания 1 (перевод слов)
    const q1 = document.querySelector('input[name="question1"]:checked');
    if (q1 && q1.value === "b") {
        alert("Задание 1: Правильно!");
    } else {
        alert("Задание 1: Неправильно.");
    }

    // Проверка задания 4 (перевод)
    const translationAnswer = document.getElementById('my-name-is').value.trim();
    if (translationAnswer === "Mans vārds ir Džons") {
        alert("Задание 4: Правильно!");
    } else {
        alert("Задание 4: Неправильно.");
    }

    // Проверка задания 5 (порядок слов)
    const wordOrderAnswer = document.getElementById('question-word-order').value.trim();
    if (wordOrderAnswer === "What is your name?") {
        alert("Задание 5: Правильно!");
    } else {
        alert("Задание 5: Неправильно.");
    }
}
