
Ext.define('MyApp.view.Component.TeamLead.TeamLead',{
    extend: 'Ext.grid.Panel',

    requires: [
        'MyApp.view.Component.TeamLead.TeamLeadController',
        'MyApp.view.Component.TeamLead.TeamLeadModel'
    ],
    name:'teamLeadGrid',

    controller: 'component-teamlead',
    viewModel: {
        type: 'component-teamlead'
    },
    plugins: [{
        ptype: 'rowediting',
        pluginId: 'teamLeadEditor',
        clicksToEdit: 1,
        listeners: {
          //  beforeedit: 'onTeamLeadGridBeforeEdit',
         //   canceledit: 'onTeamLeadCancelEdit',
          //  edit: 'onTeamLeadEdit'
        }
    }, {
        ptype: 'gridfilters',
    }],
    border:true,
    width:'100%',
    height:600,
    columns: [{
        text: 'id',
        hidden: true,
        dataIndex: 'id'
    }, {
        text: 'ФИО',
        dataIndex: 'FIO',
        flex: 1,
        filter: {
            type: 'string',
        },
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text: 'Управление',
        width:'30%',
        dataIndex: 'departament',
      /*  editor: {
            xtype: 'combobox',
            displayField: 'name',
            allowBlank: false,
            listeners: {
                beforerender: 'DepOrgUpdate',
                select: 'DepOrgUpdateSelect'
            }
        }*/
    }],
    tbar:[{
        xtype:'button',
        text:"Добавить",
        name:'teamLeadAdd'
    }, {
        xtype:'button',
        text:"Удалить",
        name:'teamLeadDelete',
        disabled:true
    }]
});
