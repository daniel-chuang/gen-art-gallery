var memory;

function setup() {
  // Setting up the canvas
  createCanvas(600, 1200);
  noFill();

  // Calling the recaman function to recursively calculate the recaman sequence values
  [_value, memory] = recaman(5000, []); // _value is a junk variable
  print(memory)
}

function draw() {
  // Resetting the translating the screen
  background(0);
  // translate(mouseX, height/2);
  translate(width/2, 0)
  strokeWeight(0.2);
  scale(3);

  [_value, memory] = recaman(abs(int(400 * sin(frameCount / 100))), []); // _value is a junk variable

  // Drawing each circle in the sequence
  for (let i=1; i<memory.length; i++) {
    stroke(150 + 100 * sin(frameCount / 50) - i, 100 + 50 * sin(frameCount / 50) + i, 205 + 50 * sin(frameCount / 50) + i/2);

    // Alternating the semicircles up and down based off the mod of i
    if (i % 2 == 0) {
      [start_angle, end_angle] = [PI/2, 3*PI/2]
    } else {
      [start_angle, end_angle] = [3*PI/2, PI/2]
    }

    // Drawing the arcs based on if its increasing or decreasing
    if (memory[i-1] < memory[i]) {
      arc(0, memory[i-1] + i/2, i, memory[i] - memory[i-1], start_angle, end_angle) // Donno why but I have to add a fudge factor of i/2
    } else {
      arc(0, memory[i] + i/2, i, memory[i-1] - memory[i], start_angle, end_angle)
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
