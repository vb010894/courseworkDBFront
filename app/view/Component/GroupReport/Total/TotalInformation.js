
Ext.define('MyApp.view.Component.GroupReport.Total.TotalInformation',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.Component.GroupReport.Total.TotalInformationController',
        'MyApp.view.Component.GroupReport.Total.TotalInformationModel'
    ],

    listeners: {
        beforeshow: 'onWindowAdded'
    },

    controller: 'component-groupreport-total-totalinformation',
    viewModel: {
        type: 'component-groupreport-total-totalinformation'
    },

    renderTo: Ext.getBody(),
    width: '50%',
    height: '60%',
    title: 'Подробная информация о бригаде',
    iconCls: 'x-fa fa-tags',
    padding: 10,
    style: 'text-align: center',

    items: [{
        xtype: 'panel',
        name: 'groupInfoName'
    }, {
        xtype: 'panel',
        name: 'groupInfoMaster'
    }, {
        xtype: 'panel',
        name: 'groupInfoDep'
    }, {
        xtype: 'panel',
        name: 'groupInfoTeamLead'
    }],
});
