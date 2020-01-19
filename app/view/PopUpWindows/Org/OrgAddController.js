/**
 * Форма создания организации.
 * @author vd.zinovev
 * @since 1.0
 * @version 1.0
 */
Ext.define('MyApp.view.PopUpWindows.Org.OrgAddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupwindows-org-orgadd',
    control:
        {
            'button[name=createOrg]': {
                click: 'createClick'
            },
            'button[name=clearOrg]': {
                added: 'clearClick'
            },
        },

    showWindow: function(window) {
        window.getEl().setOpacity(0);
        window.getEl().fadeIn({duration: 500});
    },

    closeWindow: function(window) {
        if(!window.shouldClose) {
            window.getEl().fadeOut({duration: 500, callback: function() {
                    window.shouldClose = true;
                    window.close();
                }});
        }
        return window.shouldClose ? true : false;
    },

    /**
     * Создание записи.
     */
    createClick:function(button) {
        let window = button.up('window');
        let name = window.down('textfield[name=orgAddName]');
        let address = window.down('textareafield[name=orgAddAddress]');
        let inn = window.down('numberfield[name=orgAddInn]');
        let kpp = window.down('numberfield[name=orgAddKpp]');

        let items = "{";
        items += "\"name\":\"" + name.value
              + "\", \"address\":\"" + address.value
              + "\", \"inn\":" + inn.value
              + ", \"kpp\":" + kpp.value
              + "}";

        Ext.Ajax.request({
            url: 'http://localhost:8080/_apis/Org',
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
                    DepStore.load();
                    let grid = Ext.ComponentQuery.query('gridpanel[name=depGrid]');
                    console.log(grid);
                    grid.setStore(DepStore);
                    grid.reconfigure(DepStore);
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

    /**
     * Создание записи.
     */
    clearClick:function (button) {
        let window =  button.up('window');
        let fields = window.down('numberfield');
        console.log(fields);
    },

    test: function () {
        console.log("Work")
    }

});
