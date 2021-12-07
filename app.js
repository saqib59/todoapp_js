// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Invalid Input");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


////create EDIT BTN////
  var editBtn = document.createElement("button");

  editBtn.className="edit";
  // var editBtnTxt = document.createTextNode("<i class='fas fa-edit></i>").innerHTML("<p>asd</p>");
  var itag = editBtn.appendChild(document.createElement('i'));
  itag.className="fa fa-edit";
  
  editBtn.setAttribute("onclick", "editList(this)");
  console.log(editBtn);
  li.appendChild(editBtn);

    
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


function delElement() {
  myUL.innerHTML = "";
}

function editList(e) {
    // console.log(e.parentNode.childNodes[0].nodeValue)
    var editValue = prompt("ENTER EDIT VALUE", e.parentNode.firstChild.nodeValue  );
    console.log(editValue);
    e.parentNode.firstChild.nodeValue = editValue;
  }




