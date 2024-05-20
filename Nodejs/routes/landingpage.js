module.exports = (app,gConfig) => {

    let landingpage = async (req,res) => {
       res.render('index')
    }

    app.get('/',landingpage)
}