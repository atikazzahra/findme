import coordinate from './data/coordinate.json'
import resolution from './data/resolution.json'
import greetings from './data/greetings.json'
import introduction from './data/introduction.json'
import dialogueManager from './dialogueManager.js'
import { clearAllTimeout, isInsideArea, sleep, getRelativePosition } from './helpers.js'

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

function updateScreenSize() {
  $(SCREEN_CLS).height($(VIDEO_CLS).height())
  $(SCREEN_CLS).width($(VIDEO_CLS).width())
  // updateSpotlightSize()
}

function updateSpotlightSize() {
  const ratio = Math.round($(VIDEO_CLS).width()/resolution.x * 300)
  $(SPOTLIGHT_CLS).css({
    'height': ratio,
    'width': ratio
  })
}

function initEvents() {
  if ($(VIDEO_CLS)[0].readyState === 4 ) {
    updateScreenSize()
    initSearchEvents()
  } else {
    $(VIDEO_CLS).on('loadeddata', (e) => {
      updateScreenSize()
      initSearchEvents()
    })
  }
}

async function initSearchEvents() {
  $(window).resize(() => {
    updateScreenSize()
  })

  $(SCREEN_CLS).on('mousemove', (e) => {
    const diff = $(SPOTLIGHT_CLS).width()/2
    console.log(diff)
    $(SPOTLIGHT_CLS).css({
      'margin-left': e.pageX - diff,
      'margin-top': e.pageY - diff
    })
  })

  $(SCREEN_CLS).on('click', (e) => {
    const VIDEO_RES = {
      x: $(VIDEO_CLS).width(),
      y: $(VIDEO_CLS).height()
    }
    const eventPosition = getRelativePosition(resolution, VIDEO_RES, e)
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
