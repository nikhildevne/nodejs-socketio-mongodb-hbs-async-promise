module.exports = (app,gConfig) => {

    let responseJson = {};
    /**
     * Gets Teams Details 
     * @param {*} req recieves paramms
     * @param {*} res send back response to request
     */
    let getTeams = async (req,res) => {

        let teamsData = await gConfig.teams.find({});

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

    app.get('/getTeams',getTeams)
}