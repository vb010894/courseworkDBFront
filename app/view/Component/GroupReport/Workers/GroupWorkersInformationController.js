Ext.define('MyApp.view.Component.GroupReport.Workers.GroupWorkersInformationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.component-groupreport-workers-groupworkersinformation',
    
    onWindowClose: function (component) {

        let grid = component.down('grid');
        let store = grid.getStore();
        store.clearFilter();
        
    }

});
