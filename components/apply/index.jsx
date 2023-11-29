import Header from "@/components/common/header/DefaultHeader";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumb from "../common/BreadCrumb";
import Form from "./Form";
import FaqContent from "../faq/FaqContent";



const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />



      {/* <!-- Inner Page Breadcrumb --> */}
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="breadcrumb_content">
                {/* <BreadCrumb title="about us" /> */}
                <h4 className="breadcrumb_title">Join Thousands of Other HomeOwners</h4>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>

      {/* <!-- Our Contact --> */}
      <section className="pb0 bgc-f7">
        <div className="container">
          <div className="form-container row">
            <div className="form col-lg-7 col-xl-8">
              <div className="form_grid">
                <h3 className="form-container mb5">Sign Up and Earn</h3>
                <p>
                  Choosing the right partner to navigate the complexities of the real estate market is crucial - but finding one is tedious and time consuming.
                  Get smart matched with the best and trusted brokers and agents!
                  <br />
                  <i>The best part?</i>
                  <br />
                  <strong>We'll pay you in advance of choosing your agent!</strong>
                  <br />
                  This innovative approach not only sets us apart from traditional real estate services but also demonstrates our confidence in our ability to deliver exceptional results.
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

      </section>

      <section className="pb0 bgc-f7">
        <div className="container">
          <div className="form-container row">
            <div className="col-lg-7 col-xl-8">
            <h4 className="form-container">FAQ</h4>
              <FaqContent></FaqContent>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;