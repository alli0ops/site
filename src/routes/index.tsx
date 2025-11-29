import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
      <div>
          <script src="/src/star.js"></script>
      </div>
  );
})

export const head: DocumentHead = {
  title: "allison's digital space",
  meta: [
    {
      name: "description",
      content: "'allison's digital space'",
    },
  ],
};
