/// <reference path="typings/browser.d.ts" /> 

class Vehicle {
    div: HTMLDivElement;
    
    constructor() {
     this.div = document.createElement('div');
     this.div.className = 'myVehicle';
     this.div.id = '5';
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
            let damage = this.div.id;
            let x = +damage;
            let y = x - 1;
            this.div.innerHTML = ""+y;
            if (x > 1) {
                let newID = x - 1;
                this.div.id = ""+newID;
            } else {
             this.div.remove();
            }
    }    
}
// BELOW CAR  BELOW CAR BELOW CAR  ---------------------------
class Car {
    div: HTMLDivElement;
    
    constructor() {
     this.div = document.createElement('div');
     this.div.className = 'myCar';
     this.div.id = '2';
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
            $(".myCar").animate({
            left: ww
        }, 5000, function() {
            setTimeout(goLeft, 50);
        });
        }
        function goLeft() {
            $(".myCar").animate({
            left: 0
        }, 5000, function() {
            setTimeout(goRight, 50);
        });
        }
        setTimeout(goRight, 50);
    }
    delete() {
            let damage = this.div.id;
            let x = +damage;
            let y = x - 1;
            this.div.innerHTML = ""+y;
            if (x > 1) {
                let newID = x - 1;
                this.div.id = ""+newID;
            } else {
             this.div.remove();
            }
    }    
}

function addCar() { 
    let car = new Car();
    car.insert();
    vehicleArray.push(car);
}

// BELOW COPCAR  BELOW COPCAR BELOW COPCAR  ---------------------------
class CopCar {
    div: HTMLDivElement;
    
    constructor() {
     this.div = document.createElement('div');
     this.div.className = 'myCopCar';
     this.div.id = '3';
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
        let wh = window.innerHeight;
        function goDown() {
            $(".myCopCar").animate({
            top: wh
        }, 5000, function() {
            setTimeout(goUp, 50);
        });
        }
        function goUp() {
            $(".myCopCar").animate({
            top: 0
        }, 10, function() {
            setTimeout(goDown, 50);
        });
        }
        setTimeout(goDown, 50);
    }
    delete() {
            let damage = this.div.id;
            let x = +damage;
            let y = x - 1;
            this.div.innerHTML = ""+y;
            if (x > 1) {
                let newID = x - 1;
                this.div.id = ""+newID;
            } else {
             this.div.remove();
            }
    }    
}

function addCopCar() { 
    let copCar = new CopCar();
    copCar.insert();
    vehicleArray.push(copCar);
}

// BELOW MOTORCYCLE  BELOW MOTORCYCLE BELOW MOTORCYCLE  ---------------------------
class Motorcycle {
    div: HTMLDivElement;
    
    constructor() {
     this.div = document.createElement('div');
     this.div.className = 'myMotorcycle';
     this.div.id = '1';
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
        let wh = window.innerHeight;
        function goRight() {
            $(".myMotorcycle").animate({
            left: ww,
            top: wh
        }, 2000, function() {
            setTimeout(goLeft, 50);
        });
        }
        function goLeft() {
            $(".myMotorcycle").animate({
            left: 0,
            top: 0
        }, 10, function() {
            setTimeout(goRight, 50);
        });
        }
        setTimeout(goRight, 50);
    }
    delete() {
            let damage = this.div.id;
            let x = +damage;
            let y = x - 1;
            this.div.innerHTML = ""+y;
            if (x > 1) {
                let newID = x - 1;
                this.div.id = ""+newID;
            } else {
             this.div.remove();
            }
    }    
}

function addMotorcycle() { 
    let motorcycle = new Motorcycle();
    motorcycle.insert();
    vehicleArray.push(motorcycle);
}

// BELOW TANK  BELOW TANK BELOW TANK  ----------------------------------------

class Tank {
    div: HTMLDivElement;
    
    constructor() {
     this.div = document.createElement('div');
     this.div.className = 'myTank';
     this.div.id = '10';
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
        let wh = window.innerHeight;
        function goUp() {
            $(".myTank").animate({
            top: 0
        }, 10000, function() {
            setTimeout(goDown, 50);
        });
        }
        function goDown() {
            $(".myTank").animate({
            top: wh
        }, 10, function() {
            setTimeout(goUp, 50);
        });
        }
        setTimeout(goUp, 50);
    }
    delete() {
            let damage = this.div.id;
            let x = +damage;
            let y = x - 1;
            this.div.innerHTML = ""+y;
            if (x > 1) {
                let newID = x - 1;
                this.div.id = ""+newID;
            } else {
             this.div.remove();
            }
    }    
}

function addTank() { 
    let tank = new Tank();
    tank.insert();
    vehicleArray.push(tank);
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
