import ky from "ky";

// Creating an API instance
// api: This is the exported instance of ky configured with specific options. It can be reused across the application for making HTTP requests.
export const api = ky.create({
  prefixUrl: process.env.API_BASE_URL, // This prepends a base URL to every request made with this api instance.
  timeout: 60000, // Sets the maximum time (in milliseconds) a request can take before being aborted.
  retry: 0, // Configures how many times a failed request should automatically retry.
});
