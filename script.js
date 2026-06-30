const add_btn = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const task_input = document.querySelector("#task");

add_btn.addEventListener("click", () => {
    let value = task_input.value;
    if (value) {
        tasks.innerHTML += `<li><span> ${value}</span><div><button class="done">Done</button><button class="delete">Delete</button></div></li>`;
        task_input.value = ``;
    }

});

tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains("done")){
        e.target.parentElement.parentElement.firstElementChild.style.textDecoration="line-through";
    }
});