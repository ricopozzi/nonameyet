import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mbwxosexkokgpeccfore.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

