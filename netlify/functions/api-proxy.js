export async function handler(event) {
  try {
    // 1) CORS preflight
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: ""
      };
    }

    // 2) Compute the resource path, stripping exactly the function prefix
    const prefix = "/.netlify/functions/api-proxy";
    let resource = event.path.startsWith(prefix)
      ? event.path.slice(prefix.length)
      : event.path;
    // ensure it always starts with a single slash
    if (!resource.startsWith("/")) resource = "/" + resource;

    const upstreamUrl = `https://swapi.info/api${resource}`;
    console.log("Proxying to:", upstreamUrl);

    // 3) Proxy GET to SWAPI
    const upstreamRes = await fetch(upstreamUrl);
    const text = await upstreamRes.text();
    const contentType =
      upstreamRes.headers.get("content-type") || "application/json";

    return {
      statusCode: upstreamRes.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": contentType
      },
      body: text
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
}