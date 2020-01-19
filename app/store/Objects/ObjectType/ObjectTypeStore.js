Ext.define('MyApp.store.Objects.ObjectType.ObjectTypeStore', {
    extend: 'Ext.data.Store',

    storeId:'ObjectTypeStore',
    sorters: ['name'],
    autoLoad:true,
    autoSync:false,
    data:[
        {name: 'Дорога', description:'road'},
        {name: 'Здание', description:'building'},
        {name: 'Мост', description:'bridge'}
    ]
});