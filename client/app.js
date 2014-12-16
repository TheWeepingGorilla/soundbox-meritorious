Template.layout.events({
   'click .mute0' : function() {
    var muteState = Session.get('mute0');
    muteState= !muteState;
    Session.set('mute0', muteState);
  }
});

// Session.set('sayHi', true);

Template.layout.helpers({
  'mute0' : function() {
    return Session.get('mute0');
  }
})