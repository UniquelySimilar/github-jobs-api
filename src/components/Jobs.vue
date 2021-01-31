<template>
<div v-if="jobs.length">
    <div v-for="job in filterJobs(this.jobCount)" v-bind:key="job.id">
    <!-- <div v-for="job in jobs" v-bind:key="job.id"> -->
        <Job v-bind:job="job" />
    </div>
    <button v-on:click="jobCount += 10">Load More</button>
</div>
</template>

<script>
import axios from 'axios'

import Job from './Job'

export default {
    name: 'Jobs',
    components: {
        Job
    },
    data () {
        return {
            jobCount: 10,
            jobs: []
        }
    },
    methods: {
        filterJobs: function (n) {
            let filteredJobs = []
            for(let i = 0; i < n; i++) {
                filteredJobs.push(this.jobs[i])
            }
            return filteredJobs;
        }
    },
    created() {
        axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1')
        .then( response => {
            //console.log(response.data)
            this.jobs = response.data;
        })
        .catch( error => console.log(error))
    }
}
</script>

<style lang="stylus" scoped>

</style>