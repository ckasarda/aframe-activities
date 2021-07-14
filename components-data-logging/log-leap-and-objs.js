AFRAME.registerComponent('insert-name-here', {
    // The participant's id number and trial number can be added to the log
    schema: {
        // QUESTION #1
        variable: {type: 'string'},
        order: {type: 'int'}
    },
    // We use the initialization function to setup our logging variables
    init: function () {
        // QUESTION #2
        var header = '~';
        header += 'id,';
        header += 'trial,';
        header += 'variable,';
        header += 'order,';
        header += 'time-ms,';
        header += 'delta-ms,';
        header += 'time-sec,';
        header += 'left-valid,';
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
        header += 'right-valid,';
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
        // QUESTION #3
    },
    // Send leap hand data to the console via logging
    tick: function (time, timeDelta) {
        var lefthand = 'N,0,0,0,0,0,0,0,0,0,0,0,0,0';
        var righthand = 'N,0,0,0,0,0,0,0,0,0,0,0,0,0';
        var hands = this.leapcontroller.lastFrame.hands;
        for (let i = 0; i < hands.length; i++) {
            // QUESTION #4 PART #1
            if (hands[i].type === 'insert-hand-name-here') {
                lefthand = 'Y,';
                lefthand += hands[i].palmPosition[0] + ',';
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
            // QUESTION #4 PART 2
            else if (hands[i].type === 'insert-other-hand-name-here') {
                righthand = 'Y,';
                righthand += hands[i].palmPosition[0] + ',';
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
        if ((time / ((this.seconds + 1) * 1000)) >= 1) { 
            // QUESTION #5
        }
        var log = '~';
        // QUESTION #6
        log += '' + ',';
        log += '' + ',';
        log += time + ',';
        log += timeDelta + ',';
        log += '' + ','
        log += '' + ',';
        log += '';
        // QUESTION #7
        console.log();
    }
});