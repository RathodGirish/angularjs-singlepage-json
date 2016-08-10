/**
 * Created by megha on 1/6/15.
 */
// forwardAppBuyer.js

var forwardAppBuyer = angular.module('forwardAppBuyer', ['angularUtils.directives.dirPagination']);

function PackageDetailViewCtrl($scope, $http) {
    $scope.currentPage = 1;
    $scope.pageSize = 9;
    $scope.selectedId = 0;

    $scope.expandSelected = function ( selectedId ){
         $scope.selectedId = selectedId;
    }

    $scope.packages =  [
        { "_id":"1", "packageName":"Italian Food lovers","image":"package1_400x300.png", "modalImage":"package1_400x300.png", "category":"Food", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
        { "_id":"2", "packageName":"Pckg nm 2", "image":"package2_400x300.PNG", "modalImage":"package2_400x300.PNG", "category":"Technology", "publisher":"publisher2", "size":"728 x 90", "platform":"platform3", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus...) " },
        { "_id":"3", "packageName":"Pckg nm 3", "image":"package3_400x300.PNG", "modalImage":"package3_400x300.PNG", "category":"Sports", "publisher":"publisher2", "size":"728 x 90", "platform":"platform4", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus...) "  },
        { "_id":"4", "packageName":"Pckg nm 4", "image":"package4_400x300.PNG", "modalImage":"package4_400x300.PNG", "category":"Sports", "publisher":"publisher1", "size":"728 x 90", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
        { "_id":"5", "packageName":"Pckg nm 5", "image":"package5_400x300.PNG", "modalImage":"package5_400x300.PNG", "category":"Automotive", "publisher":"publisher2", "size":"728 x 90", "platform":"platform1", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
        { "_id":"6", "packageName":"Pckg nm 6", "image":"package6_400x300.PNG", "modalImage":"package6_400x300.PNG", "category":"Technology", "publisher":"publisher1", "size":"300 x 250", "platform":"platform3", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
        { "_id":"7", "packageName":"Pckg nm 7", "image":"package1_400x300.PNG", "modalImage":"package1_400x300.PNG", "category":"Sports", "publisher":"publisher2", "size":"300 x 250", "platform":"platform4", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
        { "_id":"8", "packageName":"Pckg nm 8", "image":"package2_400x300.PNG", "modalImage":"package2_400x300.PNG", "category":"Sports", "publisher":"publisher1", "size":"300 x 250", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
        { "_id":"9", "packageName":"Pckg nm 9", "image":"package3_400x300.PNG", "modalImage":"package3_400x300.PNG", "category":"Automotive", "publisher":"publisher1" , "size":"300 x 250", "platform":"platform1", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
        { "_id":"10", "packageName":"Pckg nm 10", "image":"package4_400x300.PNG", "modalImage":"package4_400x300.PNG", "category":"Technology", "publisher":"publisher2", "size":"300 x 250", "platform":"platform3", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " }
    ];

    $scope.similarPackages =  [
        { "_id":"1", "packageName":"Pckg nm 1","image":"package1_400x300.PNG", "modalImage":"pub1.PNG", "category":"Automotive", "publisher":"publisher1", "size":"728 x 90", "platform":"platform1", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) " },
        { "_id":"2", "packageName":"Pckg nm 2", "image":"package2_400x300.PNG", "modalImage":"pub2.PNG", "category":"Technology", "publisher":"publisher2", "size":"728 x 90", "platform":"platform2", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus...) " },
        { "_id":"3", "packageName":"Pckg nm 3", "image":"package3_400x300.PNG", "modalImage":"pub3.PNG", "category":"Sports", "publisher":"publisher2", "size":"728 x 90", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus...) "  },
        { "_id":"4", "packageName":"Pckg nm 4", "image":"package4_400x300.PNG", "modalImage":"pub4.PNG", "category":"Sports", "publisher":"publisher1", "size":"728 x 90", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " }
    ];

    $scope.pageChangeHandler = function(num) {
        console.log('meals page changed to ' + num);
    };
}

function PublisherDetailViewCtrl($scope, $http) {
    $scope.currentPage = 1;
    $scope.pageSize = 9;
    $scope.selectedId = 1;

    $scope.expandSelected = function ( selectedId ){
        $scope.selectedId = selectedId;
    }

    $scope.packages =  [
        { "_id":"1", "packageName":"Pckg nm 1","image":"package1_400x300.PNG", "modalImage":"package1_400x300.PNG", "category":"Automotive", "publisher":"publisher1", "size":"728 x 90", "platform":"platform1", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....)", "color": "#5D83A9;" },
        { "_id":"2", "packageName":"Pckg nm 2", "image":"package2_400x300.PNG", "modalImage":"package2_400x300.PNG", "category":"Technology", "publisher":"publisher2", "size":"728 x 90", "platform":"platform3", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus...) ", "color": "#5D92A9" },
        { "_id":"3", "packageName":"Pckg nm 3", "image":"package3_400x300.PNG", "modalImage":"package3_400x300.PNG", "category":"Sports", "publisher":"publisher2", "size":"728 x 90", "platform":"platform4", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus...) ", "color": "#5A55A9" },
        { "_id":"4", "packageName":"Pckg nm 4", "image":"package4_400x300.PNG", "modalImage":"package4_400x300.PNG", "category":"Sports", "publisher":"publisher1", "size":"728 x 90", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#5583AA" },
        { "_id":"5", "packageName":"Pckg nm 5", "image":"package5_400x300.PNG", "modalImage":"package5_400x300.PNG", "category":"Automotive", "publisher":"publisher2", "size":"728 x 90", "platform":"platform1", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#5C93A9" },
        { "_id":"6", "packageName":"Pckg nm 6", "image":"package6_400x300.PNG", "modalImage":"package6_400x300.PNG", "category":"Technology", "publisher":"publisher1", "size":"300 x 250", "platform":"platform3", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#9955A9" },
        { "_id":"7", "packageName":"Pckg nm 7", "image":"package1_400x300.PNG", "modalImage":"package1_400x300.PNG", "category":"Sports", "publisher":"publisher2", "size":"300 x 250", "platform":"platform4", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#9A83BB" },
        { "_id":"8", "packageName":"Pckg nm 8", "image":"package2_400x300.PNG", "modalImage":"package2_400x300.PNG", "category":"Sports", "publisher":"publisher1", "size":"300 x 250", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#5C66A9" },
        { "_id":"9", "packageName":"Pckg nm 9", "image":"package3_400x300.PNG", "modalImage":"package3_400x300.PNG", "category":"Automotive", "publisher":"publisher1" , "size":"300 x 250", "platform":"platform1", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#9D70A9" },
        { "_id":"10", "packageName":"Pckg nm 10", "image":"package4_400x300.PNG", "modalImage":"package4_400x300.PNG", "category":"Technology", "publisher":"publisher2", "size":"300 x 250", "platform":"platform3", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) ", "color": "#8099A9" }
    ];

    $scope.similarPackages =  [
        { "_id":"1", "packageName":"Pckg nm 1","image":"package1_400x300.PNG", "modalImage":"pub1.PNG", "category":"Automotive", "publisher":"publisher1", "size":"728 x 90", "platform":"platform1", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) " },
        { "_id":"2", "packageName":"Pckg nm 2", "image":"package2_400x300.PNG", "modalImage":"pub2.PNG", "category":"Technology", "publisher":"publisher2", "size":"728 x 90", "platform":"platform2", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus...) " },
        { "_id":"3", "packageName":"Pckg nm 3", "image":"package3_400x300.PNG", "modalImage":"pub3.PNG", "category":"Sports", "publisher":"publisher2", "size":"728 x 90", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus...) "  },
        { "_id":"4", "packageName":"Pckg nm 4", "image":"package4_400x300.PNG", "modalImage":"pub4.PNG", "category":"Sports", "publisher":"publisher1", "size":"728 x 90", "platform":"platform2", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " }
    ];

    $scope.pageChangeHandler = function(num) {
        console.log('meals page changed to ' + num);
    };
}

function CreateOwnPackageCtrl($scope) {

  $scope.typeOfDeal = angular.element('.guaranteed').val();
  $scope.placements = placementsJSON;
};

function BuyerChartCtrl ($scope) {
var getColor = {
        'A': '#b93137',
        'B': '#D63b42',
        'C': '#EE5659'
    };

/*  Area chart for visits   */
    $scope.ranges = [
            [1246406400000, 1, 2],
            [1246492800000, 1, 2.5],
            [1246579200000, 1, 3.8],
            [1246665600000, 1, 2.7],
            [1246752000000, 1, 4.1],
            [1246838400000, 1, 4.3],
            [1246924800000, 1, 3],
            [1247011200000, 1, 2]
        ];

    $scope.visits = [
            [1246406400000, 2],
            [1246492800000, 2.5],
            [1246579200000, 3.8],
            [1246665600000, 2.7],
            [1246752000000, 4.1],
            [1246838400000, 4.3],
            [1246924800000, 3],
            [1247011200000, 2]
        ];

/*  Pie charts for Gender and Age   */
    $scope.genderJson = [{
                data: [
                    {name:'Male', y: 75, color: getColor['B']},
                    {name: 'Female', y: 25, color: getColor['C']}
                ]}
                ];

    $scope.ageJson = [{
                data: [
                    {name:'2', y: 75, color: getColor['A']},
                    {name: '3', y: 25, color: getColor['B']},
                    {name: '4', y: 25, color: getColor['C']}
                ]}
            ];

/*  Column chart for Gender    */

    $scope.genderColumnJson = [
            {name: 'Male', data: [56, 38, 67, 52, 46, 37], color: getColor['B'] }, 
            {name: 'Female', data: [46, 61, 64, 58, 40, 52], color: getColor['C']}
            ];
/*  Bar charts for Places and Hobbies   */
    $scope.placesBarJson = [{
            name: 'Percentage',
            data: [45, 15, 15, 15, 10],
            color: "#D63b42"
        }];

    $scope.hobbiesBarJson = [{ name: 'Percentage',
            data: [45, 15, 15, 15, 10],
            color: "#D63b42"
        }];

}

function BuyerDatatableCtrl ($scope) {
    $scope.dataSet = [
        ['1','Campaign name1 by buyers name','active','256,123','$2,95','$755,562','Not garanteed', 'Dec, 14th', 'Dec, 21st', '728X90','Fixed'],
        ['2','Campaign name2 by buyers name','active','100,00','$5,00','$500,000','Not garanteed', 'Dec, 15th', 'Dec, 22st', '728X90','Fixed'],
        ['3','Campaign name3 by buyers name','active','150,000','$3,00','$450,000','Not garanteed', 'Dec, 16th', 'Dec, 31st', '728X90','Fixed'],
        ['4','Campaign name4 by buyers name','active','100,000','$4,00','$400,000','Not garanteed', 'Dec, 17th', 'Dec, 24st', '728X90','Fixed'],
        ['5','Campaign name5 by buyers name','active','80,000','$5,00','$600,000','Not garanteed', 'Dec, 18th', 'Dec, 27st', '728X90','Fixed']
    ];

    $scope.totalDeals = $scope.dataSet.length;
}

forwardAppBuyer.controller('PackageDetailViewCtrl', PackageDetailViewCtrl);
forwardAppBuyer.controller('PublisherDetailViewCtrl', PublisherDetailViewCtrl);

forwardAppBuyer.controller('CreateOwnPackageCtrl', CreateOwnPackageCtrl);
forwardAppBuyer.controller('BuyerChartCtrl', BuyerChartCtrl);

forwardAppBuyer.controller('BuyerDatatableCtrl', BuyerDatatableCtrl);
