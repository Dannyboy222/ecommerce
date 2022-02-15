import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Mobile } from '../responsive';

const Container = styled.div`
	height: 60px;
	${Mobile({ backgroundColor: 'red' })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`;

const Language = styled.div`
	font-size: 14px;
	cursor: point;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 43px;
	color: #4c4d4e;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>
						<p>YALETOWN</p>
						<p style={{ fontSize: 18 }}>CANDLE COMPANY</p>
					</Logo>
				</Left>
				<Center></Center>
				<Right>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: 'gray', fontSize: 15 }} />
					</SearchContainer>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
