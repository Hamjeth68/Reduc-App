import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseProducts } from './rootSlice'
import './Step1.css'

export const Step1 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const Products = useSelector(state => state.Products)
  const { register, handleSubmit } = useForm({ defaultValues: { Products } })

  const onSubmit = (data) => {
    dispatch(chooseProducts(data.Products))
    history.push("./step2")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div >
        <label htmlFor="Products">Pick base:</label>
        <seclect id="Products" name="Products" ref={register}>
          <ul>
            <li>
              <input value="Recyclable" type="checkbox" id="cb1" />
              <label htmlFor="cb1"><img src="/images/cotton.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb2" />
              <label htmlFor="cb2"><img src="/images/chipbor.png" alt="" /></label>
            </li>
            <li>
              <input value="Non_Recyclable" type="checkbox" id="cb3" />
              <label htmlFor="cb3"><img src="/images/bubblemailer.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb5" />
              <label htmlFor="cb5"><img src="/images/envelops.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb6" />
              <label htmlFor="cb6"><img src="/images/jute.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb7" />
              <label htmlFor="cb7"><img src="/images/ridigbox.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb8" />
              <label htmlFor="cb8"><img src="/images/plastic.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb9" />
              <label htmlFor="cb9"><img src="/images/tiuse.png" alt="" /></label>
            </li>
            <li>
              <input value="Hard-to-recycle" type="checkbox" id="cb10" />
              <label htmlFor="cb10"><img src="/images/softplastic.png" alt="" /></label>
            </li>
            <li>
              <input value="Non_Recyclable" type="checkbox" id="cb11" />
              <label htmlFor="cb11"><img src="/images/airbags.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb12" />
              <label htmlFor="cb12"><img src="/images/ploybags.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb13" />
              <label htmlFor="cb13"><img src="/images/kraftpaper.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb14" />
              <label htmlFor="cb14"><img src="/images/paperboardbox.png" alt="" /></label>
            </li>
            <li>
              <input value="Non_Recyclable" type="checkbox" id="cb15" />
              <label htmlFor="cb15"><img src="/images/stryform.png" alt="" /></label>
            </li>
            <li>
              <input value="Recyclable" type="checkbox" id="cb16" />
              <label htmlFor="cb16"><img src="/images/moldpump.png" alt="" /></label>
            </li>
          </ul>
        </seclect>
      </div>
      <button>Next</button>
    </form>
  )
}