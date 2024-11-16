console.log("js is work");

const starCount = 50;

const starsContainer = document.querySelector(".stars");

function createStar() {
  const star = document.createElement("div");
  const size = Math.random() * 3 + 5;
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;

  star.classList.add("star");
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${xPos}px`;
  star.style.top = `${yPos}px`;

  starsContainer.appendChild(star);
}

for (let i = 0; i < starCount; i++) {
  createStar();
}

function animateStars() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    const newPosY = parseFloat(star.style.top) + Math.random() * 2;
    if (newPosY > window.innerHeight) {
      star.style.top = "-10px";
    } else {
      star.style.top = `${newPosY}px`;
    }
  });
  requestAnimationFrame(animateStars);
}

animateStars();
