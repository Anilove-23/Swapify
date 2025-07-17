document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("login-popup");
  const openBtn = document.querySelector(".btn-2 button");
  const cancelBtn = document.querySelector(".cancel-btn");
  const browseskill = document.getElementById("btn-1");
  const userprofile = document.getElementById("user-acc");

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

userprofile.addEventListener("click",()=>{
  window.location.href = "dashboard.html"
})

document.getElementById("create-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const bio = document.getElementById("login-textarea").value.trim();
  const teach = document.getElementById("skills-teach").value.trim().split(",");
  const learn = document.getElementById("skills-learn").value.trim().split(",");
 
  if (!name || !teach.length || !learn.length) {
    alert("Please fill in all required fields.");
    return;
  }

  const userProfile = {
    name,
    bio,
    teach,
    learn
  };

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  
  const memsince = new Date().toISOString();
    localStorage.setItem("memsince", memsince);

    // document.getElementById("create-btn").addEventListener("click", () =>{
    //   document.getElementById("login-btn").style.display = "none";
    // });
    document.getElementById("btn-2").style.display = "none";
  // Redirect to dashboard
  window.location.href = "dashboard.html";
});

});


