//on page load timer starts for 45 mins 
		//set minutes 
		var mins = 45; 
		//calculate the seconds 
		var secs = mins * 60; 

		//countdown function is evoked when page is loaded 
		function countdown() { 
			setTimeout('Decrement()', 60); 
		} 

		//Decrement function decrement the value. 
		function Decrement() { 
			if (document.getElementById) { 
				minutes = document.getElementById("minutes"); 
				seconds = document.getElementById("seconds"); 

				//if less than a minute remaining 
				//Display only seconds value. 
				if (seconds < 59) { 
					seconds.value = secs; 
				} 

				//Display both minutes and seconds 
				//getminutes and getseconds is used to 
				//get minutes and seconds 
				else { 
					minutes.value = getminutes(); 
					seconds.value = getseconds(); 
				} 
				//when less than a minute remaining 
				//colour of the minutes and seconds 
				//changes to red 
				if (mins < 1) { 
					minutes.style.color = "red"; 
					seconds.style.color = "red"; 
				} 
				//if seconds becomes zero, 
				//then page alert time up 
				if (mins < 0) { 
          alert('Session timeout'); 
          
					minutes.value = 0; 
					seconds.value = 0; 
				} 
				//if seconds > 0 then seconds is decremented 
				else { 
					secs--; 
					setTimeout('Decrement()', 1000); 
				} 
			} 
		} 

		function getminutes() { 
			//minutes is seconds divided by 60, rounded down 
			mins = Math.floor(secs / 60); 
			return mins; 
		} 

		function getseconds() { 
			//take minutes remaining (as seconds) away 
			//from total seconds remaining 
			return secs - Math.round(mins * 60); 
		} 


//time and ate display


    function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();


  function showDate(){

          var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = dd+'-'+mm+'-'+yyyy;
        document.getElementById("MyDateDisplay").innerText = today;

      }
      showDate();


     