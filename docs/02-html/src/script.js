
function dragElement(terrariumElement) {
  // POS1 and POS2 store change in cursor position on x and y axis
  // POS3 and POS4 store current cursor position on x and y axis
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  //Event listener to pointerdown event (below)
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault(); //prevents default behavior of event
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  //Responsible for updating position of terrarium element as user drags it
  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    terrariumElement.style.top =  (terrariumElement.offsetTop  - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
  }

  //Element will stay in it's position until a new drag operation is initiated
  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));