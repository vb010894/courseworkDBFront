Ext.define('MyApp.store.OrganizationStore', {
    extend: 'Ext.data.Store',

    storeId:'OrganizationStore',
    requires: [
            'Ext.data.proxy.Rest',
            'MyApp.model.OrganizationModel'

        ],
    autoLoad:true,
    autoSync:false,
    viewModel: {
        type: 'OrganizationModel'
    },
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/_apis/Org',
        batchActions: true,
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