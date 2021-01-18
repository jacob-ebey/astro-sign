<script>
  export let result;
  export let title;

  let shown = false;

  function show() {
    shown = true;
  }
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-200">
  <div class="container">
    <div class="flex justify-center p-4 mb-10">
      <h2 class="text-2xl text-blue-500">{title}</h2>
    </div>

    {#if shown}
      <div class="flex justify-center p-4 mb-10">
        <h2 class="text-xl text-blue-500">{result}</h2>
      </div>

      <div class="flex justify-center p-4 mb-10">
        <img
          alt="ha ha"
          src="https://media.giphy.com/media/RG3lm5VlrbDV7YNana/giphy.gif"
        />
      </div>
    {:else}
      <div class="flex justify-center p-4 mb-10">
        <button class="bg-blue-600 p-6 text-white" on:click={show}>
          <span>Show Result</span>
        </button>
      </div>
    {/if}
  </div>
</div>
