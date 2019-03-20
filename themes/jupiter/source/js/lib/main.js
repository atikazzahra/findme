import resolution from '../data/resolution.json'
import dialogueManager from './dialogueManager.js'
import { clearAllTimeout, isInsideArea, sleep, getRelativePosition } from './helpers.js'

const VIDEO_CLS = '.video'
const SPOTLIGHT_CLS = '.searchlight'
const SCREEN_CLS = '.searchscreen'
const TITLE_CLS = '.title'
const SUBTITLE_CLS = '.subtitle'
const NAV_CLS = '.navigation'

export default class main {
  constructor(greetings, coordinate) {
    this.greetings = greetings
    this.coordinate = coordinate
  }
  run() {
    this.initGreetings()
    this.initEvents()
    this.initGestureEventListener()
  }
  initGreetings() {
    const manager = new dialogueManager(this.greetings)
    manager.start()
  }
  initEvents() {
    if ($(VIDEO_CLS)[0].readyState === 4 ) {
      this.updateScreenSize()
      this.initSearchEvents()
    } else {
      $(VIDEO_CLS).on('loadeddata', (e) => {
        this.updateScreenSize()
        this.initSearchEvents()
      })
    }
  }
  updateScreenSize() {
    $(SCREEN_CLS).height($(VIDEO_CLS).height())
    $(SCREEN_CLS).width($(VIDEO_CLS).width())
  }
  async initSearchEvents() {
    $(window).resize(() => {
      this.updateScreenSize()
    })
  
    $(window).on('mousemove', (e) => {
      const diff = $(SPOTLIGHT_CLS).width()/2
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
      const foundKey = Object.keys(this.coordinate).find((key) => { 
        const inside = isInsideArea(eventPosition, this.coordinate[key], this.coordinate[key].diff)
        return inside ? key : ''
      })
      if (foundKey) {
        clearAllTimeout()
        $(TITLE_CLS).html('')
        $(SUBTITLE_CLS).html('')
        const dialogue = [{
          text: this.coordinate[foundKey].text,
          class: this.coordinate[foundKey].class
        }]
        const manager = new dialogueManager(dialogue, () => {
          if (foundKey === 'me') {
            this.foundMe()
          }
        })
        manager.start()
      }
      if (foundKey === 'me') {
        $(SPOTLIGHT_CLS).fadeOut(function() {
          $(SPOTLIGHT_CLS).remove()
          $(SCREEN_CLS).off('click')
          $(NAV_CLS).css({display: 'inline-block'})
        })
      }
    })
  }
  async foundMe() {
    await sleep(1000)
  }
  initGestureEventListener() {
    const mc = new Hammer($(SCREEN_CLS)[0])
    mc.get('pan').set({
      threshold: 0,
      direction: Hammer.DIRECTION_ALL });
    mc.on('pan', (ev) => {
      const top = $(VIDEO_CLS).offset().top + ev.deltaY
      const left = $(VIDEO_CLS).offset().left + ev.deltaX
      const lastHeight = window.innerHeight - top
      const isHeightValid = lastHeight <= $(VIDEO_CLS).height() && top <= 0
      const lastWidth = window.innerWidth - left
      const isWidthValid = lastWidth <= $(VIDEO_CLS).width() && left <= 0
      if (isHeightValid) {
        const heightStyle = {
          'transform': 'none',
          'top': `${top}px`
        }
        $(VIDEO_CLS).css(heightStyle)
        $(SCREEN_CLS).css(heightStyle)
      } 
      if (isWidthValid) {
        const widthStyle = { 
          'transform': 'none',
          'left': `${left}px`
        }
        $(VIDEO_CLS).css(widthStyle)
        $(SCREEN_CLS).css(widthStyle)
      }
    });
  }
}