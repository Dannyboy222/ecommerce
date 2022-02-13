import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Cart = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			Cart
			<Footer />
		</Container>
	);
};

export default Cart;
