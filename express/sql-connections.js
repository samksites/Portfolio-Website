const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
/**
 * Connection to mongo database
 */

const config = require('./databaseLink.json')
const uri = config.dbLink;



/**
 * Utility function used to return what datbase is wanted
 * 
 * @param {int} descion indicates which case statment should excute
 * @param {JSON} userData data passed in about the users user name and password
 * @returns {int} indicates what happend in the process. -1: Failure    0: correct excution    1: duplicate username or username not found   2: password not correct
 */

async function connection(descion, userData){

    var returnInfo = -1;

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        // create datbase varrible before assighned to null
        var database = null;
        var collect = null;

        database = await client.db("User");
        // obtains the correct collection
        collect = await database.collection("user_info");

        /**
         * Switch statment for connecting to all the diffrent datbases
         */
        switch(descion){

            // Case one check if the datbase allready has user name. If not pass in a new password
            case 0:

                // if count is zero this indicates this username has not been added to the 
                // datbase before.
                if(0 == await collect.count({"user": userData.user})){

                    // creates a salt to add to the front of a password to make dycription harder
                    const salty = await bcrypt.genSalt();
                    // hashes the password

                    console.log(salty);
                    console.log(userData.password);
                    const hashedPassword = await bcrypt.hash(userData.password,salty);

                    // inserts the new username and hased password into the datbase
                    await collect.insertOne({"user": userData.user, "password": hashedPassword});

                    // excution compleated no error
                    returnInfo = 'addedUser';

                }else{
                    
                    // excution compleated user found in datbase
                    returnInfo = 'allReadyIn';
                }
            // This case is when the user is logging into their account
            case 1:
                // accesses the users username 
                var query = {"user": userData.user};
                // mongo db projection
                var projection = {"user":1};
                // returns array of usernames that match the sent user name
                var values = await collect.find(query,projection).toArray();
                
                // checks to see if username is allready in the datbase
                if( values.length != 0){
                    // compares password sent to that in datbase
                    if(await bcrypt.compare(userData.password,values[0].password)){
                        // username and password matched
                        returnInfo = 'found';
                    }else{
                        // password does match that in the datbase
                        returnInfo = 'passNotFound';
                    }
                    
                }else{
                    // username not found
                    returnInfo = -1;
                } 
                
        }
        
    // catch datbase erros
    } catch (e) {
        // log the erro that occured  ######### need to output this to a file
        console.error(e);

    // clsoe connection if no connection can be made
    } finally {
        await client.close();
    }
    return returnInfo;
}



exports.connection = connection;
