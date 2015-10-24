// Janet Pluchinsky, 10
// Eliot Waugh, 1
// Alice Quinn, 27
// Julia Wicker, 7
// Quentin Coldwater, 0
// Janet Pluchinsky, 20
// Julia Wicker, 20
// Jollyby, 42

var firstDart = new app.singleEntry({
  name: "Janet Pluchinsky",
  score: 10,
  link: "firstDart"
});

var secondDart = new app.singleEntry({
  name: "Eliot Waugh",
  score: 1,
  link: "secondDart"
});

var thirdDart = new app.singleEntry({
  name: "Alice Quinn",
  score: 27,
  link: "thirdDart"
});

var fourthDart = new app.singleEntry({
  name: "Julia Wicker",
  score: 7,
  link: "fourthDart"
});

var fifthDart = new app.singleEntry({
  name: "Quentin Coldwater",
  score: 0,
  link: "fifthDart"
});

var sixthDart = new app.singleEntry({
  name: "Janet Pluchinsky",
  score: 20,
  link: "sixthDart"
});

var entryGroup = new app.EntriesCollection([
  firstDart, secondDart, thirdDart, fourthDart, fifthDart, sixthDart
]);

var entryGroupView = new app.allEntriesView({ collection: entryGroup});

$("#allEntries").html(entryGroupView.render().el);

var entryRouter = new app.Router();

Backbone.history.start();
