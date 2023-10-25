let array=[]
function task(){
    let input=document.getElementById("input").value
    array.push(input)
    console.log(array)
    let itemList=document.getElementById("itemList")
    let todo=document.createElement("div")
    let checkbox=document.createElement("input")
    checkbox.type='checkbox'
    let para=document.createElement("p")
    para.innerHTML=input
    // let del=document.createElement("button")
    // del.classList.add("button-box")
    // del.innerHTML='delete'
    todo.classList.add("todo-flex")
    checkbox.classList.add("in")
    todo.appendChild(checkbox)
    todo.appendChild(para)
    // todo.appendChild(del)
    itemList.appendChild(todo)

    document.getElementById("input").value=''

}