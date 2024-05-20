module.exports = (app, gConfig) => {

  /**
   * Saves Team Details
   * @param {*} req 
   * @param {*} res 
   */
  let saveteams = async (req, res) => {

    let responseJson = {};
    let saveResponse = null;
    let userData = new gConfig.teams({});

    userData.teamName = req.body.teamName
    userData.teamCityName = req.body.teamCityName
    userData.teamOwnerName = req.body.teamOwnerName

    try {
      saveResponse = await userData.save();
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

  app.post("/saveteams", saveteams);

};
