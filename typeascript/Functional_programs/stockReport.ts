/******************************************************************************
 *  @Purpose        : For StockReport
 *  @file           : stockReport.ts        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 *  @object_feature : Encapsulation,interface,access modifires
 ******************************************************************************/
interface stockInterface{
    stockName: String,
    numberOfShare: number,
    price: number
}
let stockInfo=<stockInterface>{};
class Stock{
    public stockReport() {
        try{
        var prompt = require('prompt-sync')();//node-module prompt-sync
        var numberRest = /[0-9]/g;
    /**
     * read file from json
     */
    
        console.log("Stocks Names-->");
        console.log("1: Google ");
        console.log("2: Microsoft");
        console.log("3: Apple");
        /*
        * enter choices to select inventory
        */
        var choice = prompt("Please enter your choice: ");
        /*
        * parse option to integer only
        */
        switch (parseInt(choice)) {
            case 1:
                stockInfo.stockName="Google";
                stockInfo.numberOfShare=5;
                stockInfo.price=200;
                console.log("Price per share in Google is: " + stockInfo.price);
                var share = prompt("Please enter the number of shares you want to purchase: ");
                
                if (!isNaN(share)) {
                    var total = share * stockInfo.price;
                    /**
                     * calculate total shares and print the price
                     */
                    console.log("Per Stock in " + stockInfo.stockName + " is sold for Rs." + stockInfo.price + " and for " + share + " shares the price would be Rs." + total);
                }
                else {
                    console.log("please enter integers only!");
                }
                break;
            case 2:
                    stockInfo.stockName="Microsoft";
                    stockInfo.numberOfShare=4;
                    stockInfo.price=700;
                console.log("Price per share in Microsoft is: " + stockInfo.price);
                var share = prompt("Please enter the number of shares you want to purchase: ");
                if (!isNaN(share)) {
                    var total = share * stockInfo.price;
                    /**
                     * calculate total shares and print the price
                     */
                    console.log("Per Stock in " + stockInfo.stockName + " is sold for Rs." + stockInfo.price + " and for " + share + " shares the price would be Rs." + total);
                }
                else {
                    console.log("please enter integers only!");
                }
                break;
            case 3:
                    stockInfo.stockName="Apple";
                    stockInfo.numberOfShare=5;
                    stockInfo.price=800;
                console.log("Price per share in Apple is: " +  stockInfo.price);
                var share = prompt("Please enter the number of shares you want to purchase: ");
                if (!isNaN(share)) {
                    var total = share *  stockInfo.price;
                    /**
                     * calculate total shares and print the price
                     */
                    console.log("Per Stock in " + stockInfo.stockName + " is sold for Rs." +  stockInfo.price + " and for " + share + " shares the price would be Rs." + total);
                }
                else {
                    console.log("please enter integers only!");
                }
                break;
            /**
             * validating a number choice
             */
            default:
                console.log("Please select a valid choice!!");
        }
        /**
         * print the total price of all the stocks
         */
       
    /* 
    * For Testing
    */
    var array=[];
    array[0]=share;
    array[1]=choice;
        }
        catch(err){
            throw("Error in stock Report")
        }
    return array;
    }
    }
    
   var classStock=new Stock();
   classStock.stockReport();