export const getRequiredQuery = (name: string) => {
  const route = useRoute()
  const queryValue = route.query[name] as string

  if(!queryValue) {
    throw new Error(`Query ${name} is required`)
  }

  return decodeURIComponent(
    queryValue
  )
}