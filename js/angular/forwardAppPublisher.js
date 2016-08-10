/**
 * Created by megha on 1/6/15.
 */
// forwardAppPublisher.js

var forwardAppPublisher = angular.module('forwardAppPublisher', []);

function PublisherPackageCtrl($scope) {
    $scope.simplelist = false;

    $scope.isList = function ( flag ){
        if( flag == 'simplegrid' ){
            $scope.simplelist = false;

        } else if( flag == 'simplelist' ){
            $scope.simplelist = true;
        }
    }

    $scope.packages = [{"_id":"1", "packageName":"Package name 1","image":"package1_400x300.PNG", "modalImage":"pub1.PNG", "type":"Automative", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) " },
                    { "_id":"2", "packageName":"Package name 2", "image":"package2_400x300.PNG", "modalImage":"pub2.PNG", "type":"Technology", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus...) " },
                    { "_id":"3", "packageName":"Package name 3", "image":"package3_400x300.PNG", "modalImage":"pub3.PNG", "type":"Sports", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus...) "  },
                    { "_id":"4", "packageName":"Package name 4", "image":"package4_400x300.PNG", "modalImage":"pub4.PNG", "type":"Sports", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
                    { "_id":"5", "packageName":"Package name 5", "image":"package5_400x300.PNG", "modalImage":"pub5.PNG", "type":"Automative", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
                    { "_id":"6", "packageName":"Package name 6", "image":"package6_400x300.PNG", "modalImage":"pub6.PNG", "type":"Technology", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
                    { "_id":"7", "packageName":"Package name 7", "image":"package1_400x300.PNG", "modalImage":"pub1.PNG", "type":"Sports", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
                    { "_id":"8", "packageName":"Package name 8", "image":"package2_400x300.PNG", "modalImage":"pub2.PNG", "type":"Sports", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
                    { "_id":"9", "packageName":"Package name 9", "image":"package3_400x300.PNG", "modalImage":"pub3.PNG", "type":"Automative", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " },
                    { "_id":"10", "packageName":"Package name 10", "image":"package4_400x300.PNG", "modalImage":"pub4.PNG", "type":"Technology", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus...) " }];
};



function PublisherDatatableCtrl ($scope) {
    $scope.dataSet = [
        ['1','Campaign name1 by buyers name','Publisher1','active','256,123','$2,95','$755,562','Not garanteed', 'Dec, 14th', 'Dec, 21st', '728X90','Fixed'],
        ['2','Campaign name2 by buyers name','Publisher2','active','100,00','$5,00','$500,000','Not garanteed', 'Dec, 15th', 'Dec, 22st', '728X90','Fixed'],
        ['3','Campaign name3 by buyers name','Publisher3','active','150,000','$3,00','$450,000','Not garanteed', 'Dec, 16th', 'Dec, 31st', '728X90','Fixed'],
        ['4','Campaign name4 by buyers name','Publisher4','active','100,000','$4,00','$400,000','Not garanteed', 'Dec, 17th', 'Dec, 24st', '728X90','Fixed'],
        ['5','Campaign name5 by buyers name','Publisher5','active','80,000','$5,00','$600,000','Not garanteed', 'Dec, 18th', 'Dec, 27st', '728X90','Fixed']
    ];

    $scope.totalDeals = $scope.dataSet.length;
}

function PublisherChartCtrl ($scope) {
    $scope.RevenueJson = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
    $scope.ImpressionsJson = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];

    $scope.ranges = [
            [1246406400000, 14.3, 27.7],
            [1246492800000, 14.5, 27.8],
            [1246579200000, 15.5, 29.6],
            [1246665600000, 16.7, 30.7],
            [1246752000000, 16.5, 25.0],
            [1246838400000, 17.8, 25.7],
            [1246924800000, 13.5, 24.8],
            [1247011200000, 10.5, 21.4]
        ];
    $scope.revenueWithDeals = [
            [1246406400000, 14.3],
            [1246492800000, 14.5],
            [1246579200000, 15.5],
            [1246665600000, 16.7],
            [1246752000000, 16.5],
            [1246838400000, 17.8],
            [1246924800000, 13.5],
            [1247011200000, 10.5]
        ];
    $scope.revenueWithoutDeals = [
            [1246406400000, 27.7],
            [1246492800000, 27.8],
            [1246579200000, 29.6],
            [1246665600000, 30.7],
            [1246752000000, 25.0],
            [1246838400000, 25.7],
            [1246924800000, 24.8],
            [1247011200000, 21.4]
        ];
    
}



forwardAppPublisher.controller('PublisherPackageCtrl', PublisherPackageCtrl);
forwardAppPublisher.controller('PublisherDatatableCtrl', PublisherDatatableCtrl);
forwardAppPublisher.controller('PublisherChartCtrl', PublisherChartCtrl);

