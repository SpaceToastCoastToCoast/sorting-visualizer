var snapshots = [];

function quickSort(array) {

  if(array.length <= 1) {
    return array;
  }

  var pivot = array.shift();
  var leftArray = array.filter(function(el) {
    return el < pivot;
  });
  var rightArray = array.filter(function(el) {
    return el >= pivot;
  });

  var temp = leftArray.concat(pivot, rightArray);

  snapshots.push({
    left: leftArray.map(function(el) {
      return el;
    }),
    pivot: pivot,
    right: rightArray.map(function(el) {
      return el;
    }),
    sorted: temp.map(function(el) {
      return el;
    })
  });

  leftArray = quickSort(leftArray);
  rightArray = quickSort(rightArray);

  temp = leftArray.concat(pivot, rightArray);

  snapshots.push({
    left: leftArray.map(function(el) {
      return el;
    }),
    pivot: pivot,
    right: rightArray.map(function(el) {
      return el;
    }),
    sorted: temp.map(function(el) {
      return el;
    })
  });


  return temp;

}

function arrayMaker() {
  var exampleArray = new Array(10).fill(0);

  exampleArray = exampleArray.map(function(element, index) {
    return (index + 1);
  });

  exampleArray.sort(function() {
    return (0.5 - Math.random());
  });

  exampleArray.reverse();

  exampleArray.sort(function() {
    return (0.5 - Math.random());
  });
  return exampleArray;
}

var ourArray = arrayMaker();
quickSort(ourArray);
var snapID = 0;

var arrayDiv = document.getElementById('array');
var sortedDiv = document.getElementById('sorted');
var leftDiv = document.createElement('div');
leftDiv.id = "leftDiv";
var rightDiv = document.createElement('div');
rightDiv.id = "rightDiv";
var snapInfoDiv = document.getElementById('snapInfo');
var resetButton = document.getElementById('resetButton');

function init(){
  sortedDiv.innerHTML = "";
  arrayDiv.innerHTML = "";
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";

  // for(var s in snapshots[snapID].sorted) {
  //   var currNum = snapshots[snapID].sorted[s];
  //   var arrayElementDiv = document.createElement('div');
  //   arrayElementDiv.innerHTML = currNum;
  //   arrayElementDiv.className = "numBar";
  //   arrayElementDiv.style.color = 'white';
  //   arrayElementDiv.style.width = '32px';
  //   arrayElementDiv.style.height = (currNum * 16) + 4 + 'px';
  //   arrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((currNum + 2) * 16) + ', ' + ((currNum + 2) * 8) + ')';
  //   sortedDiv.appendChild(arrayElementDiv);
  // }

  for(var l in snapshots[snapID].left) {
    var leftCurrNum = snapshots[snapID].left[l];
    var leftArrayElementDiv = document.createElement('div');
    leftArrayElementDiv.innerHTML = leftCurrNum;
    leftArrayElementDiv.className = "numBar";
    leftArrayElementDiv.style.color = 'white';
    leftArrayElementDiv.style.width = '32px';
    leftArrayElementDiv.style.height = (leftCurrNum * 16) + 4 + 'px';
    leftArrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((leftCurrNum + 2) * 16) + ', ' + ((leftCurrNum + 2) * 8) + ')';
    leftDiv.appendChild(leftArrayElementDiv);
  }
  arrayDiv.appendChild(leftDiv);
  //create div for pivot
  var pivotDiv = document.createElement('div');
  pivotDiv.id = "pivotDiv";
  var pivotNum = snapshots[snapID].pivot;
    pivotDiv.innerHTML = pivotNum;
    pivotDiv.className = "numBar";
    pivotDiv.style.color = 'white';
    pivotDiv.style.width = '32px';
    pivotDiv.style.height = (pivotNum * 16) + 4 + 'px';
    pivotDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((pivotNum + 2) * 16) + ', ' + ((pivotNum + 2) * 8) + ')';

  arrayDiv.appendChild(pivotDiv);

  for(var r in snapshots[snapID].right) {
    var rightCurrNum = snapshots[snapID].right[r];
    var rightArrayElementDiv = document.createElement('div');
    rightArrayElementDiv.innerHTML = rightCurrNum;
    rightArrayElementDiv.className = "numBar";
    rightArrayElementDiv.style.color = 'white';
    rightArrayElementDiv.style.width = '32px';
    rightArrayElementDiv.style.height = (rightCurrNum * 16) + 4 + 'px';
    rightArrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((rightCurrNum + 2) * 16) + ', ' + ((rightCurrNum + 2) * 8) + ')';
    rightDiv.appendChild(rightArrayElementDiv);
  }
  arrayDiv.appendChild(rightDiv);
  snapInfoDiv.innerHTML = 'Divisions: ' + snapID;
}

function renderSnapshot() {
  if(snapID >= snapshots.length) {
    clearInterval(renderInterval);
    return;
  }
  sortedDiv.innerHTML = "";
  pivotDiv = document.getElementById('pivotDiv');
  arrayDiv.innerHTML = "";
  leftDiv.innerHTML = "";
  pivotDiv.innerHTML = "";
  rightDiv.innerHTML = "";

  // for(var s in snapshots[snapID].sorted) {
  //   var currNum = snapshots[snapID].sorted[s];
  //   var arrayElementDiv = document.createElement('div');
  //   arrayElementDiv.innerHTML = currNum;
  //   arrayElementDiv.className = "numBar";
  //   arrayElementDiv.style.color = 'white';
  //   arrayElementDiv.style.width = '32px';
  //   arrayElementDiv.style.height = (currNum * 16) + 4 + 'px';
  //   arrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((currNum + 2) * 16) + ', ' + ((currNum + 2) * 8) + ')';
  //   sortedDiv.appendChild(arrayElementDiv);
  // }

  for(var l in snapshots[snapID].left) {
    var leftCurrNum = snapshots[snapID].left[l];
    var leftArrayElementDiv = document.createElement('div');
    leftArrayElementDiv.innerHTML = leftCurrNum;
    leftArrayElementDiv.className = "numBar";
    leftArrayElementDiv.style.color = 'white';
    leftArrayElementDiv.style.width = '32px';
    leftArrayElementDiv.style.height = (leftCurrNum * 16) + 4 + 'px';
    leftArrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((leftCurrNum + 2) * 16) + ', ' + ((leftCurrNum + 2) * 8) + ')';
    leftDiv.appendChild(leftArrayElementDiv);
  }
  arrayDiv.appendChild(leftDiv);
  //create div for pivot
  var pivotNum = snapshots[snapID].pivot;
    pivotDiv.innerHTML = pivotNum;
    pivotDiv.className = "numBar";
    pivotDiv.style.color = 'white';
    pivotDiv.style.width = '32px';
    pivotDiv.style.height = (pivotNum * 16) + 4 + 'px';
    pivotDiv.style.backgroundColor = 'rgb(40, 255, 160)';

  arrayDiv.appendChild(pivotDiv);

  for(var r in snapshots[snapID].right) {
    var rightCurrNum = snapshots[snapID].right[r];
    var rightArrayElementDiv = document.createElement('div');
    rightArrayElementDiv.innerHTML = rightCurrNum;
    rightArrayElementDiv.className = "numBar";
    rightArrayElementDiv.style.color = 'white';
    rightArrayElementDiv.style.width = '32px';
    rightArrayElementDiv.style.height = (rightCurrNum * 16) + 4 + 'px';
    rightArrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((rightCurrNum + 2) * 16) + ', ' + ((rightCurrNum + 2) * 8) + ')';
    rightDiv.appendChild(rightArrayElementDiv);
  }
  arrayDiv.appendChild(rightDiv);
  snapInfoDiv.innerHTML = 'Divisions: ' + snapID;
  snapID++;
}

init();
var renderInterval = setInterval(renderSnapshot, 750);

resetButton.addEventListener('click', function(){
  arrayDiv.innerHTML = "";
  snapID = 0;
  ourArray = arrayMaker();

  clearInterval(renderInterval);
  snapshots = [];
  quickSort(ourArray);
  init();
  renderInterval = setInterval(renderSnapshot, 750);
});

console.log(snapshots);