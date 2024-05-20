module.exports = (app,gConfig) => {

    /**
     * Gets Teams Details 
     * @param {*} req recieves paramms
     * @param {*} res send back response to request
     */
    let getPlayer = async (req,res) => {
        let responseJson = {};
        let teamsData = null
        try {
            teamsData  = await gConfig.players.find({}).populate("teamID");
        } catch (error) {
            console.log(error)
        }

        if(!teamsData){
            responseJson.status = 1;
            responseJson.error = "eoor occured";
            res.send(responseJson);
        }

        responseJson.message = "Success";
        responseJson.data = teamsData;
        responseJson.status = 0;

        res.send(teamsData);

    }

    app.get('/getPlayer',getPlayer)
}