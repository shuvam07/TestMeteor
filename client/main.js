import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Resolutions } from '../imports/resolutions.js'; 

import './main.html';

Template.body.helpers({
   resolutions: function(){
   	// console.log(Resolutions);
   	return Resolutions.find({});
   	// console.log(resss);
   	// return resss;
   }
});

Template.body.events({
	'submit .new-resolution': function(event){
		var title=event.target.title.value;
		Resolutions.insert({title:title,createdAt: new Date()});
		event.target.title.value="";
		return false;
	}
});

Template.resolution.events({
	'click .delete':function(){
		Resolutions.remove(this._id);
	}
});


