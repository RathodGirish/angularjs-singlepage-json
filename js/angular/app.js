	
var forwardAppBuyer = angular.module("forwardAppBuyer", []);


forwardAppBuyer.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});

var packagesJSON = [
                    { "_id":"1", "packageName":"Italian Food lovers","image":"package1_400x300.png", "modalImage":"package1_400x300.png", "category":"Food", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                    { "_id":"2", "packageName":"Sports News ROS", "image":"package2_400x300.png", "modalImage":"package2_400x300.png", "category":"Technology", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus....) ", "color": "#5583A9;" },
                    { "_id":"3", "packageName":"Men interested in sports", "image":"package3_400x300.png", "modalImage":"package3_400x300.png", "category":"Sports", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"SmartTV", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus....) ", "color": "#5D23A9;"  },
                    { "_id":"4", "packageName":"Economist 728x90 ROS", "image":"package4_400x300.png", "modalImage":"package4_400x300.png", "category":"News", "publisher":"Semilo", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#408AAA;" },
                    { "_id":"5", "packageName":"Ask.FM Leaderboard EMEA", "image":"package5_400x300.png", "modalImage":"package5_400x300.png", "category":"Social Networks", "publisher":"Ask.fm", "size":"728 x 90", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#2083A9;" },
                    { "_id":"6", "packageName":"Ask.FM Leaderboard CAN", "image":"package5_400x300.png", "modalImage":"package5_400x300.png", "category":"Social Networks", "publisher":"Ask.fm", "size":"728 x 90", "platform":"Mobile", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#2083A9;" },
                    { "_id":"7", "packageName":"Jappy.de Logout", "image":"package1_400x300.png", "modalImage":"package1_400x300.png", "category":"Social Networks", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Desktop", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D05A9;" },
                    { "_id":"8", "packageName":"Pckg nm 8", "image":"package2_400x300.png", "modalImage":"package2_400x300.png", "category":"Sports", "publisher":"Semilo", "size":"300 x 250", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D15A9;" },
                    { "_id":"9", "packageName":"Pckg nm 9", "image":"package3_400x300.png", "modalImage":"package3_400x300.png", "category":"Automotive", "publisher":"Semilo" , "size":"300 x 250", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#508BA9;" },
                    { "_id":"10", "packageName":"Pckg nm 10", "image":"package4_400x300.png", "modalImage":"package4_400x300.png", "category":"Technology", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5A03A9;" },
                    { "_id":"11", "packageName":"Pckg nm 11","image":"package5_400x300.png", "modalImage":"package5_400x300.png", "category":"Automotive", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D03A9;" },
                    { "_id":"12", "packageName":"Pckg nm 12", "image":"package6_400x300.png", "modalImage":"package6_400x300.png", "category":"Technology", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus....) ", "color": "#5D20A9;" },
                    { "_id":"13", "packageName":"Pckg nm 13", "image":"package1_400x300.png", "modalImage":"package1_400x300.png", "category":"Sports", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"SmartTV", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus....) ", "color": "#5D80A9;"  },
                    { "_id":"14", "packageName":"Pckg nm 14", "image":"package2_400x300.png", "modalImage":"package2_400x300.png", "category":"Sports", "publisher":"Semilo", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D01A9;" },
                    { "_id":"15", "packageName":"Pckg nm 15", "image":"package3_400x300.png", "modalImage":"package3_400x300.png", "category":"Automotive", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#0183A9;" },
                    { "_id":"16", "packageName":"Pckg nm 16", "image":"package4_400x300.png", "modalImage":"package4_400x300.png", "category":"Technology", "publisher":"Semilo", "size":"300 x 250", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D23A9;" },
                    { "_id":"17", "packageName":"Pckg nm 17", "image":"package5_400x300.png", "modalImage":"package5_400x300.png", "category":"Sports", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"SmartTV", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D82A9;" },
                    { "_id":"18", "packageName":"Pckg nm 18", "image":"package6_400x300.png", "modalImage":"package6_400x300.png", "category":"Sports", "publisher":"Semilo", "size":"300 x 250", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5A83A9;" },
                    { "_id":"19", "packageName":"Pckg nm 19", "image":"package1_400x300.png", "modalImage":"package1_400x300.png", "category":"Automotive", "publisher":"Semilo" , "size":"300 x 250", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D93A9;" },
                    { "_id":"20", "packageName":"Pckg nm 20", "image":"package2_400x300.png", "modalImage":"package2_400x300.png", "category":"Technology", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D82A9;" },
                    { "_id":"21", "packageName":"Pckg nm 21","image":"package3_400x300.png", "modalImage":"package3_400x300.png", "category":"Automotive", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D82A9;" },
                    { "_id":"22", "packageName":"Pckg nm 22", "image":"package4_400x300.png", "modalImage":"package4_400x300.png", "category":"Technology", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus....) ", "color": "#5C83A9;" },
                    { "_id":"23", "packageName":"Pckg nm 23", "image":"package5_400x300.png", "modalImage":"package5_400x300.png", "category":"Sports", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"SmartTV", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus....) ", "color": "#5D89A9;"  },
                    { "_id":"24", "packageName":"Pckg nm 24", "image":"package6_400x300.png", "modalImage":"package6_400x300.png", "category":"Sports", "publisher":"Semilo", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D85A9;" },
                    { "_id":"25", "packageName":"Pckg nm 25", "image":"package1_400x300.png", "modalImage":"package1_400x300.png", "category":"Automotive", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5083A9;" },
                    { "_id":"26", "packageName":"Pckg nm 26", "image":"package2_400x300.png", "modalImage":"package2_400x300.png", "category":"Technology", "publisher":"Semilo", "size":"300 x 250", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5583A9;" },
                    { "_id":"27", "packageName":"Pckg nm 27", "image":"package3_400x300.png", "modalImage":"package3_400x300.png", "category":"Sports", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"SmartTV", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D82A9;" },
                    { "_id":"28", "packageName":"Pckg nm 28", "image":"package4_400x300.png", "modalImage":"package4_400x300.png", "category":"Sports", "publisher":"Semilo", "size":"300 x 250", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D81A9;" },
                    { "_id":"29", "packageName":"Pckg nm 29", "image":"package5_400x300.png", "modalImage":"package5_400x300.png", "category":"Automotive", "publisher":"Semilo" , "size":"300 x 250", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5A83A9;" },
                    { "_id":"30", "packageName":"Pckg nm 30", "image":"package6_400x300.png", "modalImage":"package6_400x300.png", "category":"Technology", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Video", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D93A9;" }
                  ];

var publishersJSON = [
                      { "_id":"1", "publisherName":"Ask.fm","image":"pub1.png", "modalImage":"pub1.png", "category":"Social Networks", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"2", "publisherName":"Jappy.de", "image":"pub2.png", "modalImage":"pub2.png", "category":"Social Networks", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Mobile", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"3", "publisherName":"Meteo Group", "image":"pub3.png", "modalImage":"pub3.png", "category":"Weather", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;"  },
                      { "_id":"4", "publisherName":"The Economist", "image":"pub4.png", "modalImage":"pub4.png", "category":"News", "publisher":"Semilo", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"5", "publisherName":"24Kitchen", "image":"pub5.png", "modalImage":"pub5.png", "category":"Food", "publisher":"publisher3", "size":"728 x 90", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"6", "publisherName":"NRC", "image":"pub6.png", "modalImage":"pub6.png", "category":"News", "publisher":"Semilo", "size":"300 x 250", "platform":"Desktop", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"7", "publisherName":"Ebay", "image":"pub1.png", "modalImage":"pub1.png", "category":"Marketplace", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Desktop", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"8", "publisherName":"Der Spiegel", "image":"pub2.png", "modalImage":"pub2.png", "category":"News", "publisher":"Semilo", "size":"300 x 250", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"9", "publisherName":"AutoTrack", "image":"pub3.png", "modalImage":"pub3.png", "category":"Automotive", "publisher":"publisher3" , "size":"300 x 250", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"10", "publisherName":"Publ nm 10", "image":"pub4.png", "modalImage":"pub4.png", "category":"Technology", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Mobile", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"11", "publisherName":"Publ nm 11","image":"pub5.png", "modalImage":"pub5.png", "category":"Automotive", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"12", "publisherName":"Publ nm 12", "image":"pub6.png", "modalImage":"pub6.png", "category":"Technology", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Mobile", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"13", "publisherName":"Publ nm 13", "image":"pub1.png", "modalImage":"pub1.png", "category":"Sports", "publisher":"publisher3", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;"  },
                      { "_id":"14", "publisherName":"Publ nm 14", "image":"pub2.png", "modalImage":"pub2.png", "category":"Sports", "publisher":"Semilo", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"15", "publisherName":"Publ nm 15", "image":"pub3.png", "modalImage":"pub3.png", "category":"Automotive", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"16", "publisherName":"Publ nm 16", "image":"pub4.png", "modalImage":"pub4.png", "category":"Technology", "publisher":"Semilo", "size":"300 x 250", "platform":"Desktop", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"17", "publisherName":"Publ nm 17", "image":"pub5.png", "modalImage":"pub5.png", "category":"Sports", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Desktop", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"18", "publisherName":"Publ nm 18", "image":"pub6.png", "modalImage":"pub6.png", "category":"Sports", "publisher":"Semilo", "size":"300 x 250", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"19", "publisherName":"Publ nm 19", "image":"pub1.png", "modalImage":"pub1.png", "category":"Automotive", "publisher":"Semilo" , "size":"300 x 250", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"20", "publisherName":"Publ nm 20", "image":"pub2.png", "modalImage":"pub2.png", "category":"Technology", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Mobile", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"21", "publisherName":"Publ nm 21","image":"pub3.png", "modalImage":"pub3.png", "category":"Automotive", "publisher":"Semilo", "size":"728 x 90", "platform":"Desktop", "price": "$2,99", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package1 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"22", "publisherName":"Publ nm 22", "image":"pub4.png", "modalImage":"pub4.png", "category":"Technology", "publisher":"publisher3", "size":"728 x 90", "platform":"Mobile", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package2 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"23", "publisherName":"Publ nm 23", "image":"pub5.png", "modalImage":"pub5.png", "category":"Sports", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package3 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;"  },
                      { "_id":"24", "publisherName":"Publ nm 24", "image":"pub6.png", "modalImage":"pub6.png", "category":"Sports", "publisher":"Semilo", "size":"728 x 90", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"25", "publisherName":"Publ nm 25", "image":"pub1.png", "modalImage":"pub1.png", "category":"Automotive", "publisher":"MeteoGroup", "size":"728 x 90", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"26", "publisherName":"Publ nm 26", "image":"pub2.png", "modalImage":"pub2.png", "category":"Technology", "publisher":"Semilo", "size":"300 x 250", "platform":"Desktop", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"27", "publisherName":"Publ nm 27", "image":"pub3.png", "modalImage":"pub3.png", "category":"Sports", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Desktop", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"28", "publisherName":"Publ nm 28", "image":"pub4.png", "modalImage":"pub4.png", "category":"Sports", "publisher":"Semilo", "size":"300 x 250", "platform":"Mobile", "price": "$4,95", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"29", "publisherName":"Publ nm 29", "image":"pub5.png", "modalImage":"pub5.png", "category":"Automotive", "publisher":"Semilo" , "size":"300 x 250", "platform":"Desktop", "price": "$1,85", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },
                      { "_id":"30", "publisherName":"Publ nm 30", "image":"pub6.png", "modalImage":"pub6.png", "category":"Technology", "publisher":"MeteoGroup", "size":"300 x 250", "platform":"Mobile", "price": "$3,05", "aboveFold":"Yes", "minImpression":"25,000,000", "sizes":[{"one":"728 x 90"}, {"two":"300 x 250"}, {"three":"200 x 200"}], "description":"Short description of package4 e.g. (Inter quos Paulus....) ", "color": "#5D83A9;" },

                    ];
var placementsJSON = [
    [
        [
            {"value":"2.5", "wr":"75"},
            {"value":"2.8", "wr":"60"},
            {"value":"3.45", "wr":"50"}
        ],
        [
            {"value":"2.5" ,"wr":"85"},
            {"value":"2.8" ,"wr":"50"},
            {"value":"3.45" ,"wr":"40"}
        ],
        [
            {"value":"2.3" ,"wr":"75"},
            {"value":"2.8" ,"wr":"65"},
            {"value":"3.45" ,"wr":"50"}
        ]
    ],
    [
        [
            {"value":"2.1" ,"wr":"75"},
            {"value":"2.8" ,"wr":"75"},
            {"value":"3.45" ,"wr":"75"}
        ],
        [
            {"value":"2.4" ,"wr":"84"},
            {"value":"2.6" ,"wr":"87"},
            {"value":"3.45" ,"wr":"93"}
        ],
        [
            {"value":"2.5" ,"wr":"75"},
            {"value":"2.8" ,"wr":"75"},
            {"value":"3.4" ,"wr":"75"}
        ]
    ],
    [
        [
            {"value":"1.2" ,"wr":"75"},
            {"value":"2.8" ,"wr":"85"},
            {"value":"3.55" ,"wr":"95"}
        ],
        [
            {"value":"2.7" ,"wr":"60"},
            {"value":"2.8" ,"wr":"50"},
            {"value":"3.45" ,"wr":"40"}
        ],
        [
            {"value":"1.5" ,"wr":"75"},
            {"value":"2.55" ,"wr":"60"},
            {"value":"3.45" ,"wr":"50"}
        ]
    ]
];


var resultArray = [3, 5, 7, 9];

function CreateOwnPackageCtrl($scope) {

  $scope.typeOfDeal = angular.element('.guaranteed').val();

};

function PackagePublisherViewCtrl($scope, $timeout) {
	$scope.grouping = false;
	$scope.packageItemsPerPage = 9;
	$scope.publisherItemsPerPage = 9;
	$scope.packageCurrentPage = 0;
	$scope.publisherCurrentPage = 0;
	$scope.results = resultArray;
	$scope.groupByType = 'category';
	$scope.viewType = 'grid';
	  
	$scope.packages =  packagesJSON;
	$scope.publishers = publishersJSON;
    

	$scope.isPackage = true;
	$scope.isPublisher = false;
	$scope.simplelist = false;
	$scope.simplegrid = true;
	
	$scope.results = resultArray;
	$scope.listgroup = false;
	$scope.gridgroup = false;


  
  $scope.isList = function ( flag ){
    if( flag == 'displaylist' ){
      $scope.viewType = 'list';
      $scope.simplelist = true;
      $scope.simplegrid = false;
    } else if( flag == 'displaygrid' ){
      $scope.viewType = 'grid';
      $scope.simplegrid = true;
      $scope.simplelist = false;
    }

    if( flag == 'displaylistgroup' ){
      $scope.viewType = 'list';
      $scope.grouping = true;
      $scope.listgroup = true;
      $scope.gridgroup = false;

    } else if( flag == 'displaygridgroup' ){
      $scope.viewType = 'grid';
      $scope.grouping = true;
      $scope.listgroup = false;
      $scope.gridgroup = true;
    }
  }
  
  
  // I sort the given collection on the given property.
  function sortOn( collection, name ) {
    collection.sort(
        function( a, b ) {
          if ( a[ name ] <= b[ name ] ) {
            return( -1 );
          }
          return( 1 );
        }
    );
  }
  
  $scope.changePackageItemsPerPage = function ( resultValue ){
    $scope.packageItemsPerPage = resultValue;
    $scope.packageCurrentPage = 0;
  }
  
  $scope.changePublisherItemsPerPage = function ( resultValue ){
    $scope.publisherItemsPerPage = resultValue;
    $scope.publisherCurrentPage = 0;
  }
  
		$scope.packagePageSize = $scope.publishers.length;
	    $scope.packageRange = function() {
			    var rangeSize = Math.ceil($scope.packages.length / $scope.packageItemsPerPage);
			    var ret = [];
			    var start;
		
			   start = $scope.packageCurrentPage;
			if ( start > $scope.packagePageCount()-rangeSize ) {
			   start = $scope.packagePageCount()-rangeSize+1;
			}
		
			for (var i=start; i<start+rangeSize; i++) {
			   ret.push(i);
			}
		    return ret;
		};


		$scope.packagePageCount = function() {
			return Math.ceil($scope.packages.length/$scope.packageItemsPerPage)-1;
		};
	  
	  $scope.publisherPageSize = $scope.publishers.length;
	  $scope.publisherRange = function() {
	    var rangeSize = Math.ceil($scope.publishers.length / $scope.publisherItemsPerPage);
	    var ret = [];
	    var start;

	    start = $scope.publisherCurrentPage;
	    if ( start > $scope.publihserPageCount()-rangeSize ) {
	      start = $scope.publihserPageCount()-rangeSize+1;
	    }

	    for (var i=start; i<start+rangeSize; i++) {
	      ret.push(i);
	    }
	    return ret;
	  };

	  $scope.publihserPageCount = function() {
	    return Math.ceil($scope.publishers.length/$scope.publisherItemsPerPage)-1;
	  };
  

  $scope.setPage = function(n) {
	  if ( $scope.isPackage == true && $scope.isPublisher == false ) {
		  $scope.packageCurrentPage = n;
	  } else if ( $scope.isPublisher == true && $scope.isPackage == false) { 
		  $scope.publisherCurrentPage = n;
	  }
  };
  
  $scope.isPackageOrPublisher = function ( flag, event ){
		$scope.packages =  packagesJSON;
		$scope.publishers = publishersJSON;
			if($scope.grouping == true){
				if($scope.groupByType == 'category'){
					 $timeout(function() {
						    angular.element('#groupByCategory').trigger('click');
						  }, 0);
				} else if ($scope.groupByType == 'size'){
					 $timeout(function() {
						    angular.element('#groupBySize').trigger('click');
						  }, 0);
				} else if ($scope.groupByType == 'platform'){
					 $timeout(function() {
						    angular.element('#groupByPlatform').trigger('click');
						  }, 0);
				} else if ($scope.groupByType == 'publisher'){
					 $timeout(function() {
						    angular.element('#groupByPublisher').trigger('click');
						  }, 0);
				}
			}
			
			
			if($scope.viewType == 'grid' ){
				if($scope.grouping == true ){
					
					 $timeout(function() {
						    angular.element('#grid-view-group-li').trigger('click');
						  }, 0);
				} else if($scope.grouping == false){
					 $timeout(function() {
						    angular.element('#grid-view-li').trigger('click');
						  }, 0);
				}
			} else if($scope.viewType == 'list'){
				if($scope.grouping == true ){
					
					 $timeout(function() {
						    angular.element('#list-view-group-li').trigger('click');
						  }, 0);
				} else if($scope.grouping == false){
					 $timeout(function() {
						    angular.element('#list-view-li').trigger('click');
						  }, 0);
				}
			}
			
		if( flag == 'publisher' ){
		  $scope.class = "active";
	      $scope.isPackage = false;
	      $scope.isPublisher = true;
	    } else if( flag == 'package' ){
	      $scope.class = "active";
	      $scope.isPackage = true;
	      $scope.isPublisher = false;
	    }

	  }
  
  $scope.groupBy = function( attribute ) {
//	    $scope.clickUpload = function(){
//	      angular.element('#grid-view-group-li').trigger('click');
//	    };
	    
	   
//	  $timeout(function() {
//		    angular.element('#grid-view-group-li').trigger('click');
//		  }, 0);
	  
	  $scope.groupByType = attribute;
	  
	  if($scope.viewType == 'grid'){
			 $timeout(function() {
				    angular.element('#grid-view-group-li').trigger('click');
				  }, 0);
		} else if($scope.viewType == 'list'){
			 $timeout(function() {
				    angular.element('#list-view-group-li').trigger('click');
				  }, 0);
		}
	  
	    $scope.simplegrid = false;
	    $scope.simplelist = false;
	    $scope.grouping = true;
	    // alert( $scope.grouping );
	    // First, reset the groups.
	    $scope.groups = [];
	    
//		  Group By Function for publishers -------------------------------------------------------------------------------------
//		  I group the publisher list on the given property.
		
	    if ( $scope.isPackage == true && $scope.isPublisher == false ) {
		    sortOn( $scope.packages, attribute );

		    // I determine which group we are currently in.
		    var groupValue = "category";

		    for ( var i = 0 ; i < $scope.packages.length ; i++ ) {

		      var package = $scope.packages[ i ];

		      // Should we create a new group?
		      if ( package[ attribute ] !== groupValue ) {

		        var group = {
		          label: package[ attribute ],
		          packages: []
		        };

		        groupValue = group.label;

		        $scope.groups.push( group );
		      }

		      group.packages.push( package );

		    }
	    } else if ( $scope.isPublisher == true && $scope.isPackage == false) { 
	    	sortOn( $scope.publishers, attribute );
	    	
		    // I determine which group we are currently in.
		    var groupValue = "category";
	
		    for ( var i = 0 ; i < $scope.publishers.length ; i++ ) {
	
		      var publisher = $scope.publishers[ i ];
	
		      // Should we create a new group?
		      if ( publisher[ attribute ] !== groupValue ) {
	
		        var group = {
		          label: publisher[ attribute ],
		          publishers: []
		        };
	
		        groupValue = group.label;
	
		        $scope.groups.push( group );
		      }
	
		      group.publishers.push( publisher );
	
		    }
	    }

	  };
	  $scope.groups = [];
};


forwardAppBuyer.controller('PackagePublisherViewCtrl', PackagePublisherViewCtrl);
