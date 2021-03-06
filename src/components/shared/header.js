import { Link, navigate } from "gatsby"
import React from "react"
import { Row, Col, Affix, Menu, Button, } from "antd"
import { FaDiscord } from 'react-icons/fa'
import { Location } from "@reach/router"
import styled from '@emotion/styled'
import DarkModeToggle from "./dark-mode-toggle"
import ThemeContext from "../../context/ThemeContext"

const JoinButton = styled(Button)`
  background-color: #7289DA;
  color: #fff;
`

const Header = () => (
  <Affix offsetTop={0}>
    <header className="header">
      <Row>
        <Col md={6} xs={24}>
          <div className="header-logo" onClick={() => { navigate("/") }}>h<span className="header-logo-letter-y">y</span>perlog<span className="header-logo-club">.Club</span></div>
        </Col>
        <Col md={16} xs={24}>
          <div style={{float: "right", marginRight: `1rem`}}>
            <Location>
              {({ location }) => {
                let key = location.pathname.includes('/resources') ? "/resources" : location.pathname
                return (
                  <ThemeContext.Consumer>
                    {theme => (
                    <Menu mode="horizontal" theme={theme.dark ? 'dark' : 'light'} style={{ borderBottom: `none`}} selectedKeys={[key]}>
                      <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
                      <Menu.Item key="/resources"><Link to="/resources">Resources</Link></Menu.Item>
                      <Menu.Item key="/blog"><a href="https://blog.hyperlog.club">Blog</a></Menu.Item>
                      <Menu.Item key="/stat" className="join-menu" disabled style={{ cursor: `default` }}>
                          {/* <UserContext.Consumer>
                            {({handleLogout, profile}) => (
                              (profile.name ? (
                                <Button type="ghost" shape="round" size="default" onClick={handleLogout}>
                                  Logout
                                </Button>
                              ) : (
                                <Button type="primary" shape="round" size="default">
                                  <Link to="/login"><Icon type="github" />Login</Link>
                                </Button>
                              ))
                            )}
                          </UserContext.Consumer> */}
                          <JoinButton shape="round" size="default">
                            <a href="https://discord.gg/XkWxzxm"><FaDiscord /> Join Discord Server</a>
                          </JoinButton>
                      </Menu.Item>
                    </Menu>
                    )}
                  </ThemeContext.Consumer>
                )
              }}
            </Location>
          </div>
        </Col>
        <Col md={2} xs={24}>
          <DarkModeToggle />
        </Col>
      </Row>
    </header>
  </Affix>
)

export default Header
