Ext.define('MyApp.store.Departament.SuitStore', {
    extend: 'Ext.data.Store',

    storeId:'SuitStore',
    requires: [
        'Ext.data.proxy.Rest',
    ],

    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/_apis/Suits',
        batchActions: true,
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count',
            successProperty: 'state'
        },
        writer: {
            type: 'json',
        }
    }
});