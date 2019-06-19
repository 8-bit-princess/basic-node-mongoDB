const converationModel = require('./models.js');

module.exports.saveConversation = function(req, res) {
  const convData = req.body;
  const params = req.params;
  let convArray = [];
  for(let index=0; index < convData.user_convs.length ; index++){
    convArray.push(JSON.parse(convData.user_convs[index]));
  }
  convData.user_convs = convArray;
  convData.convid = params["convid"];
  const now = new Date();
  convData.updated_at = new Date();
  
  converationModel.findOne({ docid: req.params["docid"] },
    function(err, conv){
    if(err) res.send('Something went wrong!');
    if(!conv){
      convData.created_at = now;
    } 
    converationModel.updateOne({ docid: req.params["docid"] }, 
    convData,
    { upsert: true })
      .then(item => {
      res.status(200).send("Conversation Added/Updates");
    }).catch(err =>{
      console.log(err);
      res.status(500).send("Something went wrong!");
    })
  
})
                           
}