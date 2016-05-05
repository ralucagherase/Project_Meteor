Messages = new Mongo.Collection("Messages", {});


Meteor.methods({
  addMessage(text) {
    let message = {
      text: text,
      time: new Date()
    };
    Messages.insert(message);
  }
});


if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<MessageList />, document.getElementById("render-target"));
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
}
