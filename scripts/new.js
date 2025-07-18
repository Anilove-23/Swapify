document.getElementById("new-prof-img").addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.querySelector("#main-img img");
      imgElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});
