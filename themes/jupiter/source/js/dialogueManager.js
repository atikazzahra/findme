import textAnimator from './textAnimator'

export default class dialogueManager {
  constructor(dialogue, callback) {
    this.dialogue = dialogue
    this.callback = callback
  }
  async start() {
    for (let i = 0; i < this.dialogue.length; i++) {
      const text = this.dialogue[i].text
      const classEl = this.dialogue[i].class
      await this.animateText(text, classEl)
    }
    if (this.callback) {
      this.callback()
    }
  }
  async animateText(text, classEl) {
    const splittedText = text.split('')
    const textElement = $(`.${classEl}`)
    const animator = new textAnimator(splittedText, textElement)
    await animator.startAnimation()
  }
}