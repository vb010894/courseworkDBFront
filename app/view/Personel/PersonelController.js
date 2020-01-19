const teamLeadStore = Ext.create('MyApp.store.Personel.TeamLead.TeamLeadsStore');
const masterStore = Ext.create('MyApp.store.Personel.Master.Master');
const engeneerStore = Ext.create('MyApp.store.Personel.Engeneer.EngeneerStore');
let workersStore = null;
let  grid = null;
let content = null;
let columns = null;

Ext.define('MyApp.view.Personel.PersonelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personel-personel',
    control: {
        'treepanel[name=personelTree]': {
            select: 'onTreeSelect'
        }
    },

    onTeamLeadUpdate: function (editor, context) {
        console.log(context);
    },

    createTeamLead: function() {

        grid.setTitle(grid.title + " 'Начальники управлений'");
        columns = [{
            text: 'ID',
            hidden: true,
            dataIndex: 'id'
        }, {
            text: 'ФИО',
            dataIndex: 'fio',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Управление',
            dataIndex: 'depName',
            width: '30%',
            filter: {
                type: 'number',
            },
            editor: {
                xtype: 'combobox',
                displayField: 'name',
                name:'teamLeads',
                allowBlank: false,
                store: Ext.create('MyApp.store.Departament.DepartamentStore'),
                listeners: {
                    select: 'onComboBoxEditorSelect'
                }
            }
        }];

        let model =
            Ext.create('MyApp.view.Component.TeamLead.TeamLeadModel', {

                FIO:'',
                departament: 0,
            });

        grid.setColumns(columns);
        this.fireEvent('setStoreGrid',
            teamLeadStore);
        this.fireEvent('setModelGrid',
            model);
        content.insert(1, grid);

    },

    createMasters: function() {
        grid.setTitle(" Таблица 'Мастера'");
        columns = [{
            text: 'ID',
            hidden: true,
            dataIndex: 'id'
        }, {
            text: 'ФИО',
            dataIndex: 'fio',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Управление',
            dataIndex: 'department',
            width: '30%',
            filter: {
                type: 'string',
            },
        }, {
            text: 'Начальник Управления',
            dataIndex: 'teamLeadFio',
            width: '30%',
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'combobox',
                displayField: 'fio',
                name:'teamLeads',
                allowBlank: false,
                store: Ext.create('MyApp.store.Personel.TeamLead.TeamLeadsStore'),
                listeners: {
                    select: 'onComboBoxEditorSelect'
                }
            }
        }];

        let model =
            Ext.create('MyApp.model.MasterModel', {
                fio:'',
                temLeadFio: 0,
            });

        grid.setColumns(columns);
        this.fireEvent('setStoreGrid',
            masterStore);
        this.fireEvent('setModelGrid',
            model);
        content.insert(1, grid);
    },

    createEngeneers: function() {
        grid.setTitle(" Таблица 'Инженеры'");
        columns = [{
            text: 'ID',
            hidden: true,
            dataIndex: 'id'
        }, {
            text: 'ФИО',
            dataIndex: 'fio',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Должность',
            dataIndex: 'position',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Оффис',
            dataIndex: 'office',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Бригада',
            dataIndex: 'groupName',
            width: '30%',
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'combobox',
                displayField: 'shift',
                name:'teamLeads',
                allowBlank: false,
                store: Ext.create('MyApp.store.Group.Group.GroupStore'),
                listeners: {
                    select: 'onComboBoxEditorSelect'
                }
            }
        }];

        let model =
            Ext.create('MyApp.model.EngeneerModel', {
                fio:'',
                position:'',
                office:'',
                groupName: 0,
            });

        grid.setColumns(columns);
        this.fireEvent('setStoreGrid',
            engeneerStore);
        this.fireEvent('setModelGrid',
            model);
        content.insert(1, grid);
    },

    createWorkers: function(title) {

        grid.setTitle(" Таблица '" + title + "'");
        columns = [{
            text: 'ID',
            hidden: true,
            dataIndex: 'id'
        }, {
            text: 'ФИО',
            dataIndex: 'fio',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Должность',
            dataIndex: 'position',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Бригада',
            dataIndex: 'groupName',
            width: '30%',
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'combobox',
                displayField: 'shift',
                name:'teamLeads',
                allowBlank: false,
                store: Ext.create('MyApp.store.Group.Group.GroupStore'),
                listeners: {
                    select: 'onComboBoxEditorSelect'
                }
            }
        }, {
            text: 'Бригадир',
            dataIndex: 'leader',
            flex: 1,
            renderer: function(rec) {
                if(rec == 1) {
                    return "ДА";
                } else {
                    return "";
                }

            },
            filter: {
                type: 'string',
            },
        }, {
            xtype: 'actioncolumn',
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-check',
                    tooltip: 'Сделать Бригадиром',
                    handler: function (view,
                                       rowIndex,
                                       columnIndex,
                                       item,
                                       event,
                                       record,
                                       row) {
                        let body = "{\"paramsLeader\":" + record.data["id"] + "}";
                        let store = view.store;
                        let url = store.getProxy().url;

                        console.log(body);

                        Ext.Ajax.request({
                            url: url,
                            method: "PUT",
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
                    }
                }],
                }];

        let model =
            Ext.create('MyApp.model.WorkersModel', {
                fio: '',
                position: '',
                leader: 0,
                groupName: 0,
            });

        grid.setColumns(columns);
        this.fireEvent('setStoreGrid',
           this.workersStore);
        this.fireEvent('setModelGrid',
            model);
        content.insert(1, grid);
    },

    onTreeSelect: function (control, record) {
        content = Ext.ComponentQuery.query('panel[name=personelContent]')[0];
        grid =  Ext.create('MyApp.view.Core.Components.GridView');
        let tools =  [{
            iconCls:'x-fa fa-minus',
            listeners: {
                click:'destroyGrid'
            }
        }];

        grid.tools = tools;

        if(record.data['text'] == 'Начальники управлений') {
           this.createTeamLead();
        }

        if(record.data['text'] == 'Мастера') {
            this.createMasters();
        }

        if(record.data['text'] == 'Инженерный отдел') {
          this.createEngeneers()
        }

        if(record.data['text'] == 'Работники') {
            this.workersStore = Ext.create('MyApp.store.Personel.Workers.WorkersStore');
            this.workersStore.getProxy().extraParams = {
                leader: 0
            };

            this.createWorkers("Работники")
        }

        if(record.data['text'] == 'Бригадиры') {
            this.workersStore = Ext.create('MyApp.store.Personel.Workers.WorkersStore');
            this.workersStore.getProxy().extraParams = {
                leader: 1
            };

            this.createWorkers("Бригадиры")
        }
    },

    init: function () {
        this.listen({
            controller: {
                '*': {
                    teamLeadsGridUpdate: 'onTeamLeadUpdate',
                }
            },
        })
    }

});
