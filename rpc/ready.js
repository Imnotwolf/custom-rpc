///////////////////////////////////

//DONT SHARE PLS <3

///////////////////////////////////

const rpc = require("discordrpcgenerator");




let NAME = "Youtube"
let DETAILS = "watch the new video"
let STATE = "subscribe"
let URL = "https://www.youtube.com/watch?v=KkKfGfp71t4&ab_channel=NotOm07"
let APPID = "937206962788106240"
let LARGEIMG = "click"
let LARGETEXT = "click the sub button ඞ"
let SMALLIMG = "python"
let SMALLTEXT = "2"



module.exports = async (client) => {
  const small = await rpc.getRpcImage
  (APPID, SMALLIMG);//1°setApplicationId, 2°Name(Key)smallimage
  
  
rpc.getRpcImage
(APPID, LARGEIMG)//1°setApplicationId, 2°Name(Key)largename
.then(large => {
  
  
     let presence = new rpc.Rpc()
               
         .setName(NAME)
         .setDetails(DETAILS)
         .setState(STATE)
        
        
         .setUrl(URL)
         .setType("STREAMING")
         .setApplicationId(APPID)
        
         .setAssetsLargeImage(large.id)
         .setAssetsLargeText(LARGETEXT)
        
         //.setAssetsSmallImage(small.id)
         //.setAssetsSmallText(SMALLTEXT)
        

          
           client.user.setStatus("dnd");
      
     console.log(presence.toDiscord())
        
      
      client.user.setPresence(presence.toDiscord()).catch(console.error);
      
    })
      
console.log("Rpc ready")

}
