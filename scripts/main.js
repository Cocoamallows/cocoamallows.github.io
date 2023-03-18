function openLink(link) {
    window.location.href=link;
}

function moveimg() {
    if (!localStorage.getItem("imgpos")) {
        localStorage.setItem("imgpos", "right");
    } else {
        if (localStorage.getItem("imgpos") === "right") {
            const w = getComputedStyle(document.querySelector("img")).width;
            document.querySelector("img").style.right = `calc(100% - 20px - ${w})`;
            localStorage.setItem("imgpos", "left");
        } else {
            document.querySelector("img").style.right = "20px";
            localStorage.setItem("imgpos", "right");
        }
    }
}

document.querySelector(".emoji #turtle").addEventListener("click", () => {
    alert("For every second you stop running I only get closer.");
});