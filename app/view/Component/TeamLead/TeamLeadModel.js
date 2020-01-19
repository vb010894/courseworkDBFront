Ext.define('MyApp.view.Component.TeamLead.TeamLeadModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.component-teamlead',
    data: {
        name: 'MyApp'
    },

    fields: [
        { name: 'id', type: 'int' },
        { name: 'fio', type: 'String' },
        { name: 'departament', type: 'int' },
        { name: 'depName', type: 'String' }
    ],

});
