-- Fikrlar moderatsiyasi: yangi fikrlar admin tasdig'idan keyingina saytda ko'rinadi.
-- Bu skriptni Supabase SQL Editor'da BIR MARTA ishga tushiring (deploy'dan OLDIN).

-- 1) approved ustuni (yangi fikrlar default'da tasdiqlanmagan)
alter table public.testimonials
  add column if not exists approved boolean not null default false;

-- 2) Hozirgacha yozilgan fikrlar saytda qolsin
update public.testimonials set approved = true;

-- 3) Ommaviy o'qish faqat tasdiqlangan fikrlar uchun; admin hammasini ko'radi
drop policy if exists "testimonials_select" on public.testimonials;
create policy "testimonials_select" on public.testimonials
for select
using (approved or auth.uid() = '69a9f71b-71cb-44c6-9828-c68827e9cfb7');

-- 4) Tasdiqlash (update) faqat admin uchun
drop policy if exists "testimonials_update" on public.testimonials;
create policy "testimonials_update" on public.testimonials
for update
using (auth.uid() = '69a9f71b-71cb-44c6-9828-c68827e9cfb7')
with check (auth.uid() = '69a9f71b-71cb-44c6-9828-c68827e9cfb7');
