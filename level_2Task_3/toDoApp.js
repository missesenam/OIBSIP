// add task
const addTask = document.querySelector('#addmore')
const TaskModal = document.querySelector('#taskModal')
const closemod = document.getElementById('closeModal')
const modalContent = document.getElementById('modal-content')
// Function to show the adding modal
function showmod(){
        TaskModal.style.display = 'block'
        // close modal by clicking anywhere but the modal container
        TaskModal.addEventListener('click', closemodal)
}
// close modal by clicking on the cross
closemod.addEventListener('click', () =>{
        TaskModal.style.display = 'none'
})
// close modal by clicking anywhere but the modal container
function closemodal(e){
        if(e.target !== modalContent && !modalContent.contains(e.target)){
            TaskModal.style.display = 'none'
        TaskModal.removeEventListener('click', closemodal);
        }
    }
// Add the event listener to the button
addTask.addEventListener('click', showmod)

/**
 * 
 * Add tasks to the TODO list
 * 
 **/

let appendingTasks = document.querySelector('#appending-tasks')
let addNewTaskInput = document.getElementById('newTaskInput')
let addTaskBtn = document.getElementById('addTaskBtn')
const completedTasks = document.querySelector('#completed-tasks')


addTaskBtn.addEventListener('click', ()=>{

    let val = addNewTaskInput.value
    if (val){
    // create children
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let span = document.createElement('span')
    let button = document.createElement('button')
    // append
    appendingTasks.appendChild(div)
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(button)
    // content
    h2.textContent = val

        // date
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; 
        const day = now.getDate();
        // hours
        const hours = now.getHours();   
        const minutes = now.getMinutes(); 
        // const time = hours + minutes
        // Format hours to 12-hour format and determine AM/PM
        const isAM = hours < 12;
        const formattedHours = (hours % 12) || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedTime = `${formattedHours}:${formattedMinutes} ${isAM ? 'AM' : 'PM'}`
        // date and time
        let date = `${year}-${month}-${day}`
    span.textContent = 'added on: ' + date + ' ' + formattedTime

    button.textContent = 'Complete'
    // add id
    button.id = 'taskcomplete-btn'
    // add STYLE
    div.classList.add('appending-task')
    span.classList.add('apptimestamp')
    button.classList.add('complete-btn')
    // theEnd
    TaskModal.style.display = 'none'
    addNewTaskInput.value = ''
    saveData()
    /**
     * 
     * mark task as complete
     * 
     **/
    function markAsComplete(){
        // update style
        div.classList.add('completed-task')
        h2.classList.add('completedh2')
        button.classList.add('undo-btn')
        // add appending id
        button.id = 'taskappending-btn'
        // update time
        span.textContent = 'Completed on : ' + date + ' ' + formattedTime

        button.textContent = 'Undo'
        completedTasks.appendChild(div)

        // Change the click event to mark as incomplete
        button.removeEventListener('click', markAsComplete);
        button.addEventListener('click', markAsincomplete)
        saveData()

    }
            /**
             * 
             * remark task as incomplete
             * 
             **/
        function markAsincomplete(){
            // update button
            button.textContent = 'Complete'
            // update time
            span.textContent = 'added on: ' + date + ' ' + formattedTime
            // update style
            div.classList.remove('completed-task')
            div.classList.add('appending-task')

            h2.classList.remove('completedh2')

            span.classList.add('apptimestamp')

            button.classList.remove('undo-btn')
            button.classList.add('complete-btn')
            // Change the click event to mark as complete
            appendingTasks.appendChild(div)
            // Change the click event to mark as incomplete
            button.removeEventListener('click', markAsincomplete)

            button.addEventListener('click', markAsComplete)
            saveData()
        }
    button.addEventListener('click', markAsComplete)
    } else{
        return
    }
})

function saveData(){
    localStorage.setItem('data', todoList.innerHtml)
}
function showlist(){
    todoList.innerHtml = localStorage.getItem('data')
}
showlist()