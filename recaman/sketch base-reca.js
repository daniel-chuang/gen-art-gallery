var memory;

function setup() {
  // Setting up the canvas
  createCanvas(800, 800);
  noFill();

  // Calling the recaman function to recursively calculate the recaman sequence values
  [_value, memory] = recaman(5000, []); // _value is a junk variable
  print(memory)
}

function draw() {
  // Resetting the translating the screen
  background(220);
  translate(mouseX, height/2);
  strokeWeight(0.2);
  scale(mouseY * 0.05);

  // Drawing each circle in the sequence
  for (let i=1; i<memory.length; i++) {
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
  
  if ((value - n > 0) && !(memory.includes(value - n))) { // If the value - n is greater than 0 AND the value - n is not already in the sequence
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
