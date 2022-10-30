const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/travelsAgency2_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(" Cabros nos conectamos!"))
    .catch((err) => console.log("Ohhhh, something went wrong", err));