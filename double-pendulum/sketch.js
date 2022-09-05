var pendulum1;
var pendulum2;

function setup() {
    // Rendering Settings
    createCanvas(400, 400);
    frameRate(60);

    // Initializing pendulums
    //                       x_o,     y_o,      A,   x_i,v_xi,gravity
    pendulum1 = new Pendulum(0, 0, 120, 119, 0, 0.02, 10);
    pendulum2 = new Pendulum(0, 0, 90, 0, 0, 0.02, 5);
  }
  
  function draw() {
    // Partially clearing the canvas every time
    background(220, 50);
  
    // Translating drawings (so that the math is nicer)
    translate(width/2, height/4);
  
    // Drawing Origin
    circle(0, 0, 2, 2);
  
    // Pendulum update and render
    pendulum1.updateGravity();
    pendulum1.updateTension(pendulum2.x, pendulum2.y, pendulum2.mass);
    pendulum1.render();

    pendulum2.updateOrigin(pendulum1.x, pendulum1.y);
    pendulum2.updateGravity();
    pendulum2.updateTension(pendulum1.x, pendulum1.y, pendulum2.mass);
    pendulum2.render();
  }
  
class Pendulum {
    constructor(x_o, y_o, amplitude, x_i, v_xi, gravity, mass) {

        // Constants
        this.gravity = gravity;
        this.mass = mass;

        // Origin
        this.x_o = x_o;
        this.y_o = y_o;

        // Position
        this.amplitude = amplitude;
        this.x = x_i;
        this.y = sqrt((this.amplitude ** 2) - (this.x ** 2));
        this.theta = atan(this.y/this.x); // This is important to calculate gravity
        
        // Derivatives
        this.v_x = v_xi;
    }

    render() {
        line(this.x_o, this.y_o, this.x_o + this.x, this.y_o + this.y);
        circle(this.x + this.x_o, this.y + this.y_o, 2);
    }

    updateGravity() {
        // Applying acceleration
        // The force vector would be mgsinx
        // The acceleration would be gsinx
        // The velocity would increase by acceleration divided by the time interval
        if (this.theta > 0){
            this.v_x -= this.gravity * sin(this.theta) * cos(this.theta) * deltaTime;
        } else { // for theta < 0
            this.v_x += this.gravity * sin(this.theta) * cos(this.theta) * deltaTime; 
        }

        // Updating x
        this.x += this.v_x;
        this.x = constrain(this.x, -this.amplitude, this.amplitude)

        // Updating the resulting y and theta
        if (isNaN(sqrt((this.amplitude ** 2) - (this.x ** 2)))) {
            print(sqrt((this.amplitude ** 2) - (this.x ** 2)), this.x, this.y, this.v_x)
            remove();
        }
        this.y = sqrt((this.amplitude ** 2) - (this.x ** 2));
        
        this.theta = atan(this.y/this.x); // This is important to calculate gravity
    }

    updateTension(x, y, mass) { // Takes the x and y of the point, and the mass of it
        // print(abs((y-this.y) / (this.x-x)), this.x, this.y);
        let phi = atan(abs((y-this.y) / (this.x-x))); // Angle between our mass and other mass
        if (this.x < x) {
            this.v_x += (mass / this.mass) * this.gravity * cos(phi) * deltaTime;
        } else {
            this.v_x -= (mass / this.mass) * this.gravity * cos(phi) * deltaTime;
        }
    }

    updateOrigin(x_o, y_o) {
        this.x_o = x_o;
        this.y_o = y_o;
    }
}