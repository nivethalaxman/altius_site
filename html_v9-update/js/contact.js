// angular.module('contact', [])

// .controller('contactCtrl', function($scope,$http) {
//   $scope.form={name:"",email:"",comments:"",subject:""};
//   $scope.submit=function(){
    
//     var data={ "name":$scope.form.name,
//              "email":$scope.form.email,
//              "subject":$scope.form.subject,
//              "comment": $scope.form.comments
//              };
//         $http({
//               method: 'post',
//               url:  "http://192.168.1.74:3000/api/v1/contacts/create",
//               data: data     
//             })
//             .then(function(response) {
//               console.log(response);
//               alert("Registered Successfully");
//       })
//   }
// });

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.form={name:"",email:"",comments:"",subject:""};
  $scope.submit=function(){
    
    var data={ "name":$scope.form.name,
             "email":$scope.form.email,
             "subject":$scope.form.subject,
             "comment": $scope.form.comments
             };
        $http({
              method: 'post',
              url:  "http://192.168.1.74:3000/api/v1/contacts/create",
              data: data     
            })
            .then(function(response) {
              $scope.form="";
              console.log(response);
              alert("Registered Successfully");
      })
  }
});