document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("login-popup");
  const openBtn = document.querySelector(".btn-2 button");
  const cancelBtn = document.querySelector(".cancel-btn");
  const browseskill = document.getElementById("btn-1");
  const userprofile = document.getElementById("user-acc");
  const joinBtn = document.getElementById("btn-2");

  // ✅ Check if user is already logged in
  const user = localStorage.getItem("userProfile");
  if (user) {
    if (joinBtn) joinBtn.style.display = "none";
    if (userprofile) userprofile.style.display = "block";
  } else {
    if (joinBtn) joinBtn.style.display = "block";
    if (userprofile) userprofile.style.display = "none";
  }

  // 💬 Open popup
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent background scroll
    });
  }

  // 💬 Close popup (Cancel button)
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      popup.style.display = "none";
      document.body.style.overflow = ""; // Re-enable scroll
    });
  }

  // 💬 Close popup when clicking outside
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  // 💬 Navigate to Browse Skills
  if (browseskill) {
    browseskill.addEventListener("click", () => {
      window.location.href = "/pages/browse_skills.html";
    });
  }

  // 💬 Navigate to Dashboard
  if (userprofile) {
    userprofile.addEventListener("click", () => {
      window.location.href = "/pages/dashboard.html";
    });
  }

  // ✅ Create Profile logic
  const createBtn = document.getElementById("create-btn");
  if (createBtn) {
    createBtn.addEventListener("click", () => {
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
        learn,
      };

      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      localStorage.setItem("memsince", new Date().toISOString());

      if (joinBtn) joinBtn.style.display = "none";
      if (userprofile) userprofile.style.display = "block";

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "/pages/dashboard.html";
      }, 200);
    });
  }
});
