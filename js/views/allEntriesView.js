// Namespace our entryApp
var app = app || {};

app.allEntriesView = Backbone.View.extend({

  tagName: "section",

  render: function() {
 	  this.collection.each(this.addEntry, this);
 		return this;
  },

 addEntry: function(entry) {
 		var entryView = new app.singleEntryView ({ model: entry });
 		this.$el.append(entryView.render().el);
 }

});
