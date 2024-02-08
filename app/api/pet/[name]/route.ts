// Route: `${OUR_URL}/api/pet/:name`

export async function DELETE(request: Request, { params }: { params: { name: string } }) {
  const res = await fetch(`http://localhost:5000/api/v1/pet/${params.name}`, {
    method: 'DELETE'
  })
  const data = await res.json()
 
  return Response.json({ data })
}