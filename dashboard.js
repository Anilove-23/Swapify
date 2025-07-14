document.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("userProfile");
  if (data) {
    const { name, bio, teach, learn } = JSON.parse(data);
    document.getElementById("welcome").textContent = "Welcome " + name;

    document.getElementById("dash-name").textContent = name;
    document.getElementById("dash-bio").textContent = bio;
    document.getElementById("dash-teach").textContent = teach.join(", ");
    document.getElementById("dash-learn").textContent = learn.join(", ");
  }
});
