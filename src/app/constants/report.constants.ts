export const reportTypes = {
    company_admin: [{
        name: "Campaign Operations Reports",
        group: [{
            report: { label: "Operations Summary", value: "OperationsSummaryReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Operations Detail", value: "OperationDetailReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Campaign Detail", value: "CampaignDetailReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Detail", value: "LeadDetailsReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Campaign Activity Tracker", value: "ActivityTrackerReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: true
        }]
    }, {
        name: "Campaign Analysis",
        group: [{
            report: { label: "Campaign Snapshot", value: "CampaignSnapshotReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Analysis", value: "LeadSummaryReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Promotion Asset Analysis", value: "PromotionAssetReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Reject Analysis", value: "RejectAnalysisReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }]
    }, {
        name: "Business Performance Reports",
        group: [{
            report: { label: "Sales Performance", value: "PerformanceReports" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Sales Projection", value: "SalesAndProjectionsReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }]
    }],
    account_user: [{
        name: "Campaign Operations Reports",
        group: [{
            report: { label: "Operations Summary", value: "OperationsSummaryReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: false
        }, {
            report: { label: "Operations Detail", value: "OperationDetailReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Campaign Detail", value: "CampaignDetailReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Detail", value: "LeadDetailsReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Campaign Activity Tracker", value: "ActivityTrackerReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: true
        }]
    }, {
        name: "Campaign Analysis",
        group: [{
            report: { label: "Campaign Snapshot", value: "CampaignSnapshotReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Analysis", value: "LeadSummaryReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Promotion Asset Analysis", value: "PromotionAssetReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Reject Analysis", value: "RejectAnalysisReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }]
    }, {
        name: "Business Performance Reports",
        group: [{
            report: { label: "Sales Performance", value: "PerformanceReports" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }]
    }],
    campaign_manager: [{
        name: "Campaign Operations Reports",
        group: [{
            report: { label: "Operations Summary", value: "OperationsSummaryReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: false
        }, {
            report: { label: "Operations Detail", value: "OperationDetailReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Campaign Detail", value: "CampaignDetailReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Detail", value: "LeadDetailsReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Campaign Activity Tracker", value: "ActivityTrackerReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: true
        }]
    }, {
        name: "Campaign Analysis",
        group: [{
            report: { label: "Campaign Snapshot", value: "CampaignSnapshotReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Analysis", value: "LeadSummaryReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Promotion Asset Analysis", value: "PromotionAssetReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Reject Analysis", value: "RejectAnalysisReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }]
    }, {
        name: "Business Performance Reports",
        group: [{
            report: { label: "Sales Performance", value: "PerformanceReports" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Sales Projection", value: "SalesAndProjectionsReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }]
    }],
    vendor_admin: [{
        name: "Campaign Operations Reports",
        group: [{
            report: { label: "Operations Summary", value: "OperationsSummaryReport" },
            tabs: { agency: false, partner: true },
            isDownload: false,
            sendReport: false
        }, {
            report: { label: "Operations Detail", value: "OperationDetailReport" },
            tabs: { agency: false, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Campaign Detail", value: "CampaignDetailReport" },
            tabs: { agency: false, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Detail", value: "LeadDetailsReport" },
            tabs: { agency: false, partner: true },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Campaign Activity Tracker", value: "ActivityTrackerReport" },
            tabs: { agency: false, partner: true },
            isDownload: false,
            sendReport: true
        }]
    }, {
        name: "Campaign Analysis",
        group: [{
            report: { label: "Campaign Snapshot", value: "CampaignSnapshotReport" },
            tabs: { agency: false, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Reject Analysis", value: "RejectAnalysisReport" },
            tabs: { agency: false, partner: true },
            isDownload: true,
            sendReport: false
        }]
    }, {
        name: "Business Performance Reports",
        group: [{
            report: { label: "Sales Performance", value: "PerformanceReports" },
            tabs: { agency: false, partner: true },
            isDownload: true,
            sendReport: false
        }]
    }],
    delivery_team: [{
        name: "Campaign Operations Reports",
        group: [{
            report: { label: "Operations Summary", value: "OperationsSummaryReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: false
        }, {
            report: { label: "Operations Detail", value: "OperationDetailReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Campaign Detail", value: "CampaignDetailReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Detail", value: "LeadDetailsReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: true
        }, {
            report: { label: "Campaign Activity Tracker", value: "ActivityTrackerReport" },
            tabs: { agency: true, partner: true },
            isDownload: false,
            sendReport: true
        }]
    }, {
        name: "Campaign Analysis",
        group: [{
            report: { label: "Campaign Snapshot", value: "CampaignSnapshotReport" },
            tabs: { agency: true, partner: true },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Lead Analysis", value: "LeadSummaryReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Promotion Asset Analysis", value: "PromotionAssetReport" },
            tabs: { agency: true, partner: false },
            isDownload: false,
            sendReport: true
        }]
    }, {
        name: "Business Performance Reports",
        group: [{
            report: { label: "Sales Performance", value: "PerformanceReports" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }, {
            report: { label: "Sales Projection", value: "SalesAndProjectionsReport" },
            tabs: { agency: true, partner: false },
            isDownload: true,
            sendReport: false
        }]
    }]
};

export const reportPeriod = [
    { label: "By Month", value: "byMonth" },
    { label: "By Quarter", value: "byQuarter" },
    { label: "By Year", value: "byYear" }
]

export const targetMarkets =
    ['US', "North America", 'Latin America', 'Europe-UK', 'Europe-continental', 'Africa', 'Middle East', 'Asia Pacific', 'India', 'Australia and New Zealand']

export const chartData = {
    chart: {
        type: '',
        backgroundColor: '#FFFFFF',
    },

    title: {
        text: '',
        style: {
            color: '#000000',
            fontWeight: 'bold',
            fontFamily: "Open Sans",
            fontSize: "16px"
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                color: 'black',
                fontFamily: "Open Sans",
                width: '100px',
                textOverflow: 'ellipsis'

            }
        },
        categories: [],
        min: 0,
        scrollbar: {
            enabled: false,
            barBackgroundColor: 'rgb(224, 222, 222)',
            rifleColor: 'rgb(224, 222, 222)',
            barBorderRadius: 7,
            height: 7,
            barBorderWidth: 0,
            buttonArrowColor: 'white',
            buttonBorderWidth: 1,
            buttonBorderRadius: 7,
            trackBackgroundColor: 'none',
            trackBorderWidth: 1,
            trackBorderRadius: 2,
            trackBorderColor: '#CCC',
            buttonBackgroundColor: 'white',
            buttonBorderColor: '#CCC',

        }
    },

    yAxis: {
        title: {
            text: '',
        },
        labels: {
            style: {
                color: 'black',
                fontFamily: "Open Sans"
            },
            format: '{value}'
        },
        min: 0
    },

    legend: {
        enabled: true,
        backgroundColor: "white",
        itemStyle: {
            color: '#000000',
            fontFamily: "Open Sans",
            fontSize: "11px"
        },
        itemHoverStyle: {
            color: '#000001',
            fontFamily: "Open Sans"
        },
        symbolHeight: 8,
        symbolWidth: 8,
        symbolRadius: 4
    },

    tooltip: {
        pointFormat: '<b>{point.y}</b>'
    },

    series: []
}

export const graphPlotOptions = {
    series: {
        cursor: 'default',
        point: {
            events: {
                click: function (event) {

                },
                dblclick: function (event) {
                }
            }
        }
    }
}
