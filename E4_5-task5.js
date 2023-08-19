// Электрические Приборы
class ElectricAppliance{
    constructor(){
        this.voltage = 220;
        this.plugged = false;
    }
    // Подключить прибор
    plugIn = function(){
        if (this.plugged === false){
            this.plugged = true; console.log("The appliance is plugged")
        } else {console.log("Already plugged")}
    }
    // Отключить прибор
    plugOut = function(){
        if (this.plugged === true){
            this.plugged = false; console.log("The appliance is unplugged")
        } else {console.log("Already unplugged")}
    }
}

//Приборы Освещения (название, потребляемый ток, цветовая температура)
class Lighting extends ElectricAppliance{
    constructor(name, amperage, colorTemp, voltage){
        super(voltage);
        this.name = name;
        this.amperage = amperage;
        this.colorTemp = colorTemp;
    }
    //Подсчет мощности осветительного прибора
    getPower = function(){
        console.log(`Power: ${this.amperage * this.voltage} watt`)
    }
}

//Нагревательные Приборы (название, потребляемый ток, цвет)
class Heating extends ElectricAppliance{
    constructor(name, amperage, color, voltage){
        super(voltage);
        this.name = name;
        this.amperage = amperage;
        this.color = color; 
    }
    //Подсчет мощности нагревательного прибора
    getPower = function(){
        console.log(`Power of Heating appliance: ${this.amperage * this.voltage} watt`)
    }
}

const lamp = new Lighting('Lamp', 0.5, '1100')
const iron = new Heating('Iron', 1.5, 'white')

console.log(lamp)
lamp.plugIn()
lamp.getPower()

console.log(iron)
iron.plugOut()
iron.getPower()
