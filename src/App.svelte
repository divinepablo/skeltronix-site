<script lang="ts">
  import { routes } from "./lib/routes";
  import Router from 'svelte-spa-router'
  import Navbar from "./lib/Navbar.svelte";
</script>

<style>
  /* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>

<body class="bg-white dark:bg-gray-800 text-white h-full w-full scrollbar-hide">
  <Navbar></Navbar>
  <Router {routes}/>
</body>
