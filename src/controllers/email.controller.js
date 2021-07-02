import { transporter } from '../libs/helper.email';

export const email = async(req, res)=>{
    try {
        const{ correo} = req.body;
        await transporter.sendMail({
            from: '"DAD 👻" <reyna_b@upeu.edu.pe>', // sender address
            to: correo, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}