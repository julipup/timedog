<script lang="ts">
    import { goto } from '$app/navigation';

</script>

<div class="w-full h-screen flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">Test page</h1>

    <button class="mt-2 text-white rounded-full bg-indigo-400 px-4 py-2" on:click={() => goto("/")}>
        Go back
    </button>
</div>