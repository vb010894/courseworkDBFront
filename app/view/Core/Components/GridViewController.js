let store = null;
let model = null;
let isNew = false;
let idCombo = 0;

Ext.define('MyApp.view.Core.Components.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.core-components-gridview',

    onAddButtonClick: function (control) {
        isNew = true;
        let toolBar = control.ownerCt;
        let panel = toolBar.ownerCt;
        let grid = panel.items.items[0];
        let store = grid.getStore();
        store.insert(0, model);
        control.setDisabled(true);
        let deleteButton = toolBar.down('button[name=gridRemoveButton]');
        deleteButton.setDisabled(true);
    },

    onGridEdit: function (editor, context) {

        let store = context.store;
        let grid = context.grid;
        let url = store.getProxy().url;
        let json = context.newValues;

        if(isNew) {
            delete json['id'];
            this.sendRequest("POST",
                JSON.stringify(json),
                url,
                grid,
                store);
            isNew = false;

        } else {
            this.sendRequest("PATCH",
                JSON.stringify(json),
                url,
                grid,
                store);
        }
    },

    onGridBeforeEdit: function(editor) {
        let toolBar = editor.view;
        let panel = toolBar.ownerCt;
        let deleteButton = panel.down('button[name=gridRemoveButton]');
        let addButton = panel.down('button[name=gridAddButton]');
        deleteButton.setDisabled(true);
        addButton.setDisabled(true);
    },


    onCancelGridEdit: function(control) {
        let toolBar = control.view;
        let panel = toolBar.ownerCt;
        let deleteButton = panel.down('button[name=gridRemoveButton]');
        let addButton = panel.down('button[name=gridAddButton]');
        deleteButton.setDisabled(false);
        addButton.setDisabled(false);
    },


    onDeleteButtonClick: function (control) {
        let toolbar = control.ownerCt;
        let panel = toolbar.ownerCt;
        let grid = panel.items.items[0];
        let body = "{\"id\":" + grid.selection.data["id"] + "}";
        let store = grid.getStore();
        let url = store.getProxy().url;
        this.sendRequest("DELETE",
            body,
            url,
            grid,
            store);
    },

    onGridAdded: function (control) {

    },

    onAfterGridEdit: function(editor) {
        let grid = editor.view;
        let panel = grid.ownerCt.ownerCt;
        panel.down('button[name=gridAddButton]').setDisabled(false);
        panel.down('button[name=gridRemoveButton]').setDisabled(false);
        let store = grid.getStore();
        store.load();
    },

    sendRequest: function(method, body, url, grid, store) {
        Ext.Ajax.request({
            url: url,
            method: method,
            jsonData: body,
            scope: this,
            callback: function (records,
                                operation,
                                success) {
                if (success) {

                    Ext.MessageBox.show({
                        title: 'Сообщение',
                        msg: 'Данные успешно записаны',
                    });
                    store.load();
                    grid.reconfigure(store);
                } else {
                    Ext.MessageBox.show({
                        title: 'Ошибка',
                        msg: 'Сервер не отвечает',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox['ERROR']
                    });
                }
            }
        });
    },

    destroyGrid:function(component, event, owner) {
        owner.destroy();
    },


    test: function() {
      console.log('Work');
    },

    onGridSelect: function(dataView) {
        let grid = dataView.views[0];
        let panel = grid.up('panel');
       let delButton = panel.down('button[name=gridRemoveButton]');
       delButton.setDisabled(false);
    },


    /**
     * Загружает хранилище.
     * <p>Пример</>
     * <code>var array = ['start=1', 'page = 1', 'limit =25']</>
     * @param arraySeparator Разделитель массива
     * <p>По умолчанию ','</>
     * @param separator Разделитель параметра
     * <p>По умолчанию '='</>
     */
    onGridAdded:function(control) {
        store.load({
            callback:function (records,
                               operation,
                               success) {
                if(success) {
                    if(records.length === 0) {
                        Ext.MessageBox.show({
                            title:'Предупреждение',
                            msg:'Нет данных для отображения',
                            buttons: Ext.MessageBox.OK,
                            icon:Ext.MessageBox['WARNING']
                        });
                    }
                } else {
                    Ext.MessageBox.show({
                        title:'Ошибка',
                        msg:'Сервер не отвечает',
                        buttons: Ext.MessageBox.OK,
                        icon:Ext.MessageBox['ERROR']
                    });
                }
            }
        });
        control.reconfigure(store);
    },

    onSetStoreGid: function(targetStore) {
        store = targetStore;
    },

    onModelGridSet: function(targetModel) {
        model = targetModel;
    },

    onComboBoxEditorSelect: function(element, record) {
        idCombo = record.data["id"];
    },

    init: function () {
        this.listen({
            controller: {
                '*': {
                    setStoreGrid: 'onSetStoreGid',
                    setModelGrid: 'onModelGridSet',
                    sendRequestOut: 'sendRequest'
                }
            },
        })
    }
});
