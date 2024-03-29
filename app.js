const emailCopy = document.querySelector('.emailCopy')
const projects = document.querySelector('.projects')

// let projectData = require('./projectData')

function toggleMobileMenu(menu) {
  menu.classList.toggle('open')
}

let projectData = [
  {
    imgUrl: 'https://i.postimg.cc/7Yn85TLC/Watchlist-1.png',
    title: 'WatchList',
    projectDescription: `WatchList is a movie tracking app that works like a to-do list. The
           site allows you keep a list of movies and TV shows you're interested
           in and tick them off your list once you have seen them.`,
    tools: 'HTML5 | CSS | Javascript | EJS | MongoDB | Express',
  },

  {
    imgUrl: 'https://i.postimg.cc/7Yn85TLC/Watchlist-1.png',
    title: 'List',
    projectDescription: `List is a movie tracking app that works like a to-do list. The
           site allows you keep a list of movies and TV shows you're interested
           in and tick them off your list once you have seen them.`,
    tools: 'HTML5 | CSS | Javascript |',
  },
]

emailCopy.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.clipboardData) {
    event.clipboardData.setData(
      'text/plain',
      emailCopy.textContent.toLocaleLowerCase()
    )
    console.log(event.clipboardData.getData('text'))
  }

  emailCopy.textContent = 'Copied!'

  setInterval(() => {
    emailCopy.textContent = 'chukwugboc@gmail.com'
  }, 3000)
})

console.log(projectData)

projectData.map((project) => {
  projects.innerHTML += ` <li class="flex intro">
        <a href="https://watchlists.netlify.app/?" target="_blank"
          ><img
            src=${project.imgUrl}
            alt="Watchlist screenshot"
            height="270px"
            class="projectImage"
          />
        </a>
        <p class="noMargin gap desc">
        <span class="projectTitle">${project.title}</span>
        <br />
          ${project.projectDescription}
          <br />
          <span class="tools"> ${project.tools} </span>
        </p>
      </li>`
})

