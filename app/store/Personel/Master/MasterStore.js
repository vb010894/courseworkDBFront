Ext.define('MyApp.store.Personel.Master.Master', {
    extend: 'Ext.data.Store',

    storeId:'MasterStore',
    sorters: ['fio'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/Master',
        api: {
            create: 'http://localhost:8080/_apis/Master',
            read: 'http://localhost:8080/_apis/Master',
            update: 'http://localhost:8080/_apis/Master',
            destroy: 'http://localhost:8080/_apis/Master',
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count',
            successProperty: 'state',
            messageProperty: 'messeage'
        },
        writer: {
            type: 'json',
        }
    }
});