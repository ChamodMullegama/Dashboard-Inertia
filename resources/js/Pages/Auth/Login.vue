<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};

import AuthLayout from "@/Layouts/Auth.vue";
</script>

<template>
    <Head title="Login" />
    <AuthLayout>
        <template #content>
            <div class="main-content">
                <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    <div class="container">
                        <div class="header-body text-center mb-7">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h1 class="text-white">Welcome!</h1>
                                    <p class="text-lead text-white">
                                        Use these awesome forms to login or
                                        create new account in your project for
                                        free.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="separator separator-bottom separator-skew zindex-100"
                    >
                        <svg
                            x="0"
                            y="0"
                            viewBox="0 0 2560 100"
                            preserveAspectRatio="none"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                class="fill-default"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <div class="container mt--8 pb-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-7">
                            <div class="card bg-secondary border-0 mb-0">
                                <div class="card-header bg-transparent pb-5">
                                    <div
                                        class="text-muted text-center mt-2 mb-3"
                                    >
                                        <small>Sign in with</small>
                                    </div>
                                    <div class="btn-wrapper text-center">
                                        <a
                                            href="#"
                                            class="btn btn-neutral btn-icon"
                                        >
                                            <span class="btn-inner--icon"
                                                ><img
                                                    src="../../../src/img/icons/common/github.svg"
                                                    alt="Github icon"
                                            /></span>
                                            <span class="btn-inner--text"
                                                >Github</span
                                            >
                                        </a>
                                        <a
                                            href="#"
                                            class="btn btn-neutral btn-icon"
                                        >
                                            <span class="btn-inner--icon"
                                                ><img
                                                    src="../../../src/img/icons/common/google.svg"
                                                    alt="Google icon"
                                            /></span>
                                            <span class="btn-inner--text"
                                                >Google</span
                                            >
                                        </a>
                                    </div>
                                </div>
                                <div class="card-body px-lg-5 py-lg-5">
                                    <div class="text-center text-muted mb-4">
                                        <small
                                            >Or sign in with credentials</small
                                        >
                                    </div>
                                    <form @submit.prevent="submit">
                                        <div class="form-group mb-3">
                                            <div
                                                class="input-group input-group-merge input-group-alternative"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        ><i
                                                            class="ni ni-email-83"
                                                        ></i
                                                    ></span>
                                                </div>
                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    class="form-control"
                                                    v-model="form.email"
                                                    required
                                                    autofocus
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <InputError
                                                :message="form.errors.email"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <div
                                                class="input-group input-group-merge input-group-alternative"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        ><i
                                                            class="ni ni-lock-circle-open"
                                                        ></i
                                                    ></span>
                                                </div>
                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    class="form-control"
                                                    v-model="form.password"
                                                    required
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <InputError
                                                :message="form.errors.password"
                                            />
                                        </div>
                                        <div
                                            class="custom-control custom-control-alternative custom-checkbox"
                                        >
                                            <Checkbox
                                                id="customCheckLogin"
                                                v-model:checked="form.remember"
                                                class="custom-control-input"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="customCheckLogin"
                                            >
                                                <span class="text-muted"
                                                    >Remember me</span
                                                >
                                            </label>
                                        </div>
                                        <div class="text-center">
                                            <PrimaryButton
                                                type="submit"
                                                class="btn btn-primary my-4"
                                                :class="{
                                                    'opacity-25':
                                                        form.processing,
                                                }"
                                                :disabled="form.processing"
                                            >
                                                Log in
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <Link
                                        href="route('password.request')"
                                        class="text-light"
                                        ><small>Forgot password?</small></Link
                                    >
                                </div>
                                <div class="col-6 text-right">
                                    <Link href="#" class="text-light"
                                        ><small>Create new account</small></Link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AuthLayout>
</template>
<style scoped></style>
