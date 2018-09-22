// contents-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const contents = new Schema(
    {
      title: { type: Schema.Types.String, required: true },
      user: { type: Schema.Types.ObjectId, ref: "users", required: true },
      type: { type: Schema.Types.ObjectId, ref: "content-types", required: true },
      state: { type: Schema.Types.String, required: true },
      meta: { type: Schema.Types.Array }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model("contents", contents);
};
