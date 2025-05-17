import portfolioImage from '/assets/projects/portfolio-project.png';
import techStoreImage from '/assets/projects/Tech-Store-App.png';
import simonImage from '/assets/projects/simon.png';
import spotifyImage from '/assets/projects/spotify.png';

export const projects = [
  {
    id: 1,
    title: "Personal Developer Portfolio",
    description: "A minimalist and elegant portfolio built with React, JavaScript, Tailwind CSS, and Framer Motion. Features dark mode, smooth animations, and responsive design.",
    technologies: ["React","Vite", "JavaScript","HTML", "Tailwind CSS"],
    image: portfolioImage,
    link: "https://mohodaditya.github.io/Personal-Portfolio/",
    repoLink: "https://github.com/mohodaditya/Personal-Portfolio.git",
  },
  {
    id: 2,
    title: "Tech Store App",
    description: "A responsive Tech Store app built with React, Vite, HTML, CSS, and JavaScript. It features product listings, comparisons, and ratings for laptops, phones, and accessories.",
    technologies: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    image: techStoreImage,
    link: "https://mohodaditya.github.io/Tech-Store_App/",
    repoLink: "https://github.com/mohodaditya/Tech-Store_App.git",
  },
  {
    id: 3,
    title: "Simon Game",
    description: "Classic memory game built using pure JavaScript with engaging animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: simonImage,
    link: "https://mohodaditya.github.io/Simon-Game-/",
    repoLink: "https://github.com/mohodaditya/Simon-Game-.git",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: "A simple Spotify web player clone built using HTML and CSS, mimicking the original UI. It features a sidebar, top navigation, content sections, and a fixed bottom music player.",
    technologies: ["HTML", "CSS"],
    image: spotifyImage,
    link: "https://mohodaditya.github.io/Spotify-Clone-/",
    repoLink: "https://github.com/mohodaditya/Spotify-Clone-.git",
  },
];