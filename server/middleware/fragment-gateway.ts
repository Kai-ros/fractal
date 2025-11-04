import { FragmentGateway } from "web-fragments/gateway";
import { getNodeMiddleware } from "web-fragments/gateway/node";

// INFO: Initialize gateway
const fragmentGateway = new FragmentGateway();

const handleSsrFetchError = () => ({
  response: new Response('<p>SSR fragment not found</p>', {
    headers: { 'content-type': 'text/html' },
  }),
});

// INFO: Register fragments
fragmentGateway.registerFragment({
  fragmentId: "solid-shard",
  piercingClassNames: [],
  endpoint: "http://localhost:4000",
  routePatterns: [
    "/__wf/placeholder/solid-shard/:_*",
    "/",
  ],
  onSsrFetchError: handleSsrFetchError,
});

fragmentGateway.registerFragment({
  fragmentId: "tanstack-start-shard",
  piercingClassNames: [],
  endpoint: "http://localhost:4100",
  routePatterns: ["/__wf/placeholder/tanstack-start-shard/:_*", "/"],
  onSsrFetchError: handleSsrFetchError,
});

fragmentGateway.registerFragment({
  fragmentId: "vue-shard",
  piercingClassNames: [],
  endpoint: "http://localhost:4200",
  routePatterns: ["/__wf/placeholder/vue-shard/:_*", "/"],
});

const fragmentMiddleware = getNodeMiddleware(fragmentGateway, {
  mode: "development",
});

export default defineEventHandler(async (event) => {
  await new Promise<void>((resolve) => {
    fragmentMiddleware(event.node.req, event.node.res, () => resolve());
  });
});
// export default defineEventHandler(async (event) => {
//   try {
//     await new Promise<void>((resolve, reject) => {
//       fragmentMiddleware(event.node.req, event.node.res, (error?: any) => {
//         if (error) {
//           if (
//             error.message?.includes("fetch failed") ||
//             error.code === "ECONNREFUSED"
//           ) {
//             console.warn("Fragment endpoint unavailable:", error.message);
//             resolve();
//             return;
//           }
//           reject(error);
//         } else {
//           resolve();
//         }
//       });
//     });
//   } catch (error) {
//     // Log but don't rethrow connection errors

//     if (
//       error instanceof Error &&
//       (error.message?.includes("fetch failed") ||
//         (error as any).code === "ECONNREFUSED")
//     ) {
//       console.warn("Fragment endpoint unavailable:", error.message);
//       return; // Gracefully continue without throwing
//     }

//     console.error("Fragment gateway error:", error);
//     throw error;
//   }
// });
