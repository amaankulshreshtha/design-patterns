const boxContainer = document.getElementById("box-container");
const boxItem = document.getElementsByClassName("box-item");

const node = document.createElement("SPAN");
node.classList.add("box-item");

function Box(element) {
  this.__el = element;
  for (const box of boxItem) {
    box.classList.add("activated");
  }
  this.activated = true;
}

Box.prototype.add = function() {
  boxContainer.appendChild(this.__el);
};

Box.prototype.remove = function() {
  boxContainer.removeChild(this.__el);
};

Box.prototype.toggleActivation = function() {
  this.activated = !this.activated;
  if (!this.activated) {
    this.__el.classList.add("deactivated");
  } else {
    this.__el.classList.add("activated");
  }
};

for (let i = 0; i < boxItem.length; i++) {
  boxItem[i].addEventListener("click", toggleActivation);
}
