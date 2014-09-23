Meteor.startup(function () {
    Session.setDefault("skipCount",0);
    Session.setDefault("totalCount",0);
    updateCount();
    AccountsEntry.config({
      homeRoute: '/',          
      dashboardRoute: '/',
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
  });
  


