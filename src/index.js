import data from './data'
import './index.scss'

// Setup UI
var main = document.querySelector('#main')
for (let x = 0; x < data.length; x++) {
  const section = document.createElement('div')
  section.classList.add('data-property')
  section.style.backgroundColor = data[x].color
  section.innerText = data[x].name
  main.appendChild(section)
}
