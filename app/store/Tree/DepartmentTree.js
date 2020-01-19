Ext.define('MyApp.store.DepartmentTreeStore', {
    extend: 'Ext.data.TreeStore',
    rootData: {
        text:'Меню',
        expanded:true,
        children:[{
            leaf:true,
            text: 'Департамент',
        }, {
            leaf: true,
            text: 'Участки',
        }, {
            leaf: true,
            text: 'Объекты',
        }]
    },

    constructor: function (config) {
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});