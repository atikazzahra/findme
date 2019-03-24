import resolution from '../data/resolution.json'
import dialogueManager from './dialogueManager.js'
import { clearAllTimeout, isInsideArea, sleep, getRelativePosition } from './helpers.js'

const VIDEO_CLS = '.video'
const SPOTLIGHT_CLS = '.searchlight'
const SCREEN_CLS = '.searchscreen'
const TITLE_CLS = '.title'
const SUBTITLE_CLS = '.subtitle'
const NAV_CLS = '.navigation'
let lastPosX = 0;
let lastPosY = 0;
let isDragging = false;
export default class main {
  constructor(greetings, coordinate) {
    this.greetings = greetings
    this.coordinate = coordinate
  }
  initGreetings() {
    const manager = new dialogueManager(this.greetings)
    manager.start()
  }
  run() {
    if ($(VIDEO_CLS)[0].readyState === 4 ) {
      this.loadSpotlight()
      this.updateScreenSize()
    } else {
      $(VIDEO_CLS).on('loadeddata', () => {
        this.loadSpotlight()
        this.updateScreenSize()
      })
    }
  }
  loadSpotlight() {
    const initialCenterWidth = $('.text-autoplay')[0].offsetLeft
    const initialCenterHeight = $('.text-autoplay')[0].offsetTop
    const diff = $(SPOTLIGHT_CLS).width()/2
    $(SPOTLIGHT_CLS).css({ 
      marginLeft: initialCenterWidth - diff,
      marginTop: initialCenterHeight - diff})
    $(SPOTLIGHT_CLS).fadeIn()
    setTimeout(() => {
      $(VIDEO_CLS).fadeIn()
      this.initGreetings()
      this.initGestureEventListener()
      this.initSearchEvents()
    }, 500)
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
    mc.on('pan', this.handleDrag)
  }
  handleDrag(ev) {
    if ( !isDragging ) {
      isDragging = true;
      lastPosX = $(VIDEO_CLS).offset().left;
      lastPosY = $(VIDEO_CLS).offset().top ;
    }
    const posX = ev.deltaX + lastPosX;
    const posY = ev.deltaY + lastPosY;
    const lastHeight = window.innerHeight - posY
    const isHeightValid = lastHeight <= $(VIDEO_CLS).height() && posY <= 0
    const lastWidth = window.innerWidth - posX
    const isWidthValid = lastWidth <= $(VIDEO_CLS).width() && posX <= 0
    if (isHeightValid) {
      const heightStyle = {
        'transform': 'none',
        'top': `${posY}px`
      }
      $(VIDEO_CLS).css(heightStyle)
      $(SCREEN_CLS).css(heightStyle)
    } 
    if (isWidthValid) {
      const widthStyle = { 
        'transform': 'none',
        'left': `${posX}px`
      }
      $(VIDEO_CLS).css(widthStyle)
      $(SCREEN_CLS).css(widthStyle)
    }
    if (ev.isFinal) {
      isDragging = false;
    }
  }
}