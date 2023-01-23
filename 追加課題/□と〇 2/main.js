const figure = document.getElementById("figure");
figure.onclick = function () {
  if (this.style.css == "square") {
    this.style.css = "rounded";
  } else if (this.style.css == "rounded") {
    this.style.css = "triangle";
  } else if (this.style.css == "triangle") {
    this.style.css = "square";
  }
};
