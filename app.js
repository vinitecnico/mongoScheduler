var Agenda = require('agenda');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = 'mongodb://admin:v8twanzo@ds056789.mlab.com:56789/teste';
var agenda = new Agenda({ db: { address: url } });

MongoClient.connect(url, function (err, db) {
    var collection = db.collection('test');

    agenda.define('payschedule', function (job, done) {
        var data = job.attrs.data;
        collection.remove({ 'email': "luanna@gmail.com" }, done);
    });

    agenda.on('ready', function () {
        //   agenda.every('3 minutes', 'payschedule'); 
        // Alternatively, you could also do: 
        agenda.every('*/3 * * * *', 'payschedule');

        agenda.start();
    });

    console.log("Connected correctly to server");
    //db.close();
});







