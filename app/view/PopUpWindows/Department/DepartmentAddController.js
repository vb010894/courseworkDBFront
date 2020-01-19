
let orgId = 0;

Ext.define('MyApp.view.PopUpWindows.Department.DepartmentAddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupwindows-department-departmentadd',
    control: {
        'combobox[name=depAddOrg]':{
            added: 'fillCombobox',
            select: 'orgSelected'
        },
        'button[name=createDep]': {
            click: 'addDep'
        }
    },

    fillCombobox: function(control) {
        console.log(control);
        let store = Ext.create('MyApp.store.OrganizationStore');
        store.load();
        control.setStore(store);
    },

    addDep: function(element) {
      let window = element.up('window');
      let name = window.down('textfield[name=depAddName]').value;
      let address = window.down('textareafield[name=depAddAddress]').value;

        let items = "{";
        items += "\"name\":\"" + name
            + "\", \"address\":\"" + address
            + "\", \"org\":" + orgId
            + "}";

        Ext.Ajax.request({
            url: 'http://localhost:8080/_apis/Department',
            method: 'POST',
            jsonData: items,
            scope: this,
            callback: function (records,
                                operation,
                                success) {
                if (success) {

                    Ext.MessageBox.show({
                        title: 'Сообщение',
                        msg: 'Данные успешно записаны',
                    });
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

        window.close();
    },

    orgSelected: function (element, record) {
        orgId = record.data["id"];
    }

});
