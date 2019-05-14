
/*************************************************************************************************
*  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
*  @file           : inventoryDataManagement.js
*  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                     with properties name, weight, price per kg.Then read Json file and calculate 
                     value of each inventory. 
*  @author         : Dipali Kelkar
*  @version        : 1.33.1-1554971066
*  @since          : 8-05-2019
***************************************************************************************************/
/* class is taken for Encapsulation*/
class inventory1{
    Invent() {
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
        var path1="/home/user/Desktop/mochatest/OOPS_Programs_JS/JSON_Files/"
        /* 
        *For Storing file name
        */
        var path2=prompt.question("Enter the name of json file")
        /* 
        *For taking correct json file
        */
        while(path2!='Inventory.json'){
            
            console.log('Enter the correct json file')
            path2=prompt.question(" Re-enter the name of json file as Inventory.json")
            break;

        }
        /* 
        *Append location and fileName
        */
        var path=path1+path2
        /* 
        * Reading and storing json file
        */
        var data=fs.readFileSync(path) 
        /* 
        *taking utitlity location
        */  
        var util=require('../OOPS_Utility/inventoryUtil');                   

        /*
        * function JSON.parse() is used to convert the string into a JavaScript Objects
        */

        var jsonGrocery = JSON.parse(data);
        /*
        *Display json file data
        */
        var jsonData=util.displayJsonData(jsonGrocery);
        console.log("Inventory Details-->");
        console.log("1: Rice");
        console.log("2: Wheat");
        console.log("3: Pulses");
        /*
        * enter choices to select inventory
        */
        var item = parseInt(prompt.question("Please enter your choice: "));
        var number=/[0-9]/g;
        var item1
        if(number.test(item)==true){
            item1=item;
        }
        else{
            throw 'Invalid'
        }
        /*
        * parse option to integer only
        */
        try{
        switch (parseInt(item1)) {
            case 1:
                var weightRice = parseInt(prompt.question("Please enter the weight of rice you want to purchase: "));
                if (!isNaN(weightRice)) {
                    for (var i = 0; i < jsonGrocery.Rice.length; i++) {
                        /*
                        * calculate total and print
                        */
                        var totalCostRequiredRice=util.calculateCost(weightRice,jsonGrocery.Rice[i].price)
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
                        var totalCostRequiredWheat=util.calculateCost(weightWheat,jsonGrocery.Wheats[i].price)
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
                        var totalCostRequiredPulses=util.calculateCost(weightpulse,jsonGrocery.Pulses[i].price)
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
            catch(err){
                throw err;
            }
        /* 
        * testing user input for weight is integer or not
        */
        var weight;
        if(number.test(weightRice)==true || number.test(weightWheat)==true || number.test(weightPulse)==true){
            weight=1
        }
        else{
            weight=-1
        }
        /*
        * For Testing create empty array to store values
        */
        var array=[];
        array[0]=item1 //stroing selecting item
        array[1]=jsonGrocery;//json file data before function calling
        array[2]=jsonData //json file data after function calling
        array[3]=weight; //String weight value
        array[4]=path2;  // for checking file name entered is correct or not
        return array;


        }
}
/*var z=new inventory1   //for runing program
z.Invent();*/
module.exports=new inventory1()



