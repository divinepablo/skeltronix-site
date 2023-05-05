<script lang="ts">
  import { routes } from "./lib/routes";
  import Router from 'svelte-spa-router'
  import Navbar from "./lib/Navbar.svelte";
</script>

<body class="bg-white dark:bg-gray-800 text-white h-screen w-screen">
  <Navbar></Navbar>
  <Router {routes}/>
</body>
