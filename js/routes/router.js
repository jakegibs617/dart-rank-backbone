// Namespace our entryApp
var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"firstDart" : "firstDartMessage",
	"secondDart": "secondDartMessage",
	"thirdDart" : "thirdDartMessage"
},

noCopy: function() {
  $("#copy").html("");
},

firstDartMessage: function() {
  $("#copy").html("message 1");
},

secondDartMessage: function() {
  $("#copy").html("message 2");
},

thirdDartMessage: function() {
  $("#copy").html("message 3");
}

});


