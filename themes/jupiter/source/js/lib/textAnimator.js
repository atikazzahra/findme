export default class textAnimator {
  constructor(text, el) {
    this.text = text;
    this.el = el;
    this.speed = 90;
  }
  startAnimation() {
    this.typingAnimation()
    return new Promise(resolve => setTimeout(resolve, this.speed*(this.text.length+1)))
  }
  typingAnimation() {
    if (this.text.length > 0) {
      const writtenText = this.el.html()
      const text = `${writtenText}${this.text.shift()}`
      this.el.html(text)
      setTimeout(this.typingAnimation.bind(this), this.speed)
    }
  }
}