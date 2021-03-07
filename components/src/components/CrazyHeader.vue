<template>
    <div class="crazy-header">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style scoped>
.crazy-header {
    padding: 24px;
    background-color: blanchedalmond;
    border-radius: 12px;
    text-transform: uppercase;
}
</style>