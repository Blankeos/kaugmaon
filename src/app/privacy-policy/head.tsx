import DefaultTags from "@/components/DefaultTags";

export default async function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <DefaultTags />
      <title>Privacy Policy | Kaugmaon</title>
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
      <meta
        name="twitter:description"
        content="Brought to you by Link.exe, RealITy has been a venue for students to
        show their talents in the field of emerging technologies, and we are
        bringing it back this year 2023!"
      />
    </>
  );
}
