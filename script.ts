/// <reference path="typings/browser.d.ts" /> 

class Vehicle {
    div: HTMLDivElement;
    
    constructor() {
     this.div = document.createElement('div');
     this.div.className = 'myVehicle';
     this.div.id = '5'; //will have to parse later 
     this.div.addEventListener('click', () => {
         this.delete();
     });
    }
    insert() {
        let myGameArea = document.getElementById('gameArea');
        myGameArea.appendChild(this.div);
        this.div.style.position = 'absolute';
        let boxText = this.div.id;
        this.div.innerHTML = boxText;
        let ww = window.innerWidth;
        let wh = window.innerHeight;
        this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    }
    move() {
        let ww = window.innerWidth;
        function goRight() {
            $(".myVehicle").animate({
            left: ww
        }, 5000, function() {
            setTimeout(goLeft, 50);
        });
        }
        function goLeft() {
            $(".myVehicle").animate({
            left: 0
        }, 5000, function() {
            setTimeout(goRight, 50);
        });
        }
        setTimeout(goRight, 50);
    }
    delete() {
            console.log('test');
            let damage = this.div.id;
            let x = +damage;
            // damage = parseInt(damage, 10);
            // let x = this.div.id;
            let y = x - 1;
            this.div.innerHTML = ""+y;
            if (x > 1) {
                let newID = x - 1;
                this.div.id = ""+newID;
                //console.log(newID);
            } else {
             this.div.remove();
             //console.log('test');   
            }
        // this.div.onclick = function(e){
            
        // }
    }    
}

function addVehicle() { 
    let vehicle = new Vehicle();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

let vehicleArray: Array<Vehicle> = [];

function startGame() {
    for (let i = 0; i < vehicleArray.length; i++) {
        let vehicle = vehicleArray[i];
        vehicle.move()
    }
}
