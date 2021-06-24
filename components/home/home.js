import Head from "next/head"
import styled from 'styled-components';

const Home = ({ data }) => {

    const IMAGE = styled.img`
        height: 400px;
        width: 400px;
        background-size: cover;
        background-image: url(${data.image});
    `;

    return (
        <>
            <Head>
                <title>Title</title>
                <meta charSet="utf-8" />
            </Head>
            <GroupInfo>
                <TitlePage>{data.title_page}</TitlePage>
                <Title>{data.title}</Title>
                <Paragraph>{data.paragraph}</Paragraph>
                <IMAGE />
                <Description>{data.description}</Description>
            </GroupInfo>
        </>
    )
}

const GroupInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2``;
const TitlePage = styled.h1``;
const Paragraph = styled.p``;
const Description = styled.div``;

export default Home;

