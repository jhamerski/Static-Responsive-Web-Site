var myVideo = document.getElementById("video1"); 

				function playPause() { 
				    if (myVideo.paused) 
				        myVideo.play(); 
				    else 
				        myVideo.pause(); 
				} 

				function grande() { 
				    myVideo.width = 920; 
				} 

				function normal() { 
				    myVideo.width = 460; 
				} 

				function pequeno() { 
				    myVideo.width = 320; 
				} 
