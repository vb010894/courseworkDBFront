Ext.define('MyApp.store.Objects.ObjectsStore', {
    extend: 'Ext.data.Store',

    storeId:'ObjectsStore',
    sorters: ['name'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/Objects',
        api: {
            create: 'http://localhost:8080/_apis/Objects',
            read: 'http://localhost:8080/_apis/Objects',
            update: 'http://localhost:8080/_apis/Objects',
            destroy: 'http://localhost:8080/_apis/Objects',
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