
Ext.define('MyApp.view.PopUpWindows.Org.OrgAdd',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.PopUpWindows.Org.OrgAddController',
        'MyApp.view.PopUpWindows.Org.OrgAddModel'
    ],

    controller: 'popupwindows-org-orgadd',
    viewModel: {
        type: 'popupwindows-org-orgadd'
    },
    listeners: {
        show:'showWindow',
        beforeclose:'closeWindow'
    },

    title: 'Добавление организации',
    width: '40%',
    renderTo: Ext.getBody(),
    layout: 'vbox',
    closeAction: 'hide',
    tbar:[{
        xtype: 'button',
        text: 'Создать',
        name: 'createOrg'
    }, {
        xtype: 'button',
        text: 'Очистить',
        name: 'clearOrg'
    }],
    items:[{
        xtype: 'textfield',
        margin: 10,
        name: 'orgAddName',
        width:'100%',
        fieldLabel: 'Наименование',
        emptyText: 'Введите название'
    }, {
        xtype: 'textareafield',
        margin: 10,
        width:'100%',
        fieldLabel: 'Адрес',
        name: 'orgAddAddress',
        emptyText: 'Введите адрес'
    }, {
        xtype: 'numberfield',
        margin: 10,
        width:'100%',
        fieldLabel: 'ИНН',
        name: 'orgAddInn',
        emptyText: 0
    }, {
        xtype: 'numberfield',
        margin: 10,
        width:'100%',
        fieldLabel: 'КПП',
        name: 'orgAddKpp',
        emptyText: 0
    }],
});
