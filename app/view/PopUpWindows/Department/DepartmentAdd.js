
Ext.define('MyApp.view.PopUpWindows.Department.DepartmentAdd',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.PopUpWindows.Department.DepartmentAddController',
        'MyApp.view.PopUpWindows.Department.DepartmentAddModel'
    ],

    controller: 'popupwindows-department-departmentadd',
    viewModel: {
        type: 'popupwindows-department-departmentadd'
    },

    title:'Добавлениу управления',
    width:'40%',
    renderTo: Ext.getBody(),
    layout: 'vbox',
    tbar: [{
        xtype:'button',
        name:'createDep',
        text:'Сохранить'
    }],
    items:[{
        xtype:'textfield',
        width: '100%',
        margin: 10,
        name: 'depAddName',
        fieldLabel: 'Наименование',
        emptyText: 'Введите наименование'
    }, {
        xtype:'textareafield',
        width: '100%',
        margin: 10,
        name: 'depAddAddress',
        fieldLabel: 'Адрес',
        emptyText: 'Введите адрес'
    }, {
        xtype: 'combobox',
        width: '100%',
        margin: 10,
        name: 'depAddOrg',
        fieldLabel: 'Организация',
        emptyText: 'Выберите оранизацию',
        displayField: 'name',
    }]
});
