
Ext.define('MyApp.view.Personel.Personel',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.Personel.PersonelController',
        'MyApp.view.Personel.PersonelModel'
    ],

    controller: 'personel-personel',
    viewModel: {
        type: 'personel-personel'
    },
    layout: 'hbox',
    items: [{
        xtype:'treepanel',
        style:'text-align:left',
        name: 'personelTree',
        width: '30%',
        rootVisible:true,
        autoScroll: true,
        store:Ext.create('MyApp.store.PersonelTreeStore'),
        columns: [{
            xtype: 'treecolumn',
            dataIndex: 'text',
            flex: 1,
            align: 'end'
        }]
    }, {
        xtype: 'panel',
        name: 'personelContent',
        autoScroll: true,
        height:400,
        layout:'vbox',
        flex:1
    }]
});
