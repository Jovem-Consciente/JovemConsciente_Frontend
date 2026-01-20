export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`http://localhost:3000${endpoint}`, {
    credentials: "include", // 🔥 ENVIA COOKIE
    ...options,
  });

  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    const errorText = contentType?.includes("application/json")
      ? await res.json()
      : await res.text();
    throw new Error(
      typeof errorText === "string" ? errorText : JSON.stringify(errorText)
    );
  }

  return contentType?.includes("application/json")
    ? res.json()
    : res.text();
}
