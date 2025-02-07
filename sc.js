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