const back = document.getElementById("back-btnn");

back.addEventListener("click", () => {
    window.history.go(-1)
  });

  function createSkillCard(username, hasSkills, wantsSkills) {
  return `
    <div class="skill-card">
      <h3 class="username">${username}</h3>
      <div class="skills">
        <p><span class="tag tag-have">✅ Has:</span> ${hasSkills.join(', ')}</p>
        <p><span class="tag tag-want">🔄 Wants:</span> ${wantsSkills.join(', ')}</p>
      </div>
    </div>
  `;
}

document.querySelector('.card-container').innerHTML += createSkillCard("Anilove", ["HTML", "CSS"], ["React", "Tailwind"]);
document.querySelector('.card-container').innerHTML += createSkillCard("Anilove", ["HTML", "CSS"], ["React", "Tailwind"]);
document.querySelector('.card-container').innerHTML += createSkillCard("Anilove", ["HTML", "CSS"], ["Reactttt", "Tailwind"]);
