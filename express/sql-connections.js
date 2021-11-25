const {MongoClient} = require('mongodb');

/**
 * Connection to mongo database
 */

const uri = "mongodb://localhost"

const client = new MongoClient(uri);

/**
 * Utility function used to return what datbase is wanted
 * 
 * @param {int} data short for database defines which datbase should be selected
 * @returns a connection to the datbase that is requested
 */

module.exports = {insert:  async function connection(descion, us){
    
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        // create datbase varrible before assighned to null
        var database = null;
        var collect = null;

        /**
         * Switch statment for connecting to all the diffrent datbases
         */
        switch(descion){

            // Case one check if the datbase allready has user name. If not pass in a new password
            case 0:
                database = await client.db("User");
                // obtains the correct collection
                collect = await database.collection("user_info");

                console.log(us.user);
                // insert
                if(0 == await collect.count({"user": us.user})){
                    await collect.insertOne({"user": us.user, "password": us.pas});
                    console.log("Inserted one user");
                }else{
                    console.log("User allready in datbase")
                }
                
        }
        
    // catch datbase erros
    } catch (e) {
        console.error(e);

    // clsoe connection if no connection can be made
    } finally {
        await client.close();
    }
}

}


