// Get elements
const image = document.getElementById("testimonial-img");
const name = document.getElementById("name");
const paragrap = document.getElementById("paragrap");
const role = document.getElementById("role");

// Get buttons
const next1 = document.querySelector(".next");
const preview = document.querySelector(".prev");

// Testimonial persons array
const personArr = [
  {
    id: 1,
    img: "img/1.jpg",
    name: "Ayaan Khan",
    para: "Passionate about building robust and scalable web applications.",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    img: "img/1.jpg",
    name: "Saira Patel",
    para: "Focused on crafting visually appealing and user-friendly interfaces.",
    role: "UI/UX Designer",
  },
  {
    id: 3,
    img: "img/2.jpg",
    name: "Ravi Mehta",
    para: "Specializes in backend architecture and database optimization.",
    role: "Backend Developer",
  },
  {
    id: 4,
    img: "img/3.jpg",
    name: "Priya Sharma",
    para: "Loves coding and developing innovative solutions to complex problems.",
    role: "Frontend Developer",
  },
  {
    id: 5,
    img: "img/4.jpg",
    name: "Arjun Das",
    para: "Experienced in SEO and digital marketing to boost online presence.",
    role: "Digital Marketing Specialist",
  },
 //add more persons on the Arry
];

let currentIndex = 0;

// Display the current person's details
function showPerson(personIndex) {
  const items = personArr[personIndex];
  name.innerHTML = items.name;
  paragrap.innerHTML = items.para;
  role.innerHTML = items.role;
  image.src = items.img;
}

// Load the initial person on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentIndex);
});

// Next button event listener
next1.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= personArr.length) {
    currentIndex = 0;
  }
  showPerson(currentIndex);
});

// Previous button event listener
preview.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = personArr.length - 1;
  }
  showPerson(currentIndex);
});


setInterval(() => {
  currentIndex++;
  if (currentIndex >= personArr.length) {
    currentIndex = 0; // Reset to the first person after the last one
  }
  showPerson(currentIndex);
}, 3000); // 5000 ms = 5 seconds