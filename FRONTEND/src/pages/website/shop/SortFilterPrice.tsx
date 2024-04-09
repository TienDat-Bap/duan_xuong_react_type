import { useSearchParams } from "react-router-dom"
import icons26 from "../../../assets/icons/26.svg"
import icons27 from "../../../assets/icons/27.svg"
import icons28 from "../../../assets/icons/28.svg"
import icons29 from "../../../assets/icons/29.svg"
import NewShop from "./NewShop"
import { ChangeEvent, useEffect, useState } from "react"
import { useProductQuery } from "@/common/hooks/useProductQuery"



const SortFilterPrice = () => {
  const [params] = useSearchParams()
    const page = params.get('page')

    const [limit, setLimit] = useState(16)
    const [currentPage, setCurrentPage] = useState(page || 1)

    const { data, isLoading, refetch } = useProductQuery({ _page: page, _limit: limit })
    useEffect(() => {
        if (page && +page !== currentPage) {
            setCurrentPage(+page)
        }
    }, [page, currentPage])

    const handleLimitChange = (event: ChangeEvent<any>) => {
        setLimit(event.target.value)
        refetch() // Gọi lại API với limit mới và trang đầu tiên
    }
    const { data: products, pagination } = data || { data: [], pagination: {} }
    if (isLoading) return <div>...Loading</div>
  return (
    <>
    <section className="SortFilterPrice">
        <div className="SortFilterPrice-container">
          <div className="SortFilterPrice-Filter">
            <img src={icons26} alt="" />
            <img
              className="SortFilterPrice-Filter__item"
              src={icons27}
              alt=""
            />
            <img
              className="SortFilterPrice-Filter__items"
              src={icons28}
              alt=""
            />
            <sub>
              <img
                src={icons29}
                className="SortFilterPrice-Filter__item3"
                alt=""
              />
            </sub>
          </div>
          <div className="SortFilterPrice-price">
          {isLoading ? (
                <p>Loading...</p>
            ) : (
            <div className="SortFilterPrice-price-show">
            <label htmlFor='limit'>Show:</label>
              <select className="SortFilterPrice-price-show__item" id='limit' onChange={handleLimitChange} defaultValue={limit}>
                <option value='4'>4</option>
                <option value='8'>8</option>
                <option value='12'>12</option>
                <option value='16'>16</option>
              </select>
            </div>
            )}
            <div className="SortFilterPrice-price--shostby">
              <span>Short by</span>
              <input
                className="SortFilterPrice-price-shostby__item"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
      <NewShop products={products} pagination={pagination} />
    </>
  )
}

export default SortFilterPrice