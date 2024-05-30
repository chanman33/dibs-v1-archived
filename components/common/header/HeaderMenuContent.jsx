'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  
  const buy = [
    {
      id: 1, title: "Browse Listings", routerPath: "/listing-grid-v6"
    }
  ];

  const sell = [
    {
      id: 1,
      title: "Get Paid To Find Your Future Realtor",
      routerPath: "/apply",
    },
    {
      id: 2, title: "Compare Agents", routerPath: "/agent-v1",
    },
    {
      id: 3, title: "Search Agents",
      items: [
        {
          id: 1,
          name: "Agents",
          routerPath: "/agent-v1"
        },
        {
          id: 2,
          name: "Agencies",
          routerPath: "/agency-v2"
        },
      ],
    } 
  ];



  const property = [
    {
      id: 1,
      title: "User Admin",
      items: [
        {
          name: "Dashboard",
          routerPath: "/my-dashboard",
        },
        {
          name: "My Properties",
          routerPath: "/my-properties",
        },
        {
          name: "My Message",
          routerPath: "/my-message",
        },
        {
          name: "My Review",
          routerPath: "/my-review",
        },
        {
          name: "My Favourites",
          routerPath: "/my-favourites",
        },
        {
          name: "My Profile",
          routerPath: "/my-profile",
        },
        {
          name: "My Package",
          routerPath: "/my-package",
        },
        {
          name: "My Saved Search",
          routerPath: "/my-saved-search",
        },
        {
          name: "Add Property",
          routerPath: "/create-listing",
        },
      ],
    }
  ];

  const blog = [
    { id: 1, name: "News", routerPath: "/blog-list-3" },
  ];

  const pages = [
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 2, name: "Gallery", routerPath: "/gallery" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 6, name: "Membership", routerPath: "/membership" },

    { id: 7, name: "Register", routerPath: "/register" },
    { id: 8, name: "Service", routerPath: "/service" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >

      <li className="dropitem">
        <a href="#" > {/* className={buy.some(parent => Array.isArray(parent.items)) ? "ui-active" : undefined} */}
          <span className="title">Buy</span>
          {buy.some(parent => Array.isArray(parent.items)) && <span className="arrow"></span>}
        </a>
        <ul className="sub-menu">
          {buy.map((item) => (
            <li className="dropitem" key={item.id}>
              {Array.isArray(item.items) ? (
                // Parent item with submenu
                <>
                  <a href="#" className="dropitem">
                    {item.title}
                    {/* Add arrow next to the parent item */}
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    {item.items.map((val) => (
                      <li key={val.id || val.name} >
                        <Link
                          href={val.routerPath}
                          className={pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : undefined}
                        >
                          {val.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Leaf item without submenu
                <a
                  href={item.routerPath}
                  className={pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}


      <li className="dropitem">
         <a href="#" > {/*className={sell.some(parent => Array.isArray(parent.items)) ? "ui-active" : undefined} */}
          <span className="title">Sell</span>
          {sell.some(parent => Array.isArray(parent.items)) && <span className="arrow"></span>}
        </a>
        <ul className="sub-menu">
          {sell.map((item) => (
            <li className="dropitem" key={item.id}>
              {Array.isArray(item.items) ? (
                // Parent item with submenu
                <>
                  <a href="#" className="dropitem">
                    {item.title}
                    {/* Add arrow next to the parent item */}
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    {item.items.map((val) => (
                      <li key={val.id || val.name}>
                        <Link
                          href={val.routerPath}
                          className={pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : undefined}
                        >
                          {val.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Leaf item without submenu
                <a
                  href={item.routerPath}
                  className={pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}


      {/* <li className="dropitem">
        <a
          href="#"
          className={
            listing.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Listings</span>
          <span className="arrow"></span>
        </a> */}
        {/* <!-- Level Two--> */}

        {/* <ul className="sub-menu ">
          {listing.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}



      <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname?.split('/')[1]
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Dashboard</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname?.split('/')[1]
                    // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      href={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          // val.routerPath + "/[id]" === pathname?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1]
              // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1]
                    // item.routerPath + "/[id]" === pathname?.split('/')[1]
                    ? "ui-active"
                    : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/apply">
          {/* <span className="flaticon-plus"></span> */}
          <span className="dn-lg">$ Get Paid To List</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
