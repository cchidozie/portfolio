const emailCopy = document.querySelector('.emailCopy')
const projects = document.querySelector('.projects')
// let projectData = require('./projectData')

let projectData = [
  {
    imgUrl: 'https://i.imgur.com/uSMePma.png',
    projectDescription: `4mbmovies is a pitate site to download hdporn`,
    tools: 'HTML5 | CSS | Javascript',
  },
  {
    imgUrl: 'https://i.imgur.com/uSMePma.png',
    projectDescription: `5mbmovies is a pitate site to download hdporn`,
    tools: 'HTML5 | CSS | Javascript',
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
  projects.innerHTML = ` <article class="flex intro">
        <a href="https://watchlists.netlify.app/?" target="_blank"
          ><img
            src=${project.imgUrl}
            alt="Watchlist screenshot"
            height="300px"
            class="projectImage"
          />
        </a>
        <p class="noMargin gap desc absolute watchlist">
          ${project.projectDescription}
          <br />
          <span class="tools"> ${project.tools} </span>
        </p>
      </article>`
})
// projects.innerHTML = ` <article class="flex intro">
//         <a href="https://watchlists.netlify.app/?" target="_blank"
//           ><img
//             src="/images/Watchlist.png"
//             alt="Watchlist screenshot"
//             height="300px"
//             class="projectImage"
//           />
//         </a>

//         <p class="noMargin gap desc absolute watchlist">
//           WatchList is a movie tracking app that works like a to-do list. The
//           site allows you keep a list of movies and TV shows you're interested
//           in and tick them off your list once you have seen them.
//           <br />
//           <span class="tools"> HTML5 | CSS | Javascript </span>
//         </p>
//       </article>`
