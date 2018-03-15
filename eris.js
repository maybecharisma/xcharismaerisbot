const Eris = require("eris");
var ID = "Channel iD";
var dark = new Eris("Set_token");
 
dark.on("ready", ready => {
setInterval(function(){
 
            var currentTime = new Date(),
            hours = currentTime.getHours() + 2 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();
           
             
 
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
dark.editChannel("Channel iD", {name : "📅 Date " + "[" + day + "-" + month + "-" + years + "]"})
}, 3000);
 
});

dark.connect("set_token")