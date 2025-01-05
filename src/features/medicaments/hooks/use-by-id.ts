import { useQuery } from '@tanstack/react-query'

export function useMedicamentById(id: string) {
  const { data, error, isLoading } = useQuery(
    ['medicament', id],  // queryKey
    fetchMedicamentById   // queryFn
  )

  return { data, error, isLoading }
}

async function fetchMedicamentById(id: string) {
  const response = await fetch(`/api/medicaments/${id}`)
  if (!response.ok) {
    throw new Error('Error fetching medicament data')
  }
  return response.json()
}
