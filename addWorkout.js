Vue.component('add-workout', {
    props: ['log', ],
    methods: {
        addAmount: function() {
            console.log('ping');
            const duration = document.querySelector('#add-workout-duration').value;
            const dateValue = document.querySelector('#add-workout-date').value;
            const date = dateValue? new Date(Date.parse(dateValue)) : new Date();
            this.log.unshift({
                date,
                duration: Number(duration)
            });
        },
    },
    template: `
                <section>
                    <label for="add-workout-duration">Duration: </label>
                    <input id="add-workout-duration" type="number"/>
                    <label for="add-workout-date">Date and time: </label>
                    <input id="add-workout-date" type="datetime-local" />
                    <button v-on:click="addAmount()">Add</button>
                </section>
            `,
});
