/**
 * Created by megha on 1/12/15.
 */
$(function () {

    // Area visit highchart
    var ranges = $('[ng-controller="BuyerChartCtrl"]').scope().ranges;
    var visits = $('[ng-controller="BuyerChartCtrl"]').scope().visits;

    var getColor = {
        'A': '#b93137',
        'B': '#D63b42',
        'C': '#EE5659'
    };

    $('#visitChart').highcharts({

        title: {
            text: ''
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            labels: {
                format: '{value} M',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: false,
            valueSuffix: 'M'
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            y: -10,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            margin : 500,
            borderWidth: 1,
            borderRadius: 3,
            borderColor: '#E6E7E9'
        },
        series: [{
            name: 'Visits',
            data: visits,
            zIndex: 1,
            color : "#DE5353",
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: "#DE5353"
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: "#EFAAAA",
            fillOpacity: 0.2,
            zIndex: 0
        }],
        credits:{
            enabled:false
        },
        exporting: {
            enabled: false
        }
    });


    var genderJson = $('[ng-controller="BuyerChartCtrl"]').scope().genderJson;

    var genderPieChart = new Highcharts.Chart({
            chart: {
                renderTo: 'genderPieChart',
                type: 'pie'
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    innerSize: '95%',
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    tooltip : false
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                labelFormatter: function() {
                    return this.name + ' ' + this.y ;
                }
            },
            series: genderJson,
            credits:{
                enabled:false
            },
            exporting: {
                enabled: false
            }
        },

        function(genderPieChart) { // on complete
            var textX = genderPieChart.plotLeft + (genderPieChart.plotWidth  * 0.5);
            var textY = genderPieChart.plotTop  + (genderPieChart.plotHeight * 0.5);

            /* var span = '<span id="genderPieChartInfoText" style="position:absolute; text-align:center;">';
             span += '<span style="font-size: 20px">Gender</span><br>';
             span += '</span>';

             $("#genderText").append(span);
             span = $('#genderPieChartInfoText');
             span.css('left', textX + (span.width() * -0.5));
             span.css('top', textY + (span.height() * -0.5));*/
        });

    var ageJson = $('[ng-controller="BuyerChartCtrl"]').scope().ageJson;

    var agePieChart = new Highcharts.Chart({
            chart: {
                renderTo: 'agePieChart',
                type: 'pie'
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    innerSize: '95%',
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                labelFormatter: function() {
                    return this.name + ' ' + this.y + ' y/o';
                }
            },
            series: ageJson,
            credits:{
                enabled:false
            },
            exporting: {
                enabled: false
            }
        },

        function(agePieChart) { // on complete
            var textX = agePieChart.plotLeft + (agePieChart.plotWidth  * 0.5);
            var textY = agePieChart.plotTop  + (agePieChart.plotHeight * 0.5);

            /*var span = '<span id="agePieChartInfoText" style="position:absolute; text-align:center;">';
             span += '<span style="font-size: 20px">Age</span><br>';
             span += '</span>';

             $("#ageText").append(span);
             span = $('#agePieChartInfoText');
             span.css('left', textX + (span.width() * -0.3));
             span.css('top', textY + (span.height() * -0.3));*/
        });

    var genderColumnJson = $('[ng-controller="BuyerChartCtrl"]').scope().genderColumnJson;

    $('#genderColumnChart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Up to 18 y/o',
                '18 to 24 y/o',
                '37 to 45 y/o',
                '46 to 65 y/o',
                '66 to 77 y/o',
                '+78 y/o'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            y: -10,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            margin : 500,
            borderWidth: 1,
            borderRadius: 3,
            borderColor: '#E6E7E9'
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            }
        },
        series: genderColumnJson,
        credits:{
            enabled:false
        },
        exporting: {
            enabled: false
        }
    });

    var placesBarJson = $('[ng-controller="BuyerChartCtrl"]').scope().placesBarJson;
    $('#placesBarChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Netherland', 'United kingdom', 'France', 'Italy', 'Spain'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },

                borderColor : '#e0e1e4',
                borderWidth : 1,
                width : 100
            }
        },
        legend: {
            enabled : false
        },
        series: placesBarJson,
        credits:{
            enabled:false
        },
        exporting: {
            enabled: false
        }
    });

    var hobbiesBarJson = $('[ng-controller="BuyerChartCtrl"]').scope().hobbiesBarJson;
    $('#hobbiesBarChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Football', 'Cricket', 'Concert', 'Movie', 'Travel'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },

                borderColor : '#e0e1e4',
                borderWidth : 1,
                width : 100
            }
        },
        legend: {
            enabled : false
        },
        series: hobbiesBarJson,
        credits:{
            enabled:false
        },
        exporting: {
            enabled: false
        }
    });
});