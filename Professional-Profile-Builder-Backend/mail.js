const nodemailer = require('nodemailer')
const path = require('path')
var hbs = require('nodemailer-express-handlebars');

const getemaildata = (to,name,placementstatus,companyname,salary,template) =>{
    let data = null;

    
    switch(template){
        case "Hello":
            data={
                from:"mahaleyash0518@gmail.com",
                to,
                subject:`Hello ${name}`,
                template:'email',
                context:{
                    title:"Congratulations",
                    text:"You are placed in TCS"
                }
            }
            break;
        default:
            data;
    }
    return data

}


const sendEmail = (to,name,placementstatus,companyname,salary,type)=>{
    const smtpTransport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"mahaleyash0518@gmail.com",
            pass:"qwgfdunttwxhcuaw"
        }
    })

    const handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: path.resolve('./views'),
          defaultLayout: false,
        },
        viewPath: path.resolve('./views'),
        extName: ".handlebars",
      }
      
      smtpTransport.use('compile', hbs(handlebarOptions));

    const mail = getemaildata(to,name,placementstatus,companyname,salary,type)

    smtpTransport.sendMail(mail,function(error,res){
        if(error)
        {
            console.log(error);
        } else {
            console.log("Email sent Successfully")
        }
        smtpTransport.close();
    })


} 

module.exports = {sendEmail}
   
