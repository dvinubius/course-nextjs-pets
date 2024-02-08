'use server'

export async function createPet(data: FormData) {
  const payload = {
    name: data.get('name'),
    description: data.get('description')
  };
  const resp = await fetch('http://localhost:5000/api/v1/pet', {
    method: 'POST', 
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  });
  const parsedResp = await resp.json();
  return parsedResp;
}

export async function deletePet(name: string) {
  const resp = await fetch(`http://localhost:5000/api/v1/pet/${name}`, {
    method: 'DELETE', 
    headers: {'Content-Type': 'application/json'}
  });
  return resp;
}
