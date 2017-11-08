Vue.component('stats', {
    props: ['log', ],
    computed: {
        logPastWeek: function() { return this.log.filter(({date}) => (Date.now() - date) <= WEEK); },
        durationPastWeek: function() { return this.logPastWeek.reduce((total, {duration})=>total+duration, 0); },
        oldestEntryPastWeek: function() { return this.logPastWeek.reverse()[0]; },
        nextChange: function() { return new Date(this.oldestEntryPastWeek.date - -WEEK); },
        // hack to add to a date
    },
    template: `
                <section>
                    <p>Entries: {{log.length}}</p>
                    <p>Entries past week: {{logPastWeek.length}}</p>
                    <p>Duration past week: {{durationPastWeek}}</p>
                    <p>Next change: {{nextChange | formatDate}}</p>
                    <p>Duration after next change: {{durationPastWeek - oldestEntryPastWeek.duration}}</p>
                </section>
            `,
});

