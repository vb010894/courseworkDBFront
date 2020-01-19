
Ext.define('MyApp.view.Objects.ObjectAdd.ObjectAdd',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.Objects.ObjectAdd.ObjectAddController',
        'MyApp.view.Objects.ObjectAdd.ObjectAddModel'
    ],

    controller: 'objects-objectadd-objectadd',
    viewModel: {
        type: 'objects-objectadd-objectadd'
    },

    listeners: {
        beforerender: 'beforeShow'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Наименование',
        name: 'objectName',
        margin: 10,
        width:'98%',
    }, {
        xtype: 'textareafield',
        fieldLabel: 'Адрес',
        name: 'objectAddress',
        margin: 10,
        width:'98%',
    }, {
        xtype: 'combobox',
        store: Ext.create('MyApp.store.Objects.ObjectType.ObjectTypeStore'),
        fieldLabel: 'Тип',
        displayField: 'name',
        name: 'objectTypeDescr',
        listeners: {
            select: 'onComboBoxSelect'
        },
        margin: 10,
        width:'98%',
    }],
    bbar: [{
        xtype: 'button',
        text: 'Сохранить',
        name:'saveObjectButton',
        disabled: true,
        listeners:{
            click: 'saveObject'
        }
    }]
});
