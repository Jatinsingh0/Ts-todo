import './style.css'

interface Todo {
   title: string,
   isCompleted: boolean,
   id: string,
}

const todos: Todo[] = [];


const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementById("formInput") as HTMLInputElement;

const form = document.getElementById("myForm") as HTMLFormElement;

form.onsubmit = (e) => {
   e.preventDefault();
   const todo:Todo ={
      title: todoInput.value,
      isCompleted: false,
      id: String(Math.floor(Math.random()*100)),
   }
   
   todos.push(todo);
   todoInput.value = "";
   renderTodo(todos)
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
   const todoDiv = document.createElement("div");
   todoDiv.className = "todo";

   // CheckBox
   const checkBox = document.createElement("input") as HTMLInputElement;
   checkBox.setAttribute("type", "checkbox");
   checkBox.className = "isCompleted";
   checkBox.checked = isCompleted;
   checkBox.onchange = () => {
      todos.find((item)=>{
       if(item.id === id){
         item.isCompleted = checkBox.checked;
       }
      })
      paragraph.className = checkBox.checked ? "textCut" : "";
   }

   // P tag
   const paragraph = document.createElement("p") as HTMLParagraphElement;
   paragraph.innerText = title;
   paragraph.className = isCompleted ?  "textCut" : "";


   // Delete Button
   const todoButton = document.createElement("button") as HTMLButtonElement;
   todoButton.innerText = "Delete";
   todoButton.className = "deleteBtn";
   todoButton.onclick = () => {
      deleteButton(id);
   }

   // Append  
   todoDiv.append(checkBox, paragraph, todoButton);
   todoContainer.append(todoDiv)
}

  const deleteButton = (id: string) => {
  const idx = todos.findIndex((item)=>item.id===id);
  todos.splice(idx, 1)
  renderTodo(todos);
  }

const renderTodo = (todos: Todo[]) =>{
     todoContainer.innerText = ""
     todos.forEach((item)=>{
     generateTodoItem( item.title, item.isCompleted, item.id)
  })
}