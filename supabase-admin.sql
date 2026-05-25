-- Allow admin (authenticated) to delete testimonials
alter table public.testimonials enable row level security;

drop policy if exists "testimonials_delete" on public.testimonials;

create policy "testimonials_delete" on public.testimonials
for delete
using (auth.uid() is not null);
