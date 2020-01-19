let DepContent = null;
let DepGrid = null;
let DepColumns = null;

Ext.define('MyApp.view.Departament.DepartamentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.departament-departament',

    control: {
        'treepanel[name=departmentTree]': {
            select: 'onTreeSelect'
        }
    },

    createDepartment: function() {
        DepGrid.setTitle("Департаменты");
        DepColumns = [{
            text: 'ID',
            hidden: true,
            dataIndex: 'id'
        }, {
            text: 'OrgId',
            hidden: true,
            dataIndex: 'org'
        }, {
            text: 'Наименование',
            dataIndex: 'name',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            text: 'Адресс',
            dataIndex: 'adress',
            flex: 1,
            filter: {
                type: 'string',
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }];

        let model =
            Ext.create('MyApp.model.EngeneerModel', {
                name: '',
                adress: '',
                org:2,
            });

        let DepStore = Ext.create('MyApp.store.Departament.DepartamentStore');

        DepGrid.setColumns(DepColumns);
        this.fireEvent('setStoreGrid',
            DepStore);
        this.fireEvent('setModelGrid',
            model);
        DepContent.insert(1, DepGrid);
    },

    createSuits: function() {
        DepGrid.setTitle("Участки");
        DepColumns = [{
            text: 'ID',
            hidden: true,
            dataIndex: 'id'
        },  {
            text: 'Наименование',
            dataIndex: 'name',
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
                type: 'string',
            },
            editor: {
                xtype: 'combobox',
                displayField: 'name',
                allowBlank: false,
                store: Ext.create('MyApp.store.Departament.DepartamentStore'),
                listeners: {
                    select: 'onComboBoxEditorSelect'
                }
            }
        }];

        let model =
            Ext.create('MyApp.model.SuitsModel', {
                name: '',
                depName: '',
            });

        let DepStore = Ext.create('MyApp.store.Departament.SuitStore');

        DepGrid.setColumns(DepColumns);
        this.fireEvent('setStoreGrid',
            DepStore);
        this.fireEvent('setModelGrid',
            model);
        DepContent.insert(1, DepGrid);
    },


    onTreeSelect: function (control, record) {
        DepContent = Ext.ComponentQuery.query('panel[name=departmentContent]')[0];
        DepGrid = Ext.create('MyApp.view.Core.Components.GridView');
        let tools = [{
            iconCls: 'x-fa fa-minus',
            listeners: {
                click: 'destroyGrid'
            }
        }];

        DepGrid.tools = tools;

        if (record.data['text'] == 'Департамент') {
            this.createDepartment();
        }

        if (record.data['text'] == 'Участки') {
            this.createSuits();
        }

    }


});
