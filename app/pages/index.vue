<template>
  <div class="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-900">

    <section class="mx-auto max-w-7xl px-6 py-20 text-center">
      <div class="mx-auto max-w-3xl">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-sm"
        >
          <span
            class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
          ></span>
          Nuxt 4 + Vite + Tailwind
        </span>
        <h1
          class="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Build modern apps with confidence
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          Minimal design, powerful features, and lightning-fast developer
          experience.
        </p>
        <div
          class="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <NuxtLink
            to="/blog"
            class="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-md hover:shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition cursor-pointer"
          >
            🚀 Get Started
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition cursor-pointer"
          >
            Contact →
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 pb-20">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl cursor-pointer"
        >
          <div
            class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 text-xl"
          >
            🚀
          </div>
          <h3 class="text-xl font-semibold">File-based Routing</h3>
          <p class="mt-2 text-slate-600">
            Organize pages with nested and dynamic routes out of the box.
          </p>
        </div>

        <div
          class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-xl cursor-pointer"
        >
          <div
            class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-600 text-xl"
          >
            ✨
          </div>
          <h3 class="text-xl font-semibold">Reusable Components</h3>
          <p class="mt-2 text-slate-600">
            Compose UIs with clean, typed components and props.
          </p>
        </div>

        <div
          class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl cursor-pointer"
        >
          <div
            class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 text-xl"
          >
            ⚡
          </div>
          <h3 class="text-xl font-semibold">Performance First</h3>
          <p class="mt-2 text-slate-600">
            Vite-powered HMR, tree-shaking, and great Lighthouse scores.
          </p>
        </div>
      </div>
    </section>


    <section
      class="mx-auto max-w-7xl px-6 py-16 border-t border-slate-200"
    >
      <div
        class="grid grid-cols-2 gap-8 text-center md:grid-cols-4"
      >
        <div>
          <h3 class="text-3xl font-bold">5+</h3>
          <p class="text-slate-600">Years Experience</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">50+</h3>
          <p class="text-slate-600">Projects Built</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">10k+</h3>
          <p class="text-slate-600">Community Users</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">100%</h3>
          <p class="text-slate-600">Open Source</p>
        </div>
      </div>
    </section>

    <section
      class="mx-auto max-w-7xl px-6 py-20 text-center border-t border-slate-200"
    >
      <h2 class="text-3xl font-bold">
        Ready to launch your next project?
      </h2>
      <p class="mt-3 text-slate-600">
        Start fast, scale effortlessly, and ship confidently with Nuxt.
      </p>
      <div class="mt-6">
        <NuxtLink
          to="/services"
          class="inline-block rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white shadow-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition cursor-pointer"
        >
          Start Now →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
