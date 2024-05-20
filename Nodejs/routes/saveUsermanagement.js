module.exports = (app, gConfig) => {
  let saveusermanagement = async (req, res) => {
    let responseJson = {};
    let userData = new gConfig.products({});

    userData.fullname = "Devanase Dewne";
    userData.fulladdress = "Maganpura Nanded , 431512";

    let saveResponse = await userData.save();

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

  app.post("/saveusermanagement", saveusermanagement);
};
