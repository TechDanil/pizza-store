const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Additional product details can be fetched and displayed here */}
    </div>
  ); 
};

export default ProductPage;