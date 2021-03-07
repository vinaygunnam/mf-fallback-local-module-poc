<template>
    <div class="basic-header">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style scoped>
.basic-header {
    padding: 24px;
    background-color: olivedrab;
    color: white;
    border-radius: 12px;
}
</style>