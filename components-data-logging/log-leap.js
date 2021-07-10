AFRAME.registerComponent('log-leap', {
    // The participant's id number and trial number can be added to the log
    schema: {
        id: {type: 'int'},
        trial: {type: 'int'}
    },
    // We use the initialization function to setup our logging variables
    init: function () {
        this.leapcontroller = document.querySelector('a-scene').systems.leap.controller;
        console.log('~id,trial,time,timedelta');
    },
    // Send leap hand data to the console via logging
    tick: function (time, timeDelta) {
        console.log('~' + this.data.id + ',' + this.data.trial + ',' + time + ',' + timeDelta);
    }
});