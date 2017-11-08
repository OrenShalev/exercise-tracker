Vue.component('workout-log', {
    props: ['log'],
    template: `
                <section>
                    <p>Workout log:</p>
                    Entries: {{log.length}}
                    <table>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Duration</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="entry in log">
                                <!--<td>{{entry}}</td>-->
                                <td>{{entry.date | formatDate}}</td>
                                <td>{{entry.duration}}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            `,
});

