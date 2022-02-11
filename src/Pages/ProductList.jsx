import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	margin: 20px;
`;

const ProductList = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />

			<Title>Candles</Title>
			<FilterContainer>
				<Filter>filter1</Filter>
				<Filter>filter2</Filter>
			</FilterContainer>
		</Container>
	);
};

export default ProductList;
