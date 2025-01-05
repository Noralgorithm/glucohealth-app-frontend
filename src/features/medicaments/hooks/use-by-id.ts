import { useQuery } from '@tanstack/react-query'

export function useMedicamentById(id: string) {
  const { data, error, isLoading } = useQuery(
    ['medicament', id],  // El queryKey que es único para cada medicament
    () => fetchMedicamentById(id)  // queryFn: función que obtiene los datos del medicament
  )

  return { data, error, isLoading }
}

// Esta es la función que hace la consulta para obtener el medicament por su ID
async function fetchMedicamentById(id: string) {
  const response = await fetch(`/api/medicaments/${id}`)
  if (!response.ok) {
    throw new Error('Error fetching medicament data')
  }
  return response.json()
}