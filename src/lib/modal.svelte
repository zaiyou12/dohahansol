<script>
  import { fly, fade } from 'svelte/transition'

  /** @type {boolean} */
  export let open
  
  /** @type {String} */
  export let title
  
  /** @type {(event: MouseEvent) => void}   */
   export let closeDialog
</script>

{#if open}
  <div class="w-screen fixed inset-0 bg-gray-500 bg-opacity-75" transition:fade></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div transition:fly="{{ y: 20, duration: 300 }}" class="relative mx-auto w-full transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <div>
          <div class="mt-3 text-center sm:mt-5">
            <h2>{ title }</h2>
            <div class="mt-2">
              <slot />
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            on:click={closeDialog}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
