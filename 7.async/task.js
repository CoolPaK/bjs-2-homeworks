class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error("Значение не передано");
        }

        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error("Такой звонок уже задан");
        } else {
            this.alarmCollection.push({ id, time, callback });
        }
    }

    removeClock(id) {
        const lengthBefore = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(
            (item) => item.id !== id,
        );
        const lengthAfter = this.alarmCollection.length;
        return lengthBefore > lengthAfter;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach((item) => {
                    if (currentTime === item.time) {
                        item.callback();
                    }
                });
            }, 2000);
        }
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.forEach((item) =>
            console.log(`id звонка: ${item.id}, время звонка: ${item.time}`),
        );
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}