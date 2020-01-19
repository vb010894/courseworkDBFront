const teamLeadStore = Ext.create('MyApp.store.Personel.TeamLead.TeamLeadsStore');
let isNew = false;

Ext.define('MyApp.view.Component.TeamLead.TeamLeadController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.component-teamlead',
    control: {
        'gridpanel[name=teamLeadGrid]': {
            added: 'onTeamLeadGridAdd',
            select: 'onTeamLeadSelect',
            deselect: 'onTeamLeadDeselect'
        },
        'button[name=teamLeadAdd]': {
            click: 'onAddTeamLeadClick'
        }
    },

    onTeamLeadGridAdd: function (control) {
        teamLeadStore.load();
        control.setStore(teamLeadStore);
    },

    onTeamLeadSelect: function() {
       let delButton = Ext.ComponentQuery.query('button[name=teamLeadDelete]');
       delButton.disable = false;
    },

    onTeamLeadDeselect: function() {
        let delButton = Ext.ComponentQuery.query('button[name=teamLeadDelete]');
        delButton.disable = true;
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

    onAddTeamLeadClick: function () {
        isNew = true;

       // this.fireEvent('doSomething');
        let model =
         Ext.create('MyApp.view.Component.TeamLead.TeamLeadModel', {

            FIO:'',
            departament: 0,
        });

        let grid = Ext.ComponentQuery.query('gridpanel[name=teamLeadGrid]')[0];
        console.log(grid);
        let store = grid.getStore();
        store.insert(0);
       // console.log(grid.getPlugin('teamLeadEditor'));
        grid.getPlugin('teamLeadEditor').startEdit();
    }

});
