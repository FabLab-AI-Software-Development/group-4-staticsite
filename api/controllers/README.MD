8.8.24
tavo--had difficulty finding .env file to get open_ai_key
    put it in same folder as controller or make absolute reference in root folder
    CODE:
    //get env variable ***very important; put at very beginning
    const {config} = require('dotenv');
    config();
    
    //this works too! and don't have to make new .env file
    require('dotenv').config({ path: '../../.env' });
# 9.16.24  -- Ensure .env variable correct
    * run embedding_generator.js--> 
        * $ cd api/controller
        * $ node embedding_generator.js
        * should see progress in console.log

    