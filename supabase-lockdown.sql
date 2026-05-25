-- Lock down testimonials insert to server-only and delete to admin UID
alter table public.testimonials enable row level security;

-- Remove open insert policy (server-only inserts go through service-role key)
drop policy if exists "testimonials_insert" on public.testimonials;

-- Keep public read
drop policy if exists "testimonials_select" on public.testimonials;
create policy "testimonials_select" on public.testimonials
for select
using (true);

-- Restrict delete to specific admin UID
drop policy if exists "testimonials_delete" on public.testimonials;
create policy "testimonials_delete" on public.testimonials
for delete
using (auth.uid() = '69a9f71b-71cb-44c6-9828-c68827e9cfb7');
