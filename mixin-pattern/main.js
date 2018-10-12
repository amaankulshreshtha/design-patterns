const boxContainer = document.getElementById("box-container");
const boxItems = document.getElementsByClassName("box-item");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");

function Box(element) {
  this.__el = element;
  this.activated = true;
}

Box.prototype.init = function() {
  this.activateBox();
  this.__el.addEventListener("click", this.toggleActivation.bind(this));
  addBtn.addEventListener("click", this.logger.bind(this));
};

Box.prototype.logger = function() {
  console.log(this);
};

Box.prototype.addBox = function() {
  const node;
}

Box.prototype.activateBox = function() {
  if (this.activated) {
    this.__el.classList.add("activated");
  }
};

Box.prototype.deactivateBox = function() {
  if (!this.activated) {
    this.__el.classList.remove("activated");
  }
};

Box.prototype.toggleActivation = function() {
  this.__el.classList.toggle("activated");
  return (this.activated = !this.activated);
};

let box = [];

for (let i = 0; i < boxItems.length; i++) {
  box[i] = new Box(boxItems[i]);
  box[i].init();
}
