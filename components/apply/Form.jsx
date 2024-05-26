"use client";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm, submitFormAsync } from '../../features/form/formSlice';
import { useRouter } from 'next/navigation';

const Form = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state.form.formData);
  const formStatus = useSelector((state) => state.form.status);
  const formError = useSelector((state) => state.form.error);

  useEffect(() => {
    console.log('Router:', router);

    if (!router) return;

    console.log('Router is ready');
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(submitFormAsync(formData));

    if (result.meta.requestStatus === 'fulfilled') {
      router.push('/apply2');
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_first_name"
              name="form_first_name"
              className="form-control"
              required="required"
              type="text"
              placeholder="First Name"
              value={formData.form_first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_last_name"
              name="form_last_name"
              className="form-control"
              required="required"
              type="text"
              placeholder="Last Name"
              value={formData.form_last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_email"
              name="form_email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="Email"
              value={formData.form_email}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_phone"
              name="form_phone"
              className="form-control required phone"
              required="required"
              type="tel"
              placeholder="Phone Number"
              value={formData.form_phone}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-12">
          <div className="form-group">
            <input
              id="form_address"
              name="form_address"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Address"
              value={formData.form_address}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_city"
              name="form_city"
              className="form-control required"
              required="required"
              type="text"
              placeholder="City"
              value={formData.form_city}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_state"
              name="form_state"
              className="form-control required"
              required="required"
              type="text"
              placeholder="State"
              value={formData.form_state}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-sm-12">
          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              {formStatus === 'loading' ? 'Submitting...' : 'Apply'}
            </button>
          </div>
          {/* End button submit */}
        </div>
      </div>
      {formStatus === 'failed' && (
        <div className="error">{formError}</div>
      )}
    </form>
  );
};

export default Form;
