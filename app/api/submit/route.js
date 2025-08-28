export async function POST(req) {
  const body = await req.json();

  const response = await fetch("https://script.google.com/macros/s/AKfycbwBqurM1h72B4b7HF6n2AnnJBXO2h3yKuXdCKDxqkEmPfePZOC0HUBxeb2j9z0Aer_lPw/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await response.text();
  return new Response(result, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
