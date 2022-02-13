import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
	background-color: gray;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
width:40%;
border:none;
padding 15px 20px;
background-color: white;
cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="First Name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Input placeholder="Confirm Password" />
					<Agreement>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
						est tempore molestiae deleniti adipisci, labore vero inventore
						asperiores, iusto excepturi facilis. Aperiam suscipit soluta in
						inventore? Laboriosam asperiores veniam sunt? <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
