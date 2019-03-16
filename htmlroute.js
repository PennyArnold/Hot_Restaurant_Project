module.exports = function(app,path){
    //home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./index.html"));
    });


    // make reservation page
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "./makereservations.html"));
    });

     // make reservation page
      app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "./viewtables.html"));
    });

};