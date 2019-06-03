/******************************************************************************
 *  @Purpose        : for providing chatServices
 *  @file           : chatService.js      
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.service('chatServices', function ($http) {
    console.log("chat services")
    try {
        this.getAllUsers = function ($scope, usertoken) {
            console.log("get all users called in service chat")
            console.log("usertoken",usertoken)
            /**
             * @description:The AngularJS $http service makes a request to the server, and returns a response.
             */
            $http({
                method: 'GET',
                url: 'http://localhost:3000/getAllUsers',
                headers: {
                    'token': usertoken,
                }

            }).then(
                /**
                 * call back function of http sevice
                 */
                function successCallback(response) {
                    console.log("chat service get all users it returns some responce")

                    console.log(response.data.result)
                    $scope.allUser = response.data.result;



                },
                function errorCallback(response) {
                    console.log("register Unsuccessfull ");
                    console.log(response);
                }
            );
        }
    }
    catch (err) {
        console.log("error found here in getting users")
    }
    try {
        this.getUserMsg = function ($scope) {
            console.log("get user msg is called")
            var arr = [];
            var usertoken = localStorage.getItem('token');
            console.log("service token",usertoken)
            $http({
                method: 'GET',
                url: 'http://localhost:3000/getAllChats',
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) {
                    console.log("get user msg returns something")
                    console.log("response in chat servicde",response.data.result);
                    /**
                     * (response.data.message).length *change was done
                     */
                    for (let i = 0; i < (response.data.result.length); i++) {  
                        var a = response.data.result[i];
                        console.log("a is print is values" + a)
                        if (((localStorage.getItem('userid') == a.senderId) &&
                            (localStorage.getItem('ruserId') == a.receiverId)) ||
                            ((localStorage.getItem('userid') == a.receiverId &&
                                localStorage.getItem('ruserId') == a.senderId))) {


                            console.log("local user is ", localStorage.getItem('userid'), "a user is ", a.senderId, " local rcvrid is ", localStorage.getItem('ruserId'), "  reciver is ", a.receiverId);
                            /**
                             * pushing all message to array
                             */
                            arr.push(a);
                            console.log("after if loop" + arr)
                        }
                    }

                    $scope.allUserArr = arr;

                    console.log("Users msg successfull ", arr);

                },
                function errorCallback(response) {
                    console.log("Unsuccessfull ");
                    console.log(response);

                }
            );
        }
    }
    catch (err) {
        console.log("founr error in getting message")
    }

})