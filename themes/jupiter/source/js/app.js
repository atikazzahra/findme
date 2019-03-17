import coordinate from './data/coordinate.json'
import greetings from './data/greetings.json'
import introduction from './data/introduction.json'
import dialogueManager from './dialogueManager.js'
import { clearAllTimeout, isInsideArea, sleep } from './helpers.js'

const VIDEO_CLS = '.video'
const SPOTLIGHT_CLS = '.searchlight'
const SCREEN_CLS = '.searchscreen'
const TITLE_CLS = '.title'
const SUBTITLE_CLS = '.subtitle'
const INTRO_CLS = '.introduction'

function initGreetings() {
  const dialogue = greetings
  const manager = new dialogueManager(dialogue)
  manager.start()
}

function initEvents() {
  if ($(VIDEO_CLS)[0].readyState === 4 ) {
    $(SCREEN_CLS).height($('video').height())
    $(SCREEN_CLS).width($('video').width())
    initSearchEvents()
  } else {
    $(VIDEO_CLS).on('loadeddata', (e) => {
      $(SCREEN_CLS).height($('video').height())
      $(SCREEN_CLS).width($('video').width())
      initSearchEvents()
    })
  }
}

async function initSearchEvents() {
  $(SCREEN_CLS).on('mousemove', (e) => {
    $(SPOTLIGHT_CLS).css({
      'margin-left': e.pageX - 150,
      'margin-top': e.pageY - 150
    })
  })

  $(SCREEN_CLS).on('click', (e) => {
    const eventPosition = { x: e.offsetX, y: e.offsetY }
    const diff = 50
    const foundKey = Object.keys(coordinate).find((key) => { 
      const inside = isInsideArea(eventPosition, coordinate[key], diff)
      return inside ? key : ''
    })
    if (foundKey) {
      clearAllTimeout()
      $(TITLE_CLS).html('')
      $(SUBTITLE_CLS).html('')
      const dialogue = [{
        text: coordinate[foundKey].text,
        class: coordinate[foundKey].class
      }]
      const manager = new dialogueManager(dialogue, () => {
        if (foundKey === 'me') {
          foundMe()
        }
      })
      manager.start()
    }
    if (foundKey === 'me') {
      $(SPOTLIGHT_CLS).fadeOut(function() {
        $(SPOTLIGHT_CLS).remove()
        $(SCREEN_CLS).off('click')
      })
    }
  })
}

async function foundMe() {
  await sleep(1000)
  $(SUBTITLE_CLS).html('')
  $(INTRO_CLS).css({'display': 'inline-block'})
  const introDialogue = introduction
  const introductionManager = new dialogueManager(introDialogue)
  introductionManager.start()
}

document.addEventListener('DOMContentLoaded', () => {
  initGreetings()
  initEvents()
})
