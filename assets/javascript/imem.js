 $('.button-collapse').sideNav({
      edge: 'left',
      menuWidth: 410, // Default is 300
      // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {  },
      onClose: function(el) { }, // A function to be called when sideNav is closed
    });
   $('collapsible').collapsible();

 $('.button-collapse1').sideNav({
      edge: 'right', // Choose the horizontal origin
      menuWidth: 410, // Default is 300
      // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {  },
      onClose: function(el) { }, // A function to be called when sideNav is closed
    });
   $('collapsible').collapsible();

   $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 700, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

        // console.log(modal, trigger);
      },
      complete: function() {
        //  alert('Closed');
     } // Callback for Modal close
    }
  );
      