Meteor.startup(function () {
    
    updateCount();
    AccountsEntry.config({
      homeRoute: '/',          
      dashboardRoute: '/',
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
  });
  
Session.setDefault("skipCount",0);
Session.setDefault("totalCount",0);

