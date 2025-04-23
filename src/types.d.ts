interface IpapiResponse {
  ip: string
  city: string
  region: string
  region_code: string
  country: string
  country_code: string
  country_code_iso3: string
  country_name: string
  coutry_capital: string
  country_tld: string
  country_area: string
  country_population: string
  continent_code: string
  in_eu: boolean
  postal: string
  latitude: number
  longitude: number
  latlong: string
  timezone: string
  utc_offset: string
  country_calling_code: string
  currency: string
  curency_name: string
  languages: string
  asn: string
  org: string
  hostaname?: string
}

interface IpapiError {
  error: boolean
  reason: 'Invalid IP Address' | 'Reserved IP Address' | 'Network Error'
  reserved?: boolean
  message?: string
}

type IconType =
  | 'MapPin'
  | 'Globe'
  | 'Compass'
  | 'LocateIcon'
  | 'Clock'
  | 'Server'
  | 'Wifi'
  | 'CreditCard'
  | 'Phone'
  | 'Languages'
