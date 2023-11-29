

import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import Footer from "@/components/common/footer/Footer";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import CreateList from "@/components/dashboard/create-listing/CreateList";

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
                <h4 className="breadcrumb_title">Tell Us More About Your Property</h4>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>

      <section className="pb0 bgc-f7">
        <div className="container">
          <div className="form-container row">
            <div className="col-lg-7 col-xl-8">
              <div className="my_dashboard_review form">
              <div className="row">
                <div className="col-lg-12">
                </div>
                <CreateList />
              </div>
            </div>
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