AFRAME.registerComponent('log-leap', {
    // The participant's id number and trial number can be added to the log
    schema: {
        id: {type: 'int'},
        trial: {type: 'int'}
    },
    // We use the initialization function to setup our logging variables
    init: function () {
        this.leapcontroller = document.querySelector('a-scene').systems.leap.controller;
        var header = '~';
        header += 'id,';
        header += 'trial,';
        header += 'time,';
        header += 'delta,';
        header += 'left-x,';
        header += 'left-y,';
        header += 'left-z,';
        header += 'left-pitch,';
        header += 'left-roll,';
        header += 'left-yaw,';
        header += 'left-direction-x,';
        header += 'left-direction-y,';
        header += 'left-direction-z,';
        header += 'left-speed-x,';
        header += 'left-speed-y,';
        header += 'left-speed-z,';
        header += 'left-grab,';
        header += 'right-x,';
        header += 'right-y,';
        header += 'right-z,';
        header += 'right-pitch,';
        header += 'right-roll,';
        header += 'right-yaw,';
        header += 'right-direction-x,';
        header += 'right-direction-y,';
        header += 'right-direction-z,';
        header += 'right-speed-x,';
        header += 'right-speed-y,';
        header += 'right-speed-z,';
        header += 'right-grab';
        console.log(header);
    },
    // Send leap hand data to the console via logging
    tick: function (time, timeDelta) {
        var lefthand = '0,0,0,0,0,0,0,0,0,0,0,0,0';
        var righthand = '0,0,0,0,0,0,0,0,0,0,0,0,0';
        var hands = this.leapcontroller.lastFrame.hands;
        for (let i = 0; i < hands.length; i++) {
            if (hands[i].type === 'left') {
                lefthand = hands[i].palmPosition[0] + ',';
                lefthand += hands[i].palmPosition[1] + ',';
                lefthand += hands[i].palmPosition[2] + ',';
                lefthand += hands[i].pitch() + ',';
                lefthand += hands[i].roll() + ',';
                lefthand += hands[i].yaw() + ',';
                lefthand += hands[i].direction[0] + ',';
                lefthand += hands[i].direction[1] + ',';
                lefthand += hands[i].direction[2] + ',';
                lefthand += hands[i].palmVelocity[0] + ',';
                lefthand += hands[i].palmVelocity[1] + ',';
                lefthand += hands[i].palmVelocity[2] + ',';
                lefthand += hands[i].grabStrength;
            }
            else if (hands[i].type === 'right') {
                righthand = hands[i].palmPosition[0] + ',';
                righthand += hands[i].palmPosition[1] + ',';
                righthand += hands[i].palmPosition[2] + ',';
                righthand += hands[i].pitch() + ',';
                righthand += hands[i].roll() + ',';
                righthand += hands[i].yaw() + ',';
                righthand += hands[i].direction[0] + ',';
                righthand += hands[i].direction[1] + ',';
                righthand += hands[i].direction[2] + ',';
                righthand += hands[i].palmVelocity[0] + ',';
                righthand += hands[i].palmVelocity[1] + ',';
                righthand += hands[i].palmVelocity[2] + ',';
                righthand += hands[i].grabStrength;
            }
        }
        var log = '~';
        log += this.data.id + ',';
        log += this.data.trial + ',';
        log += time + ',';
        log += timeDelta + ',';
        log += lefthand + ',';
        log += righthand;
        console.log(log);
    }
});