<template>
  <div class="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col">
    <header
      class="sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur"
    >
      <nav
        class="mx-auto flex w-full max-w-full items-center justify-between px-4 py-4"
      >
        <NuxtLink
          to="/"
          class="text-lg font-semibold tracking-tight hover:text-indigo-700"
        >
          My Nuxt App
        </NuxtLink>

        <div class="hidden md:flex items-center gap-6 text-sm">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :class="[
              'transition-colors hover:text-indigo-600',
              route.path === link.to
                ? 'text-indigo-700 font-medium'
                : 'text-slate-600',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <button
          @click="isOpen = !isOpen"
          class="md:hidden flex items-center justify-center rounded-md p-2 hover:bg-slate-100 focus:outline-none"
        >
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <transition name="fade">
        <div
          v-if="isOpen"
          class="md:hidden bg-white/95 border-t border-slate-200 px-4 py-4 space-y-3"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            @click="isOpen = false"
            :class="[
              'block px-2 py-2 rounded-md text-sm transition-colors',
              route.path === link.to
                ? 'bg-indigo-600 text-white'
                : 'text-slate-700 hover:bg-slate-100',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </transition>
    </header>

    <main class="flex-1 w-full">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const isOpen = ref(false);

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
