import { initializeWebFragments } from "web-fragments";

export default defineNuxtPlugin(() => {
  console.log("Initializing web fragments...");

  initializeWebFragments();

});
