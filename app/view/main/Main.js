/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',
        'MyApp.view.Setting.Setting'
    ],

    controller: 'main',
    viewModel: 'main',
    name:'rootTab',
    ui: 'navigation',
    title:'Учет строительной организации',
    iconCls: 'x-fa fa-calendar',
    tabBar: {
        layout: {
            pack: 'left'
        },
        cls: 'rounded',
        border: false
    },

    defaults: {
        iconAlign: 'top',
        bodyPadding: 15
    },
    layout:'hbox',

    items: [{
        title: 'Управления',
        name: 'DepartamentTab',
        autoScroll: true,
        iconCls: 'fa-home',
        items: Ext.create('MyApp.view.Departament.Departament')
    }, {
        title: 'Объекты',
        iconCls: 'fa-key',
        autoScroll: true,
        name: 'ObjectTab',
        items:Ext.create('MyApp.view.Objects.Object.Object')
    }, {
        title: 'Персонал',
        iconCls: 'fa-user',
        autoScroll: true,
        name:'PersonelTab',
        items:Ext.create('MyApp.view.Personel.Personel')
    }, {
        title: 'Бригады',
        iconCls: 'fa-users',
        autoScroll: true,
        name: 'GroupTab',
        items:Ext.create('MyApp.view.Group.Group')
    }, {
        title: 'Бригады',
        iconCls: 'fa-users',
        autoScroll: true,
        name: 'GroupTab',
        items:Ext.create('MyApp.view.Group.Group')
    }, {
        title: 'Настройки',
        iconCls: 'fa-cog',
        autoScroll: true,
        name: 'SettingTab',
        items:Ext.create('MyApp.view.Setting.Setting'),
    }]
});
