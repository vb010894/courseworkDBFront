Ext.define('MyApp.view.Objects.Object.ObjectController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.objects-object-object',
    
    onAddButtonClick: function () {
        let window = Ext.create('MyApp.view.Objects.ObjectAdd.ObjectAdd');
        this.fireEvent('setMode',
            0);
        window.show();
    },

    onEditButtonClick: function (component) {
       let panel = component.up('panel[name=mainObjectPanel]');
       let grid = panel.down('grid');
        let window = Ext.create('MyApp.view.Objects.ObjectAdd.ObjectAdd');
        this.fireEvent('setSelection',
            grid.selection);
        this.fireEvent('setMode',
            1);
        window.show();

    }
});
