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
     const value = todoInput.value
     todoContainer.append(value)
}