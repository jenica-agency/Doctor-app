const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    tokens: [{ token: { type: String } }],
  },
  { timestamps: true }
);

// adminSchema.static.findByCredentials = async (email, password) => {
//   const admin = await Admin.findOne({ email });
// };

// adminSchema.statics.findByCredentials = async (email, password) => {
//   const admin = await Admin.findOne({ email });
// };
//hashing password before saving password to database
adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    console.log("pass was hashed");
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

module.exports = mongoose.model("admin", adminSchema);
