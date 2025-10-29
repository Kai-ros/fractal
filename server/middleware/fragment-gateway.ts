import { FragmentGateway } from "web-fragments/gateway";
import { getNodeMiddleware } from "web-fragments/gateway/node";

// INFO: Initialize gateway
const fragmentGateway = new FragmentGateway({});

// INFO: Register fragment
fragmentGateway.registerFragment({
  fragmentId: "solid-shard",
  piercingClassNames: [],
  endpoint: "http://localhost:4000",
  routePatterns: [
    // INFO: Should match SolidStart baseURL + assets
    "/__wf/placeholder/solid-shard/:_*",
    "/",
  ],
});

const fragmentMiddleware = getNodeMiddleware(fragmentGateway, {});

export default defineEventHandler(async (event) => {
  try {
    await new Promise<void>((resolve, reject) => {
      fragmentMiddleware(event.node.req, event.node.res, (error?: any) => {
        if (error) {
          // INFO: Log and resolve but don't reject for connection errors
          if (error.message?.includes('fetch failed') || error.code === 'ECONNREFUSED') {
            console.warn('Fragment endpoint unavailable:', error.message);
            resolve();
            return;
          }
          reject(error);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    // Always resolve to prevent unhandled rejections
    console.error('Fragment gateway error:', error);

    throw error;
  }
});
