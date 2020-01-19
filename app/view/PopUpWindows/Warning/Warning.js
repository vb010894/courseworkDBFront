
Ext.define('MyApp.view.PopUpWindows.Warning.Warning',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.PopUpWindows.Warning.WarningController',
        'MyApp.view.PopUpWindows.Warning.WarningModel'
    ],

    controller: 'popupwindows-warning-warning',
    viewModel: {
        type: 'popupwindows-warning-warning'
    },

    layout:{
        type:'vbox',
        alight:'stretch'
    },

    width:'20%',
    title:'Предупреждение',
    bodyPadding:15,

    html: 'Hello, World!!'
});
