<template>
    <AuthNav />
    <slot name="content" />
    <AuthFooter />
</template>

<script setup>
import AuthNav from "@/Components/Auths/AuthNav.vue";
import AuthFooter from "@/Components/Auths/AuthFooter.vue";
</script>

<style lang="scss" scoped></style>
