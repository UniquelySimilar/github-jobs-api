<template>
    <div>
        <ul>
            <li>{{ job.title }}</li>
            <li>{{ job.created_at | moment("from") }}</li>
            <li>{{ job.type }}</li>
            <li>{{ job.company }}</li>
            <li>{{ job.location }}</li>
            <li><router-link :to="{ name: 'JobPage', params: {job}}">Click for more info</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Job',
    props: ['job']
}
</script>

<style lang="stylus" scoped>

</style>