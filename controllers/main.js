const jwt = require('jsonwebtoken')
const {BadRequest} = require("../errors")


const login = async (req, res) => {
    const {username, password} = req.body
    //mongo validation
    //Joi
    //Check in the controller
    if(!username || !password){
        throw new BadRequest('Please provide email and password')
    }
    //dummy data just for demo
    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
    
    
      res.status(200).json({ msg: 'user created', token })
    }
    

const dashboard = async (req, res) => {
    
    const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello ${decoded.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
        console.log(decoded)
    
    
}

module.exports ={
    login, dashboard
}