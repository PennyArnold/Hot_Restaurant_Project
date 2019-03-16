module.exports = function(app,reservations){
    // Basic route that sends the user first to the AJAX Page
    //require data
    var reservations=require("./reservedata");
    var waitingList=require("./waitlistdata");
    
    app.get("/", function(req, res) {
        res.send("Home")
    });

    // Basic route that sends the user first to the AJAX Page
    app.get("/api/tables", function(req, res) {
    res.json(reservations);
    });

    // Basic route that sends the user first to the AJAX Page
    app.get("/api/waitlist", function(req, res) {
        res.send("welcome3")
        });
}

