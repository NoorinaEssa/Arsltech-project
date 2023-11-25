import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <>
        <Box className="container-fluid">
            <h3
                style={{
                    color: "skyblue",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px"
                }}
            >
                A Computer Science Portal for Geeks!
            </h3>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Writing
                        </FooterLink>
                        <FooterLink href="#">
                            Internships
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Courses</Heading>
                        <FooterLink href="#">
                            IT and computerscience
                        </FooterLink>
                        <FooterLink href="#">
                            Fullstack
                        </FooterLink>
                        <FooterLink href="#">
                            Mernstack
                        </FooterLink>
                        <FooterLink href="#">
                           Mongodb
                        </FooterLink>
                        <FooterLink href="#">
                       Express.js
                     </FooterLink>
                     <FooterLink href="#">
                    React.js
                  </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-youtube">
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >
                             LinkdIn
                            </span>
                        </i>
                    </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
</>
    );
};
export default Footer;