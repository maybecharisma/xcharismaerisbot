const Eris = require("eris");
var ID = "Channel iD";
var dark = new Eris("Mzk5NDU2MDY1NTAwMDg2Mjgw.DYxzKQ.ahOx3r9vxTRP5Zka16i9vJvlls0");
 
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
dark.editChannel("419939569358602243", {name : "📅 Date " + "[" + day + "-" + month + "-" + years + "]"})
}, 3000);
 
});

dark.connect("set_token")
