import { useLoaderData } from "react-router-dom"


function SingleProduct() {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>

    </div>
  )
}

export default SingleProduct