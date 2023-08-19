// Электрические Приборы
function ElectricAppliance() {
    this.voltage = 220;
    this.plugged = false;
};

// Подключить прибор
ElectricAppliance.prototype.plugIn = function(){
    if (this.plugged === false){
        this.plugged = true; console.log("The appliance is plugged")
    } else {console.log("Already plugged")}
};

// Отключить прибор
ElectricAppliance.prototype.plugOut = function(){
    if (this.plugged === true){
        this.plugged = false; console.log("The appliance is unplugged")
    } else {console.log("Already unplugged")}
};

//Приборы Освещения (название, потребляемый ток, цветовая температура)
function Lighting(name, amperage, colorTemp) {
    this.name = name;
    this.amperage = amperage;
    this.colorTemp = colorTemp;
};

Lighting.prototype = new ElectricAppliance();

//Подсчет мощности осветительного прибора
Lighting.prototype.getPower = function(){
    console.log(`Power: ${this.amperage * this.voltage} watt`)
};

//Нагревательные Приборы (название, потребляемый ток, цвет)
function Heating(name, amperage, color) {
    this.name = name;
    this.amperage = amperage;
    this.color = color;
};

Heating.prototype = new ElectricAppliance();

//Подсчет мощности нагревательного прибора
Heating.prototype.getPower = function(){
    console.log(`Power of Heating appliance: ${this.amperage * this.voltage} watt`)
};

const lamp = new Lighting('Lamp', 0.5, '1100')
const iron = new Heating('Iron', 1.5, 'white')

console.log(lamp)
lamp.plugIn()
lamp.getPower()

console.log(iron)
iron.plugOut()
iron.getPower()