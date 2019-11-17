var smooth = function(eID, percentY = 0) {
  let addY = window.innerHeight * percentY / 100;
  let startY = currentYPosition();
  let stopY = elmYPosition(eID) + addY;

  let distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    window.scrollTo(0, stopY);
    return;
  }
  let speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  let step = Math.round(distance / 25);
  let leapY = stopY > startY ? startY + step : startY - step;
  let timer = 0;
  if (stopY > startY) {
    for (let i = startY; i < stopY; i += step) {
      // eslint-disable-next-line no-implied-eval
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (let i = startY; i > stopY; i -= step) {
    // eslint-disable-next-line no-implied-eval
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
};

function currentYPosition() {
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  let elm = document.getElementById(eID);
  let y = elm.offsetTop;
  let node = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

const _smooth = smooth;
export { _smooth as smooth };
