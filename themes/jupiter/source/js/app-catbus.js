import coordinate from './data/catbus/coordinate.json'
import greetings from './data/catbus/greetings.json'
import main from './lib/main.js'

function initPage() {
  const page = new main(greetings, coordinate)
  page.run()
}

document.addEventListener('DOMContentLoaded', () => {
  initPage()
})
