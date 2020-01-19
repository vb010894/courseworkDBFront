Ext.define('MyApp.store.SettingStore', {
    extend: 'Ext.data.Store',

   // alias: 'store.SettingStore',
    storeId:'SettingStore',
    autoSync:true,
    requires:
    [
        'Ext.data.proxy.Rest',
        'MyApp.view.Setting.SettingModel'
    ],
    autoLoad:false,
    autoSync:false,
    viewModel: {
        type: 'setting-setting'
    },
    proxy: {
        type: 'rest',
        url:'http://localhost:80/_apis/Org',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count',
            successProperty: 'state'
        }
    }
});
