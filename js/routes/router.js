// Namespace our entryApp
var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"firstDart" : "firstDartMessage",
	"secondDart": "secondDartMessage",
	"thirdDart" : "thirdDartMessage",
	"fourthDart" : "fourthDartMessage",
	"fifthDart" : "fourthDartMessage",
	"sixthDart" : "fourthDartMessage"
},

noCopy: function() {
  $("#copy").html("");
},

firstDartMessage: function() {
  $("#copy").html("Gold Medal Winner");
},

secondDartMessage: function() {
  $("#copy").html("Silver Medal Winner");
},

thirdDartMessage: function() {
  $("#copy").html("Bronze Medal Winner");
},

fourthDartMessage: function() {
  $("#copy").html("Thanks For Playing");
}

});


