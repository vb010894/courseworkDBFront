
Ext.define('MyApp.view.Objects.Object.Object',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.Objects.Object.ObjectController',
        'MyApp.view.Objects.Object.ObjectModel'
    ],

    controller: 'objects-object-object',
    viewModel: {
        type: 'objects-object-object'
    },

    width:'100%',
    height: '100%',
    name:'mainObjectPanel',
    items: [{
        xtype: 'gridpanel',
        name: 'mainObjectGrid',
        height: 400,
        bbar:[{
            xtype: 'button',
            text:'Добавить',
            iconCls: 'x-fa fa-add',
            listeners:{
                click:'onAddButtonClick',
            }
        }, {
            xtype: 'button',
            text:'Редактировать',
            iconCls: 'x-fa fa-pencil',
            listeners:{
                click:'onEditButtonClick',
            }
        }, {
            xtype: 'button',
            text:'Удалить',
            iconCls: 'x-fa fa-delete'
        }, {
            xtype: 'button',
            text: 'Добавить материалы',
            iconCls: 'x-fa fa-delete'
        }, {
            xtype: 'button',
            text:'Отчеты',
            iconCls: 'x-fa fa-print',
            menu: [{
                text: 'Работы'
            }],
        }],
        title:'Объекты',
        width:'100%',
        store: Ext.create('MyApp.store.Objects.ObjectsStore'),
        plugins: [{
            ptype: 'rowediting',
            pluginId: 'gridEditing',
            clicksToEdit: 2,
            listeners: {
                edit: 'onGridEdit',
            }
        }, {
            ptype: 'gridfilters',
        }],
        columns: [{
            text:'id',
            hidden:true,
            dataIndex:'id',
        }, {
            text:'Наименование',
            dataIndex:'name',
            width:'40%',
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text:'Местонахождение',
            dataIndex:'adress',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }]
    }]
});
