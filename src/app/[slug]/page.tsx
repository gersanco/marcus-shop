export default function ProductPage({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
