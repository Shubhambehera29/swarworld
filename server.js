const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Prebuilt users
let users = { "shubhambehera29@gmail.com": "1234" };  // normal users
let otpStore = {};  // { email: otp }

// Gmail transporter (use your Gmail & App Password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shubhambehera29@gmail.com',        // your Gmail
    pass: 'rnfvtedtqhgsqwde'                 // generated app password, not regular Gmail password
  }
});

// Generate 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random()*900000);
}

// Signup OTP
app.post('/send-otp', (req,res)=>{
  const { email } = req.body;
  if(users[email]) return res.status(400).send({success:false, message:"User already exists, please login."});

  const otp = generateOTP();
  otpStore[email] = otp;

  transporter.sendMail({
    from: '"SwarWorld" <yourgmail@gmail.com>',
    to: email,
    subject: 'SwarWorld OTP Verification',
    text: `Your OTP is: ${otp}`
  }, (err, info)=>{
    if(err){
      console.log('Error sending OTP:', err);
      return res.status(500).send({success:false, message:err.toString()});
    }
    console.log('OTP sent:', otp, 'to', email);
    res.send({success:true});
  });
});

// Verify OTP & create user
app.post('/verify-otp', (req,res)=>{
  const { email, otp, pass } = req.body;
  if(otpStore[email] && parseInt(otp) === otpStore[email]){
    users[email] = pass;
    delete otpStore[email];
    res.send({verified:true});
  } else res.send({verified:false});
});

// Login
app.post('/login', (req,res)=>{
  const { email, pass } = req.body;

  // Admin login
  if(email === "admin@gmail.com" && pass === "1234"){
    return res.send({success:true, isAdmin:true});
  }

  // Normal users
  if(users[email]){
    if(users[email] === pass) res.send({success:true, isAdmin:false});
    else res.send({success:false, message:"Incorrect password"});
  } else {
    res.send({success:false, message:"No such user, please signup"});
  }
});

// ✅ Correct app.listen for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
