import React from "react";

export default function 
Mainpanel(props) {
  return (
    <>
      <div className="main-panel">
        <div className="main-header">
          <div className="main-header-logo">
            <div className="logo-header" data-background-color="dark">
              <a href="index.html" className="logo">
                <img
                  src="assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="20"
                />
              </a>
              <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right"></i>
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left"></i>
                </button>
              </div>
              <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt"></i>
              </button>
            </div>
          </div>

          <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-search pe-1">
                      <i className="fa fa-search search-icon"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                  />
                </div>
              </nav>

              <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-search animated fadeIn">
                    <form className="navbar-left navbar-form nav-search">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search ..."
                          className="form-control"
                        />
                      </div>
                    </form>
                  </ul>
                </li>
                <li className="nav-item topbar-icon dropdown hidden-caret">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="messageDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                  <ul
                    className="dropdown-menu messages-notif-box animated fadeIn"
                    aria-labelledby="messageDropdown"
                  >
                    <li>
                      <div className="dropdown-title d-flex justify-content-between align-items-center">
                        Messages
                        <a href="#" className="small">
                          Mark all as read
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="message-notif-scroll scrollbar-outer">
                        <div className="notif-center">
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="assets/img/jm_denis.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Jimmy Denis</span>
                              <span className="block"> How are you ? </span>
                              <span className="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="assets/img/chadengle.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Chad</span>
                              <span className="block"> Ok, Thanks ! </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="assets/img/mlane.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Jhon Doe</span>
                              <span className="block">
                                Ready for the meeting today...
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="assets/img/talha.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Talha</span>
                              <span className="block"> Hi, Apa Kabar ? </span>
                              <span className="time">17 minutes ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="see-all" href="javascript:void(0);">
                        See all messages<i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item topbar-icon dropdown hidden-caret">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="notifDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell"></i>
                    <span className="notification">4</span>
                  </a>
                  <ul
                    className="dropdown-menu notif-box animated fadeIn"
                    aria-labelledby="notifDropdown"
                  >
                    <li>
                      <div className="dropdown-title">
                        You have 4 new notification
                      </div>
                    </li>
                    <li>
                      <div className="notif-scroll scrollbar-outer">
                        <div className="notif-center">
                          <a href="#">
                            <div className="notif-icon notif-primary">
                              <i className="fa fa-user-plus"></i>
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                {" "}
                                New user registered{" "}
                              </span>
                              <span className="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-icon notif-success">
                              <i className="fa fa-comment"></i>
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                Rahmad commented on Admin
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="assets/img/profile2.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                Reza send messages to you
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-icon notif-danger">
                              <i className="fa fa-heart"></i>
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                {" "}
                                Farrah liked Admin{" "}
                              </span>
                              <span className="time">17 minutes ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="see-all" href="javascript:void(0);">
                        See all notifications
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item topbar-icon dropdown hidden-caret">
                  <a
                    className="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="fas fa-layer-group"></i>
                  </a>
                  <div className="dropdown-menu quick-actions animated fadeIn">
                    <div className="quick-actions-header">
                      <span className="title mb-1">Quick Actions</span>
                      <span className="subtitle op-7">Shortcuts</span>
                    </div>
                    <div className="quick-actions-scroll scrollbar-outer">
                      <div className="quick-actions-items">
                        <div className="row m-0">
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <div className="avatar-item bg-danger rounded-circle">
                                <i className="far fa-calendar-alt"></i>
                              </div>
                              <span className="text">Calendar</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <div className="avatar-item bg-warning rounded-circle">
                                <i className="fas fa-map"></i>
                              </div>
                              <span className="text">Maps</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <div className="avatar-item bg-info rounded-circle">
                                <i className="fas fa-file-excel"></i>
                              </div>
                              <span className="text">Reports</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <div className="avatar-item bg-success rounded-circle">
                                <i className="fas fa-envelope"></i>
                              </div>
                              <span className="text">Emails</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <div className="avatar-item bg-primary rounded-circle">
                                <i className="fas fa-file-invoice-dollar"></i>
                              </div>
                              <span className="text">Invoice</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <div className="avatar-item bg-secondary rounded-circle">
                                <i className="fas fa-credit-card"></i>
                              </div>
                              <span className="text">Payments</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item topbar-user dropdown hidden-caret">
                  <a
                    className="dropdown-toggle profile-pic"
                    data-bs-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <div className="avatar-sm">
                      <img
                        src="assets/img/profile.jpg"
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <span className="profile-username">
                      <span className="op-7">Hi,</span>
                      <span className="fw-bold">{props.title}</span>
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-user animated fadeIn">
                    <div className="dropdown-user-scroll scrollbar-outer">
                      <li>
                        <div className="user-box">
                          <div className="avatar-lg">
                            <img
                              src="assets/img/profile.jpg"
                              alt="image profile"
                              className="avatar-img rounded"
                            />
                          </div>
                          <div className="u-text">
                            <h4>Hizrian</h4>
                            <p className="text-muted">hello@example.com</p>
                            <a
                              href="profile.html"
                              className="btn btn-xs btn-secondary btn-sm"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          My Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          My Balance
                        </a>
                        <a className="dropdown-item" href="#">
                          Inbox
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Account Setting
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="page-inner">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
              <div>
                <h3 className="fw-bold mb-3">Dashboard</h3>
                <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
              </div>
              <div className="ms-md-auto py-2 py-md-0">
                <a href="#" className="btn btn-label-info btn-round me-2">
                  Manage
                </a>
                <a href="#" className="btn btn-primary btn-round">
                  Add Customer
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-primary bubble-shadow-small">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Visitors</p>
                          <h4 className="card-title">1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-info bubble-shadow-small">
                          <i className="fas fa-user-check"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Subscribers</p>
                          <h4 className="card-title">1303</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-success bubble-shadow-small">
                          <i className="fas fa-luggage-cart"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Sales</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-secondary bubble-shadow-small">
                          <i className="far fa-check-circle"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Order</p>
                          <h4 className="card-title">576</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="card card-round">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">User Statistics</div>
                      <div className="card-tools">
                        <a
                          href="#"
                          className="btn btn-label-success btn-round btn-sm me-2"
                        >
                          <span className="btn-label">
                            <i className="fa fa-pencil"></i>
                          </span>
                          Export
                        </a>
                        <a
                          href="#"
                          className="btn btn-label-info btn-round btn-sm"
                        >
                          <span className="btn-label">
                            <i className="fa fa-print"></i>
                          </span>
                          Print
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      className="chart-container"
                      style={{ minHeight: "375px" }}
                    >
                      <canvas id="statisticsChart"></canvas>
                    </div>
                    <div id="myChartLegend"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-primary card-round">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">Daily Sales</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-label-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Export
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-category">March 25 - April 02</div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="mb-4 mt-2">
                      <h1>$4,578.58</h1>
                    </div>
                    <div className="pull-in">
                      <canvas id="dailySalesChart"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card card-round">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-primary">+5%</div>
                    <h2 className="mb-2">17</h2>
                    <p className="text-muted">Users online</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-round">
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <h4 className="card-title">Users Geolocation</h4>
                      <div className="card-tools">
                        <button className="btn btn-icon btn-link btn-primary btn-xs">
                          <span className="fa fa-angle-down"></span>
                        </button>
                        <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                          <span className="fa fa-sync-alt"></span>
                        </button>
                        <button className="btn btn-icon btn-link btn-primary btn-xs">
                          <span className="fa fa-times"></span>
                        </button>
                      </div>
                    </div>
                    <p className="card-category">
                      Map of the distribution of users around the world
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="table-responsive table-hover table-sales">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/id.png"
                                      alt="indonesia"
                                    />
                                  </div>
                                </td>
                                <td>Indonesia</td>
                                <td className="text-end">2.320</td>
                                <td className="text-end">42.18%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/us.png"
                                      alt="united states"
                                    />
                                  </div>
                                </td>
                                <td>USA</td>
                                <td className="text-end">240</td>
                                <td className="text-end">4.36%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/au.png"
                                      alt="australia"
                                    />
                                  </div>
                                </td>
                                <td>Australia</td>
                                <td className="text-end">119</td>
                                <td className="text-end">2.16%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/ru.png"
                                      alt="russia"
                                    />
                                  </div>
                                </td>
                                <td>Russia</td>
                                <td className="text-end">1.081</td>
                                <td className="text-end">19.65%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/cn.png"
                                      alt="china"
                                    />
                                  </div>
                                </td>
                                <td>China</td>
                                <td className="text-end">1.100</td>
                                <td className="text-end">20%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/br.png"
                                      alt="brazil"
                                    />
                                  </div>
                                </td>
                                <td>Brasil</td>
                                <td className="text-end">640</td>
                                <td className="text-end">11.63%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mapcontainer">
                          <div
                            id="world-map"
                            className="w-100"
                            style={{ minHeight: "300px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-round">
                  <div className="card-body">
                    <div className="card-head-row card-tools-still-right">
                      <div className="card-title">New Customers</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-clean me-0"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-list py-4">
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/jm_denis.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Jimmy Denis</div>
                          <div className="status">Graphic Designer</div>
                        </div>
                        <button className="btn btn-icon btn-link op-8 me-1">
                          <i className="far fa-envelope"></i>
                        </button>
                        <button className="btn btn-icon btn-link btn-danger op-8">
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <span className="avatar-title rounded-circle border border-white">
                            CF
                          </span>
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Chandra Felix</div>
                          <div className="status">Sales Promotion</div>
                        </div>
                        <button className="btn btn-icon btn-link op-8 me-1">
                          <i className="far fa-envelope"></i>
                        </button>
                        <button className="btn btn-icon btn-link btn-danger op-8">
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/talha.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Talha</div>
                          <div className="status">Front End Designer</div>
                        </div>
                        <button className="btn btn-icon btn-link op-8 me-1">
                          <i className="far fa-envelope"></i>
                        </button>
                        <button className="btn btn-icon btn-link btn-danger op-8">
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/chadengle.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Chad</div>
                          <div className="status">CEO Zeleaf</div>
                        </div>
                        <button className="btn btn-icon btn-link op-8 me-1">
                          <i className="far fa-envelope"></i>
                        </button>
                        <button className="btn btn-icon btn-link btn-danger op-8">
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <span className="avatar-title rounded-circle border border-white bg-primary">
                            H
                          </span>
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Hizrian</div>
                          <div className="status">Web Designer</div>
                        </div>
                        <button className="btn btn-icon btn-link op-8 me-1">
                          <i className="far fa-envelope"></i>
                        </button>
                        <button className="btn btn-icon btn-link btn-danger op-8">
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <span className="avatar-title rounded-circle border border-white bg-secondary">
                            F
                          </span>
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Farrah</div>
                          <div className="status">Marketing</div>
                        </div>
                        <button className="btn btn-icon btn-link op-8 me-1">
                          <i className="far fa-envelope"></i>
                        </button>
                        <button className="btn btn-icon btn-link btn-danger op-8">
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card card-round">
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <div className="card-title">Transaction History</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-clean me-0"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table align-items-center mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Payment Number</th>
                            <th scope="col" className="text-end">
                              Date & Time
                            </th>
                            <th scope="col" className="text-end">
                              Amount
                            </th>
                            <th scope="col" className="text-end">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid d-flex justify-content-between">
            <nav className="pull-left">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="http://www.themekita.com">
                    ThemeKita
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Help{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Licenses{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright">
              2024, made with <i className="fa fa-heart heart text-danger"></i>{" "}
              by
              <a href="http://www.themekita.com">ThemeKita</a>
            </div>
            <div>
              Distributed by
              <a target="_blank" href="https://themewagon.com/">
                ThemeWagon
              </a>
              .
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
