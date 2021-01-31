<template>
  <div>
    <form @submit="startSearch">
      <input type="text" v-model="title" name="title" placeholder="Filter by title, companies, expertise...">
      <input type="text" v-model="location" name="location" placeholder="Filter by location">
      <input type="checkbox" v-model="fullTime" name="fullTime" id="job-type">
      <label for="job-type">Full Time Only</label>
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        title: '',
        location: '',
        fullTime: false
      }
    },
    methods: {
      startSearch(e) {
        const searchTerms = {
          title: this.title,
          location: this.location,
          fullTime: this.fullTime
        }
        e.preventDefault();
        this.$emit('start-search', searchTerms);
        this.title = '';
        this.location = '';
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>