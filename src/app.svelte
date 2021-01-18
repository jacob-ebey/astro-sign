<script>
  import Question from "./components/question.svelte";
  import Result from "./components/result.svelte";

  export let title;
  export let questions;
  export let result;

  let current = 0;
  $: question = questions[current];

  function onAnswer() {
    console.log("onAnswer");
    current += 1;
  }
</script>

{#if question}
  <Question {...question} {title} on:answer={onAnswer} />
{:else}
  <Result {result} {title} />
{/if}
