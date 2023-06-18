const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please tell us your email!"],
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide your password!"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      validator: function (el) {
        return el === this.password
      },
      message: "Passwords are not the same. Please enter good password!",
    },
  },
});

userSchema.pre("save", async function (next) {
  //: ONLY IF THE PASSORD IS MODIFIED
  if (!this.isModified("password")) return next();

  //: HASH PASSWORD WITH COST OF 12
  this.password = await bcrypt.hash(this.password, 12);

  //: DELETE PASSWORDCONFIRM FIELD
  this.passwordConfirm = undefined;
  next();
});