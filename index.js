#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("Welcome To To-Do-List App");
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an option to proceed",
            choices: ["Add Task", "Delete Last Task", "View Final List"]
        }
    ]);
    if (addTask.operation === "Add Task") {
        let add = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: "What do you want to add in your To Do List?"
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add or delete a task?",
                default: "false"
            }
        ]);
        todos.push(add.addTodo);
        condition = add.addMore;
        console.log(todos);
    }
    else if (addTask.operation === "Delete Last Task") {
        let del = await inquirer.prompt([
            {
                name: "delTodo",
                type: "list",
                message: "Do you want to delete last task?",
                choices: ["Yes", "No"]
            }
        ]);
        if (del.delTodo === "Yes") {
            todos.pop();
            console.log(todos);
        }
        else if (del.delTodo === "No") {
            console.log(todos);
        }
    }
    else if (addTask.operation === "View Final List") {
        console.log(todos);
        condition = false;
    }
}
