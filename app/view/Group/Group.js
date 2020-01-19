
Ext.define('MyApp.view.Group.Group',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.Group.GroupController',
        'MyApp.view.Group.GroupModel'
    ],

    title:'Бригады',
    iconCls: 'x-fa fa-flag',
    border: true,
    name: 'groupPanel',

    controller: 'group-group',
    viewModel: {
        type: 'group-group'
    },
    width:'98%',
    height: '98%',
    bbar:[{
        xtype: 'button',
        name: 'groupReportButton',
        disabled:true,
        iconCls: 'x-fa fa-print',
        text: 'Отчеты',
        menu:[{
            text: 'Общая информация',
            listeners:{
                click: 'onAllInformationClick'
            },
        }, {
            text: 'Инженеры',
            listeners:{
                click: 'onEngeneerInformationClick'
            },
        }, {
            text: 'Работники',
            listeners:{
                click: 'onWorkersInformationClick'
            },
        }, {
            text: 'Работа',
            listeners:{
                click: 'onReportInformationClick'
            },
        }],
    }],
    items:[]
});
