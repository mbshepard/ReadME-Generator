
//Set Require for Modules
var inquirer = require("inquirer")
var fs = require("fs")

//Setup Prompts

inquirer.prompt([
{
    type:"input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type:"input",
    name: "description",
    message: "What is the description of your project?"
},
{
    type:"input",
    name: "installations",
    message: "What installations are required?"
},
{
    type:"input",
    name: "usage",
    message: "What usage is required?"
},
{
    type:"input",
    name: "contributors",
    message: "Who contributed to this project?"
},
{
    type:"input",
    name: "tests",
    message: "What tests need to be run for this project?"
},
{
    type:"list",
    name: "licenses",
    message: "Please select a license list from below:",
    choices: ["BSD", "MIT", "GPL"]
},
{
    type:"input",
    name: "github",
    message: "What is your GitHub username?",
},
{
    type:"input",
    name: "email",
    message: "What is your email address??"
},
]) .then(answers => {
    var filename = answers.title.toLowerCase().split(' ').join('') + ".json"
    fs.writeFile(filename, 'Project Title: ' + answers.title + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file created!")
        }
    })
    fs.appendFile(filename,'Project Description: ' + answers.description + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'Installations Required: ' + answers.installations + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'Usage Required: ' + answers.usage + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'Project Contributors: ' + answers.contributors + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'Tests: ' + answers.tests + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'Licneses: ' + answers.licenses + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'GitHub: ' + answers.github + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
    fs.appendFile(filename,'Email: ' + answers.email + '\n', function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file appended!")
        }
    })
})
