// Namespace our entryApp
var app = app || {};

// A group (array) of Entry models
app.EntriesCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.singleEntry

});
