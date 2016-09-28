//modification of insertion sort for visualization
function insertionSort(array) {
  var completedOps = [];
  var swapCount = 0;
  var passCount = 0;
  completedOps.push({
        currIndex: 1,
        swaps: swapCount,
        passes: passCount,
        sorted: array.map(function(element){
                  return element;
                })
      });
  for(var i = 1; i < array.length; i++){
    var j = i;
    while(j > 0 && array[j - 1] > array[j]){
      var tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      swapCount++;
      completedOps.push({
        currIndex: j,
        swaps: swapCount,
        passes: passCount,
        sorted: array.map(function(element){
                  return element;
                })
      });
      j--;
    }
    passCount++;
  }
  completedOps.push({
      currIndex: array.length,
      swaps: swapCount,
      passes: passCount,
      sorted: array
    });
  return completedOps;
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
var snapshots = insertionSort(ourArray);
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
    arrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((currNum + 2) * 8) + ', ' + ((currNum + 2) * 16) + ')';
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
    var currIndex = snapshots[snapID].currIndex - 1;
    var arrayElementDiv = numBars[s];
    arrayElementDiv.innerHTML = currNum;
    arrayElementDiv.style.height = (currNum * 16) + 4 + 'px';
    if(currNum === snapshots[snapID].sorted[currIndex]) {
      arrayElementDiv.style.backgroundColor = 'rgb(40, 180, 255)';
    } else {
      arrayElementDiv.style.backgroundColor = 'rgb(' + 0 + ', ' + ((currNum + 2) * 8) + ', ' + ((currNum + 2) * 16) + ')';
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
  snapshots = insertionSort(ourArray);
  init();
  renderInterval = setInterval(renderSnapshot, 750);
});