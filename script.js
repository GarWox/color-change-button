const $clickBtn = document.querySelector(".click-btn"),
  $hoverBtn = document.querySelector(".hover-btn"),
  $body = document.body;

let animationInterval;

$clickBtn.addEventListener("click", () => {
  $body.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});

$hoverBtn.addEventListener("mouseover", () => {
  animationInterval = setInterval(() => {
    $body.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
  }, 150);
});

$hoverBtn.addEventListener("mouseout", () => {
  clearInterval(animationInterval);
});
