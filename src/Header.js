import React, { useState } from "react";
import "./css/Header.scss";
// import Sponsors from "./content/SponsorData.json";
// import Speakers from "./content/SpeakersData.json";
// import Sessions from "./content/Sessions.json";
// import NavbarData from "./content/NavbarData.json";
import NavbarData from "./content/NavbarDataWithoutSpeaker.json";
import HeaderData from "./content/HeaderData.json";
// import bgImg from "./images/website/bg-img.png";
import logo from "./images/website/transparentLogo.png";
import twitterLogo from "./images/website/twittericon.png";
import { Navbar, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import { slide as Menu } from "react-burger-menu";
import { ComingSoon } from "./ComingSoon";

import hamburgerclose from "./images/website/close.png";
import { ModalSponsor } from "./ModalSponsor";

export const Header = () => {
  const [HamburgerOpen, setHamburgerOpen] = useState({ menuOpen: false });
  const isMobileNav = window.innerWidth < 970;
  const handleHambugerMenuStateChange = (state) => {
    setHamburgerOpen({ menuOpen: state.isOpen });
  };
  const closeHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: false });
  };
  const toggleHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: !HamburgerOpen.menuOpen });
  };
  const [modalSponsor, setModalSponsor] = useState(false);

  const toggle = (data) => {
    setModalSponsor(!modalSponsor);
  };

  return (
    <>
      <div className="oct2022-header" id="header">
        <Row className="oct2022-head-nav">
          <Col xs={3}>
            <img src={logo} alt="ICSS-logo" className="oct2022-nav-bar-logo" />
          </Col>
          {isMobileNav ? (
            <>
              <Col xs={6}> </Col>
              <Col>
                <Menu
                  isOpen={HamburgerOpen.menuOpen}
                  onStateChange={(state) =>
                    handleHambugerMenuStateChange(state)
                  }
                  right
                  width={"100%"}
                  className={"oct2022-sidebar"}
                  customCrossIcon={
                    <img
                      src={hamburgerclose}
                      onClick={toggleHamburgerMenu}
                      alt="hamburger-menu"
                    />
                  }
                >
                  {NavbarData.map((data) => {
                    return (
                      <a
                        className="menu-item"
                        href={data.url}
                        onClick={() => closeHamburgerMenu()}
                      >
                        <span>{data.title}</span>
                      </a>
                    );
                  })}
                </Menu>
              </Col>
            </>
          ) : (
            <Col xs={9} className="nav-item">
              <Navbar>
                <Nav navbar>
                  {NavbarData.map((data) => {
                    return (
                      <NavItem>
                        <NavLink
                          href={encodeURI(data.url)}
                          className="oct2022-header-text"
                        >
                          {data.title}
                        </NavLink>
                      </NavItem>
                    );
                  })}
                </Nav>
              </Navbar>
            </Col>
          )}
        </Row>
        <Row className="oct2022-head-data">
          {HeaderData.map((data) => {
            return (
              <>
                <Col md={12} xl={6} className="oct2022-content-left row">
                  <Row className="oct2022-siteTitle">
                    <Col>
                      <span>{data.presentedUserGroup}</span>
                      <span className="proud-present">PROUDLY PRESENTS</span>
                      <h1>{data.siteTitle}</h1>
                    </Col>
                  </Row>
                  <Row className="oct2022-subTitle">
                    <Col>
                      <span>{data.subTitle}</span>
                    </Col>
                  </Row>
                  <Row className="oct2022-registrationBtn">
                    <Col>
                      <a
                        href={data.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          className="oct2022-register-btn"
                          formTarget="_blank"
                        >
                          <span>{data.registrationBtn}</span>
                        </button>
                      </a>
                      {/* ------------------------------------------ */}

                      {/* <button
                      className="oct2022-register-btn"
                      formTarget="_blank"
                    >
                      <span>COMING SOON</span>
                    </button> */}
                    </Col>
                  </Row>
                </Col>
                <Col md={12} xl={6} className="row oct2022-content-right">
                  <Row className="oct2022-handles col-7">
                    <Col>
                      <a
                        href={
                          "https://twitter.com/search?q=" +
                          encodeURIComponent(data.twitterHashTag)
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img alt="Twitter logo" src={twitterLogo} />
                        <span className="oct2022-twitterHashTag">
                          {data.twitterHashTag}
                        </span>
                      </a>
                    </Col>
                    <Col>
                      <a
                        href={"https://twitter.com/" + data.twitterHandle}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img alt="Twitter logo" src={twitterLogo} />
                        <span className="oct2022-twitterHandle">
                          {data.twitterHandle}
                        </span>
                      </a>
                    </Col>
                  </Row>
                  <Row className="oct2022-eventDate">
                    <Col md={5} className="oct2022-eventData-border">
                      <span>{data.eventDate}</span>
                    </Col>
                  </Row>
                  <Row className="oct2022-fields">
                    <Col>
                      <span className="oct2022-eventTitle">
                        {data.eventTitle}
                      </span>
                      <div
                        className={
                          isMobileNav
                            ? "oct2022-fields-row"
                            : "oct2022-fields-row row"
                        }
                      >
                        <ComingSoon />

                        {/* <Col className="oct2022-sessionNumber">
                        <span>{Speakers.length}</span>
                        <span>SPEAKERS</span>
                      </Col>
                      <Col className="oct2022-trackNumber">
                        <span>{Sessions.length}</span>
                        <span>SESSIONS</span>
                      </Col>
                      <Col className="oct2022-SponsorNumber">
                        <span>{Sponsors.length}</span>
                        <span>SPONSORS</span>
                      </Col> */}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </>
            );
          })}
        </Row>
        <Row>
          <div className="oct2022-Be-Sponsor">
            <div className="oct2022-Be-Sponsor-wrapper">
              <div className="oct2022-Be-Sponsor-text">
                Sponsorships for India Cloud Security Summit 2022 are Now Open!
              </div>
              <div className="oct2022-Be-Sponsor-btn-wrapper">
                <button className="oct2022-Be-Sponsor-btn" onClick={toggle}>
                  <span>Become A Sponsor</span>
                </button>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <ModalSponsor modal={modalSponsor} toggle={toggle} />
    </>
  );
};
