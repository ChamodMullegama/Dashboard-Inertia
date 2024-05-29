import "./bootstrap";
import "../css/app.css";
import "../src/vendor/jquery/dist/jquery.min.js";
import "../src/vendor/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/vendor/js-cookie/js.cookie.js";
//  import "../src/vendor/jquery.scrollbar/jquery.scrollbar.min.js";
//  import "../src/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js";
import "../src/vendor/chart.js/dist/Chart.min.js";
import "../src/vendor/chart.js/dist/Chart.extension.js";
//  import "../src/js/argon.min.js";
import "../src/js/demo.min.js";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
