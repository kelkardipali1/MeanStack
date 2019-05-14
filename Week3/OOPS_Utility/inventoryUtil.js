/*************************************************************************************************
*  @Purpose        : To display json data and calculate cost required  
*  @file           : inventoryUtil.js
*  @overview       : create functions for displaying json data and calculate cost required that taking 
                     input from file named inventoryDataManagement.js and export that function for making it 
                     publically available.
*  @author         : Dipali Kelkar
*  @version        : 1.33.1-1554971066
*  @since          : 8-05-2019
***************************************************************************************************/
module.exports={
    /* 
    * displaing json file data 
    */
    displayJsonData(jsonGrocery){
        console.log(jsonGrocery)
        return jsonGrocery;

    },
    /* 
    * calculate cost by taking weight and price as input
    */
    calculateCost(weight,price){
        cost=weight*price;
        return cost;
    }

}



