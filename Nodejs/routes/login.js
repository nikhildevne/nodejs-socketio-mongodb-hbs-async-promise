module.exports = (app,gConfig) => {

    let login = async (req,res) => {
        let responseJson = {}
        let condition = {}
        condition.email = req.body.email;
        condition.password = req.body.password;
        let userInfo = await gConfig.usermanagement.findOne(condition);
        let token = await generateToken(userInfo)
        if(!userInfo){
            responseJson.status = 1;
            responseJson.error = "eoor occured";
            res.send(responseJson);
        }

        responseJson.message = "Success";
        responseJson.data = userInfo;
        responseJson.token = token;
        responseJson.status = 0;

        res.send(responseJson);
        
    }

    app.post('/login',login);

    function generateToken(userinfo){
        return new Promise((resolve,reject)=>{
            let userData = {
                email : userinfo.email,
                password : userinfo.password
            }
            let token = gConfig.jwt.sign({userData},gConfig.jwtKey,{expiresIn:'2h'});
            resolve(token);
        })
    }
}