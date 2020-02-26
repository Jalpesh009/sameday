import { Avatar, Dropdown, Icon, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'src/hooks';
import styles from './index.module.scss';
import './new-header.scss';

interface HomeHeaderProps {
  [key: string]: any;
}

const Marketmenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default function HomeHeader(props: HomeHeaderProps) {
  const { collapseMenu, userInfo } = useStoreState(state => state.globalModel);
  const setCollapseMenu = useStoreActions(
    actions => actions.globalModel.setCollapseMenu,
  );

  return (
    <div className={styles.wrap}>
      <Icon
        className={styles.btn_toggle}
        type={collapseMenu ? 'menu-unfold' : 'menu-fold'}
        onClick={() => setCollapseMenu(!collapseMenu)}
      />
      <div className="modified-logo">
        <img alt="headermsg" src={require('../../assets/images/sameday.png')} />
      </div>
      <div className="modified-header">
        <ul className="p-0 m-0 d-flex list-group-horizontal">
          <li className="d-block b-right b-left position-relative">
            <Link to={'/'}>
              <img
                alt="headersearch"
                src={require('../../assets/images/search.png')}
              />
            </Link>
          </li>
          <li className="d-block b-right  position-relative">
            <img
              className="header-icon-mail"
              alt="headermsg"
              src={require('../../assets/images/mail.png')}
            />
            <Link className="header-msg ml-2" to={'/'}>
              Message
            </Link>
          </li>
          <li className="d-block b-right  position-relative">
            <img
              className="header-icon-market"
              alt="headermsg"
              src={require('../../assets/images/order.png')}
            />
            <Dropdown overlay={Marketmenu}>
              <a
                className="ant-dropdown-link market-place ml-2"
                onClick={e => e.preventDefault()}
              >
                Market Place <Icon type="caret-down" />
              </a>
            </Dropdown>
          </li>
          <li className="d-block b-right  position-relative">
            <img
              className="header-icon-notification"
              alt="headermsg"
              src={require('../../assets/images/notification.png')}
            />
            <Link className="header-notification ml-2" to={'/'}>
              Notifications
            </Link>
          </li>
        </ul>
      </div>

      <Dropdown
        className={styles.pop}
        overlay={
          <Menu>
            <Menu.Item>
              <span
                className={styles.menu_item}
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/login';
                }}
              >
                <Icon type="poweroff" style={{ marginRight: 15 }} />
                <span>Logout</span>
              </span>
            </Menu.Item>
          </Menu>
        }
      >
        <div className={styles.pop_trigger}>
          <Avatar icon="user" />
          <span className={styles.user_name}>{userInfo.name}</span>
        </div>
      </Dropdown>
    </div>
  );
}
