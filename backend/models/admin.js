const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    user: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    tokens: [{ token: { type: String } }],
  },
  { timestamps: true }
);

adminSchema.statics.findByCredentials = async (user, password) => {
  const admin = await Admin.findOne({ user });
  if (!admin) {
    throw new Error("not found that user");
  }
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new Error("Password is not correct");
  }
  return admin;
};
//hashing password before saving password to database
adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    console.log("pass was hashed");
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
