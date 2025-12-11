const userGit = document.getElementById("github-user");
const socialMedia = document.getElementById("socialmedia-flyer");

document.addEventListener("mouseover", (e) => {
  console.log(e.target.className);
  switch (e.target.className) {
    case "fa-brands fa-linkedin":
      socialMedia.innerHTML = `<a class='text-light text-decoration-none' href="">Linkedin</a>`;
      break;
    case "fa-brands fa-github":
      socialMedia.innerHTML = `<a class='text-light text-decoration-none' href="https://github.com/pbl-o">Pbl-o</a>`;
      break;
    case "fa-solid fa-square-envelope":
      socialMedia.innerHTML = `<a class='text-light text-decoration-none' href="#">pdiazarenas541@gmail.com</a>`;
      break;
  }
});
