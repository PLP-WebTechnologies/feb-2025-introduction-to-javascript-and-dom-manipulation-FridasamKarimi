document.getElementById("change-btn").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "New Dynamic Item";
    document.getElementById("item-list").appendChild(newItem);
});

document.getElementById("remove-btn").addEventListener("click", function() {
    const list = document.getElementById("item-list");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});