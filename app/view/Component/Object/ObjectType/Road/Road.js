
Ext.define('MyApp.view.Component.Object.ObjectType.Road.Road',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.Component.Object.ObjectType.Road.RoadController',
        'MyApp.view.Component.Object.ObjectType.Road.RoadModel'
    ],

    controller: 'component-object-objecttype-road-road',
    viewModel: {
        type: 'component-object-objecttype-road-road'
    },

    name:'dynamicObjectTypePanel',

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Тип дороги',
        name: 'objectRoadName',
        margin: 10,
        width:'98%'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Покрытие',
        name: 'objectRoadCover',
        margin: 10,
        width:'98%'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Протяженность',
        name: 'objectRoadLenght',
        margin: 10,
        width:'98%'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Количество полос для движения',
        name: 'objectRoadLineCount',
        margin: 10,
        width:'98%'
    }]
});
