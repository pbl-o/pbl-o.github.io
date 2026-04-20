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

const portfolioWrapper = document.getElementById("portfolio-wrapper");
const projects = [
  {
    name: "Gluten Free Market",
    description: "Página de E-Commerce  (backend)",
    url: "https://glutenfree-market-l8mc.onrender.com/",
    imgSrc: "../imgs/gluten-free.png",
  },
  {
    name: "Coletivo Gabirú",
    description: "Collective Portafolio",
    url: "https://gabirucoletivo.github.io",
    imgSrc: "../imgs/capa_gabiru.png",
  },
  {
    name: "O som que se esconde nos Torrões",
    description: "Project's website",
    url: "https://somdetorrao.github.io/betatest/",
    imgSrc: "../imgs/O_som.png",
  },
  {
    name: "PBO",
    description: "PBO's artist portfolio",
    url: "https://thepbo.github.io/",
    imgSrc: "../imgs/PBO_capa.png",
  },
  {
    name: "Pizzeria Ticcino",
    description: "Landing page React & Bootstrap",
    url: "https://pizzaticcino.netlify.app/",
    imgSrc: "../imgs/ticcino.png",
  },
  {
    name: "Cuppon",
    description: "Landing page Bootstrap exercise",
    url: "https://pbl-o.github.io/d-bootstrap/",
    imgSrc: "../imgs/des-boot.png",
  },
  {
    name: "Inmobiliaria",
    description: "Rendering html elements using JS.",
    url: "https://pbl-o.github.io/arreglos-objetos/",
    imgSrc: "../imgs/Inmobiliaria.png",
  },

  {
    name: "The Piano Store",
    description: "Landing page animated with CSS",
    url: "https://pbl-o.github.io/animacion-css/",
    imgSrc: "../imgs/pianostore.png",
  },
];

const mapCards = () => {
  let mapCard = projects
    .map(
      (item, index) =>
        `
     <!-- Proyecto n° ${index}  -->
          <div class="col">
            <div class="card p-2">
              <a href="${item.url}"
                ><img
                  src="${item.imgSrc}"
                  class="img-portfolio"
                  alt= "imagen de proyecto: ${item.name} - ${item.description}" 
              /></a>
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a
                  href="${item.url}"
                  class="btn btn-dark fw-bolder"
                  >Go to Page</a
                >
              </div>
            </div>
          </div>
  
  `,
    )
    .join("");

  return mapCard;
};

/* let container = "";

const renderCards = () => {
  for (let item of projects) {
    container += `
     <!-- Proyecto n° num  -->
          <div class="col">
            <div class="card p-2">
              <a href="${item.url}"
                ><img
                  src="${item.imgSrc}"
                  class="img-portfolio"
                  alt= "imagen de proyecto: ${item.name} - ${item.description}" 
              /></a>
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a
                  href="${item.url}"
                  class="btn btn-dark fw-bolder"
                  >Go to Page</a
                >
              </div>
            </div>
          </div>
  
  `;
  }
  console.log(container);
  return container;
}; */

if (portfolioWrapper) {
  portfolioWrapper.innerHTML = mapCards();
}
