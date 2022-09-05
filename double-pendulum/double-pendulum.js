var pendulum1;
var pendulum2;

function setup() {
    // Rendering Settings
    createCanvas(400, 400);
    frameRate(30);

    // Initializing pendulums
    //                       x_o,     y_o,      A,   x_i,v_xi,gravity
    pendulum1 = new Pendulum(0, 0, 100, 50, 0, 0.04);
    pendulum2 = new Pendulum(0, 0, 70, 50, 0, 0.04);
  }
  
  function draw() {
    // Partially clearing the canvas every time
    background(220, 50);
  
    // Translating drawings (so that the math is nicer)
    translate(width/2, height/4);
  
    // Drawing Origin
    circle(0, 0, 2, 2);
  
    // Pendulum update and render
    pendulum1.updateMass();
    pendulum1.render();

    pendulum2.updateOrigin(pendulum1.x, pendulum1.y);
    pendulum2.updateMass();
    pendulum2.render();
  }
  
class Pendulum {
    constructor(x_o, y_o, amplitude, x_i, v_xi, gravity) {

        // Constants
        this.gravity = gravity;

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

    updateMass() {
        // Applying acceleration
        // The force vector would be mgsinx
        // The acceleration would be gsinx
        // The velocity would increase by acceleration divided by the time interval
        if (this.theta > 0){
            this.v_x -= this.gravity * cos(this.theta) * deltaTime;
        } else { // for theta < 0
            this.v_x += this.gravity * cos(this.theta) * deltaTime; 
        }

        // Updating x
        this.x += this.v_x;

        // Updating the resulting y and theta
        this.y = sqrt((this.amplitude ** 2) - (this.x ** 2));
        this.theta = atan(this.y/this.x); // This is important to calculate gravity

        print(this.y, this.theta)
    }

    updateOrigin(x_o, y_o) {
        this.x_o = x_o;
        this.y_o = y_o;
    }
}