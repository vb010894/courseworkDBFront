
Ext.define('MyApp.view.PopUpWindows.TeamLeads.TeamLeadsAdd',{
    extend: 'Ext.window.Window',

    requires: [
        'MyApp.view.PopUpWindows.TeamLeads.TeamLeadsAddController',
        'MyApp.view.PopUpWindows.TeamLeads.TeamLeadsAddModel'
    ],

    controller: 'popupwindows-teamleads-teamleadsadd',
    viewModel: {
        type: 'popupwindows-teamleads-teamleadsadd'
    },

    html: 'Hello, World!!'
});
