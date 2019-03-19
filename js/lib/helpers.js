export function clearAllTimeout() {
  let id = window.setTimeout(function() {}, 0);
  while (id--) {
      window.clearTimeout(id);
  }
}

export function isInsideArea(e, area, diff) {
  const inAreaX = e.x < area.x + diff &&  e.x > area.x - diff
  const inAreaY = e.y < area.y + diff &&  e.y > area.y - diff
  return inAreaX && inAreaY
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRelativePosition(originalRes, currentRes, event) {
  const x = originalRes.x/currentRes.x * event.offsetX
  const y = originalRes.y/currentRes.y * event.offsetY
  console.log(x, y)
  return { x: x, y: y }
}

export default {
  sleep,
  clearAllTimeout,
  isInsideArea,
  getRelativePosition
}