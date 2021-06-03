const fs = require('fs')
const request = require('request');

const command = process.argv.slice(2);
const requestedResource = command[0];
const localFilePath = command[1];


request(requestedResource, (err, status, data) => {


    fs.writeFile(localFilePath, data, (err) => { //fs.writeFile( file, data, callback )


        fs.stat(localFilePath, (err, stats) => { //fs.stat( path, options, callback )


            console.log(`stats:(size:${stats.size} blocksize:${stats.blksize}) to ${localFilePath}`);

          } )

        })

      })
     

