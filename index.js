var canvas = document.getElementById("monCanvas");

let objets = []
input1value = input1.value = 0.2
let kc = 3
let gravity = 3/window.innerHeight
let vitesseinitiale1 = 2

function apply(forcex,forcey) {
    this.fx = forcex
    this.fy = forcey
}

function coulomb(objet) {
    this.centrex = this.l/2
    this.centrey = this.l/2
    objet.centrex = objet.l/2
    objet.centrey= objet.l/2
    let distancesq = ((this.l/2-objet.l/2)^2 + (this.w/2-objet.w/2)^2)
    let force = kc*this.ch*objet.ch/distancesq
   
   let angle = arctan(Abs((objet.centrey-objet.centrey)/(objet.centrex-objet.centrex)))
    let forcex = cos(angle)*force
    let forcey = sin(angle)*force
    
    var nombre = 2 
    this.apply(forcex,forcey)
}




canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d");
function Rect(x, y,m, l,h, vx,vy,couleur,ch) {
    this.x = x
    this.y = y
    this.m = m
    this.l = l
    this.h = h
    this.vx = vx
    this.vy = vy
    this.couleur = couleur
   
    
    this.update = function() { 
        if ( this.y+this.h >= canvas.height ) { 
            this.ax = -3

        }
        else
     {
        force1 = new apply(0,0.01)
        force2 = new apply(0,0.01)
      this.ax = (force1.fx+force2.fx)/this.m
       this.ay = (force1.fy+force2.fy)/this.m
        this.vy += this.ay
        this.vx += this.ax
       
        this.x += this.vx
        this.y += this.vy
        console.log(this.ay,this.vy)
     }
        this.draw()
        
    }
    this.draw = function() {
        
        c.fillStyle = couleur
        c.fillRect(this.x, this.y, l,h)

    }
}

function init() {
objets[0] = new Rect(10,10,2,40,40,1,0,'blue',-1)
 
objets[1] = new Rect(200,10,3,40,40,0,0,'green',-1)

objets[2] = new Rect(200,100,3,400,10,0.3,0,'red',-1)
}


function animate() {
requestAnimationFrame(animate);


document.getElementById("text").innerHTML = input1.value + 

c.clearRect(0,0, canvas.width,canvas.height)

for(let i = 0; i < objets.length; i++) {
    objets[i].update()
}


}


init();
animate();
function test(a,b) {
    return a + b;
}
console.log(test(1,3));