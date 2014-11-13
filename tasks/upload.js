#! /usr/bin/env node

var program = require('commander'),
    s3      = require('s3'),
    dotenv  = require('dotenv')

dotenv.load()

var s3Client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
  }
})

program
  .version('0.0.1')
