document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("login-popup");
  const openBtn = document.querySelector(".btn-2 button");
  const cancelBtn = document.querySelector(".cancel-btn");
  const browseskill = document.getElementById("btn-1");
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll
  });

  cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scroll
  });

  // Optional: close when clicking outside the modal
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
  browseskill.addEventListener("click",()=>{
window.location.href = "browse_skills.html"
});
});


