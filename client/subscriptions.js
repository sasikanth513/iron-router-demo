Tracker.autorun(function(){
    Meteor.subscribe('time',Session.get("skipCount"));    
});
