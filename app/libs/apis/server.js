import { getMovies } from "@/lib/apis/server";

export const loginUser = async (loginData) => {
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  console.log("LOGIN ACTION", response.json());
};

export const registerUser = async (formData) => {
  console.log("Form Data", formData);
  try {
    const response = await api.post("v1/register", { json: formData });
    console.log("Reg Response", response);
    if (response.ok) {
      return response.json();
    } else {
      return undefined;
    }
  } catch (error) {
    const status = error.response.status;
    const responseBody = await error.response.json();
    if (status && responseBody) {
      if (status === 409) {
        return responseBody;
      }
      return undefined;
    }

    return undefined;
  }
};

/* export const getMovies = async () => {
  try {
    const response = await api.get("v1/movies", {
      cache: "no-store",
    });
    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "Something went wrong!" };
    }
  } catch (error) {
    console.log("Movies Response", error);
    if (error) {
      // Handle HTTP errors specifically
      const status = error.response.status; // HTTP status code (e.g., 404, 500)
      const responseBody = await error.response.json(); // Parse the response body if possible

      console.log("HTTP Error: ", status, responseBody);
    } else {
      // Handle non-HTTP errors (e.g., network issues)
      console.log("Unknown error:", error);
    }
    return undefined;
  }
}; */
