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
    }
})