/******************************************************************************
 *  @Purpose        : for Controling front end dashboard
 *  @file           : chatController.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.controller('chatController', function ($scope, SocketService, $state, chatServices) {
    /**
     * @description: Taking input from localstorage
     */
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    $scope.token = localStorage.getItem('token')
    console.log(" $scope.token", $scope.token)
    /**
     * @description:if the tocken is null then go to login page
     */
    if ($scope.token === null) {
        $state.go('login');
    }
    try {

        /**
         * listening to the evnts
         */
        SocketService.on('newMessageSingle', message => {
            if (localStorage.getItem('userid') == message.senderId || (localStorage.getItem('userid') == message.receiverId && localStorage.getItem('ruserId') == message.senderId)) {
                if ($scope.allUserArr === undefined) {
                    /**
                     * assigning message to variable
                     */
                    $scope.allUserArr = message;
                } else {
                    $scope.allUserArr.push(message);
                }
            }
        })
    }
    catch (err) {
        console.log("error in finding message")
    }
    $scope.getAllUsers = function () {
        console.log("get all users token inside " + $scope.token);
        chatServices.getAllUsers($scope, $scope.token);
    }
    $scope.getAllUsers();
    /**
     * select person from list
     */
    $scope.person = function (userData) {
        $scope.allUserArr = '';
        /** 
         * getting data from localstorage 
         */
        localStorage.setItem('rusername', userData.firstName);
        localStorage.setItem('ruserId', userData._id);
        console.log("username", userData)
        $scope.receiverName = localStorage.getItem('rusername');
        $scope.getUserMsg();
    }
    /**
     * get all message
     */
    $scope.getUserMsg = function () {
        console.log(" user msg i am called");
        chatServices.getUserMsg($scope);
    }
    try {
        /**
         * send message function
         */
        $scope.sendmessage = function () {
            var msg = {
                'senderId': localStorage.getItem('userid'),
                'senderName': localStorage.getItem('name'),
                'receiverId': localStorage.getItem('ruserId'),
                'receiverName': localStorage.getItem('rusername'),
                'message': $scope.message
            };
            $scope.message = '';
            /**
             * emitting the message to the browser
             */
            SocketService.emit('createMessage', msg);
        }
    }
    catch (err) {
        console.log("error in sending message to the reciever")
    }

    try {
        $scope.logout = function () {
            localStorage.clear();
            /**
             * return back to login page//change  /login
             */
            $state.go('login')
        }
    }
    catch (err) {
        console.log("error in logging out")
    }
});