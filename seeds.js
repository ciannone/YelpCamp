var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name:"granite hill",
            image:"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
            description:"This is a huge granite hill"
        },
        {
            name:"chocolate hill",
            image:"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
            description:"This is a huge granite hill"
        },
        {
            name:"rocky hill",
            image:"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
            description:"This is a huge granite hill"
        }
    ];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        //add a few campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("added a campground");
                //create a comment
                Comment.create(
                    {
                        text: "this place is great",
                        author: "christian"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
            }
        });
    });
});
}

module.exports = seedDB;
