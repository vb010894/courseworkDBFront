let typeObject = null;
let modeObject = 0;
let selectionObject = null;

Ext.define('MyApp.view.Objects.ObjectAdd.ObjectAddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.objects-objectadd-objectadd',

    beforeShow: function(component) {
        if(modeObject == 1) {
            let saveButton = component.down('button[name=saveObjectButton]');
            saveButton.setDisabled(false);
            component.down('textfield[name=objectName]').setValue(selectionObject.data['name']);
            component.down('textfield[name=objectAddress]').setValue(selectionObject.data['adress']);
            if(selectionObject.data["typeDescr"] == 'road') {
                component.down('textfield[name=objectTypeDescr]').setValue('Дорога');
                component.insert(component.items.length + 1, Ext.create('MyApp.view.Component.Object.ObjectType.Road.Road'));
            }
        }

    },

    sendRequest: function(method, body, url) {
        Ext.Ajax.request({
            url: url,
            method: method,
            jsonData: body,
            scope: this
        });
    },

    saveObject: function (control) {
        let window = control.up('window');
        let url = null;
        let store = null;
        let grid = Ext.ComponentQuery.query('grid[name=mainObjectGrid]');

        let body = "{";
        if(typeObject == 'typeroad') {
            body += "\"name\":\'"
                + window.down('textfield[name=objectRoadName]').value + "\', "
                + "\"cover\":\'"
                + window.down('textfield[name=objectRoadCover]').value + "\', "
                + "\"lenght\":"
                + window.down('textfield[name=objectRoadLenght]').value + ", "
                + "\"driveLineCount\":"
                + window.down('textfield[name=objectRoadLineCount]').value;

            if(modeObject == 1) {
                body += ", \"id\":"
                + selectionObject.data['type']
            }

            body += "}";

             store = Ext.create('MyApp.store.Objects.ObjectType.RoadStore');
             store.load();
             let allData = store.data;
            console.log(allData.items[0]);
            for(let i = 0; i < allData.items.length; i++) {
                console.log(allData.items[i].data["id"]);
            }
            //this.sendRequest('POST', body, store.proxy.url);
            

        }
        /*let body = "{"
                        + "\"name\":\'"
                        + window.down('textfield[name=objectName]').value + "\'"
                        + "\"adress\":\'"
                        + window.down('textfield[name=objectAddress]').value + "\'"
                        + "\"typeDescr\":\'"
                        + window.down('textfield[name=objectTypeDescr]').value + "\'}";

        let grid = Ext.ComponentQuery.query('grid[name=mainObjectGrid]');
        let store = Ext.create('MyApp.store.Objects.ObjectsStore');

        this.fireEvent('sendRequestOut',  'POST', body, store.proxy.url,
         grid, store);*/
    },

    onModeSet: function(mode) {
        modeObject = mode;
    },

    onSelectionSet: function(selection) {
        selectionObject = selection;
    },


    onComboBoxSelect: function (element, record) {
        typeObject = record.data["description"];

        let saveButton = element.ownerCt.down('button[name=saveObjectButton]');
        saveButton.setDisabled(false);
        let window = element.ownerCt;
        let panel = window.down('panel[name=dynamicObjectTypePanel]');
        if(panel != null){
            panel.destroy();
        }

        if(record.data["name"] == 'Дорога') {
            window.insert(window.items.length + 1, Ext.create('MyApp.view.Component.Object.ObjectType.Road.Road'));

        }


        console.log(element.ownerCt);
    },

    init: function () {
        this.listen({
            controller: {
                '*': {
                    setMode: 'onModeSet',
                    setSelection: 'onSelectionSet'
                }
            },
        })
    }
});
