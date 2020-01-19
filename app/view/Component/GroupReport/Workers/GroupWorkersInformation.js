
Ext.define('MyApp.view.Component.GroupReport.Workers.GroupWorkersInformation',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.Component.GroupReport.Workers.GroupWorkersInformationController',
        'MyApp.view.Component.GroupReport.Workers.GroupWorkersInformationModel'
    ],

    controller: 'component-groupreport-workers-groupworkersinformation',
    viewModel: {
        type: 'component-groupreport-workers-groupworkersinformation'
    },

    title: 'Работники',
    renderTo: Ext.getBody(),
    width: '50%',
    height: '60%',
    iconCls: 'x-fa fa-case',
    padding: 10,
    items: [{
        xtype: 'gridpanel',
        title: 'x',
        name: 'groupInfoWorkers',
        store: storeGroupEngeneer,
        width: '100%',
        height: 200,
        plugins: [{
            ptype: 'gridfilters',
        }],
        columns: [{
            text: 'ФИО',
            dataIndex: 'fio',
            width: '40%',
            filter: {
                type: 'string',
            }
        }, {
            text: 'Должность',
            dataIndex: 'position',
            width: '60%',
            filter: {
                type: 'string',
            }
        }]
    }]
});
