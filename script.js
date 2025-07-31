function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
  const images =[
    "gym.img/img1.jpg",
    "gym.img/img3.jpg",
    "gym.img/img5.jpg",

  ];
  images.forEach((src) => {
  const img = new Image();
  img.src = src;
});


  let index = 0;
  const heroSection= document.getElementById("hero");
  setInterval(()=>{
    heroSection.style.background = `url(${images[index]}) no-repeat center center/cover`;  
    index = (index + 1) % images.length;
  } , 3000);

  const content = {
    "Personal Training": "Our Personal Training programs are tailored to your goals, fitness level, and preferences. One-on-one guidance helps you progress faster and safely.",
    "Group Classes": "Join our energetic group classes for a fun and motivating way to work out with others. Includes Zumba, HIIT, Yoga, and more.",
    "Nutrition Plans": "Customized nutrition guidance by certified experts to help you build healthy eating habits that support your fitness goals.",
    "Wellness Coaching": "We go beyond fitness. Our wellness coaching includes mental well-being, lifestyle improvements, and stress management.",
    "High Energy Sessions": "Our group classes are packed with energy, motivation, and music that keeps you moving and sweating joyfully.",
  " Scheduled Timings": "Classes are conducted at fixed times throughout the day for better discipline and consistency.",
  " Certified Instructors": "All sessions are guided by certified, professional trainers to ensure safety and effectiveness.",
  " Motivational Environment": "Surround yourself with a community that supports and uplifts your fitness journey."

  };

  function openCard( event ,serviceName) {
    event.preventDefault();

  const card = document.getElementById("services-card");
  card.classList.remove("hidden");
  document.getElementById("card-title").innerText = serviceName;
  document.getElementById("card-desc").innerText = content[serviceName] || "Details coming soon!";
}

function closeCard() {
  const card = document.getElementById("services-card").classList.add("hidden")
  
}


  function showForm(formType) {
    const signupForm = document.getElementById("signup-form");
    const signinForm = document.getElementById("signin-form");

    if (formType === "signup") {
      signupForm.classList.remove("hidden");
      signinForm.classList.add("hidden");
    } else {
      signinForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    }
  }



