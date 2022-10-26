// floated dargable modal==================>>>>>>>>>>>>>>>>
let mouseDown = null;
let resizable = null;
let lastZIndex = 100000;

for (const panElem of document.querySelectorAll(".floated_modal_pan_icon")) {
  panElem.addEventListener("mousedown", (e) => {
    const parent = e.target.parentElement.parentElement;
    parent.style.zIndex = lastZIndex + 1;
    lastZIndex++;
    resizable = null;
    mouseDown = parent.getAttribute("id");
  });
}

for (const resizeElem of document.querySelectorAll(
  ".floated_modal_resize_icon"
)) {
  resizeElem.addEventListener("mousedown", (e) => {
    const parent = e.target.parentElement;
    parent.style.zIndex = lastZIndex + 1;
    lastZIndex++;
    mouseDown = null;
    resizable = parent.getAttribute("id");
  });
}

document.addEventListener("mouseup", (e) => {
  mouseDown = null;
  resizable = null;
});

document.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    const parent = document.getElementById(mouseDown);
    parent.style.left = e.x + "px";
    parent.style.top = e.y + "px";
  }
  if (resizable) {
    const parent = document.getElementById(resizable);
    parent.getBoundingClientRect();
    // console.log(parent.getBoundingClientRect());
    const parentX = parent.offsetLeft;
    const parentY = parent.offsetTop;
    parent.style.width = e.x - parentX + "px";
    parent.style.height = e.y - parentY + "px";
  }
});

for (const buttonElem of document.querySelectorAll(
  ".floated_modal_show_button"
)) {
  buttonElem.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("data-modaltarget");
    document.querySelector(targetId).classList.remove("d-none");
  });
}
