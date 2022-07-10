// // getElementsbyClassName
var items = document.getElementsByClassName("list-group-item")
console.log(items);
console.log(items[1]);
// items.style.fontWeight = 'bold'  //it didnt work bec its an html collection like array and we need to loop through it
items[1].textContent = 'Hello 2'
// items[2].style.backgroundColor = 'red'
items[0].style.color = 'red'

//we feel problems in styling all the items simultaneously
for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold'
    items[i].style.backgroundColor = 'green'
}

// get element by tag name //

var li = document.getElementsByTagName("li")
console.log(li);
console.log(li[1]);
// items.style.fontWeight = 'bold'  //it didnt work bec its an html collection like array and we need to loop through it
li[1].textContent = 'Hello 2'
li[2].style.backgroundColor = 'red'
li[0].style.color = 'red'
//we feel problems in styling all the items simultaneously
for (var i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold'
    li[i].style.backgroundColor = 'green'
}