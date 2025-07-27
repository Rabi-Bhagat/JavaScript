const list = document.querySelector('ul');
const childToChange = list.children[1];
const newlist =  document.createElement('li');
newlist.textContent = " i am a replace child";
list.replaceChild(newlist,childToChange)