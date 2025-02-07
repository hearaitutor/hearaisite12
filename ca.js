function openVoiceScreen(topic) {
    document.getElementById("selected-topic").textContent = topic; // Устанавливаем выбранную тему
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("voice-screen").classList.remove("hidden");
}

function goBack() {
    document.getElementById("voice-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}


function openReading() {
    window.location.href = "../ea2/r.html"; 
}
function openReadAloud() {
    window.location.href = "../ea2/ra.html"; 
}
function openMenu() {
    window.location.href = "../english-A2.html"; 
}
function openChatAI() {
    window.location.href = "../ea2/ca.html"; 
}
function openSubscription() {
    window.location.href = "../ea2/sub.html";
}
function toggleBottomPanel(visible) {
    const panel = document.getElementById("bottom-panel");
    if (visible) {
        panel.classList.remove("hidden");
    } else {
        panel.classList.add("hidden");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    toggleBottomPanel(true); 
});