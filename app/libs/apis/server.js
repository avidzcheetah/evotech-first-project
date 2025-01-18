export const loginUser = async () => {
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
  });

  console.log(response.json());
};
