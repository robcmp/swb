// netlify/functions/api-proxy.js
import fetch from "node-fetch";

export async function handler(event) {
  const { httpMethod, path, queryStringParameters } = event;

  // strip the function path prefix to get e.g. "/planets/"
  const resource = path.replace(/^\/.netlify\/functions\/api-proxy/, "");

  // Always respond to OPTIONS preflight:
  if (httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  // For GET, proxy through to SWAPI:
  const upstream = `https://swapi.info/api${resource}`;
  const upstreamRes = await fetch(upstream, {
    method: "GET",
    // if you need to forward query params:
    // const qs = new URLSearchParams(queryStringParameters).toString();
    // fetch(`${upstream}?${qs}`)
  });

  const body = await upstreamRes.text();
  return {
    statusCode: upstreamRes.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": upstreamRes.headers.get("content-type") || "application/json",
    },
    body,
  };
}
