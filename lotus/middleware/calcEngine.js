var request = require('request');
var fs = require("fs");
var path = require("path");
class calcEngine {
  constructor(config) {
    this.basePath = '../dataStore/';
    this.config = config;
  }

  currentTime(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return [day, month , year ,hour ,minutes , seconds];
  }
}
module.exports = calcEngine;
