Meteor.startup(function(){
    Meteor.setInterval(insertFunc,5000);
});

function insertFunc(){

    var rand=Math.floor(Random.fraction() * 6);
    time.insert({"random":rand,"presentDate":Date.now()});
}

Meteor.publish('time',function(skipCount){
   return time.find({},{sort: {presentDate: -1},limit:20,skip:skipCount}) ;
});

Meteor.methods({
    'totalRecords':function(){
        return time.find({}).count();
    }
});