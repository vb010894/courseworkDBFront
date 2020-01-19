Ext.define('MyApp.store.Personel.TeamLead.TeamLeadsStore', {
    extend: 'Ext.data.Store',

    storeId:'OrganizationStore',
    sorters: ['FIO'],
    autoLoad:true,
    autoSync:false,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/_apis/TeamLeads',
        api: {
            create: 'http://localhost:8080/_apis/TeamLeads',
            read: 'http://localhost:8080/_apis/TeamLeads',
            update: 'http://localhost:8080/_apis/TeamLeads',
            destroy: 'http://localhost:8080/_apis/TeamLeads',
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