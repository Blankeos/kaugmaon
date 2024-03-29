import DefaultTags from "@/components/DefaultTags";

async function getPost() {
  const res = await fetch("http://localhost:3000/api/ticket");
  return res.json();
}

// export default async function Head({ params }: { params: { slug: string } }) {
export default async function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <DefaultTags />
      <title>Ticket | Kaugmaon</title>
      <meta
        name="description"
        content="Brought to you by Link.exe, RealITy has been a venue for students to
          show their talents in the field of emerging technologies, and we are
          bringing it back this year 2023!"
      />
      <meta property="og:title" content="Ticket | Kaugmaon" />
      <meta
        property="og:description"
        content="Brought to you by Link.exe, RealITy has been a venue for students to
          show their talents in the field of emerging technologies, and we are
          bringing it back this year 2023!"
      />
    </>
  );
}
