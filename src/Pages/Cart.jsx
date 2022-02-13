import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
display flex;
justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
`;

const Summary = styled.div`
	flex: 1;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;
const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 20px;
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;
const ProductId = styled.span``;
const ProductSize = styled.span``;

const Cart = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping cart (2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECK OUT</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://image.s5a.com/is/image/TheBay/850017194595_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0" />
								<Details>
									<ProductName>
										<b>Product: </b>CANDLE
									</ProductName>
									<ProductId>
										<b>ID: </b>2934982349832
									</ProductId>
									<ProductSize>
										<b>Size: </b>Small
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$20</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://image.s5a.com/is/image/TheBay/850017194595_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0" />
								<Details>
									<ProductName>
										<b>Product: </b>CANDLE
									</ProductName>
									<ProductId>
										<b>ID: </b>2934982349832
									</ProductId>
									<ProductSize>
										<b>Size: </b>Small
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$20</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>Summary</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
