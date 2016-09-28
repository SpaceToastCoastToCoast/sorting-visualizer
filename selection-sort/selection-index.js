//implementation for visualization
function selectionSort(array) {
  var states = [];
  var i, j;
  var swapCount = 0;
  var passCount = 0;
  states.push({
        currIndex: 0,
        swaps: swapCount,
        passes: passCount,
        sorted: array.map(function(element){
                  return element;
                })
      });

  for(j = 0; j < (array.length - 1); j++) {
    //assume the minimum is element 0, then search for a smaller element
    var indexOfMin = j;
    for(i = j+1; i < array.length; i++){
      //if this element is less than minimum, it is the new minimum
      if(array[i] < array[indexOfMin]) {
        indexOfMin = i;
      }
    }
    if(indexOfMin != j) {
      var tmp = array[indexOfMin];
      array[indexOfMin] = array[j];
      array[j] = tmp;
      swapCount++;
    }
    states.push({
        currIndex: j,
        swaps: swapCount,
        passes: passCount,
        sorted: array.map(function(element){
                  return element;
                })
      });
    passCount++;
  }
  states.push({
        currIndex: 0,
        swaps: swapCount,
        passes: passCount,
        sorted: array
      });
  return states;
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
var snapshots = selectionSort(ourArray);
var snapID = 0;
var arrayDiv = document.getElementById('array');
var snapInfoDiv = document.getElementById('snapInfo');
var resetButton = document.getElementById('resetButton');

function init(){
  arrayDiv.innerHTML = "";
  for(var s in snapshots[snapID].sorted) {
    var currNum = snapshots[snapID].sorted[s];
    var arrayElementDiv = document.createElement('div');
    arrayElementDiv.innerHTML = currNum;
    arrayElementDiv.className = "numBar";
    arrayElementDiv.style.color = 'white';
    arrayElementDiv.style.width = '32px';
    arrayElementDiv.style.height = (currNum * 16) + 4 + 'px';
    arrayElementDiv.style.backgroundColor = 'rgb(' + ((currNum + 2) * 8) + ', ' + 0 + ', ' + ((currNum + 2) * 16) + ')';
    arrayDiv.appendChild(arrayElementDiv);
  }
  snapInfoDiv.innerHTML = 'Swaps: ' + snapshots[snapID].swaps +'<br />Passes: ' + snapshots[snapID].passes;
}

function renderSnapshot() {
  if(snapID >= snapshots.length) {
    clearInterval(renderInterval);
    return;
  }
  var numBars = document.querySelectorAll('.numBar');
  for(var s in snapshots[snapID].sorted) {
    var currNum = snapshots[snapID].sorted[s];
    var currIndex = snapshots[snapID].currIndex;
    var arrayElementDiv = numBars[s];
    arrayElementDiv.innerHTML = currNum;
    arrayElementDiv.style.height = (currNum * 16) + 4 + 'px';
    if(currNum === snapshots[snapID].sorted[currIndex]) {
      arrayElementDiv.style.backgroundColor = 'rgb(180, 40, 255)';
    } else {
      arrayElementDiv.style.backgroundColor = 'rgb(' + ((currNum + 2) * 8) + ', ' + 0 + ', ' + ((currNum + 2) * 16) + ')';
    }
  }
  snapInfoDiv.innerHTML = 'Swaps: ' + snapshots[snapID].swaps +'<br />Passes: ' + snapshots[snapID].passes;
  snapID++;
}

init();
var renderInterval = setInterval(renderSnapshot, 750);

resetButton.addEventListener('click', function(){
  arrayDiv.innerHTML = "";
  snapID = 0;
  ourArray = arrayMaker();

  clearInterval(renderInterval);
  snapshots = selectionSort(ourArray);
  init();
  renderInterval = setInterval(renderSnapshot, 750);
});