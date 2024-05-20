module.exports = (app, gConfig) => {

    /**
     * Saves Player Details
     * @param {*} req 
     * @param {*} res 
     */
    let saveplayer = async (req, res) => {

      let responseJson = {};
      let saveResponse = null;
      let userData = new gConfig.players({});
  
      // Assign values recieved from req-body/
      userData.playerName = req.body.playerName
      userData.teamID = req.body.teamID
      userData.highestScore = req.body.highestScore
      userData.city = req.body.city

      // Saved Player Data
      try {
        saveResponse = await userData.save();
        // emit event to users for team update
        gConfig.io.emit('notification', saveResponse);
      } catch (error) {
        console.log(error)
      }
  
      if (!saveResponse) {
        responseJson.status = 1;
        responseJson.error = "eoor occured";
        res.send(responseJson);
      }
  
      responseJson.message = "Success";
      responseJson.data = saveResponse;
      responseJson.status = 0;
  
      res.send(responseJson);

    };
  
    app.post("/saveplayer", saveplayer);

  };
  