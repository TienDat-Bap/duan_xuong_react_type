import { useProductQuery } from "@/common/hooks/useProductQuery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import DescribeProduct from "./DescribeProduct";
import NewDetails from "./NewDetails";
import Product from "./Product";
import SortFilterPrices from "./SortFilterPrices";



const ProductDetails = () => {
  const { id } = useParams();
    const { data: product, isLoading } = useProductQuery({ id: id! });
    const { data: relatedProduct } = useQuery({
        queryKey: ["RELATED_PRODUCT"],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/products/${product.category}/related/${product._id}`,
            );
            return data;
        },
    });

    if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div>
        <SortFilterPrices />
        {/*--------------------------------End .SortFilterPrice-----------------------------------------------------*/}
        <Product product={product} />
        {/*----------------------------------end Productdetails----------------------------------------------------------------- */}
        <DescribeProduct product={product}/>
        {/* ---------------------------------end describeProduct-------------------------------------------- */}
        <NewDetails relatedProduct={relatedProduct} />
        {/*------------------------------------------------------End .news------------------------------------------------*/}
      </div>
    </>
  );
};

export default ProductDetails;
