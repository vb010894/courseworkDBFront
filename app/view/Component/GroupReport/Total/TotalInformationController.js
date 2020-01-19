let info = null;

Ext.define('MyApp.view.Component.GroupReport.Total.TotalInformationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.component-groupreport-total-totalinformation',

    setInfo(record){
      info = record;
    },

    onWindowAdded: function(control) {

        let name = control.down('panel[name=groupInfoName]');
        let master = control.down('panel[name=groupInfoMaster]');
        let dep = control.down('panel[name=groupInfoDep]');
        let teamLead = control.down('panel[name=groupInfoTeamLead]');
        name.setHtml('<h1>Смена: </h1>"' + info.data['shift'] + '"');
        master.setHtml('<h1>Мастер: </h1>"' + info.data['masterName'] + '"');

        masterStore.load();
        masterStore.filter('id', info.data['maste']);

        let teamLeadFio = masterStore.first().get("teamLeadFio");
        let teamLeadId = masterStore.first().get("teamLeads");

        masterStore.clearFilter();

        teamLead.setHtml('<h1>Начальник управления: </h1>"' + teamLeadFio + '"');

        teamLeadStore.load();
        teamLeadStore.filter('id', teamLeadId);
        let depName = teamLeadStore.first().get("depName");
        teamLeadStore.clearFilter();

        dep.setHtml('<h1>Управление: </h1>"' + depName + '"');
    },

    init:function () {
        this.listen({
            controller: {
                '*': {
                    setGroupInfo: 'setInfo'
                }
            },
        })
    }
});
