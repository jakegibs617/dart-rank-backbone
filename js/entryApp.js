var firstDart = new app.singleEntry({
  name: "Paul",
  score: 39,
  link: "firstDart"
});

var secondDart = new app.singleEntry({
  name: "Winston",
  score: 29,
  link: "secondDart"
});

var thirdDart = new app.singleEntry({
  name: "Barack",
  score: 19,
  link: "thirdDart"
});

var entryGroup = new app.EntriesCollection([
  firstDart, secondDart, thirdDart
]);

var entryGroupView = new app.allEntriesView({ collection: entryGroup});

$("#allEntries").html(entryGroupView.render().el);

var entryRouter = new app.Router();

Backbone.history.start();
