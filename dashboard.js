window.onload = () => {
  const data = localStorage.getItem("userProfile");
  const memsince = localStorage.getItem("memsince");

  if (data && memsince) {
    const { name, bio, teach, learn } = JSON.parse(data);
    const sinceFormatted = new Date(memsince).toLocaleDateString();

    const welcomeEl = document.getElementById("welcome");
    const nameEl = document.getElementById("dash-name");
    const username = document.getElementById("user-name");
    const bioEl = document.getElementById("dash-bio");
    const teachEl = document.getElementById("dash-teach");
    const learnEl = document.getElementById("dash-learn");
    const memSinceEl = document.getElementById("mem-since");

    if (welcomeEl) welcomeEl.textContent = "Welcome " + name;
    if (nameEl) nameEl.textContent = name;
    if (bioEl) bioEl.textContent = bio;
    if (teachEl) teachEl.textContent = teach.join(", ");
    if (learnEl) learnEl.textContent = learn.join(", ");
    if (memSinceEl) memSinceEl.textContent = "Member since : " + sinceFormatted;
    if (username) username.textContent = name;
  }
  const profile = document.getElementById("profile");
  const dashboard = document.getElementById("dashboard");

  profile.addEventListener("click", () => {
    document.getElementById("proff").style.display = "";
    document.getElementById("activity-and-sessions").style.display = "none";
    document.getElementById("new-matches").style.display = "none";
    document.getElementById("my-exchanges").style.display = "none";
  });


document.getElementById("dashboard").addEventListener("click",()=>{
    document.getElementById("proff").style.display = "none";
    document.getElementById("activity-and-sessions").style.display = "";
    document.getElementById("new-matches").style.display = "none";
    document.getElementById("my-exchanges").style.display = "none";
});

document.getElementById("matches").addEventListener("click",()=>{
    document.getElementById("proff").style.display = "none";
    document.getElementById("activity-and-sessions").style.display = "none";
    document.getElementById("new-matches").style.display = "";
    document.getElementById("my-exchanges").style.display = "none";
});

document.getElementById("exchanges").addEventListener("click",()=>{
    document.getElementById("proff").style.display = "none";
    document.getElementById("activity-and-sessions").style.display = "none";
    document.getElementById("new-matches").style.display = "none";
    document.getElementById("my-exchanges").style.display = "";
});
// Better Approach
// function showOnly(idToShow) {
//   const sections = [
//     "proff",
//     "activity-and-sessions",
//     "new-matches",
//     "my-exchanges"
//   ];

//   sections.forEach((id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.classList.toggle("hidden", id !== idToShow);
//   });
// }

// // Event listeners using the new toggle logic
// document.getElementById("profile").addEventListener("click", () => {
//   showOnly("proff");
// });

// document.getElementById("dashboard").addEventListener("click", () => {
//   showOnly("activity-and-sessions");
// });

// document.getElementById("matches").addEventListener("click", () => {
//   showOnly("new-matches");
// });

// document.getElementById("exchanges").addEventListener("click", () => {
//   showOnly("my-exchanges");
// });


  const beforeprofile = document.getElementById("main-img");
  if (beforeprofile.firstElementChild.getAttribute("src") == "user.svg") {
    beforeprofile.style.padding = "13px";
  }
};

