<template>
<div>
    <nuxt-link :to="'/' + id" no-prefetch>
        <article class="recipe">
            <div class="pic" :style="{backgroundImage: 'url(' + pic + ')'}"></div>
            <h1>{{ title }}</h1>
            <h3>ID: {{ id }}</h3>
            <p>{{ timestamp }}</p>
            <p>Tags: <nuxt-link class="tags" :to="{ path: 'tag', query: { targetTag: tag }}" :targetTag="tag" v-for="(tag, index) in tags" :key="index">#{{ tag }}</nuxt-link></p>
        </article>
    </nuxt-link>
</div>
</template>

<script>
export default {
    props: ["pic", "title", "timestamp", "id", "tags"]
}
</script>

<style scoped>
.recipe {
    box-sizing: border-box;
    width: 280px;
    padding: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #aaa;
    margin: 10px;
    color: black;
}

a {
    text-decoration: none;
}

.tags {
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin-left: 3px;
    padding: 2px 8px 2px 6px;
    background-color: rgb(235, 235, 235);
    color: black;
}

.tags:hover {
    background-color: pink;
}

.pic {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
}
</style>