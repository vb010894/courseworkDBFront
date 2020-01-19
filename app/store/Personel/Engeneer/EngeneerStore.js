Ext.define('MyApp.store.Personel.Engeneer.EngeneerStore', {
    extend: 'Ext.data.Store',

    storeId:'EngeneerStore',
    sorters: ['fio'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/Engeneer',
        api: {
            create: 'http://localhost:8080/_apis/Engeneer',
            read: 'http://localhost:8080/_apis/Engeneer',
            update: 'http://localhost:8080/_apis/Engeneer',
            destroy: 'http://localhost:8080/_apis/Engeneer',
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