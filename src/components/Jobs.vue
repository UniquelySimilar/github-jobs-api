<template>
  <div class="jobs">
    <SearchBar v-on:start-search="search" />
    <div v-if="jobs.length">
      <div v-for="job in filteredJobs" v-bind:key="job.id">
        <Job v-bind:job="job" />
      </div>
      <button v-on:click="incrementJobCount">Load More</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import SearchBar from '../components/SearchBar'
  import Job from './Job'

  export default {
    name: 'Jobs',
    components: {
      Job,
      SearchBar
    },
    data() {
      return {
        jobCount: 10,
        jobs: []
      }
    },
    computed: {
      filteredJobs() {
        return this.jobs.slice(0, this.jobCount);
      }
    },
    methods: {
      incrementJobCount() {
        this.jobCount += 10;
      },
      search(newSearch) {
        const { title, location, fullTime } = newSearch;
        console.log('title: ' + title);
        console.log('location: ' + location);
        let fullTimeSearch = fullTime ? 'on' : 'off';
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${title}&full_time=${fullTimeSearch}&location=${location}`)
          .then( response => {
            this.jobs = response.data;
          })
          .catch( error => console.log(error) );
      }
    },
    created() {
      axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1')
        .then(response => {
          this.jobs = response.data;
        })
        .catch(error => console.log(error))
    }
  }
</script>

<style lang="stylus" scoped>

</style>