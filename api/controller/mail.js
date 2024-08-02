import nodemailer from "nodemailer";
export const Send = async (req,res)=>{

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'wyatt.schaden@ethereal.email',
            pass: 'Ux9vfUshRFfHePfr18'
        }
    });
   
    let info = await transporter.sendMail({
        from:'"Luxry Hotels"<luxry@gmail.com>',
        to:"captainsteve8851@gmail.com",
        subject:"Gratitude!",
        text:"Hi! Thanks for visiting luxry Hotels. We hope to connect with you in future",
        html:"<b>Hello!</b>"
    });
    console.log("Message",info.messageId);
    res.json(info); 
};