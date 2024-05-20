module.exports = (app,gConfig) => {

    let getUserinfo = async (req,res) => {

        let htmlresp = await gConfig.gconfigTest();

       res.send(htmlresp)
    }

    app.post('/getUserinfo',getUserinfo)
}