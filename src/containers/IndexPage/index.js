import Link from 'next/link';
import styled from 'styled-components';

// const Card = styled.div`
//   width: 480px;
//   height: 640px;
//   border: solid 1px black;
// `;
const ChurchText = styled.p`
  font-size: 30px;
  text-align: center;
  color: white;
  margin-top: 20px
`;

const NameText = styled.p`
  font-size: 50px;
  text-align: center;
  letter-spacing: 89px;
  text-indent: 89px;
  color: white;
  margin-top: 10px
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const EkkImage = styled.img``;
const Card = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  border-radius: 30px;
  background-color: hsl(215, 62%, 21%);
  overflow: hidden;
  
  ${EkkImage} {
    position: absolute;
    bottom: -10px;
    left: 0px;
  }
`;

const Logo = styled.img`
  margin-top: 100px;
  margin-right: 20px;
`;

const IndexPage = () => (
  <Wrapper>
      <Card>
          <Logo src='/static/logo.svg' />
          <ChurchText>新生命小組教會</ChurchText>
          <NameText>唐寧</NameText>
          <EkkImage src='/static/ekk.svg' />
      </Card>
      <Link href='/about' passHref>
          <A>About Page</A>
      </Link>
  </Wrapper>
);

export default IndexPage;
