Ext.define('MyApp.store.Reports.ReportsStore', {
    extend: 'Ext.data.Store',

    storeId:'ReportsStore',
    autoSync:false,
    requires:
        [
            'Ext.data.proxy.Rest',
        ],
    autoLoad:true,
    proxy: {
        type: 'rest',
        url:'http://localhost:8080/_apis/Reports',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count',
            successProperty: 'state'
        }
    }
});
