import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

type PaginationProps = {
  totalPages: number
}

const NextPage: React.FC<PaginationProps> = ({ totalPages }) => {
  const [params] = useSearchParams()
    const page = params.get('page')
  return (
    <div className="container">
        <div className="next-page">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link key={i + 1} to={`?page=${i + 1}`} className={parseInt(page || '1') === i + 1 ? 'active' : ''}>
            <button className="next-page__btn">{i + 1}</button>
          </Link>
           ))}
          {/* <a href="">
            <button className="next-page__btns">2</button>
          </a>
          <a href="">
            <button className="next-page__btns">3</button>
          </a>
          <a href="">
            <button className="next-page__btnss">Next</button>
          </a> */}
        </div>
      </div>
  )
}

export default NextPage