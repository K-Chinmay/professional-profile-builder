const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const companySchema = new mongoose.Schema(
  
    {
      companyname: {
        type: String,
      },
      dateofvisit: {
        type: String,
      },

      companyhr: {
        type: String,
      },
      companyphone: {
        type: String,
      },
      collegecoordinator: {
        type: String,
      },
   
});


// companySchema.pre("save", async function (next) {
//   console.log("hii");

//   next();
// });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
