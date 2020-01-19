
Ext.define('MyApp.view.Component.GroupReport.Reports.Reports',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.Component.GroupReport.Reports.ReportsController',
        'MyApp.view.Component.GroupReport.Reports.ReportsModel'
    ],

    controller: 'component-groupreport-reports-reports',
    viewModel: {
        type: 'component-groupreport-reports-reports'
    },

    renderTo: Ext.getBody(),
    width: '50%',
    height: '60%',
    title: 'Информация о работах бригады',
    iconCls: 'x-fa fa-file',
    padding: 10,

    items: [{
        xtype: 'gridpanel',
        title: 'Таблица работ',
        name: 'groupInfoReports',
        width: '100%',
        height: 200,
        plugins: [{
            ptype: 'gridfilters',
        }],
        columns: [{
            text: 'Тип работ',
            dataIndex: 'type',
            flex: 1,
            filter: {
                type: 'string',
            }
        }, {
            text: 'План',
            columns: [
                {
                    text: 'Начало',
                    dataIndex: 'planDate',
                    width: '20%',
                    filter: {
                        type: 'date',
                    }
                }, {
                    text: 'Окончание',
                    dataIndex: 'endPlan',
                    width: '20%',
                    filter: {
                        type: 'date',
                    }
                }]
        }, {
            text: 'Факт',
            columns: [
                {
                    text: 'Начало',
                    dataIndex: 'startFact',
                    width: '20%',
                    filter: {
                        type: 'date',
                    }
                }, {
                    text: 'Окончание',
                    dataIndex: 'endFact',
                    width: '20%',
                    filter: {
                        type: 'date',
                    }
                }]
        }]
    }, {
        text: 'Стоимость',
        dataIndex: 'costAll',
        width: '20%',
        filter: {
            type: 'number',
        }
    }]
});
