Ext.define('MyApp.store.PersonelTreeStore', {
    extend: 'Ext.data.TreeStore',
    rootData: {
        text:'Пресонал',
        expanded:false,
        children:[{
            leaf:true,
            text: 'Начальники управлений',
        }, {
            leaf: true,
            text: 'Инженерный отдел',
        }, {
            leaf: true,
            text: 'Мастера',
        }, {
            leaf: true,
            text: 'Бригадиры',
        }, {
            leaf: true,
            text: 'Работники',
        }]
    },

    constructor: function (config) {
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});
