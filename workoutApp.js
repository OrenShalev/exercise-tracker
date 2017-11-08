Vue.component('workout-app', {
    props: ['log', ],
    template: `
                <section>
                    <h3>Hello</h3>
                    <stats v-bind:log="log"></stats>
                    <add-workout :log="log"></add-workout>
                    <workout-log v-bind:log="log"></workout-log>
                </section>
            `,
});

