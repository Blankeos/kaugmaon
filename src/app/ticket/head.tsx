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
    </>
  );
}
