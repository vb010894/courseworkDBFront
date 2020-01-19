Ext.define('MyApp.view.Component.GroupReport.Engeneer.EngeneerInformation',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.Component.GroupReport.Engeneer.EngeneerInformationController',
        'MyApp.view.Component.GroupReport.Engeneer.EngeneerInformationModel'
    ],

    controller: 'component-groupreport-engeneer-engeneerinformation',
    viewModel: {
        type: 'component-groupreport-engeneer-engeneerinformation'
    },

    renderTo: Ext.getBody(),
    width: '50%',
    height: '60%',
    title: 'Информация о инженерах в бригаде',
    iconCls: 'x-fa fa-news',
    padding: 10,
    items: [{
        xtype: 'gridpanel',
        title: 'x',
        name: 'groupInfoEngeneer',
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
        }, {
            text: 'Бригадир',
            dataIndex: 'leader',
            flex: 1,
            renderer: function(rec) {
                if(rec == 1) {
                    return "ДА";
                } else {
                    return "";
                }

            },
            filter: {
                type: 'string',
            }
        }]
    }]
});
