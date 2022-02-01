var memory;

function setup() {
  // Setting up the canvas
  cnv = createCanvas(1600, 600);
  cnv.position((windowWidth - width)/2, (windowHeight - height)/2);
  noFill();

  // Calling the recaman function to recursively calculate the recaman sequence values
  [_value, memory] = recaman(5000, []); // _value is a junk variable
  print(memory)
}

function draw() {
  // Resetting the translating the screen
  background(0);
  // translate(mouseX, height/2);
  translate(0, height/2)
  strokeWeight(0.2);
  scale(2);

  [_value, memory] = recaman(abs(int(400 * sin(frameCount / 100))), []); // _value is a junk variable

  // Drawing each circle in the sequence
  for (let i=1; i<memory.length; i++) {
    stroke(200 + 50 * sin(frameCount / 50) - i, 100 + 50 * sin(frameCount / 50) + i, 205 + 50 * sin(frameCount / 50) + i/2);

    // Alternating the semicircles up and down based off the mod of i
    if (i % 2 == 0) {
      [start_angle, end_angle] = [0, PI]
    } else {
      [start_angle, end_angle] = [PI, 2*PI]
    }

    // Drawing the arcs based on if its increasing or decreasing
    if (memory[i-1] < memory[i]) {
      arc(memory[i-1] + i/2, 0, memory[i] - memory[i-1], i, start_angle, end_angle) // Donno why but I have to add a fudge factor of i/2
    } else {
      arc(memory[i] + i/2, 0, memory[i-1] - memory[i], i, start_angle, end_angle)
    }
  }
}

// Recursive function for calculating Recaman's sequence. Memoized
function recaman(n, memory) {
  if (n==0) {
    memory.push(0);
    return [0, memory];
  }


  if (memory.length > n-1) {
    value = memory[n-1];
  } else {
    value = recaman(n-1, memory)[0];
  }
  
  if ((value - n > abs(300 * sin(frameCount/200))) && !(memory.includes(value - n))) { // If the value - n is greater than 0 AND the value - n is not already in the sequence
    memory.push(value - n)
    // console.log("minus")
    return [value - n, memory];
  }

  else {
    // console.log("add");
    memory.push(value + n);
    return [value + n, memory];
  }
}
