const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();
const stripe = require("stripe")(process.env.stripe_key);

router.post('/make-payment',authMiddleware,async(req,res)=>{
    try{
        const {token,amount} = req.body;
        console.log(token);
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const charge = await stripe.charges.create({
            amount:amount,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:"Ticket has been booked for a movie"
        })

        const transactionId = charge.id;
        res.send({
            success:true,
            message:"Payment done, Ticket booked",
            data:transactionId
        })

    }catch(err){    
        res.send({
            success:false,
            message:err.message
        })
    }
})



module.exports = router;