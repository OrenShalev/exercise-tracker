const app = new Vue({
    el: `workout-app`,
    data: {
        log2: [ 123, `abc`, true, Math, Math.random, ],
        log: [
            { date: new Date(), duration: 10 },
            { date: new Date(Date.now() - 86400000), duration: 10 },
            { date: new Date(Date.now() - 86400000*2), duration: 10 },
            { date: new Date(Date.now() - 86400000*4), duration: 10 },
            { date: new Date(Date.now() - 86400000*5), duration: 10 },
            { date: new Date(Date.now() - 86400000*6), duration: 10 },
            { date: new Date(Date.now() - 86400000*7), duration: 10 },
            { date: new Date(Date.now() - 86400000*8), duration: 10 },
            { date: new Date(Date.now() - 86400000*3), duration: 10 },
        ].sort((entry1, entry2) => entry2.date-entry1.date),
    },
    methods: {
    },
});
