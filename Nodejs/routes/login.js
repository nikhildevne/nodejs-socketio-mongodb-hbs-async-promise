module.exports = (app,gConfig) => {

    let login = async (req,res) => {

        let username = 'nikhil@gmail.com'
        let password = 'Nikhil@123'
        let userData = req.body
        if(req.body.username == username && req.body.password == password){
            let token = gConfig.jwt.sign({userData},gConfig.jwtKey,{expiresIn:'2h'})
            if(!token){
                res.send('Something went wrong')
            }
            res.send({token:token})
        }
    }

    app.post('/login',login)
}