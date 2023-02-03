function getDateTime(){
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
        if(month.toString().length == 1) {
            month = '0'+month;
        }
        if(day.toString().length == 1) {
            day = '0'+day;
        }   
        if(hour.toString().length == 1) {
            hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
            minute = '0'+minute;
        }
        if(second.toString().length == 1) {
            second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
        return dateTime;
}

setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

function ali(){
    if (confirm("\n\nEE-CMU FILES,\n***      Login By CMU ACCOUNT      ***")) {
        window.open("https://o365cmu-my.sharepoint.com/:f:/g/personal/sorayut_t_cmu_ac_th/Ethw7g2XlwlFn76Q0wzQ9NIBC4DwwTtuhbsH1mha9rp5Eg?e=wvongu")
    }
}

function abou(){
   // alert();
}