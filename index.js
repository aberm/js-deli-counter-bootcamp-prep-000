var katzDeliLine = [];
var counter = 1;


function takeANumber(lineArray) {
  var n = counter;
  lineArray.push(n);
  counter++;
  return `Welcome, ${n}. You are number ${lineArray.length} in line.`
}

function currentLine(lineArray) {
  if (lineArray.length === 0) {
    return "The line is currently empty."
  } else {
    var str = 'The line is currently: '
    for (var i = 0; i < lineArray.length; i++) {
      if (i === lineArray.length-1) {
        str = str + `${i+1}. ${lineArray[i]}`
      } else {
      str = str + `${i+1}. ${lineArray[i]}, `
      }
    }
    return str
  }
}

function nowServing(lineArray) {
  if (lineArray.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var m = lineArray[0];
    lineArray.shift();
    return `Currently serving ${m}.` 
  }
}