// Route: `${OUR_URL}/api/pet`

export async function POST(request: Request) {
  const payload = await request.json()
  const res = await fetch(`http://localhost:5000/api/v1/pet`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}