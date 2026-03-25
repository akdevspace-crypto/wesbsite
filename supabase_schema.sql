-- 1. Create the subscribers table
CREATE TABLE IF NOT EXISTS public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp default now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow inserting from the backend/public
-- Note: Since we use the 'anon' key from the backend, we need this policy 
-- unless we use the 'service_role' key.
CREATE POLICY "Allow public insert" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- 4. (Optional) Allow service role to do everything
-- This is default behavior in Supabase, but good to have documented.
ALTER TABLE public.subscribers FORCE ROW LEVEL SECURITY;
