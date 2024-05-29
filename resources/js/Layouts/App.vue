<template>
    <Side />
    <div class="main-content" id="panel">
        <Nav />
        <slot name="content" />
        <Footer />
    </div>
</template>

<script setup>
import Nav from "@/Components/Main/Nav.vue";
import Side from "@/Components/Main/Side.vue";
import Footer from "@/Components/Main/Footer.vue";
</script>

<style lang="scss" scoped></style>
