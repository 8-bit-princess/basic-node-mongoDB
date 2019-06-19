const mongoose = require('./mongodb-util');

var listSchema = new mongoose.Schema({
  sn: Number,
  input_type: String,
  res_vals: [String],
  res: String,
  user_device:String,
  varid: String,
  scope: String,
  gid: Number,
  gvt: Number,
  grt: Number
});
var nameSchema = new mongoose.Schema({
  page_visit: String,
  ugid: String,
  created_at:{type: Date, default: Date.now},
  updated_at:{type: Date, default: Date.now},
  page_visit_url:String,
  page_visit_referrer:String,
  account_id:String,
  user_ip:String,
  convid:String,
  tempdocid:String,
  docid: String,
  partially_filled:String,
  fully_filled:String,
  user_convs:[listSchema],
});

var Conversation = mongoose.model("Bot-Conversation", nameSchema);

module.exports = Conversation;
