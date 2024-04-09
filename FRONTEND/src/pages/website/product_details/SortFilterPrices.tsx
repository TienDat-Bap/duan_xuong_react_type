import React from 'react'
import icons31 from "../../../assets/icons/31.svg"
import icons32 from "../../../assets/icons/32.svg"
import icons33 from "../../../assets/icons/33.svg"

type Props = {}

const SortFilterPrices = (props: Props) => {
  return (
    <section className="SortFilterPrices">
          <div className="SortFilterPrice-container">
            <div className="SortFilterPrice-Filter">
              <img src={icons31} alt="" />
              <img
                className="SortFilterPrice-Filter__items"
                src={icons32}
                alt=""
              />
              <sub>
                <img
                  src={icons33}
                  className="SortFilterPrice-Filter__itemss"
                  alt=""
                />
              </sub>
            </div>
          </div>
        </section>
  )
}

export default SortFilterPrices