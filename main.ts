import { logger } from "log";
import { httpRequest } from "http-request";

export async function onClientRequest(request: EW.IngressClientRequest) {
  // let's check if we have an authorization header, if not use undefined as upper layer will handle it.
  const authHeader = request.getHeader("Authorization")?.[0];

  try {
    const response = await httpRequest("/rate-limiter", {
      headers: { Authorization: authHeader },
    });

    if (!response.ok) {
      const body = await response.text();
      request.respondWith(response.status, response.getHeaders(), body);
    }
  } catch (error) {
    logger.error(`Rate limiter request failed: ${error}`);
    // Fail open for now, just forward request downstream if API-GW rate-limiter is down
    // request.respondWith(503, { "Retry-After": "60" }, "Service temporarily unavailable");
  }
}
