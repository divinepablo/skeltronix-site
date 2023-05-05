<script lang="ts">
    import {link} from 'svelte-spa-router'
</script>

<div class="sticky w-full h-8 top-0 left-0 bg-gray-900 flex flex-row content-center">

        <!-- <a class="ml-2 font-sans font-semibold mt-[0.25rem]" href="/">Skeltronix</a> -->
        <!-- <div class="fixed top-0 mt-[0.25rem] flex flex-row w-full content-center"> -->
            <div class="ml-2 mt-[0.25rem]">
                <a href="/" class="font-sans font-semibold text-xl" use:link>Skeltronix</a>
            </div>
            <div class="fixed right-0 mt-[0.25rem]">
                <a href="/bio" class="mr-4 text-xl" use:link>Bio</a>
                <a href="https://forums.skeltronix.xyz" class="mr-2 text-xl">Forums</a>
            </div>
        <!-- </div> -->
    
</div>