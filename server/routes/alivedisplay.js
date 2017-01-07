

exports.setState = function (req, res, next) {

    var jsonfile = require('jsonfile');

    var displayid = req.params.displayid;
     
    var file = concat('/tmp/',displayid,'.json');
    var obj = {name: 'JP'};
     
    jsonfile.writeFile(file, obj, function (err) {
      console.error(err);
    })


    res.statusCode = 200;
    res.send();
};

exports.getState = function (req, res, next) {
    var query = req.query;
    var format = query['format'];

    if (format=="png") {
        res.set('Content-Type', 'image/png');
        res.send("");
    } else {

        var jsonfile = require('jsonfile');

        var displayid = req.params.displayid;
         
        var file = concat('/tmp/',displayid,'.json');
 
        res.set('Content-Type', 'application/json');
        res.send(jsonfile.readFileSync(file));        
    };
}