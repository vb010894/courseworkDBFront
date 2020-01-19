let storeGroupEngeneer = null;

Ext.define('MyApp.view.Component.GroupReport.Engeneer.EngeneerInformationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.component-groupreport-engeneer-engeneerinformation',

    setStore: function(store) {
      this.storeGroupEngeneer = store;
    },

    init:function () {
        this.listen({
            controller: {
                '*': {
                    setGroupEngGrid: 'setStore'
                }
            },
        })
    }
});
