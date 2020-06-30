var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
// var User = mongoose.model('User');

var Schema = new mongoose.Schema({
  name: String,
  priority: {type: Number, default: 0},
  completed: {type: Boolean, default: false},
  date: { type : Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

Schema.methods.toJSONFor = function(){
  return {
    id: this._id,
    name: this.name,
    priority: this.priority,
    completed: this.completed,
    date: this.date,
    // owner: this.owner.toProfileJSONFor(user),
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model('Task', Schema);
