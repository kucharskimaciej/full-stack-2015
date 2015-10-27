Template.app.onCreated(function() {
	Meteor.subscribe("userProfiles");
	Meteor.subscribe("interests");
});

Template.app.helpers({
	users: function() {
		return Meteor.users.find();
	}
});

Template.login.events({
	"click [action=signup]" : function() {
		var permissions = {
		    requestPermissions: "profile",
		    include_granted_scopes: true,
		    loginStyle: 'popup' //won't work on mobile
		};

		Meteor.loginWithGoogle(permissions,function (err) {
			if (err) console.log('Login: '+err.message);
			else {
  				console.log('Google authorised');
	    	}
		});
	},
	"click [action=signout]" : function(e) {
		e.preventDefault();
		Meteor.logout();
	}
});

Template.editInterests.helpers({
	interest: function() {
		return Interests.findOne();
	}
});