/// <reference path="typings/browser.d.ts" /> 
var Vehicle = (function () {
    function Vehicle() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'myVehicle';
        this.div.id = '5';
        this.div.addEventListener('click', function () {
            _this.delete();
        });
    }
    Vehicle.prototype.insert = function () {
        var myGameArea = document.getElementById('gameArea');
        myGameArea.appendChild(this.div);
        this.div.style.position = 'absolute';
        var boxText = this.div.id;
        this.div.innerHTML = boxText;
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    };
    Vehicle.prototype.move = function () {
        var ww = window.innerWidth;
        function goRight() {
            $(".myVehicle").animate({
                left: ww
            }, 5000, function () {
                setTimeout(goLeft, 50);
            });
        }
        function goLeft() {
            $(".myVehicle").animate({
                left: 0
            }, 5000, function () {
                setTimeout(goRight, 50);
            });
        }
        setTimeout(goRight, 50);
    };
    Vehicle.prototype.delete = function () {
        var damage = this.div.id;
        var x = +damage;
        var y = x - 1;
        this.div.innerHTML = "" + y;
        if (x > 1) {
            var newID = x - 1;
            this.div.id = "" + newID;
        }
        else {
            this.div.remove();
        }
    };
    return Vehicle;
}());
// BELOW CAR  BELOW CAR BELOW CAR  ---------------------------
var Car = (function () {
    function Car() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'myCar';
        this.div.id = '2';
        this.div.addEventListener('click', function () {
            _this.delete();
        });
    }
    Car.prototype.insert = function () {
        var myGameArea = document.getElementById('gameArea');
        myGameArea.appendChild(this.div);
        this.div.style.position = 'absolute';
        var boxText = this.div.id;
        this.div.innerHTML = boxText;
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    };
    Car.prototype.move = function () {
        var ww = window.innerWidth;
        function goRight() {
            $(".myCar").animate({
                left: ww
            }, 5000, function () {
                setTimeout(goLeft, 50);
            });
        }
        function goLeft() {
            $(".myCar").animate({
                left: 0
            }, 5000, function () {
                setTimeout(goRight, 50);
            });
        }
        setTimeout(goRight, 50);
    };
    Car.prototype.delete = function () {
        var damage = this.div.id;
        var x = +damage;
        var y = x - 1;
        this.div.innerHTML = "" + y;
        if (x > 1) {
            var newID = x - 1;
            this.div.id = "" + newID;
        }
        else {
            this.div.remove();
        }
    };
    return Car;
}());
function addCar() {
    var car = new Car();
    car.insert();
    vehicleArray.push(car);
}
// BELOW COPCAR  BELOW COPCAR BELOW COPCAR  ---------------------------
var CopCar = (function () {
    function CopCar() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'myCopCar';
        this.div.id = '3';
        this.div.addEventListener('click', function () {
            _this.delete();
        });
    }
    CopCar.prototype.insert = function () {
        var myGameArea = document.getElementById('gameArea');
        myGameArea.appendChild(this.div);
        this.div.style.position = 'absolute';
        var boxText = this.div.id;
        this.div.innerHTML = boxText;
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    };
    CopCar.prototype.move = function () {
        var wh = window.innerHeight;
        function goDown() {
            $(".myCopCar").animate({
                top: wh
            }, 5000, function () {
                setTimeout(goUp, 50);
            });
        }
        function goUp() {
            $(".myCopCar").animate({
                top: 0
            }, 10, function () {
                setTimeout(goDown, 50);
            });
        }
        setTimeout(goDown, 50);
    };
    CopCar.prototype.delete = function () {
        var damage = this.div.id;
        var x = +damage;
        var y = x - 1;
        this.div.innerHTML = "" + y;
        if (x > 1) {
            var newID = x - 1;
            this.div.id = "" + newID;
        }
        else {
            this.div.remove();
        }
    };
    return CopCar;
}());
function addCopCar() {
    var copCar = new CopCar();
    copCar.insert();
    vehicleArray.push(copCar);
}
// BELOW MOTORCYCLE  BELOW MOTORCYCLE BELOW MOTORCYCLE  ---------------------------
var Motorcycle = (function () {
    function Motorcycle() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'myMotorcycle';
        this.div.id = '1';
        this.div.addEventListener('click', function () {
            _this.delete();
        });
    }
    Motorcycle.prototype.insert = function () {
        var myGameArea = document.getElementById('gameArea');
        myGameArea.appendChild(this.div);
        this.div.style.position = 'absolute';
        var boxText = this.div.id;
        this.div.innerHTML = boxText;
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    };
    Motorcycle.prototype.move = function () {
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        function goRight() {
            $(".myMotorcycle").animate({
                left: ww,
                top: wh
            }, 2000, function () {
                setTimeout(goLeft, 50);
            });
        }
        function goLeft() {
            $(".myMotorcycle").animate({
                left: 0,
                top: 0
            }, 10, function () {
                setTimeout(goRight, 50);
            });
        }
        setTimeout(goRight, 50);
    };
    Motorcycle.prototype.delete = function () {
        var damage = this.div.id;
        var x = +damage;
        var y = x - 1;
        this.div.innerHTML = "" + y;
        if (x > 1) {
            var newID = x - 1;
            this.div.id = "" + newID;
        }
        else {
            this.div.remove();
        }
    };
    return Motorcycle;
}());
function addMotorcycle() {
    var motorcycle = new Motorcycle();
    motorcycle.insert();
    vehicleArray.push(motorcycle);
}
// BELOW TANK  BELOW TANK BELOW TANK  ----------------------------------------
var Tank = (function () {
    function Tank() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'myTank';
        this.div.id = '10';
        this.div.addEventListener('click', function () {
            _this.delete();
        });
    }
    Tank.prototype.insert = function () {
        var myGameArea = document.getElementById('gameArea');
        myGameArea.appendChild(this.div);
        this.div.style.position = 'absolute';
        var boxText = this.div.id;
        this.div.innerHTML = boxText;
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    };
    Tank.prototype.move = function () {
        var wh = window.innerHeight;
        function goUp() {
            $(".myTank").animate({
                top: 0
            }, 10000, function () {
                setTimeout(goDown, 50);
            });
        }
        function goDown() {
            $(".myTank").animate({
                top: wh
            }, 10, function () {
                setTimeout(goUp, 50);
            });
        }
        setTimeout(goUp, 50);
    };
    Tank.prototype.delete = function () {
        var damage = this.div.id;
        var x = +damage;
        var y = x - 1;
        this.div.innerHTML = "" + y;
        if (x > 1) {
            var newID = x - 1;
            this.div.id = "" + newID;
        }
        else {
            this.div.remove();
        }
    };
    return Tank;
}());
function addTank() {
    var tank = new Tank();
    tank.insert();
    vehicleArray.push(tank);
}
function addVehicle() {
    var vehicle = new Vehicle();
    vehicle.insert();
    vehicleArray.push(vehicle);
}
var vehicleArray = [];
function startGame() {
    for (var i = 0; i < vehicleArray.length; i++) {
        var vehicle = vehicleArray[i];
        vehicle.move();
    }
}
