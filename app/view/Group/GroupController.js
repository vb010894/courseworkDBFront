const groupStore = Ext.create('MyApp.store.Group.Group.GroupStore');


Ext.define('MyApp.view.Group.GroupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.group-group',
    control: {
        'panel[name=groupPanel]': {
            added: 'addGrids'
        },
    },

    onWorkersInformationClick: function(control) {
        let panel = control.up('panel[name=groupPanel]');
        let grid = panel
            .items
            .items[0];

        let window = Ext.create('MyApp.view.Component.GroupReport.Workers.GroupWorkersInformation');
        let engStore = Ext.create('MyApp.store.Personel.Workers.WorkersStore');
        engStore.load();
        engStore.filter('group', grid.selection.data['id']);
        grid = window.down('grid');
        grid.reconfigure(engStore);
        window.show();
    },

    onEngeneerInformationClick: function(control) {
        let panel = control.up('panel[name=groupPanel]');
        let grid = panel
            .items
            .items[0];

        let window = Ext.create('MyApp.view.Component.GroupReport.Engeneer.EngeneerInformation');
        let engStore = Ext.create('MyApp.store.Personel.Engeneer.EngeneerStore');
        engStore.load();
        engStore.filter('group', grid.selection.data['id']);
        grid = window.down('grid');
        this.fireEvent('setGroupEngGrid', engStore);
        grid.reconfigure(engStore);
        window.show();
    },

    onReportInformationClick: function(control) {
        let panel = control.up('panel[name=groupPanel]');
        let grid = panel
            .items
            .items[0];

        console.log(grid.selection.data['id']);

        let window = Ext.create('MyApp.view.Component.GroupReport.Reports.Reports');
        let engStore = Ext.create('MyApp.store.Reports.ReportsStore');
        engStore.load();
        engStore.filter('idGroup', grid.selection.data['id']);
        grid = window.down('grid');
        grid.reconfigure(engStore);
        window.show();
    },

    selectGroupGridRow:function(selectedRow) {
        let panel = selectedRow.view.up('panel[name=groupPanel]');
        let reportButton = panel.down('button[name=groupReportButton]');
        reportButton.setDisabled(false);
    },

    onAllInformationClick: function(control) {
        let panel = control.up('panel[name=groupPanel]');
        let grid = panel
            .items
            .items[0];

        let window = Ext.create('MyApp.view.Component.GroupReport.Total.TotalInformation');
        this.fireEvent('setGroupInfo',
            grid.selection);
        window.show();
    },

    test: function() {console.log('work')},

    addGrids:function(control) {
        let grid = Ext.create('MyApp.view.Core.Components.GridView');
        grid.on('select', this.selectGroupGridRow, this);
        grid.setTitle("Бригады");
        let columns  = [{
                text: 'ID',
                hidden: true,
                dataIndex: 'id'
            }, {
                text: 'Смена',
                dataIndex: 'shift',
                flex: 1,
                filter: {
                    type: 'string',
                },
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }, {
                text: 'Мастер',
                dataIndex: 'masterName',
                width: '30%',
                filter: {
                    type: 'number',
                },
                editor: {
                    xtype: 'combobox',
                    displayField: 'fio',
                    name:'teamLeads',
                    allowBlank: false,
                    store: Ext.create('MyApp.store.Personel.Master.Master'),
                    listeners: {
                        select: 'onComboBoxEditorSelect'
                    }
                }
            }];

            let model =
                Ext.create('MyApp.view.Group.GroupModel', {
                    shift:'',
                    masterName: 0,
                });

            grid.setColumns(columns);
            this.fireEvent('setStoreGrid',
                groupStore);
            this.fireEvent('setModelGrid',
                model);
            control.insert(0, grid);
    },

    test:function () {
        console.log("work")
    }

});
