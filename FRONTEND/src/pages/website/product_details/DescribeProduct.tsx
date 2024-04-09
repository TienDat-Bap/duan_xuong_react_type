import React from 'react'
import icons44 from "../../../assets/icons/44.svg"
import icons45 from "../../../assets/icons/45.svg"


const DescribeProduct = ({product}) => {
  return (
    <div className="describeProduct">
          <div className="container">
            <div className="describe">
              <div className="describe-title">
                <a href="">
                  <h3>Description</h3>
                </a>
                <a href="">
                  <h3 className="h3">Additional Information</h3>
                </a>
                <a href="">
                  <h3>Reviews [5]</h3>
                </a>
              </div>
              <div className="describe-text">
                <p className="describe-text__a">
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </p>
                <p className="describe-text__b">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
              <div className="describe-image">
                <img style={{height:"348px",width:"605px",borderRadius:"15px"}} src={product.image} alt="" />
                <img style={{height:"348px",width:"605px",borderRadius:"15px"}} src={product.image} alt="" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default DescribeProduct