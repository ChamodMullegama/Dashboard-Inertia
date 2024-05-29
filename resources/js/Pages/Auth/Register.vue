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
</script>

<template>
    <Head title="Register" />

    <nav
        id="navbar-main"
        class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light"
    >
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../../../src/img/brand/white.png" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="navbar-collapse navbar-custom-collapse collapse"
                id="navbar-collapse"
            >
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="#">
                                <img src="../../../src/img/brand/blue.png" />
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button
                                type="button"
                                class="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbar-collapse"
                                aria-controls="navbar-collapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link href="/login" class="nav-link">
                            <span class="nav-link-inner--text">Login</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <span class="nav-link-inner--text">Register</span>
                        </a>
                    </li>
                </ul>
                <hr class="d-lg-none" />
                <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    <li class="nav-item">
                        <a
                            class="nav-link nav-link-icon"
                            href="#"
                            target="_blank"
                            data-toggle="tooltip"
                            data-original-title="Like us on Facebook"
                        >
                            <i class="fab fa-facebook-square"></i>
                            <span class="nav-link-inner--text d-lg-none"
                                >Facebook</span
                            >
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link nav-link-icon"
                            href="#"
                            target="_blank"
                            data-toggle="tooltip"
                            data-original-title="Follow us on Instagram"
                        >
                            <i class="fab fa-instagram"></i>
                            <span class="nav-link-inner--text d-lg-none"
                                >Instagram</span
                            >
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link nav-link-icon"
                            href="#"
                            target="_blank"
                            data-toggle="tooltip"
                            data-original-title="Follow us on Twitter"
                        >
                            <i class="fab fa-twitter-square"></i>
                            <span class="nav-link-inner--text d-lg-none"
                                >Twitter</span
                            >
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link nav-link-icon"
                            href="#"
                            target="_blank"
                            data-toggle="tooltip"
                            data-original-title="Star us on Github"
                        >
                            <i class="fab fa-github"></i>
                            <span class="nav-link-inner--text d-lg-none"
                                >Github</span
                            >
                        </a>
                    </li>
                    <li class="nav-item d-none d-lg-block ml-lg-4">
                        <a
                            href="#"
                            target="_blank"
                            class="btn btn-neutral btn-icon"
                        >
                            <span class="btn-inner--icon">
                                <i class="fas fa-shopping-cart mr-2"></i>
                            </span>
                            <span class="nav-link-inner--text"
                                >Purchase now</span
                            >
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="main-content">
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Create an account</h1>
                            <p class="text-lead text-white">
                                Use these awesome forms to login or create new
                                account in your project for free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
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
                            <div class="text-muted text-center mt-2 mb-4">
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
                                    <span class="btn-inner--text">Github</span>
                                </a>
                                <a href="#" class="btn btn-neutral btn-icon">
                                    <span class="btn-inner--icon"
                                        ><img
                                            src="../../../src/img/icons/common/google.svg"
                                    /></span>
                                    <span class="btn-inner--text">Google</span>
                                </a>
                            </div>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form @submit.prevent="submit">
                                <div class="form-group">
                                    <div
                                        class="input-group input-group-merge input-group-alternative mb-3"
                                    >
                                        <!-- <div class="input-group-prepend">
                                            <span class="input-group-text"
                                                ><i class="ni ni-hat-3"></i
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
                                        /> -->
                                    </div>
                                    <InputError :message="form.errors.name" />
                                </div>
                                <div class="form-group">
                                    <div
                                        class="input-group input-group-merge input-group-alternative mb-3"
                                    >
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"
                                                ><i class="ni ni-email-83"></i
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
                                    <InputError :message="form.errors.email" />
                                </div>
                                <div class="form-group">
                                    <div
                                        class="input-group input-group-merge input-group-alternative"
                                    >
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"
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
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"
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
                                            v-model="form.password_confirmation"
                                            required
                                            autocomplete="new-password"
                                        />
                                    </div>
                                    <InputError
                                        :message="
                                            form.errors.password_confirmation
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
                                                        >Privacy Policy</a
                                                    ></span
                                                >
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <PrimaryButton
                                        :class="{
                                            'opacity-25': form.processing,
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

    <footer class="py-5" id="footer-main">
        <div class="container">
            <div class="row align-items-center justify-content-xl-between">
                <div class="col-xl-6">
                    <div class="copyright text-center text-xl-left text-muted">
                        &copy; 2021
                        <a
                            href="https://www.creative-tim.com"
                            class="font-weight-bold ml-1"
                            target="_blank"
                            >Creative Tim</a
                        >
                    </div>
                </div>
                <div class="col-xl-6">
                    <ul
                        class="nav nav-footer justify-content-center justify-content-xl-end"
                    >
                        <li class="nav-item">
                            <a
                                href="https://www.creative-tim.com"
                                class="nav-link"
                                target="_blank"
                                >Creative Tim</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                href="https://www.creative-tim.com/presentation"
                                class="nav-link"
                                target="_blank"
                                >About Us</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                href="http://blog.creative-tim.com"
                                class="nav-link"
                                target="_blank"
                                >Blog</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                href="https://www.creative-tim.com/license"
                                class="nav-link"
                                target="_blank"
                                >License</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped></style>
