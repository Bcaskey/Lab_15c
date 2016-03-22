/// <reference path="typings/browser.d.ts" /> 
var Vehicle = (function () {
    function Vehicle() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'myVehicle';
        this.div.id = '5'; //will have to parse later 
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
        console.log('test');
        var damage = this.div.id;
        var x = +damage;
        // damage = parseInt(damage, 10);
        // let x = this.div.id;
        var y = x - 1;
        this.div.innerHTML = "" + y;
        if (x > 1) {
            var newID = x - 1;
            this.div.id = "" + newID;
        }
        else {
            this.div.remove();
        }
        // this.div.onclick = function(e){
        // }
    };
    return Vehicle;
}());
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
