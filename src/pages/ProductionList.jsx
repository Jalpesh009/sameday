import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';

const ProductionList = props => {
  return (
    <div className="detail-listing-page">
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-lg-3 ml-5 dashboard-head">
            <ul className="p-0">
              <li>
                <Link className="back-page" to={'/dashboard'}>
                  Back
                </Link>
              </li>
              <li>
                <h2 className="head-title">Production House</h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 p-4">
          <div className="col-lg-6 order-id">
            <p>Order: #ADJ2322434D</p>
            <Link to={'/'}>{`Account Setup > Delivery Method`}</Link>
          </div>
          <div className="col-lg-6 production-status">
            <p>
              Production Status
              <strong className="running">Running 2 of 4</strong>
            </p>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-lg-12 product-details">
            <ul className="product-detail-row">
              <li className="custom-width">
                <p className="order-value">Order Value</p>
                <p className="color-blue">$40,000</p>
              </li>
              <li className="custom-width">
                <p>Order Date</p>
                <p className="color-blue">25 - June - 2017</p>
              </li>
              <li className="custom-width">
                <p>Delivery Method</p>
                <p className="color-blue pick-up-text">Pickup Order</p>
                <Dropdown>
                  <Dropdown.Toggle
                    className="pick-order"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Can Edit
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="custom-width">
                <p className="detail-page-rush-text">Rush option</p>
                <p className="color-blue detail-page-rush">Rush</p>
              </li>
              <li className="custom-width">
                <p>Status</p>
                <p className="color-blue">Pending</p>
              </li>
              <li className="custom-width">
                <p>Requested By</p>
                <p className="color-blue">25 - June - 2017</p>
                <p className="timer">
                  Time Left <strong>10:00:00</strong>
                </p>
              </li>
              <li className="custom-width">
                <p>Shipped or Picked Date</p>
                <p className="color-blue">25 - June - 2017</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-5 production-tabing">
            <ul className="p-0">
              <li>
                <Link className="Product-detail" to={'/'}>
                  Product Detail
                </Link>
              </li>
              <li>
                <Link className="history-note" to={'/'}>
                  History/Notes
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 production-tabing-2">
            <ul className="text-right">
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    className="detail-worksheet"
                    variant="Secondary"
                    id="dropdown-basic"
                  >
                    Worksheet
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
                  Print
                </Button>
              </li>
              <li>
                <Link className="print-worksheet" to={'/'}>
                  Add Note
                </Link>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    className="detail-complete"
                    variant="Secondary"
                    id="dropdown-basic"
                  >
                    Complete Production
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div className="row m-0 p-3 row-product">
          <div className="col-lg-6 prod">
            <p>Product</p>
          </div>
          <div className="col-lg-6 download-artwork">
            <Button className="dwnld" variant="secondary">
              Download Artwork
            </Button>
          </div>
        </div>
        <div className="row mt-5 related-images">
          <div className="col-lg-2">
            <img
              className="w-100"
              alt="headerbg"
              src={require('../assets/images/related.png')}
            />
            <p className="text-center my-3">Front</p>
          </div>
          <div className="col-lg-2">
            <img
              className="w-100"
              alt="headerbg"
              src={require('../assets/images/related.png')}
            />
            <p className="text-center  my-3">Front</p>
          </div>{' '}
          <div className="col-lg-2">
            <img
              className="w-100"
              alt="headerbg"
              src={require('../assets/images/related.png')}
            />
            <p className="text-center  my-3">Front</p>
          </div>{' '}
          <div className="col-lg-2">
            <img
              className="w-100"
              alt="headerbg"
              src={require('../assets/images/related.png')}
            />
            <p className="text-center  my-3">Front</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 production-table">
            <ul className="first-row product-detail-table">
              <li className="custom-width">
                <Form.Check
                  className="production-checkbox"
                  aria-label="option 1"
                />
              </li>
              <li className="custom-width">
                <p>Item#</p>
              </li>

              <li className="custom-width-detail">
                <p>Details</p>
              </li>

              <li className="custom-width">
                <p>Production Type</p>
              </li>
              <li className="custom-width">
                <p>Color</p>
              </li>
              <li className="custom-width">
                <p>Qty</p>
              </li>

              <li className="custom-width min-width">
                <p>paid</p>
              </li>
            </ul>
            <ul className="second-row product-detail-table-second">
              <li className="custom-width">
                <Form.Check
                  className="production-checkbox"
                  aria-label="option 1"
                />
              </li>

              <li className="custom-width">
                <p>#232jojdsdkn2</p>
              </li>

              <li className="custom-width-detail">
                <Media>
                  <img
                    alt="headerbg"
                    src={require('../assets/images/cloth.png')}
                  />

                  <Media.Body>
                    <Link to={'/product'}>
                      <p className="color-black">
                        No Minimum - More Color Available - Gildan unisex ultra
                        cotton T- shirt (NY1)
                      </p>
                    </Link>
                  </Media.Body>
                </Media>
              </li>
              <li className="custom-width">
                <p className="dtg-print">DTG Print</p>
              </li>
              <li className="custom-width">
                <Button className="color-btn">Royal</Button>
              </li>
              <li className="custom-width">
                <p>L X 4</p>
              </li>

              <li className="custom-width">
                <p className="paid-in">Paid in Full</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionList;
