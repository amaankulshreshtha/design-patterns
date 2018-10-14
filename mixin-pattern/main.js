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
};

Box.prototype.logger = function() {
  console.log(this);
};

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

const addBox = function() {
  const node = document.createElement("span");
  node.classList.add("box-item", "activated");
  boxContainer.appendChild(node);
};

function removeBox() {
  const lastElementChild = boxContainer.lastElementChild;
  boxContainer.removeChild(lastElementChild);
}

addBtn.addEventListener("click", addBox);
removeBtn.addEventListener("click", removeBox);
