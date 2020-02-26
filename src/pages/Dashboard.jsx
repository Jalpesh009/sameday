import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';
const Dashboard = props => {
  return (
    <div className="listing-page">
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-lg-3 ml-5 dashboard-head">
            <h2 className="head-title">Production House</h2>
          </div>
          <div className="col-lg-4 dashboard-dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-lg-4 dashboard-search">
            <input
              className="form-control search-bar"
              type="text"
              placeholder=""
              aria-label="Search"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 production-tabing">
            <ul className="p-0">
              <li>
                <Link className="all-production" to={'/'}>
                  All Production
                </Link>
              </li>
              <li>
                <Link className="awaiting-production" to={'/'}>
                  Awaiting Production
                </Link>
              </li>
              <li>
                <Link className="completed-production" to={'/'}>
                  Completed
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 production-tabing-2">
            <ul className="text-right">
              <li>
                <Link className="print-worksheet" to={'/'}>
                  Print Worksheet
                </Link>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    className="mark-as"
                    variant="Secondary"
                    id="dropdown-basic"
                  >
                    Mark as Complete
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Button className="save-production" variant="secondary">
                  Save
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 production-table">
            <ul className="first-row">
              <li className="w-1">
                <Form.Check
                  className="production-checkbox"
                  aria-label="option 1"
                />
              </li>
              <li className="w-2">
                <p>Order#</p>
              </li>
              <li className="w-3">
                <p>Item#</p>
              </li>

              <li className="w-4">
                <p>Details</p>
              </li>
              <li className="w-5">
                <p>Color</p>
              </li>
              <li className="w-6">
                <p>Qty</p>
              </li>
              <li className="w-7 min-width">
                <p>Print Type</p>
              </li>
              <li className="w-8 min-width">
                <p>Delivery Method</p>
              </li>
              <li className="w-9">
                <p>Delivery Time</p>
              </li>
              <li className="w-10">
                <p>Production Status</p>
              </li>
            </ul>
            <ul className="second-row">
              <li className="w-1">
                <Form.Check
                  className="production-checkbox"
                  aria-label="option 1"
                />
              </li>
              <li className="w-2">
                <p>#232jojdsdkn2</p>
              </li>
              <li className="w-3">
                <p>#232jojdsdkn2</p>
              </li>

              <li className="w-4">
                <Media>
                  <img
                    alt="headerbg"
                    src={require('../assets/images/cloth.png')}
                  />

                  <Media.Body>
                    <Link to={'/product-details'}>
                      <p className="color-black">
                        No Minimum - More Color Available - Gildan unisex ultra
                        cotton T- shirt (NY1)
                      </p>
                    </Link>
                  </Media.Body>
                </Media>
              </li>
              <li className="w-5">
                <Button className="color-btn">Royal</Button>
              </li>
              <li className="w-6">
                <p>L X 4</p>
              </li>
              <li className="w-7">
                <p>DTG Print</p>
              </li>
              <li className="w-8 clock">
                <Media>
                  <img
                    alt="headerbg"
                    src={require('../assets/images/clock.png')}
                  />

                  <Media.Body>
                    <p className="rush">Rush Shipping</p>
                  </Media.Body>
                </Media>
              </li>
              <li className="w-9">
                <p>23 - June - 2019</p>
                <p className="timer">
                  Time Left <strong>10:00:00</strong>
                </p>
              </li>
              <li className="w-10">
                <p className="running">Running 2 of 5</p>
              </li>
            </ul>
            <ul className="third-row">
              <li className="w-1">
                <Form.Check
                  className="production-checkbox"
                  aria-label="option 1"
                />
              </li>
              <li className="w-2">
                <p>#232jojdsdkn2</p>
              </li>
              <li className="w-3">
                <p>#232jojdsdkn2</p>
              </li>

              <li className="w-4">
                <Media>
                  <img
                    alt="headerbg"
                    src={require('../assets/images/cloth.png')}
                  />

                  <Media.Body>
                    <Link to={'/product-details'}>
                      <p className="color-black">
                        No Minimum - More Color Available - Gildan unisex ultra
                        cotton T- shirt (NY1)
                      </p>
                    </Link>
                  </Media.Body>
                </Media>
              </li>
              <li className="w-5">
                <Button className="color-btn">Royal</Button>
              </li>
              <li className="w-6">
                <p>L X 4</p>
              </li>
              <li className="w-7">
                <p>DTG Print</p>
              </li>
              <li className="w-8 clock">
                <p className="pickup">Pickup Order</p>
              </li>
              <li className="w-9">
                <p>23 - June - 2019</p>
                <p className="timer">
                  Time Left <strong>10:00:00</strong>
                </p>
              </li>
              <li className="w-10">
                <p className="running">Running 2 of 5</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
