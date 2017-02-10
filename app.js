var Agenda = require('agenda');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = 'mongodb://admin:v8twanzo@ds056789.mlab.com:56789/teste';
var agenda = new Agenda({ db: { address: url } });

agenda.define('payschedule', function (job, done) {
    console.log(job);
    console.log(done);
    remove();
});

agenda.on('ready', function () {
    agenda.every('*/5 * * * *', 'payschedule');
    agenda.start();
});


function remove() {
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('test');
        collection.remove({ email: 'luanna@gmail.com' });
        console.log("Connected correctly to server");
        db.close();
    });
}