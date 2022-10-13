class Component {
    constructor (x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
  
        const image = new Image();
        image.src = './images/car.png'
        image.onload = () => {
            this.image = image;
        }
    }
  
    drawCar () {
        context.drawImage(this.image, this.x, this.y, 50, 100);
    }

    drawObstacle() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
  
    moveLeft() {
          this.x -= 10;
      }
  
    moveRight() {
          this.x += 10;
      }
  }