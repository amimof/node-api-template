var log = require('./log');
var Promise = require('bluebird');
var <%= model_namec %> = require('../models/<%= model_namel %>');

exports.get = function(id) {
  return new Promise(function(resolve, reject){
    <%= model_namec %>.findById(id).then(function(ins) {
  		resolve(ins);
  	}, function(err) {
  		reject(err);
  	});
  })
};

exports.getAll = function() {
  return new Promise(function(resolve, reject) {
    <%= model_namec %>.find({}).then(function(ins) {
      resolve(ins);
    }, function(err) {
      reject(err);
    });
  });
};

exports.create = function(obj) {
  return new Promise(function(resolve, reject){
  	<%= model_namec %>.create(obj).then(function(ins) {
  		resolve(ins);
  	}, function(err) {
  		reject(err);
  	});
  });
};

exports.delete  = function(id) {
  return new Promise(function(resolve, reject){
    <%= model_namec %>.findById(id).then(function(ins) {
  		return ins.remove();
  	}).then(function(result) {
  		resolve(result);
  	}, function(err) {
  		reject(err);
  	});
  });
};

exports.update = function(id, obj) {
  return new Promise(function(resolve, reject){
    <%= model_namec %>.findOneAndUpdate({ _id: id }, obj).then(function(ins) {
  		resolve(ins);
  	}, function(err) {
  		reject(err);
  	});
  });
};

exports.query = function(query) {
  return new Promise(function(resolve, reject) {
    <%= model_namec %>.findOne(query).then(function(ins) {
      resolve(ins);
    }, function(err) {
      reject(err);
    });
  });
};

exports.queryAll = function(query) {
  return new Promise(function(resolve, reject) {
    <%= model_namec %>.find(query).then(function(ins) {
      resolve(ins);
    }, function(err) {
      reject(err);
    });
  });
};
