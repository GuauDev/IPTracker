export async function Ipapi(ip: string): Promise<IpapiResponse | IpapiError> {
  try {
    const response = await fetch(`https://ipapi.co/${ip.trim()}/json/`)
    const data = await response.json()
    return data
  } catch {
    return {
      error: true,
      reason: 'Network Error',
      message: 'Network error occurred while fetching IP data.',
    }
  }
}
