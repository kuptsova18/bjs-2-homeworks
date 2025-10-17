class constructor {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        const findAlarm = this.alarmCollection.find(alarm => alarm.time === time);
        if (findAlarm) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({ callback, time, canCall: true });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hourDate = currentDate.getHours().toString().padStart(2, '0');
        const minuteDate = currentDate.getMinutes().toString().padStart(2, '0');
        return `${hourDate}:${minuteDate}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime;
            
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms (){
        this.stop;
        this.alarmCollection = [];
    }
}  