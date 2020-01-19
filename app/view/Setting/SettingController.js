/**
 * Хранилище организации.
 * @type {MyApp.store.OrganizationStore}
 */
const storeOrganization = Ext.create('MyApp.store.OrganizationStore');

/**
 * Контроллер настройки.
 * @author vd.zinovev
 * @since 1.0
 * @version 1.0
 */
Ext.define('MyApp.view.Setting.SettingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.setting-setting',
    control:
        {
            'gridpanel[name=orgGrid]': {
                added:'orgGridAdded',
                edit:'update'
            },
            'button[name=orgAdd]': {
                click:'showAddOrgWindow'
            },
            'button[name=orgDelete]': {
                click:'deleteRecordOrg'
            }
        },

    /**
     * Функция инициализации контроллера.
     */
    init:function () {
        //Do nothing
    },

    deleteRecordOrg: function() {
        let grid = Ext.ComponentQuery.query('gridpanel[name=orgGrid]');
        let items = "{";
        items += "\"id\":" + grid[0].selection["id"]
            + "}";

        Ext.Ajax.request({
            url: 'http://localhost:8080/_apis/Org',
            method: 'DELETE',
            jsonData: items,
            scope: this,
            callback: function (records,
                                operation,
                                success) {
                if (success) {

                    Ext.MessageBox.show({
                        title: 'Сообщение',
                        msg: 'Данные успешно удалены',
                    });

                    storeOrganization.load();
                    console.log(grid);
                    grid.reconfigure(storeOrganization);

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

    update:function(editor, context) {

        let items = "{";
        items += "\"name\":\"" + context.newValues['name']
            + "\", \"address\":\"" + context.newValues['adress']
            + "\", \"inn\":" + context.newValues['inn']
            + ", \"kpp\":" + context.newValues['kpp']
            + ", \"id\":" + context.newValues['id']
            + "}";

        Ext.Ajax.request({
            url: 'http://localhost:8080/_apis/Org',
            method: 'PATCH',
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

                    storeOrganization.load();
                    let grid = context.grid;
                    grid.reconfigure(storeOrganization);

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


    /**
     * Загружает хранилище.
     * <p>Пример</>
     * <code>var array = ['start=1', 'page = 1', 'limit =25']</>
     * @param store Хранилище
     * @param params Параметры загрузки
     * @param arraySeparator Разделитель массива
     * <p>По умолчанию ','</>
     * @param separator Разделитель параметра
     * <p>По умолчанию '='</>
     */
    storeLoad:function(store,
                          params,
                          arraySeparator = ',',
                          separator = '=') {
        let paramsArray = params.split(arraySeparator);
            for (let i = 0;
                i < paramsArray.length;
                i++
                ) {
                let keyValue = paramsArray[i]
                                        .split(separator)[0]
                                        .trim();
                let value = paramsArray[i]
                                        .split(separator)[1]
                                        .trim();
                   store.getProxy().setExtraParams = {
                        keyValue:value
                    }
        }
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
        })
    },

    /**
     * Загрузка данных с сервера.
     * <p>Зранилище организации</>
     * @param grid Таблица для отображения
     */
    orgGridAdded:function(grid) {
        this.storeLoad(storeOrganization,
                'start=1, limit=25, page=1');
      grid.reconfigure(storeOrganization);


    },

    /**
     * Открывает окно добавлени организации.
     */
    showAddOrgWindow: function() {
      let window = Ext.create('MyApp.view.PopUpWindows.Org.OrgAdd');
      window.show()
    },

    /**
     * Тестовая функция для проверки Events.
     */
    test:function() {
        console.log('Work')
    },
});
