import coordinate from './data/apartement/coordinate.json'
import greetings from './data/apartement/greetings.json'
import main from './lib/main.js'

function initPage() {
  const page = new main(greetings, coordinate)
  page.run()
}

document.addEventListener('DOMContentLoaded', () => {
  initPage()
})
