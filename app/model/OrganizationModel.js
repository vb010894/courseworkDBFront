Ext.define('MyApp.model.OrganizationModel', {
    extend: 'Ext.app.ViewModel',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'String' },
        { name: 'adress', type: 'String' },
        { name: 'inn', type: 'String' },
        { name: 'kpp', type: 'String' }

    ],

    validations:
    [
        {
            type:'lenght',
            field:'inn',
            min:10,
            max:12
        },
        {
            type:'lenght',
            field:'kpp',
            min:9,
            max:9
        }
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/_apis/Org',
    }
});
