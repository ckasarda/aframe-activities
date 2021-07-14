AFRAME.registerComponent('log-leap', {
    // The participant's id number and trial number can be added to the log
    schema: {
        id: {type: 'int', default: 0},
        trial: {type: 'string', default: "A"},
        variable: {type: 'string', default: "T"},
        order: {type: 'int', default: 0}
    },
    // We use the initialization function to setup our logging variables
    init: function () {
        this.leapcontroller = document.querySelector('a-scene').systems.leap.controller;
        this.seconds = 0;
        this.trackables = document.querySelectorAll('.trackable');
        this.pastposlist = [];
        this.pastrotlist = [];
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
        for (let i = 0; i < this.trackables.length; i++) {
            this.pastposlist.push(JSON.stringify(this.trackables[i].getAttribute('position')));
            this.pastrotlist.push(JSON.stringify(this.trackables[i].getAttribute('rotation')));
            header += ',' + this.trackables[i].id;
        }
        console.log(header);
    },
    tick: function (time, timeDelta) {
        var lefthand = 'N,0,0,0,0,0,0,0,0,0,0,0,0,0';
        var righthand = 'N,0,0,0,0,0,0,0,0,0,0,0,0,0';
        var hands = this.leapcontroller.lastFrame.hands;
        for (let i = 0; i < hands.length; i++) {
            if (hands[i].type === 'left') {
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
            else if (hands[i].type === 'right') {
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
        var trackables_log = '';
        for (let i = 0; i < this.trackables.length; i++) {
            if (Math.abs(JSON.parse(this.pastposlist[i]).x - this.trackables[i].getAttribute('position').x) > 0.01 ||
                Math.abs(JSON.parse(this.pastposlist[i]).y - this.trackables[i].getAttribute('position').y) > 0.01 ||
                Math.abs(JSON.parse(this.pastposlist[i]).z - this.trackables[i].getAttribute('position').z) > 0.01 ||
                Math.abs(JSON.parse(this.pastrotlist[i]).x - this.trackables[i].getAttribute('rotation').x) > 0.01 ||
                Math.abs(JSON.parse(this.pastrotlist[i]).y - this.trackables[i].getAttribute('rotation').y) > 0.01 ||
                Math.abs(JSON.parse(this.pastrotlist[i]).z - this.trackables[i].getAttribute('rotation').z) > 0.01) {
                    trackables_log += ',Y';
                    this.pastposlist[i] = JSON.stringify(this.trackables[i].getAttribute('position'));
                    this.pastrotlist[i] = JSON.stringify(this.trackables[i].getAttribute('rotation'));
            } else {
                trackables_log += ',N';
            }
        }
        if ((time / ((this.seconds + 1) * 1000)) >= 1) { this.seconds += 1; }
        var log = '~';
        log += this.data.id + ',';
        log += this.data.trial + ',';
        log += this.data.variable + ',';
        log += this.data.order + ',';
        log += time + ',';
        log += timeDelta + ',';
        log += this.seconds + ','
        log += lefthand + ',';
        log += righthand;
        log += trackables_log;
        console.log(log);
    }
});