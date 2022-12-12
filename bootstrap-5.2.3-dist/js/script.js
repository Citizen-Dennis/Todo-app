let addbtn = document.getElementById('addbtn');
let clearbtn = document.getElementById('clearbtn');
let todo_ol = document.getElementById('mylist');
let inputItem = document.getElementById('inputItem')
var todolistarray = [];

var todolistarray = [];

var clearlist = function(){
    todolistarray = []
    localStorage.removeItem('mylist');
    myList.innerHTML = '';
}

var listItemObj = function(content, status){
    this.content = '';
    this.status = 'incomplete';
}

let refreshlocalstorage = function(){
    var todo = todolistarray;
    localStorage.removeItem('mylist');
    localStorage.setItem('mylist', JSON.stringify(todo));
}

var addlist = function(){
    let newlistitem = new listItemObj();
    newlistitem.content = inputItem.value;
    todolistarray.push(newlistitem);
    //Refresh
    refreshlocalstorage();
    //var newitem = 
}

clearbtn.addEventListener('click', clearlist);
