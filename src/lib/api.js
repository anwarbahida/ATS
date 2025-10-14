export const API_URL = "http://localhost:8080";

export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}
