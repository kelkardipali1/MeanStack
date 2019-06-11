/******************************************************************************
 *  @Purpose        : For Inventory Management
 *  @file           : inventoryManagement.ts        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 *  @object_feature : Encapsulation,access modifires,inheritence
 ******************************************************************************/
export class inventory1 {
    public Invent() {
        /* 
        * node module for readline-sync
        */
        var prompt = require('readline-sync');
        /*
        * fetching fs package
        */
        var fs = require('fs');
        /*
        * For storing json file in this location
        */

        /* 
        * Reading and storing json file
        */
        var data = fs.readFileSync("/home/user/Desktop/typeScriptPrograms/JSON_Files/inventory.json")
        /*
        * function JSON.parse() is used to convert the string into a JavaScript Objects
        */

        var jsonGrocery = JSON.parse(data);
        /*
        *Display json file data
        */

        console.log("Inventory Details-->");
        console.log("1: Rice");
        console.log("2: Wheat");
        console.log("3: Pulses");
        /*
        * enter choices to select inventory
        */
        var item = prompt.question("Please enter your choice: ");
        var number = /[0-9]/g;
        var item1
        if (number.test(item) == true) {
            item1 = item;
        }
        else {
            throw 'Invalid'
        }
        /*
        * parse option to integer only
        */
        try {
            switch (parseInt(item1)) {
                case 1:
                    var weightRice = parseInt(prompt.question("Please enter the weight of rice you want to purchase: "));
                    if (!isNaN(weightRice)) {
                        for (var i = 0; i < jsonGrocery.Rice.length; i++) {
                            /*
                            * calculate total and print
                            */
                            var totalCostRequiredRice = weightRice * jsonGrocery.Rice[i].price
                            console.log("Per Kg. of " + jsonGrocery.Rice[i].name + " costs " + jsonGrocery.Rice[i].price + " and for " + weightRice + " Kgs. costs " + totalCostRequiredRice);
                        }
                    }
                    else {
                        console.log("please enter integers only!");
                    }
                    break;
                case 2:
                    var weightWheat = parseInt(prompt.question("Please enter the weight of wheat you want to purchase: "));
                    if (!isNaN(weightWheat)) {
                        for (var i = 0; i < jsonGrocery.Wheats.length; i++) {
                            /*
                            * calculate total and print
                            */
                            var totalCostRequiredWheat = weightWheat * jsonGrocery.Wheats[i].price
                            console.log("Per Kg. of " + jsonGrocery.Wheats[i].name + " costs " + jsonGrocery.Wheats[i].price + " and for " + weightWheat + " Kgs. costs " + totalCostRequiredWheat);
                        }
                    } else {
                        console.log("please enter integers only!");
                    }
                    break;
                case 3:
                    var weightPulse = parseInt(prompt.question("Please enter the weight of pulses you want to purchase: "));
                    if (!isNaN(weightPulse)) {
                        for (var i = 0; i < jsonGrocery.Pulses.length; i++) {
                            /*
                            * calculate total and print
                            */
                            var totalCostRequiredPulses = weightPulse * jsonGrocery.Pulses[i].price
                            console.log("Per Kg. of " + jsonGrocery.Pulses[i].name + " costs " + jsonGrocery.Pulses[i].price + " and for " + weightPulse + " Kgs. costs " + totalCostRequiredPulses);
                        }
                    } else {
                        console.log("please enter integers only!");
                    }
                    break;
                /**
                * validating a number item
                */
                default:
                    console.log("Please select a valid item!!");
            }
        }
        catch (err) {
            throw err;
        }
        /* 
        * testing user input for weight is integer or not
        */
        var array = [];
        array[0] = weightRice;
        return array;

    }

}
/*var inventoryAccess=new inventory1();
inventoryAccess.Invent();*/
