<script>
  import { createEventDispatcher } from "svelte";

  export let title;
  export let answers;
  export let question;

  const dispatch = createEventDispatcher();

  function onAnswer(answer) {
    return () => {
      console.log("onAnswer");
      dispatch("answer", { answer });
    };
  }
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-200">
  <div class="container">
    <div class="flex justify-center p-4 mb-10">
      <h2 class="text-2xl text-blue-500">{title}</h2>
    </div>
    <div class="flex justify-center p-4 mb-10">
      <h2 class="text-xl text-blue-500">{question}</h2>
    </div>
    <div class="flex justify-center mb-10">
      <div class="bg-white shadow-xl rounded-lg w-1/2">
        <ul class="divide-y divide-gray-300">
          {#each answers as answer}
            <li
              class="p-4 hover:bg-gray-50 cursor-pointer"
              on:click={onAnswer(answer)}
            >
              {answer}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
;
