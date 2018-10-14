let toggleBtnOne = document.getElementById("toggleOne");

toggleBtnOne.addEventListener("click", function() {
  event.target.toggleActivation();
  event.preventDefault();
});

function mixin(target, source, methods) {
  if (!source) {
    return;
  }
  for (let i = 2, l = arguments.length; i < l; i++) {
    const method = arguments[i];
    target[method] = source[method].bind(source);
    console.log(target[method]);
  }
}

let box = [];

for (let i = 0; i < boxItems.length; i++) {
  box[i] = new Box(boxItems[i]);
  box[i].init();
}

mixin(toggleBtnOne, box[0], "toggleActivation");
