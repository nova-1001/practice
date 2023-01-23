const imageElement = document.getElementById("cat-image");

fetch("https://docs.thecatapi.com/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    imageElement.src = data.message;
  });
