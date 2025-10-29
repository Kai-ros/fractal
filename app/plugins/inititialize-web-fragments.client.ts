import { initializeWebFragments } from "web-fragments";

export default defineNuxtPlugin(() => {
  console.log("Hi from the client");

  initializeWebFragments();
});
