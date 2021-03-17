var ul = document.getElementById("dynamic-list");
const candidate = document.getElementById("candidate");

let array = ['rajan', 'satyam', 'Gopal', 'Aishwarya'];
//console.log(candidate.value);
function fun() {
    for (let i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        //li.setAttribute('id', array[i]);
        li.appendChild(document.createTextNode(array[i]));
        ul.appendChild(li);
    }
}

function addItem() {
    let x = candidate.value;
    array.push(x);
    console.log(array);
    //fun();
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem() {
    // var ul = document.getElementById("dynamic-list");
    // var candidate = document.getElementById("candidate");
    // var item = document.getElementById(candidate.value);
    ul.removeChild(ul.lastChild);
}

fun();