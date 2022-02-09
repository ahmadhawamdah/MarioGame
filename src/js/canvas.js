import land from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import flag from '../img/flag.png'
const canvas = document.querySelector('canvas');

canvas.width = 1024;
canvas.height = 576;

const grav = 0.4;
let offset = 0;
const can = canvas.getContext('2d');

class platform  {
    constructor({x,y, land}){
        this.coordinates = {
            x: x, 
            y: y
        }
        this.land = land
        this.w = land.width
        this.h = land.height
    }
    display() {
        // can.fillStyle = "blue"
        can.drawImage(this.land, this.coordinates.x, this.coordinates.y);
    }
}

class Decorations  {
  constructor({x,y, hill}){
      this.coordinates = {
          x: x, 
          y: y
      }
      this.hill = hill
      this.w = land.width
      this.h = land.height
  }
  display() {
      // can.fillStyle = "blue"
      can.drawImage(this.hill, this.coordinates.x, this.coordinates.y);
  }
}


class Player {
    constructor() {
      this.movement = 10
        this.coordinates = {
            x: 100,
            y: 100,
        }
        this.w = 30
        this.h = 30
        this.gravity = {
            x: 0, y: 0
        }
    }

    // draw the player on the screen
    display() {
        can.fillStyle = "red"
        can.fillRect(this.coordinates.x, this.coordinates.y, this.h, this.w);
    }
    // alter player properties
    update() {
        this.display()
        this.coordinates.y = this.coordinates.y + this.gravity.y
        this.coordinates.x = this.coordinates.x + this.gravity.x
        const stop = this.coordinates.y + this.h + this.gravity.y
        if ( stop <= canvas.height) {
            this.gravity.y = this.gravity.y + grav
        } 
            
    }
}

function createImage(imgSrc) {
  const image = new Image()
  image.src = imgSrc
  return image
}


const player = new Player()
// const platforms = new platforms()
const platforms = [new platform({x: 0, y: 470, land: createImage(land)}), 
  new platform({x: createImage(land).width, y: 470,  land: createImage(land)}),
  new platform({x: createImage(land).width*2 + 100, y: 470,  land: createImage(land)}),
  new platform({x: createImage(land).width*3 + 300, y: 470,  land: createImage(land)}),
  new platform({x: createImage(land).width*4 + 600, y: 470,  land: createImage(land)})
  ]

const decorations = [
  new Decorations({x: 0, y: 0, hill: createImage(background)}), 
  new Decorations({x: 0, y: 0, hill: createImage(hills)}), 
  new Decorations({x: 4500, y: 320, hill: createImage(flag)}), 
];


// object to monitor which keys are pressed
const keys = {
    right: {
        pressed: false
    }, 
    left: {
        pressed: false
    }
}
// player.update()

function animate() {
    requestAnimationFrame(animate)
    // clear canvas to maintain the player's shaper
    can.fillStyle = "white"
    can.fillRect(0, 0, canvas.width, canvas.height)

    decorations.forEach(decoration => {
      decoration.display();
    })
    platforms.forEach((platform) => {
        platform.display()
    })
    player.update()

    if (keys.right.pressed && player.coordinates.x < 400)  {
        player.gravity.x = player.movement
    } else if (keys.left.pressed && player.coordinates.x > 200) {
        player.gravity.x = -player.movement
    } else  {
        player.gravity.x = 0
        if (keys.right.pressed) {
            offset += player.movement
            platforms.forEach((platform) => {
                platform.display()
                platform.coordinates.x -= player.movement * .66
            })
            decorations.forEach(decoration => {
              decoration.coordinates.x -= player.movement
            })
        } else if (keys.left.pressed && offset > 0) {
            offset -= player.movement
            platforms.forEach((platform) => {
                platform.display()
                platform.coordinates.x += player.movement
            })
            decorations.forEach(decoration => {
              decoration.coordinates.x += player.movement * .66
            })
        }
        if (offset > 4200) {
            window.alert("You Won");
        }

        if (player.coordinates.y > canvas.height) {
          // window.alert("You Lost");
            window.location.reload();
      }
    }
    platforms.forEach((platform) => {
    //rectangular collision detection
    // bottom of the player + its heigh less than the y coordinates of the platforms
    if (
        // fall when underneath the paltform
        player.coordinates.y + player.h <= platform.coordinates.y 
        // fall from above the paltform
        && player.coordinates.y + player.h + player.gravity.y >= platform.coordinates.y
        // fall from the left side
        && player.coordinates.x + player.w >= platform.coordinates.x
        // fall from the right side
        && player.coordinates.x <= platform.coordinates.x + platform.w) {
        player.gravity.y = 0
    }
})
}
animate()
// whenever u press a button, fire a function
window.addEventListener("keydown", ({keyCode})=> {
    if (keyCode === 65) { // left
        player.gravity.x =  player.gravity.x - 2
        keys.left.pressed = true
    } if (keyCode === 68) { // right
        player.gravity.x =  player.gravity.x + 2
        keys.right.pressed = true
    } if (keyCode === 87) // up
        player.gravity.y =  player.gravity.y - 15
})

window.addEventListener("keyup", ({keyCode})=> {
    if (keyCode === 65) { // left
        player.gravity.x =  0
        keys.left.pressed = false
    } if (keyCode === 68) { // right
        player.gravity.x =  0
        keys.right.pressed = false
    } if (keyCode === 87) // up
        player.gravity.y =  0
}) 