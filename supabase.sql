-- 1) Table
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  course text not null,
  rating int not null check (rating >= 1 and rating <= 5),
  comment text not null,
  created_at timestamptz not null default now()
);

-- 2) RLS
alter table public.testimonials enable row level security;

-- Allow anyone to read testimonials
drop policy if exists "testimonials_select" on public.testimonials;
create policy "testimonials_select" on public.testimonials
for select
using (true);

-- Allow anyone to insert testimonials
drop policy if exists "testimonials_insert" on public.testimonials;
create policy "testimonials_insert" on public.testimonials
for insert
with check (true);

-- 3) Optional seed data (run if you want initial reviews)
insert into public.testimonials (name, course, rating, comment)
values
  ('Aziz Rahimov', 'Matematika Abituriyentlar', 5, 'Matematika bo''yicha juda yaxshi o''qitadilar. O''qituvchilar professional va har bir talabaga alohida e''tibor berishadi.'),
  ('Dilnoza Karimova', 'Prezident maktabiga tayyorlov', 5, 'Farzandim prezident maktabiga o''qishga kirdi. Markazga katta rahmat! O''qituvchilar juda malakali.'),
  ('Bobur Tursunov', 'SAT', 5, 'SAT imtihoniga a''lo tayyorladdilar. Natijam kutganimdan ham yaxshi bo''ldi. Tavsiya qilaman!');
