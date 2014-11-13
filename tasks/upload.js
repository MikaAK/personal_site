#! /usr/bin/env node

var program = require('commander'),
    AWS     = require('aws-sdk'),
    dotenv  = require('dotenv'),
    fs      = require('fs')

dotenv.load()

AWS.config.update({
  region: 'us-west-2',
  logger: process.stdout
})

var s3 = new AWS.S3()

var S3_UPLOADER = function() {
  this._findMetaData = function(fileName) {
  var contentType       = 'application/octet-stream',
      fileNameLowerCase = fileName.toLowerCase()

    if (fileNameLowerCase.indexOf('.html') >= 0) contentType = 'text/html'
    else if (fileNameLowerCase.indexOf('.css') >= 0) contentType = 'text/css'
    else if (fileNameLowerCase.indexOf('.json') >= 0) contentType = 'application/json'
    else if (fileNameLowerCase.indexOf('.js') >= 0) contentType = 'application/x-javascript'
    else if (fileNameLowerCase.indexOf('.png') >= 0) contentType = 'image/png'
    else if (fileNameLowerCase.indexOf('.jpg') >= 0) contentType = 'image/jpg'

    return contentType
  }

  this._findFileName = function(filePath) {
    return filePath.match(/[^\/]+$/).pop()
  }

  this.uploadFile = function(filePath) {
    var fileStream = fs.readFileSync(filePath),
        fileName   = this._findFileName(filePath),
        metaData   = this._findMetaData(fileName),
        config     = {
          Key: fileName,
          Bucket: process.env.S3_BUCKET,
          ContentType: metaData,
          CacheControl: 'max-age=315360000, no-transform, public',
          Body: fileStream
        }



    s3.putObject(config, function(error, data) {
      if (error) return console.log(error)
      console.log('File was uploaded successfully')      
    })
  }

  this.uploadFolder = function(folderPath) {
    var files = fs.readdirSync(folderPath)

    for (var i in files) {
      this.uploadFile(folderPath + '/' + files[i])
    }
  }
}

Uploader = new S3_UPLOADER()

Uploader.uploadFolder('./build')

program
  .version('0.0.1')
