<script lang="ts">
  import { routes } from "./lib/routes";
  import Router from "svelte-spa-router";
  import Navbar from "./lib/Navbar.svelte";
</script>

<main class="overflow-hidden">
  <body
    class="bg-white dark:bg-gray-900 text-white h-screen w-screen scrollbar-hide"
  >
    <Navbar />
    <Router {routes} />
  </body>
</main>

<style>
  /* For Webkit-based browsers (Chrome, Safari and Opera) */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
