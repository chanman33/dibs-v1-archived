import Link from "next/link";

const Form = () => {
    return (
        <form className="contact_form" action="#">
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
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-sm-12">
                    <div className="form-group mb0">

                        <Link href="/apply/step-two">
                            <button type="submit" className="btn btn-lg btn-thm">
                                Apply
                            </button>
                        </Link>

                    </div>
                    {/* End button submit */}
                </div>
            </div>
        </form>
    );
};

export default Form;