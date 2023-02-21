<script lang="ts">
	import { goto } from "$app/navigation";
    import { onMount } from "svelte";
	import { Test } from "../stores/Test.store";

    onMount(() => {
        setInterval(() => {
            Test.increment();
        }, 100);
    });
</script>

<div class="w-full h-screen flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">Timer: { $Test }</h1>

    <button class="mt-2 text-white rounded-full bg-indigo-400 px-4 py-2" on:click={() => goto("/test")}>
        Goto /test page
    </button>
</div>