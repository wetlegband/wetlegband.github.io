console.clear();
let targets = gsap.utils.toArray("button"); 

targets.forEach((obj, i) => {
  obj.addEventListener("click", doCoolStuff);
});

function doCoolStuff() {
  let moveTo = this.getAttribute("data-view");
  gsap.to("#houseSVG", 1, {attr:{viewBox:moveTo}, ease:"power3.inOut"})
}
