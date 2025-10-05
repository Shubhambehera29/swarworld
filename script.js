// Default Dark Mode
if(localStorage.getItem('theme')==='dark' || localStorage.getItem('theme')===null){
  document.body.classList.add('dark');
}

// Sidebar Toggle
function toggleSidebar(){
  const sb = document.getElementById('sidebar');
  sb.classList.toggle('active');
  sb.setAttribute('aria-hidden', sb.classList.contains('active')?'false':'true');
}

// Dark Mode Toggle
function toggleDarkMode(){
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

// Language Change
function changeLanguage(lang){
  alert("Language switched to: " + lang + " (Demo Only)");
}

// Update Year
document.getElementById('year').textContent = new Date().getFullYear();

// Floating Notes
function createNote(){
  const note = document.createElement("div");
  note.classList.add("note");
const notes = [
  "🎹",  // piano keyboard
  "🥁",  // drum
  "🪕",  // banjo
  "🎷",  // saxophone
  "🎺",  // trumpet
  "🎸",  // guitar
  "🪗",  // accordion
  "🎻",  // violin
  "🎧",  // headphones
  "🪘",  // conga drum
  "📯",   // postal horn (classic brass)
    "🎵",  // single note
  "🎶",  // multiple notes
  "🎼",  // musical score
  "🎤" // microphone
];

  note.innerText = notes[Math.floor(Math.random()*notes.length)];
  
  // Random position and speed
  note.style.left = Math.random() * 100 + "vw";
  note.style.animationDuration = (2 + Math.random() * 2) + "s"; // 2–4s
  note.style.fontSize = (20 + Math.random() * 30) + "px";
  
  document.querySelector(".hero").appendChild(note);

  setTimeout(() => note.remove(), 3000); // remove faster (5s)
}

// spawn quickly at page load
for(let i=0; i<80; i++){
  setTimeout(createNote, i*200); // 10 notes within first 2s
}

// keep spawning continuously
setInterval(createNote, 400); // new note every 0.4s


// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{window.scrollY>200?backToTop.style.display="block":backToTop.style.display="none";});
backToTop.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});

// Force dark mode as default
document.body.classList.add('dark');
document.body.classList.remove('light');

// Toggle Learn More Details for Geography Cards
function toggleDetails(btn){
  const details = btn.nextElementSibling;
  if(details.style.display === "block"){
    details.style.display = "none";
    btn.innerText = "Learn More";
  } else {
    details.style.display = "block";
    btn.innerText = "Show Less";
  }
}


// Sidebar toggle
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  sb.classList.toggle('active');
  sb.setAttribute('aria-hidden', sb.classList.contains('active') ? 'false' : 'true');
}

// Close sidebar if clicked outside
document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');
  if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
  }
});

// Close sidebar on ESC key
document.addEventListener('keydown', function(e) {
  const sidebar = document.getElementById('sidebar');
  if (e.key === "Escape" && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
  }
});
