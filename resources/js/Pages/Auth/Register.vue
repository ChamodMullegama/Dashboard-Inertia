<script setup>
import { ref } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};

import AuthLayout from "@/Layouts/Auth.vue";
</script>

<template>
    <Head title="Register" />

    <AuthLayout>
        <template #content>
            <div class="main-content">
                <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    <div class="container">
                        <div class="header-body text-center mb-7">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h1 class="text-white">
                                        Create an account
                                    </h1>
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
                        <div class="col-lg-6 col-md-8">
                            <div class="card bg-secondary border-0">
                                <div class="card-header bg-transparent pb-5">
                                    <div
                                        class="text-muted text-center mt-2 mb-4"
                                    >
                                        <small>Sign up with</small>
                                    </div>
                                    <div class="text-center">
                                        <a
                                            href="#"
                                            class="btn btn-neutral btn-icon mr-4"
                                        >
                                            <span class="btn-inner--icon"
                                                ><img
                                                    src="../../../src/img/icons/common/github.svg"
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
                                            >Or sign up with credentials</small
                                        >
                                    </div>
                                    <form @submit.prevent="submit">
                                        <div class="form-group">
                                            <div
                                                class="input-group input-group-merge input-group-alternative mb-3"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        ><i
                                                            class="ni ni-hat-3"
                                                        ></i
                                                    ></span>
                                                </div>
                                                <TextInput
                                                    id="name"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Name"
                                                    v-model="form.name"
                                                    required
                                                    autofocus
                                                    autocomplete="name"
                                                />
                                            </div>
                                            <InputError
                                                :message="form.errors.name"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <div
                                                class="input-group input-group-merge input-group-alternative mb-3"
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
                                                    placeholder="Email"
                                                    v-model="form.email"
                                                    required
                                                    autocomplete="username"
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
                                                    placeholder="Password"
                                                    v-model="form.password"
                                                    required
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                            <InputError
                                                :message="form.errors.password"
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
                                                    id="password_confirmation"
                                                    type="password"
                                                    class="form-control"
                                                    placeholder="Confirm Password"
                                                    v-model="
                                                        form.password_confirmation
                                                    "
                                                    required
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                            <InputError
                                                :message="
                                                    form.errors
                                                        .password_confirmation
                                                "
                                            />
                                        </div>
                                        <div class="row my-4">
                                            <div class="col-12">
                                                <div
                                                    class="custom-control custom-control-alternative custom-checkbox"
                                                >
                                                    <input
                                                        class="custom-control-input"
                                                        id="customCheckRegister"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        for="customCheckRegister"
                                                    >
                                                        <span class="text-muted"
                                                            >I agree with the
                                                            <a href="#"
                                                                >Privacy
                                                                Policy</a
                                                            ></span
                                                        >
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <PrimaryButton
                                                :class="{
                                                    'opacity-25':
                                                        form.processing,
                                                }"
                                                :disabled="form.processing"
                                                class="btn btn-primary mt-4"
                                                >Create account</PrimaryButton
                                            >
                                        </div>
                                    </form>
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
