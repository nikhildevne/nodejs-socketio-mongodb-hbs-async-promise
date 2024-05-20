module.exports = (app, gConfig) => {

    /**
     * Saves Player Details
     * @param {*} req 
     * @param {*} res 
     */
    let saveuser = async (req, res) => {

      let responseJson = {};
      let saveResponse = null;
      let userData = new gConfig.usermanagement({});
  
      // Assign values recieved from req-body/
      userData.name = req.body.name
      userData.email = req.body.email
      userData.password = req.body.password

      // Saved Player Data
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
  
    app.post("/saveuser", saveuser);

  };
  