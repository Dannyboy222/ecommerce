import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@material-ui/icons';
import styled from 'styled-components';

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	flex: 1px;
	margin: 5px;
	mid-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(165, 165, 165);
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	backgroud-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background-color: rgb(165, 165, 165);
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
