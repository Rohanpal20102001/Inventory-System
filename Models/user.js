const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.generateJWT = () => {
    const token = jwt.sign({
        _id: this._id,
        email: this.email,
    },
    process.env.JWT_SECRET,
    { exiresIn: "7d"}
    );
};

const User = mongoose.model("User", userSchema);
module.exports = User;