
Ext.define('MyApp.view.Setting.Setting',{
    extend: 'Ext.panel.Panel',
    alias:'widget.Setting',
    requires: [
        'MyApp.view.Setting.SettingController',
        'MyApp.view.Setting.SettingModel',
    ],

    controller: 'setting-setting',
    viewModel: {
        type: 'setting-setting'
    },

    width:'100%',
    height:'100%',
    items: [{
            xtype:'panel',
            width: '100%',
            height: '5%',
            html:'<h1>Настройки организации</h1>',
            style:'text-align:center'
        }, {
            xtype:'panel',
            flex:1,
            width:'100%',
            height: 300,
            items: [{
                    xtype: 'gridpanel',
                    width: '100%',
                    height:300,
                    name:'orgGrid',
                    plugins:[{
                        ptype: 'rowediting'
                    }, {
                        ptype:'gridfilters',
                    }],
                    border:true,
                  //  scrollable:true,
                    store:Ext.create('MyApp.store.OrganizationStore'),
                    title:'Организации',
                    columns: [{
                        text:'id',
                        hidden:true,
                        dataIndex: 'id',
                        },{
                            text:'Наименование',
                            width:'35%',
                            dataIndex: 'name',
                            filter:{
                                type: 'string',
                            },
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            }
                        }, {
                            text:'Адрес',
                            flex:1,
                            dataIndex: 'adress',
                            filter:{
                                type: 'string',
                            },
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            }
                        }, {
                            text:'ИНН',
                            width:'20%',
                            dataIndex: 'inn',
                            filter:{
                                type: 'number',
                            },
                            editor: {
                                xtype: 'numberfield',
                                allowBlank: false
                            }
                        }, {
                            text:'КПП',
                            width:'20%',
                            dataIndex: 'kpp',
                            filter:{
                                type: 'number',
                            },
                            editor: {
                                xtype: 'numberfield',
                                allowBlank: false
                            }
                        }],
                    bbar: [{
                            xtype:'button',
                            text:"Добавить",
                            name:'orgAdd'
                        }, {
                            xtype:'button',
                            text:"Удалить",
                            name:'orgDelete'
                        }]
                }]
        }]
});
