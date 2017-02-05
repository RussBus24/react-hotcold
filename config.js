var dbuser = process.env.dbuser;
var dbpass = process.env.dbpass;

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://' + dbuser + ':' + dbpass + '@dds139939.mlab.com:39939/hotcold-guesses' :
                            'mongodb://localhost/guesses-dev');
exports.PORT = 8081;
//exports.PORT = process.env.PORT || 8081;