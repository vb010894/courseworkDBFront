/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.onReady(function() {
});

Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control:
        {
            'tabpanel[name=rootTab]': {
                afterrender :'tabInit',
                tabchange:'tabChange'
            },
        },

    tabInit:function(tabs) {
      if(location.hash == "#SettingTab" ) {
            tabs.setActiveTab(4)
      }

        if(location.hash == "#ObjectTab" ) {
            tabs.setActiveTab(1)
        }

        if(location.hash == "#DepartamentTab" ) {
            tabs.setActiveTab(0)
        }

        if(location.hash == "#PersonelTab" ) {
            tabs.setActiveTab(2)
        }

        if(location.hash == '#GroupTab') {
            tabs.setActiveTab(3)
        }
    },

    tabChange: function(sender, newTab) {
        location.hash = newTab.name;
    },

    test:function() {
        console.log("Work")
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    init:function ()
    {

    }

});
