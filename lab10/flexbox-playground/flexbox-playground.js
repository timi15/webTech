const container = document.getElementById("container");

function addItem(event){
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = container.children.length+1;
    container.appendChild(item);    
};

document
    .getElementById("add-item-btn")
    .addEventListener("click", addItem);

function removeItem(event){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

document
    .getElementById("remove-item-btn")
    .addEventListener("click", removeItem)

const changeFlexDirection=(event)=>{
    const value= event.currentTarget.value;
    console.log(`flex-direction is set to: ${value}`);
    container.style.flexDirection = value;    
}

document
    .getElementById("flex-direction-select")
    .addEventListener("change", changeFlexDirection);

function changeJustifyContent(event){
    const value= event.currentTarget.value;
    container.style.justifyContent = value;
}

document
    .getElementById("justify-content-select")
    .addEventListener("change", changeJustifyContent);

function changeAlignItems(event){
    const value= event.currentTarget.value;
    container.style.alignItems = value;
}

document
    .getElementById("align-items-select")
    .addEventListener("change", changeAlignItems);