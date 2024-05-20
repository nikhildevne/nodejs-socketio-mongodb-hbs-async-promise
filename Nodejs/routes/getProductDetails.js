module.exports = (app,gConfig) => {

    let getProductDetails = (req,res) => {

        let obj = {
            name : 'nikhil',
            city : 'basmath',
            number : '9090909090'
        }
        res.send(obj)
    }

    app.get('/getProductDetails',getProductDetails)
}