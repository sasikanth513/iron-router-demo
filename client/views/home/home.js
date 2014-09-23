Template.home.events({
    'click .previous':function(){
        if(Session.get("skipCount")>20){
            Session.set("skipCount",Session.get("skipCount")-20);
        }     
    },
    'click .next':function(){
       Session.set("skipCount",Session.get("skipCount")+20);
       
    }
});

Template.home.helpers({
    'times':function(){
        return time.find({},{sort: {presentDate: -1}});
    },
    'start':function(){
        if(Session.get("skipcount")<19){
            return 0;
        }
        else{
            return Number(Session.get('skipCount')-20);
        }
    },
    'end':function(){
        return Number(Session.get('skipCount'));
    },
    'total':function(){
        return Session.get("totalCount");
    }
});

function updateCount() {
    Meteor.call('totalRecords', function (err, count) {
        Session.set('totalCount', count); 
    });
}
time.find().observe({
    added: updateCount,
    removed: updateCount
});
