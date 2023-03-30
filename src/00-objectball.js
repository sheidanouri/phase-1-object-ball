function gameObject(){
    const obj= {
        "home":{
            "teamName":"Brooklyn Nets",
            "colors" : ["Black","White"],
            "players" :{
                "Alan Anderson":{
                    "number":0,
                     "shoe":16,  
                    "points"  :22,
                    "rebounds"  :12,
                    "assists"  :12,
                     "steals"  :3,
                    "blocks"  :1,
                    "slamDunks"  :1
                } 
            ,
                "Alan Anderson":{
                    "number":30,
                     "shoe":14,  
                    "points"  :12,
                    "rebounds"  :12,
                    "assists"  :12,
                     "steals"  :12,
                    "blocks"  :12,
                    "slamDunks"  :7
                }
                
                ,
                "Brook Lopez":{
                    "number":12,
                     "shoe":17,  
                    "points"  :17,
                    "rebounds"  :19,
                    "assists"  :10,
                     "steals"  :3,
                    "blocks"  :1,
                    "slamDunks"  :15
                
                }
            
                ,
                "Mason Plumlee":{
                    "number":1,
                     "shoe":19,  
                    "points"  :26,
                    "rebounds"  :12,
                    "assists"  :6,
                     "steals"  :3,
                    "blocks"  :8,
                    "slamDunks"  :5
                }
                ,
                "Jason Terry":{
                    "number":31,
                     "shoe":15,  
                    "points"  :19,
                    "rebounds"  :2,
                    "assists"  :2,
                     "steals"  :4,
                    "blocks"  :11,
                    "slamDunks"  :1
                }
                }
            


                 },
        
        "away":{
            "teamName":"Charlotte Hornets",
            "colors" : ["Turquoise", "Purple"],
            "players" :{
                "Jeff Adrien":{
                    "number":4,
                     "shoe":18,  
                    "points"  :10,
                    "rebounds"  :1,
                    "assists"  :1,
                     "steals"  :2,
                    "blocks"  :7,
                    "slamDunks"  :2
                } 
            ,
                "Bismak Biyombo":{
                    "number":0,
                     "shoe":16,  
                    "points"  :12,
                    "rebounds"  :4,
                    "assists"  :7,
                     "steals"  :7,
                    "blocks"  :15,
                    "slamDunks"  :10
                }
                
                ,
                "DeSagna Diop":{
                    "number":2,
                     "shoe":14,  
                    "points"  :24,
                    "rebounds"  :12,
                    "assists"  :12,
                     "steals"  :4,
                    "blocks"  :5,
                    "slamDunks"  :5
                
                }
            
                ,
                "Ben Gordon":{
                    "number":8,
                     "shoe":15,  
                    "points"  :33,
                    "rebounds"  :3,
                    "assists"  :2,
                     "steals"  :1,
                    "blocks"  :1,
                    "slamDunks"  :0
                }
                ,
                "Brendan Haywood":{
                    "number":33,
                     "shoe":15,  
                    "points"  :6,
                    "rebounds"  :12,
                    "assists"  :12,
                     "steals"  :22,
                    "blocks"  :5,
                    "slamDunks"  :12
                }
                }
            


                 }
        
    }

return obj
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        let data = teamObj.players;
        for (let key in data) {
            if (key == playerName) {
                debugger;
                console.log(data[key].points);
                return data[key].points;
            }
                
          //debugger;
        }
      }
    }
  }
  
//    numPointsScored("Brendan Haywood")

function shoeSize(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      //debugger;
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        //debugger;
  
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.players;
        for (let key in data) {
            if (key == playerName) {
                debugger;
                console.log(data[key].shoe);
                return data[key].shoe;
            }
                
          //debugger;
        }
      }
    }
  }
//   sshoeSize("Brendan Haywood")
  
  
  function teamColors(team) {
    let game = gameObject();
    for (let gameKey in game) {
    
      debugger;
      let teamObj = game[gameKey];
     
      if (teamObj.teamName ===team){
        console.log(teamObj.colors)
        return teamObj.colors
      }
    }
  }
//   teamColors("Charlotte Hornets")

  function teamNames() {
    let game = gameObject();
    let arr=[]
    for (let gameKey in game) {
    
      debugger;
      let teamObj = game[gameKey];
     
     
      arr.push(teamObj.teamName)
      
    }
    console.log(arr)
    return arr
 
  }
//   teamNames()

function playerNumbers(teamName){
   
    let game = gameObject();
    for (let gameKey in game) {
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        let data = teamObj.players;
        let arr=[]   
       
        for (let key in data) {
            arr.push(data[key].number)
     
                debugger;
               
        }
        console.log(arr);            
        return arr;       
      }
    }
   
   
}

// playerNumbers("Charlotte Hornets")

debugger;

function playerStats(playerName){
    let game = gameObject();
    for (let gameKey in game) {
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        let data = teamObj.players;
        for (let key in data) {
            if (key == playerName) {
                debugger;
                console.log(data[key]);
                return data[key];
            }
                
          //debugger;
        }
      }
    }
  
 }
//  playerStats("Brendan Haywood")