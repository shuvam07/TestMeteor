import { Meteor } from 'meteor/meteor';
import { Resolutions } from'../imports/resolutions.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	addResolution: function(title){
		Resolutions.insert({title:title,createdAt: new Date()});
	},
	deleteResolution: function(id){
		Resolutions.remove(id);
	},
	updateResolution: function(id,checked){
		Resolutions.update(id,{$set: {checked: checked}});
	}
});

Meteor.publish("resolutions",function(){
	return Resolutions.find();
});
