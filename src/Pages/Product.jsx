import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { Remove, Add } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
	flex: 1;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: '10px' })}
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: '40vh' })}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	width: 50p%;
	display: flex;
	justify-content: space-between;
	margin: 30px 0px;
	${mobile({ width: '100%' })}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 2px solid;
	background-color: white;
	cursor: point;
	font-weight: 500;

	&:hover {
		background-color: gray;
	}
`;

const Product = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src="https://image.s5a.com/is/image/TheBay/810012092678_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0" />
				</ImgContainer>
				<InfoContainer>
					<Title>Candle</Title>
					<Desc>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
						excepturi ipsam optio, ducimus praesentium odit eligendi similique
						sit sunt iusto tenetur voluptas culpa nobis in aspernatur pariatur
						incidunt sequi eaque.
					</Desc>
					<Price>$20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>Small</FilterSizeOption>
								<FilterSizeOption>Medium</FilterSizeOption>
								<FilterSizeOption>Large</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
