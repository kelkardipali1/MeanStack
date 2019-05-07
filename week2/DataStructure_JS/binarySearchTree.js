/******************************************************************************
 *  @Purpose        : A binary tree is a tree which is characterized by any of 
                      the following properties:It can be empty (null).
                      It can contain a root node which contain some value and two subtree, 
                      left subtree and right subtree, which are also binary tree.
                      A binary tree is a binary search tree (BST) if all the non-empty nodes 
                      follows both two properties:
                      If node has a left subtree, then all the values in its left subtree are smaller than the value of the current node.
                      If node has a right subtree, then all the value in its right subtree are greater than the value of the current node.   
 *  @file           : binarySearchTree.js
 *  @overview       : You are given N nodes, each having unique value ranging from [1, N], 
                      how many different binary search tree can be created using all of them.         
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 3/05/2019
 ******************************************************************************/
var binaryTree=require('./Utility/bsTree');
function findBSTs() {
    console.log("Enter the number of BinarySearchTrees you  want: ");
    var binarysearchTree = binaryTree.inputread();
    var z=binarysearchTree
    try{
    
        //it will checks number of binary search trees we want to print
        
        if (binarysearchTree % 1 != 0) throw "Number required , Floating value found"
        if (binarysearchTree < 0) throw "BSTs value is Invalid , Please Enter a positive value"
        if (binarysearchTree == "") throw "No input found"
        if (isNaN(binarysearchTree)) throw "No input or String found , Please Enter a value in range 1-12";
        while (binarysearchTree-- > 0) {
            console.log("");
            console.log("Enter number of nodes you want in the BST");
            var nodes = binaryTree.inputread();
            var x=nodes;
            try{
                
                //it will checks number of nodes we want to print the binary trees
                      
                if (nodes % 1 != 0) throw "Number required , Floating value found"
                if (nodes < 0) throw "BSTs value is Invalid , Please Enter a positive value"
                if (nodes == "") throw "No input found"
                if (isNaN(nodes)) throw "No input or String found , Please Enter a value in range 1-12";
                
                //find count of BST and binary trees with n odes 
                
                var count;
                count = Math.floor(binaryTree.countBST(nodes),0);
                
             //print count of BST and  binary trees with n nodes 
                
                console.log("Total number of BSTs with " + nodes + " nodes is " + count);
            }   catch(err){
                    console.log("Error: " + err);
                }
            console.log();
        }
    }   catch(err){
            console.log("Error: " + err);
        }
        var array=[];
        array[0]=z;
        array[1]=z;
        array[2]=z;
        array[3]=x;
        array[4]=x;
        return array;
}
module.exports=findBSTs();

