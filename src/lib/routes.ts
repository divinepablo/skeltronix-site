import Bio from "./Bio.svelte"
import Home from "./Home.svelte"
import NotFound from "./NotFound.svelte"
export const routes = {
    // Exact path
    '/': Home,

    // Using named parameters, with last being optional
    '/bio': Bio,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}