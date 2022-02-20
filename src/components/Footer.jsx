import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Room,
	Twitter,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1`
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Description = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: 'none' })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
	font-size: 32px;
	font-weight: 600;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>
					<p>YALETOWN</p>
					<p style={{ fontSize: 15 }}>CANDLE COMPANY</p>
				</Logo>
				<Description>
					There are many variations of passages of Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Praesentium aliquid vero ea nesciunt
					optio! Corrupti perspiciatis odit inventore dolorum facere alias
					eveniet, provident eum soluta et impedit optio placeat exercitationem.
				</Description>
				<SocialContainer>
					<SocialIcon>
						<Facebook />
					</SocialIcon>
					<SocialIcon>
						<Instagram />
					</SocialIcon>
					<SocialIcon>
						<Twitter />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Candles</ListItem>
					<ListItem>Bathbombs</ListItem>
					<ListItem>Body lotions</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} />
					423 Robson st vancouver BC, Canada V4G 2G4
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '10px' }} />
					+1 778 234 2734
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} />
					Yaletown.candle@gamil.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
