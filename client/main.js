import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Resolutions } from '../imports/resolutions.js'; 

import './main.html';

Meteor.subscribe("resolutions");

Template.body.helpers({
   resolutions: function(){
   	if(Session.get('hideFinished')){
   		return Resolutions.find({checked:{$ne: true}});
   	}
   	else{
   		return Resolutions.find();
   	}
   },
   hideFinished: function(){
   	 return Session.get('hideFinished');
   }
});

Template.body.events({
	'submit .new-resolution': function(event){
		var title=event.target.title.value;
		Meteor.call("addResolution",title);
		event.target.title.value="";
		return false;
	},
	'change .hide-finished':function(event){
		Session.set('hideFinished',event.target.checked);
	}
});

Template.resolution.events({
	'click .delete':function(){
		Meteor.call("deleteResolution",this._id,!this.checked);
	},
	'click .toggle-checked': function(){
		Meteor.call("updateResolution",this._id,!this.checked);
	}
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});




