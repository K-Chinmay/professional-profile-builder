
const jwt = require("jsonwebtoken");
const mongoose =  require("mongoose");;
const express = require("express");
const authenticate = require("../middleware/authenticate");
const adminauth = require("../middleware/adminauth");
const globalauth = require("../middleware/globalauth");
const { sendEmail } = require("../CompanyMail.js");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../models/userSchema");
const Admin = require("../models/adminSchema");
const Company = require("../models/companySchema");
const PlacementData = require("../models/companySchema");
const { response } = require("express");
const bodyParser = require("body-parser");
const Data = require("../models/placementSchema");

const fs = require("fs");
const csv = require("csv-parser");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send(`hello world router`);
});

//  Upload Csv Data Route 
router.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Read the uploaded CSV file and insert data into MongoDB
  const results = [];
  const headers = [];
  fs.createReadStream(req.file.path)
    .pipe(csv()).on('headers', (headerList) => {
      headerList.forEach((header) => {
        headers.push(header);
      });
    })
    .on('data', (data) => results.push(data))
    .on('end', async() => {
      const schemaFields = {};
      headers.forEach((header) => {
        schemaFields[header] = String; // Assuming all columns are strings, you can modify data types as needed
      });

      const dynamicSchema = new mongoose.Schema(schemaFields);
      const DynamicHead = mongoose.model('DynamicHead', dynamicSchema);
      console.log(results);
      // Insert data into MongoDBs
      await DynamicHead.insertMany(results)
        .then(() => {
          // Remove the temporary file
          fs.unlinkSync(req.file.path);
          res.json({ success: 'Data uploaded successfully' });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: 'Error inserting data' });
        });
    });
});




router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "please fill details" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    const user = new User({ name, email, password });
    // hashing

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "stored succesfully" });
    } else {
      res.status(500).json({ error: "failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/login", async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please wite the required fields" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "user logged in successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/adminregister", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    return res.status(422).json({ error: "please fill details" });
  }

  try {
    const adminExist = await Admin.findOne({ email: email });

    if (adminExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    const admin = new Admin({ name, email, password });
    // hashing

    const adminRegister = await admin.save();

    if (adminRegister) {
      res.status(201).json({ message: "stored succesfully" });
    } else {
      res.status(500).json({ error: "failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/adminlogin", async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please wite the required fields" });
    }
    const adminLogin = await Admin.findOne({ email: email });
    console.log(adminLogin);

    if (adminLogin) {
      const isMatch = await bcrypt.compare(password, adminLogin.password);
      token = await adminLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "user logged in successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// router.post("/registration", authenticate, async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       lastname,
//       gender,
//       address,
//       city,
//       phone,
//       pincode,
//       description,
//       schoolname,
//       ssc,
//       jrcollagename,
//       hsc,
//       collagename,
//       currentcgpa,
//       skills,
//       projects,
//       acheivements,
//       links,
//       department,
//       yearofstudy,
//       qualification,
//       yearofgraduation,
//     } = req.body;

//     if (
//       !name ||
//       !email ||
//       !phone ||
//       !lastname ||
//       !gender ||
//       !address ||
//       !city ||
//       !pincode ||
//       !collagename ||
//       !skills ||
//       !department ||
//       !yearofstudy ||
//       !qualification ||
//       !yearofgraduation
//     ) {
//       return res.status(422).json({ error: "please fill the details" });
//     }

//     const userRegistration = await User.findOne({ _id: req.userId });
//     if (userRegistration) {
//       const userDetails = await userRegistration.addDetails(
//         name,
//         email,
//         lastname,
//         gender,
//         address,
//         city,
//         phone,
//         pincode,
//         description,
//         schoolname,
//         ssc,
//         jrcollagename,
//         hsc,
//         collagename,
//         currentcgpa,
//         skills,
//         projects,
//         acheivements,
//         links,
//         department,
//         yearofstudy,
//         qualification,
//         yearofgraduation
//       );
//       await userRegistration.save();
//       response.status(201).json({ message: "user details saved succesfully " });
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(req.body);
//   res.json({ message: req.body });
// });

router.post("/registration", authenticate, async (req, res) => {
  try {
    const {
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
    } = req.body;
    const { projects } = req.body;
    const { acheivements } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !lastname ||
      !gender ||
      !address ||
      !city ||
      !pincode ||
      !collegename ||
      !department ||
      !yearofstudy ||
      !qualification ||
      !yearofgraduation
    ) {
      return res.status(422).json({ error: "please fill the details" });
    }

    const userRegistration = await User.findOne({ _id: req.userId });
    if (userRegistration) {
      const userDetails = await userRegistration.addDetails(
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
      );

      console.log("Registration");
      // console.log(await userRegistration.addProjects("","",""));
      const userProject = await userRegistration.addProjects(projects);
      const userAchievements = await userRegistration.addAcheivements(
        acheivements
      );
      await userRegistration.save();
      res.status(201).json({ message: "user details saved succesfully " });
    }
  } catch (err) {
    console.log(err);
  }
  console.log(req.body);
  res.json({ message: req.body });
});

router.post("/update", authenticate, async (req, res) => {
  try {
    const {
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
    } = req.body;
    const { projects } = req.body;
    const { acheivements } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !lastname ||
      !gender ||
      !address ||
      !city ||
      !pincode ||
      !collegename ||
      !department ||
      !yearofstudy ||
      !qualification ||
      !yearofgraduation
    ) {
      return res.status(422).json({ error: "please fill the details" });
    }

    const userRegistration = await User.findOne({ _id: req.userId });
    if (userRegistration) {
      const userDetails = await userRegistration.addDetails(
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
      );

      console.log("Registration");
      // console.log(await userRegistration.addProjects("","",""));
      const userProject = await userRegistration.addProjects(projects);
      const userAchievements = await userRegistration.addAcheivements(
        acheivements
      );
      await userRegistration.save();
      res.status(201).json({ message: "user details saved succesfully " });
    }
  } catch (err) {
    console.log(err);
  }
  console.log(req.body);
  res.json({ message: req.body });
});
// about us page
router.get("/about", globalauth, (req, res) => {
  console.log("hello about");
  res.send(req.rootUser);
  // res.send(req.rootUser);
});

// get user data for contact us and home  page
router.get("/getdata", authenticate, (req, res) => {
  console.log("hello getdata");
  console.log(req.rootUser);

  res.send(req.rootUser);
});
router.get("/studenthome", authenticate, (req, res) => {
  console.log("hello stud home");
  res.send(req.rootUser);
});

router.get("/resume", globalauth, (req, res) => {
  console.log("hello Resume");
  res.send(req.rootUser);
});
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "Please enter the data " });
    }

    const userContact = await User.findOne({ _id: req.userId });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user contact succesfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/place", authenticate, async (req, res) => {
  try {
    const { placmentstatus, companyname, salary } = req.body;
    if (!placmentstatus) {
      return res.status(422).json({ error: "please fill details" });
    }
    const userPlacementStatus = await User.findOne({ _id: req.userId });
    if (userPlacementStatus) {
      const placement = await userPlacementStatus.addPlacementStatus(
        placmentstatus,
        companyname,
        salary
      );
      const form = await userPlacementStatus.save();
      if (form) {
        res.status(201).json({ message: "stored succesfully" });
      } else {
        res.status(500).json({ error: "failed to store" });
      }
    }
  } catch (err) {
    console.log(err);
  }

  console.log(req.body);
});

router.get("/placementpercents", (req, res) => {
  const placeData = User.find({
    "placementform.placed": "placed",
  });
  const place = placeData.length();
  const per = (place / 250) * 100;
  res.send(per);
});
router.get("/logout", async (req, res) => {
  console.log("Hello my logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("UserLogout");
});

router.get("/getadmindata", adminauth, (req, res) => {
  console.log("hello getAdminData");
  console.log(req.rootUser);

  res.send(req.rootUser);
});
router.get("/adminhome", adminauth, (req, res) => {
  console.log("hello admin home");
  res.send(req.rootUser);
});

router.get("/adminlogout", async (req, res) => {
  console.log("Hello my admin logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("AdminLogout");
});

router.get("/getadmindata1", async (req, res) => {
  const userData = await User.find({});
  res.send(userData);
});

router.get(`/getresumedata/:requestId`, async (req, res) => {
  const requestId = req.params.requestId;

  const user = await User.findOne({ _id: requestId });

  if (user) {
    res.send(user);
  } else {
    console.log("Not Found");
  }
});

router.get("/getSoft", async (req, res) => {
  const userData = await User.find({
    $or: [
      { "registrationform.department": "Computer Engineering" },
      { "registrationform.department": "Information Technology" },
      { "registrationform.department": "Aids" },
    ],
  });
  const Total = await User.find({}).count();
  const percentData = await User.find({
    $or: [
      { "registrationform.department": "Computer Engineering" },
      { "registrationform.department": "Information Technology" },
      { "registrationform.department": "Aids" },
    ],
  }).count();

  const softPercent = ((percentData / Total) * 100).toFixed(2);
  console.log(softPercent);

  // res.send({softPercent});
  res.send({ userData, softPercent });
  console.log(Total);
  console.log(percentData);
});

router.get("/getCore", async (req, res) => {
  const userData = await User.find({
    $or: [
      { "registrationform.department": "Mechanical Engineering" },
      { "registrationform.department": "Electrical Engineering" },
      { "registrationform.department": "Electronics Engineering" },
    ],
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    $or: [
      { "registrationform.department": "Mechanical Engineering" },
      { "registrationform.department": "Electrical Engineering" },
      { "registrationform.department": "Electronics Engineering" },
    ],
  }).count();
  const corePercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, corePercent });
  console.log(userData);
});

router.get("/getCgpa9", async (req, res) => {
  const userData = await User.find({
    "registrationform.currentcgpa": { $gte: 9 },
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.currentcgpa": { $gte: 9 },
  }).count();
  const cgpa9Percent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, cgpa9Percent });
});

router.get("/getCgpa8", async (req, res) => {
  const userData = await User.find({
    "registrationform.currentcgpa": { $gte: 8 },
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.currentcgpa": { $gte: 8 },
  }).count();
  const cgpa8Percent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, cgpa8Percent });
  console.log(userData);
});
router.get("/getCgpa7", async (req, res) => {
  const userData = await User.find({
    "registrationform.currentcgpa": { $gte: 7 },
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.currentcgpa": { $gte: 7 },
  }).count();
  const cgpa7Percent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, cgpa7Percent });
  console.log(userData);
});

router.get("/getdivA", async (req, res) => {
  const userData = await User.find({ "registrationform.div": "A" });
  const Total = await User.find({}).count();

  const percentData = await User.find({ "registrationform.div": "A" }).count();
  const divAPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, divAPercent });
  console.log(userData);
});

router.get("/getdivB", async (req, res) => {
  const userData = await User.find({ "registrationform.div": "B" });
  const Total = await User.find({}).count();

  const percentData = await User.find({ "registrationform.div": "B" }).count();
  const divBPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, divBPercent });
  console.log(userData);
});

router.get("/getcompany1", async (req, res) => {
  const userData = await User.find({ "registrationform.companyname": "TCS" });

  res.send(userData);
  console.log(userData);
});
router.get("/getcomp", async (req, res) => {
  const userData = await User.find({
    "registrationform.department": "Computer Engineering",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.department": "Computer Engineering",
  }).count();
  const getCompPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getCompPercent });
  console.log(userData);
});

router.get("/getcivil", async (req, res) => {
  const userData = await User.find({
    "registrationform.department": "Civil Engineering",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.department": "Civil Engineering",
  }).count();
  const getCivilPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getCivilPercent });
  console.log(userData);
});
router.get("/getelectrical", async (req, res) => {
  const userData = await User.find({
    "registrationform.department": "Electrical Engineering",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.department": "Electrical Engineering",
  }).count();
  const getElectricalPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getElectricalPercent });
  console.log(userData);
});
router.get("/getmechanical", async (req, res) => {
  const userData = await User.find({
    "registrationform.department": "Mechanical Engineering",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.department": "Mechanical Engineering",
  }).count();
  const getMechanicalPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getMechanicalPercent });
  console.log(userData);
});
router.get("/getelectronics", async (req, res) => {
  const userData = await User.find({
    "registrationform.department": "Electronics Engineering",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.department": "Electronics Engineering",
  }).count();
  const getElectronicsPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getElectronicsPercent });
  console.log(userData);
});
router.get("/getit", async (req, res) => {
  const userData = await User.find({
    "registrationform.department": "Information Technology",
  });

  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.department": "Information Technology",
  }).count();
  const getItPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getItPercent });
  console.log(userData);
});
router.get("/getplaced", async (req, res) => {
  const userData = await User.find({
    "registrationform.placmentstatus": "Placed",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.placmentstatus": "Placed",
  }).count();
  const getPlacedPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getPlacedPercent });
  console.log(userData);
});
router.get("/getunplaced", async (req, res) => {
  const userData = await User.find({
    "registrationform.placmentstatus": "Unplaced",
  });
  const Total = await User.find({}).count();

  const percentData = await User.find({
    "registrationform.placmentstatus": "Unplaced",
  }).count();
  const getUnPlacedPercent = ((percentData / Total) * 100).toFixed(2);
  res.send({ userData, getUnPlacedPercent });
  console.log(userData);
});

router.post("/sendmail", async (req, res) => {
  console.log(req.body);
  if (req.body.placmentstatus == "Placed") {
    sendEmail(
      req.body.email,
      req.body.name,
      req.body.placmentstatus,
      req.body.companyname,
      req.body.salary,
      "Hello"
    );
    res.status(201).json({ message: "user mail sent succesfully" });
  }
});

router.post("/company", async (req, res) => {
  const {
    companyname,
    dateofvisit,
    companyhr,
    companyphone,
    collegecoordinator,
  } = req.body;

  if (!companyname || !dateofvisit || !collegecoordinator) {
    return res.status(422).json({ error: "please fill the details" });
  }
  try {
    const userCompany = new Company({
      companyname,
      dateofvisit,
      companyhr,
      companyphone,
      collegecoordinator,
    });
    const CompanyDetails = await userCompany.save();

    console.log("Company Details");
    if (CompanyDetails) {
      res.status(201).json({ message: "Company details saved succesfully " });
    } else {
      res.status(500).json({ error: "Failed to store " });
    }
  } catch (err) {
    console.log(err);
  }
  console.log(req.body);
  res.json({ message: req.body });
});

router.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find({});
    res.send(companies);
    console.log(companies);
  } catch (err) {
    console.log(err);
  }
});
router.post("/companymail", async (req, res) => {
  try {
    // const CompanyMail = await User.aggregate([{$replaceRoot:{newRoot:"$email"}}])
    const CompanyMail = (await User.find({}, { email: 1, _id: 0 })).map(
      function (element) {
        return element.email;
      }
    );

    sendEmail(CompanyMail, "Hello");
    console.log(CompanyMail);
    res.status(201).json({ message: "user mail sent succesfully" });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
