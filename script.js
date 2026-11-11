let button = document.getElementById("halloweenButton");
let container = document.getElementById("emojiContainer");

button.onclick = function() {
    let emojis = ["🎃", "👻", "🦇", "🍬", "💀", "🕷","🔪"];

    for (let i = 0; i < 40; i++) {
        let emoji = document.createElement("div");

        emoji.className = "falling-emoji";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "%";
        emoji.style.fontSize = (20 + Math.random() * 30) + "px";
        emoji.style.animationDuration = (2 + Math.random() * 3) + "s";
        emoji.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(emoji);

        emoji.addEventListener("animationend", function() {
            emoji.remove();
        });
    }
};
