module.exports = function(app,path){
    // Basic route that sends the user first to the AJAX Page
  
     //require data
    var reservations=require("./reservedata");
    var waitingList=require("./waitlistdata");

    // Basic route that sends the user first to the AJAX Page
    app.get("/api/tables", function(req, res) {
    res.json(reservations);
    });

    // Basic route that sends the user first to the AJAX Page
    app.get("/api/waitlist", function(req, res) {
        res.json(waitingList)
    });


    app.post("/api/reserve", function(req, res) {
        var newReservation = req.body;
        //newReservation.customerName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();
        console.log("newReservation", newReservation);
        if (reservations.length < 5){
            reservations.push(newReservation);
            console.log('YAAAAAYYYYYYY')
        }
        else{
            waitingList.push(newReservation);
            alert("Yay! You are officially booked!");
        }

        res.json(newReservation);
    })

};

