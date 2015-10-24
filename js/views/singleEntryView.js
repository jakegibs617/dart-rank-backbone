// Namespace our entryApp
var app = app || {};

app.singleEntryView = Backbone.View.extend({

  tagName: "article",
  className: "entryListItem",

  template: _.template( $("#entryElement").html() ),

  render: function() {
    var entryTemplate = this.template(this.model.toJSON());
    this.$el.html(entryTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addBgColor',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});
