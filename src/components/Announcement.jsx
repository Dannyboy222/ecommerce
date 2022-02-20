import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	background-color: #4c4d00;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`;

const Announcement = () => {
	return <Container>Welcome to Yaletown Candle</Container>;
};

export default Announcement;
