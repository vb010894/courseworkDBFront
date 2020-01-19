Ext.define('MyApp.store.Personel.Workers.WorkersStore', {
    extend: 'Ext.data.Store',

    storeId:'WorkersStore',
    sorters: ['fio'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/Workers',
        api: {
            create: 'http://localhost:8080/_apis/Workers',
            read: 'http://localhost:8080/_apis/Workers',
            update: 'http://localhost:8080/_apis/Workers',
            destroy: 'http://localhost:8080/_apis/Workers',
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