Ext.define('MyApp.store.Objects.ObjectType.RoadStore', {
    extend: 'Ext.data.Store',

    storeId:'RoadStore',
    sorters: ['name'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/Road',
        api: {
            create: 'http://localhost:8080/_apis/Road',
            read: 'http://localhost:8080/_apis/Road',
            update: 'http://localhost:8080/_apis/Road',
            destroy: 'http://localhost:8080/_apis/Road',
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