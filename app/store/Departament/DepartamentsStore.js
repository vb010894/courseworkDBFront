Ext.define('MyApp.store.Departament.DepartamentStore', {
    extend: 'Ext.data.Store',

    storeId:'DepartamentStore',
    requires: [
        'Ext.data.proxy.Rest',
        'MyApp.view.Departament.DepartamentModel'

    ],
    autoLoad:true,
    autoSync:false,
    viewModel: {
        type: 'departament-departament'
    },
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/_apis/Department',
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