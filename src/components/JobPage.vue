<template>
  <div>
    <div class="company-box">
        <img v-bind:src="job.company_logo" />
        <h1>{{ job.company }}</h1>
        <p>{{ job.company_url }}</p>
    </div>

    <div class="main-box">
        <p>{{ job.created_at | moment("from") }}</p>
        <p>{{ job.type }}</p>
        <h1>{{ job.title }}</h1>
        <p>{{ job.location }}</p>
        <button>Apply Now</button>
        <p v-html="job.description"></p>
    </div>

    <div class="apply-box">
        <h2>How to apply</h2>
        <p v-html="job.how_to_apply"></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "JobPage",
  props: ["job"],
};
</script>

<style scoped>

    img {
        width: 140px;
        height: 140px;
    }

</style>
