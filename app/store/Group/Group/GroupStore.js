Ext.define('MyApp.store.Group.Group.GroupStore', {
    extend: 'Ext.data.Store',

    storeId:'GroupStore',
    sorters: ['shift'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/Group',
        api: {
            create: 'http://localhost:8080/_apis/Group',
            read: 'http://localhost:8080/_apis/Group',
            update: 'http://localhost:8080/_apis/Group',
            destroy: 'http://localhost:8080/_apis/Group',
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