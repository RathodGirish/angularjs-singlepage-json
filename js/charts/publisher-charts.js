/**
 * Created by megha on 1/12/15.
 */


$(function () {
    var RevenueJson = $('[ng-controller="PublisherChartCtrl"]').scope().RevenueJson;
    var ImpressionsJson = $('[ng-controller="PublisherChartCtrl"]').scope().ImpressionsJson;

    $('#chart').highcharts({
        chart: {
            zoomType: 'xy'
        },
        colors: ['#DE5353'],
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: [{ // Primary yAxis
            gridLineWidth: 1,
            labels: {
                format: '${value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} k',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
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
            name: 'Revenue',
            type: 'column',
            allowPointSelect: true,
            color: '#EFAAAA',
            yAxis: 1,
            data: RevenueJson,
            tooltip: {
                valueSuffix: ' k'
            }

        }, {
            name: 'Impressions',
            type: 'spline',
            data: ImpressionsJson,
            tooltip: {
                valuePrefix: '$'
            }, marker: {
                lineWidth: 2,
                lineColor: '#DE5353',
                fillColor: 'white'
            }
        }],
        credits:{
            enabled:false
        },
        exporting: {
            enabled: false
        }
    });

    // Area highchart
    var ranges = $('[ng-controller="PublisherChartCtrl"]').scope().ranges;
    var revenueWithDeals = $('[ng-controller="PublisherChartCtrl"]').scope().revenueWithDeals;
    var revenueWithoutDeals = $('[ng-controller="PublisherChartCtrl"]').scope().revenueWithoutDeals;

    $('#areaChart').highcharts({

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
            name: 'Revenue with deals',
            data: revenueWithDeals,
            zIndex: 1,
            color: '#EFAAAA',
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: '#EFAAAA'
            }
        }, {
            name: 'Revenue without deals',
            data: revenueWithoutDeals,
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

});