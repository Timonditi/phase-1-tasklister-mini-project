document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector("#create-task-form");
  
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let value = event.target.querySelector("#new-task-description").value;
    console.log(value);
    createTask(value);
    form.reset();


 
   })
});



function createTask(task){
  let taskList=document.querySelector("#tasks");
  let li=document.createElement("li");
  li.textContent=task;
  taskList.appendChild(li);
 }
