
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    yesButton.addEventListener("click", function () {
        alert("Yay! 💖");
    });

    noButton.addEventListener("mouseover", function () {
        this.style.position = "absolute";
        this.style.left = Math.random() * window.innerWidth + "px";
        this.style.top = Math.random() * window.innerHeight + "px";
    });
});