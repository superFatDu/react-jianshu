import React, { Component } from "react";
import { HeaderWapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch />
        </Nav>
        <Addition>
          <Button className="write">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWapper>
    )
  }
}

export default Header;