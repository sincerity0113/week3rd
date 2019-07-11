$(document).ready(function(){
   
        var jewelblue = 0;
        var jewelgreen = 0;
        var jewelred = 0;
        var jewelpurple = 0;
        var Goal = 0;
        var playsum = 0;
        var win = 0;
        var lose = 0;

        debugger;    
        function gamestart(){
            jewelblue = Math.floor(Math.random() * 12) + 1;
            jewelgreen = Math.floor(Math.random() * 12) + 1;
            jewelred = Math.floor(Math.random() * 12) + 1;
            jewelpurple = Math.floor(Math.random() * 12) + 1;
            Goal = jewelblue * Math.floor(Math.random() * 5) + jewelgreen * (Math.floor(Math.random() * 2) + 1) + jewelred * Math.floor(Math.random() * 3) + jewelpurple * (Math.floor(Math.random() * 3) + 1);
            myScorer = 0;
            
            function dupCheck(){
                if (jewelblue == jewelgreen  || jewelblue == jewelred || jewelblue == jewelpurple ||  jewelgreen == jewelred || jewelgreen == jewelpurple || jewelred == jewelpurple){
                    return true;
                }
                else if (Goal < 19 || Goal > 120){
                    return true;
                }
                else{
                    return false;
                }
            }
            
            if(dupCheck()){
                gamestart();
            }
            else{
                $("#targetScorer").text(Goal);
                $("#myScorer").text(playsum);
            }
        }
        debugger;       
        $('.Gems').on("click", function(){
        
            if($(this).attr("id") == "blue"){
                playsum += jewelblue;

            }
            else if($(this).attr("id") == "green"){
                playsum += jewelgreen;

            }
            else if($(this).attr("id") == "red"){
                playsum += jewelred;
    
            }
            else if($(this).attr("id") == "purple"){
                playsum += jewelpurple;
            }
                
            $("#myScorer").text(playsum);
    
            if (playsum > Goal){
   
                lose++;
                $("#loseGame").text(lose);
              
                setTimeout(gamestart, 500);
            }
            else if (playsum == Goal){
   
                win++;
                $("#numberOfWinning").text(win);
               
                setTimeout(gamestart, 500);
            } 
        });
    
    
    
        gamestart();
    });

  