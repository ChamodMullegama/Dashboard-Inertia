<template>
        <Side />

    <div class="main-content" id="panel">
        <Nav />

        <slot name="content" />

        <Footer />
    </div>
</template>

<script>
import Nav from "@/Components/Main/Nav.vue";
import Side from "@/Components/Main/Side.vue";
import Footer from "@/Components/Main/Footer.vue";

export default {
    components: {
        Nav,
        Side,
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>
