 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 const { deleteUploadedFile } = require("../utils/deleteUploadedFile");

 const articleSchema = new Schema({
   title: {
     type: String,
     required: [true, "please provide the article category"],
     trim: true,
     unique:true
   },
   content: {
     type: String,
     required: [true, "please provide the article content"],
   },
   URL: { type: String },

   tags: [
     {
       type: String,
       required: [true, "please provide the article category"],
       trim: true,
     },
   ],
   cover: {
     type: String,
     required: [true, "please provide the article cover"],
   },

   publish_date: Date,
   cover: String, // image
   publish_by: {
     type: mongoose.Types.ObjectId,
     required: true,
     ref: "User",
   },
   isPublished: {
     type: Boolean,
     default: false,
   },
 });

 articleSchema.pre("findOneAndUpdate", deleteUploadedFile);
 articleSchema.pre("findOneAndDelete", deleteUploadedFile);

 const Article = mongoose.model("Article", articleSchema);

 module.exports = Article;
