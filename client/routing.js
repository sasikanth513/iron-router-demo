Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});
Router.map(function(){
    this.route("home",{
      path:'/'
    });
});