'use client'

// import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar
} from "react-pro-sidebar";
import Link from "next/link";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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

const MobileMenuContent = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      <div className="sidebar-header">
        <Link href="/" className="sidebar-header-inner">
          <Image
            width={40}
            height={45}
            className="nav_logo_img img-fluid mt20"
            src="/assets/images/header-logo2.png"
            alt="header-logo.png"
          />
        </Link>
        {/* End .logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="flaticon-close"></span>
        </div>
        {/* Mobile Menu close icon */}
      </div>

      {/* End logo */}
      <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        <Menu>
          <SubMenu
            label="Buy"
            className={
              buy.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {buy.map((val, i) => (
              <MenuItem key={i} active={true}>
                <div
                  onClick={() => router.push(val.routerPath)}
                  className={
                    val.routerPath?.split('/')[1] === pathname.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.title}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Buy SubMenu */}

          <SubMenu
            label="Sell"
            className={
              sell.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {sell.map((val, i) => (
              <MenuItem key={i} active={true}>
                <div
                  onClick={() => router.push(val.routerPath)}
                  className={
                    val.routerPath?.split('/')[1] === pathname.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.title}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Sell SubMenu */}


          <SubMenu
            label="Property"
            className={
              property.some((parent) => {
                return parent.items.some(
                  (page) =>
                    page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                    page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {property.map((item) => (
              <SubMenu
                label={item.title}
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                      page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                  )
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                      onClick={() => router.push(val.routerPath)}
                      className={
                        pathname.split('/')[1] === val.routerPath?.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Property SubMenu */}

          <SubMenu
            label="Blog"
            className={
              blog.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname.split('/')[1]
              )
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {blog.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={() => router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                      ? "ui-active"
                      : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Blog SubMenu */}

          <MenuItem>
            <div
              onClick={() => router.push("/contact")}
              className={
                pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Contact
            </div>
          </MenuItem>

          <MenuItem>
            <div
              onClick={() => router.push("/login")}
              className={pathname === "/login" ? "ui-active" : 'inactive-mobile-menu'}
            >
              <span className="flaticon-user"></span> Login
            </div>
          </MenuItem>

          <MenuItem>
            <div
              onClick={() => router.push("/register")}
              className={
                pathname === "/register" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              <span className="flaticon-edit"></span> Register
            </div>
          </MenuItem>
        </Menu>
      </div>
      {/* End Sidebar */}

      <Link
        href="/create-listing"
        className="btn btn-block btn-lg btn-thm circle"
        style={{ width: '90%', margin: '0px auto' }}
      >
        <span className="flaticon-plus"></span> Create Listing
      </Link>
    </>
  );
};

export default MobileMenuContent;
