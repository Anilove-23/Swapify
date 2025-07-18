window.onload = ()=>{
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Hide all panels
    panels.forEach(panel => panel.classList.add('hidden'));

    // Activate clicked tab and show its panel
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.remove('hidden');
  });
});
const back = document.getElementById("back");
back.addEventListener("click",()=>{
  window.history.go("-1");
});

  const data = localStorage.getItem("userProfile");
  const { name, bio, teach, learn } = JSON.parse(data);
  const username = document.getElementById("settings-username");
  username.textContent = name ; 
}
