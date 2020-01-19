
Ext.define('MyApp.view.Core.Components.GridView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'MyApp.view.Core.Components.GridViewController',
        'MyApp.view.Core.Components.GridViewModel'
    ],

    controller: 'core-components-gridview',
    viewModel: {
        type: 'core-components-gridview'
    },
    iconCls: 'x-fa fa-table',
    listeners: {
        added: 'onGridAdded',
        select: 'onGridSelect',
        deselect: 'onGridDeselect'
    },
    margin: 10,
    width:'98%',
    height:300,
    border:true,
    name:'coreGrid',
    plugins: [{
        ptype: 'rowediting',
        pluginId: 'gridEditing',
        clicksToEdit: 2,
        listeners: {
              beforeedit: 'onGridBeforeEdit',
              canceledit: 'onCancelGridEdit',
              edit: 'onGridEdit',
              afterEdit: 'onAfterGridEdit'
        }
    }, {
        ptype: 'gridfilters',
    }],

    title: 'Таблица',
    tbar: [{
        xtype: 'button',
        text: 'Добавить',
        iconCls: 'fa-add',
        name: 'gridAddButton',
        listeners:{
            click:'onAddButtonClick',
        }
    }, {
        xtype: 'button',
        text: 'Удалить',
        iconCls: 'fa-delete',
        name: 'gridRemoveButton',
        listeners:{
            click:'onDeleteButtonClick',
        },
        disabled:true
    }],

    columns:[]
});
