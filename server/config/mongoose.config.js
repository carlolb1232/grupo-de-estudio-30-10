const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travelsAgency2_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(" Cabros nos conectamos!"))
    .catch((err) => console.log("Ohhhh, something went wrong", err));