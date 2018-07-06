var myList = document.querySelector("#tasks");

//add tasks to a list via button click
    
var taskInput = document.querySelector("form input");
var inputButton = document.querySelector("button");
inputButton.onclick = function() {
    if (taskInput.value != "") {
        // take input value (value)
        var newTaskValue = taskInput.value;

        // create a new element (li)
        var newTask = document.createElement("li");
        newTask.innerHTML = newTaskValue;
        
        // append that to myList
        myList.appendChild(newTask);

        //clear the input when the button's clicked
        taskInput.value = "";
    } else {
        console.log ("empty");
    }
};
    
  

//When a task is clicked, remove/strikethrough from the list
  //alt, make a new 'completed' tasks list