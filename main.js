    function toReplay(){
        location.reload();
    }

    function toRandom() {
        var time=0; 
        var card;
        var home;
        var pec;
        var name;
        var re;
        name = document.getElementById("name").value;
      
        do{
            
            
            
            card = document.getElementById("card");
            home = document.getElementById("home");

            pec = Math.floor((Math.random() * 100) + 0);
            
            if (pec>=0) {
                card.style.display = "block";
                home.style.display = "none" ;
            } else {
                card.style.display = "none";
                home.style.display = "block" ;
            }
            
            document.getElementById("resname").innerHTML = "ยินดีด้วยคุณ "+name ;
            document.getElementById("pec").innerHTML = "โอกาสที่ได้เป็นทหาร "+pec+"%" ;

            if(pec >= 0 && pec <=40){
                document.getElementById("img").src = "https://media0.giphy.com/media/10dvC5lmhNsR0s/giphy.webp?cid=790b76115ca5bbe9395a2e43732592f0" ;
                document.getElementById("res").innerHTML = "คุณไม่ได้เป็นทหาร" ;
                
            }else if(pec > 40 && pec <=50){
                document.getElementById("img").src = "https://media0.giphy.com/media/vdndPoXSmYRfa/200.webp?cid=790b76115ca5bc186a637a2f324838d3" ;
                document.getElementById("res").innerHTML = "คุณได้ประจำการอยู่ที่ สงขลา" ;
            
            }else if(pec > 50 && pec <=70){
                document.getElementById("img").src = "https://media1.giphy.com/media/KrReRG3ZOQ8Cc/200.webp?cid=790b76115ca5bbe9395a2e43732592f0" ;
                document.getElementById("res").innerHTML = "คุณได้ประจำการอยู่ที่ นราธิวาส" ;
            
            }else{
                document.getElementById("img").src = "https://media0.giphy.com/media/j9KYEf8WA1pxC/200w.webp?cid=790b76115ca5bbe9395a2e43732592f0" ;
                document.getElementById("res").innerHTML = "คุณได้ประจำการอยู่ที่ ปัตตานี" ;
            
            }

            
            
            time++;

        }while(time == 1) {

            re = document.getElementById("replay");

            if (re.style.display === "none") {
                re.style.display = "none";
            } else {
                re.style.display = "block";
            }
        
    
        }
    
    }
    