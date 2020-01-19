
Ext.define('MyApp.view.Departament.Departament',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.Departament.DepartamentController',
        'MyApp.view.Departament.DepartamentModel',
        'MyApp.view.PopUpWindows.Department.DepartmentAdd'
    ],

    controller: 'departament-departament',
    viewModel: {
        type: 'departament-departament'
    },

    layout: 'hbox',
    items: [{
        xtype:'treepanel',
        style:'text-align:left',
        name: 'departmentTree',
        width: '30%',
        rootVisible:true,
        autoScroll: true,
        store:Ext.create('MyApp.store.DepartmentTreeStore'),
        columns: [{
            xtype: 'treecolumn',
            dataIndex: 'text',
            flex: 1,
            align: 'end'
        }]
    }, {
        xtype: 'panel',
        name: 'departmentContent',
        autoScroll: true,
        height:400,
        layout:'vbox',
        flex:1
    }]
});
