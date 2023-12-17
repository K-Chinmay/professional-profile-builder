const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  // details: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     phone: {
  //       type: Number,
  //       required: true,
  //     },
  //     email: {
  //       type: String,
  //       required: true,
  //     },
  //     lastname: {
  //       type: String,
  //       required: true,
  //     },
  //     gender: {
  //       type: String,
  //       required: true,
  //     },
  //     address: {
  //       type: String,
  //       required: true,
  //     },
  //     city: {
  //       type: String,
  //       required: true,
  //     },
  //     pincode: {
  //       type: Number,
  //       required: true,
  //     },
  //     description: {
  //       type: String,
  //       required: true,
  //     },

  //     qualification: {
  //       type: String,
  //     },
  //     yearofgraduation: {
  //       type: Number,
  //       required: true,
  //     },
  //     schoolname: {
  //       type: String,
  //       required: true,
  //     },
  //     ssc: {
  //       type: Number,
  //       required: true,
  //     },

  //     jrcollagename: {
  //       type: String,
  //       required: true,
  //     },
  //     hsc: {
  //       type: Number,
  //       required: true,
  //     },
  //     collagename: {
  //       type: String,
  //       required: true,
  //     },
  //     department: {
  //       type: String,
  //       required: true,
  //     },
  //     yearofstudy: {
  //       type: String,
  //       required: true,
  //     },
  //     currentcgpa: {
  //       type: Number,
  //       required: true,
  //     },
  //     skills: [
  //       {
  //         technical: {
  //           type: String,
  //           required: true,
  //         },
  //         nontechnical: {
  //           type: String,
  //           required: true,
  //         },
  //       },
  //     ],
  //     projects: [
  //       {
  //         projecttitle: {
  //           type: String,
  //         },
  //         projectdescription: {
  //           type: String,
  //         },
  //         projectlink: {
  //           type: String,
  //         },
  //       },
  //     ],

  //     acheivements: [
  //       {
  //         award: {
  //           type: String,
  //         },
  //         certificate: {
  //           type: String,
  //         },
  //       },
  //     ],

  //     links: [
  //       {
  //         linkdin: {
  //           type: String,
  //         },
  //         github: {
  //           type: String,
  //         },
  //       },
  //     ],
  //   },
  // ],

  registrationform: [
    {
      name: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      qualification: {
        type: String,
      },
      yearofgraduation: {
        type: String,
        required: true,
      },
      schoolname: {
        type: String,
        required: true,
      },
      ssc: {
        type: Number,
        required: true,
      },
      jrcollegename: {
        type: String,
        required: true,
      },
      hsc: {
        type: Number,
        required: true,
      },
      collegename: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
      yearofstudy: {
        type: String,
        required: true,
      },
      roll: {
        type: Number,
        required: true,
      },
      div: {
        type: String,
        required: true,
      },
      prn: {
        type: Number,
        required: true,
      },
      currentcgpa: {
        type: Number,
        required: true,
      },
      technicalskills: {
        type: String,
        required: true,
      },
      nontechnicalskills: {
        type: String,
        required: true,
      },
      linkedin: {
        type: String,
        required: true,
      },
      github: {
        type: String,
      },
    },
  ],

  placementform: [{
    placmentstatus: {
      type: String,
    },
    companyname: {
      type: String,
    },
    salary: {
      type: Number,
    },
}],

  projects: [
    {
      title: {
        type: String,
      },
      projectdescription: {
        type: String,
      },
      projectlink: {
        type: String,
      },
    },
  ],

  acheivements: [
    {
      award: {
        type: String,
      },
    },
  ],
});

// hashing
userSchema.pre("save", async function (next) {
  console.log("hii");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// token generation

userSchema.methods.generateAuthToken = async function (token) {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.addDetails = async function (
  name,
  lastname,
  phone,
  gender,
  email,
  image,
  description,
  address,
  city,
  pincode,
  qualification,
  yearofgraduation,
  schoolname,
  ssc,
  jrcollegename,
  hsc,
  collegename,
  department,
  yearofstudy,
  roll,
  div,
  prn,
  currentcgpa,
  technicalskills,
  nontechnicalskills,
  linkedin,
  github
) {
  try {
    this.registrationform = this.registrationform.concat({
      name,
      lastname,
      phone,
      gender,
      email,
      image,
      description,
      address,
      city,
      pincode,
      qualification,
      yearofgraduation,
      schoolname,
      ssc,
      jrcollegename,
      hsc,
      collegename,
      department,
      yearofstudy,
      roll,
      div,
      prn,
      currentcgpa,
      technicalskills,
      nontechnicalskills,
      linkedin,
      github,
    });
    await this.save();
    return this.registrationform;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.addPlacementStatus = async function (
  placmentstatus,
  companyname,
  salary
) {
  try {
    this.placementform = this.placementform.concat({
      placmentstatus,
      companyname,
      salary,
  });
    await this.save();
    return this.placementform;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.addProjects = async function (projects) {
  try {
    this.projects = [...projects];
    // console.log(title,projectdescription,projectlink);
    // this.projects.push({
    //   title,
    //   projectdescription,
    //   projectlink
    // });

    console.log(this.projects);
    await this.save();
    return this.projects;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.addAcheivements = async function (award) {
  try {
    this.acheivements = [...award];
    console.log("hello award");
    console.log(this.acheivements);
    await this.save();
    return this.acheivements;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.getDetails = async function (userSchema) {
  try {
    this.userSchema = [...userSchema];
    console.log("get data");
    console.log(this.userSchema);
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;



