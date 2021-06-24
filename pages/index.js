import Home from "../components/home/home";
import { API } from "../api/api"
import { useRouter } from "next/router";

const IndexPage = ({ data }) => {
  return (
    <Home data={data} />
  )
}

export const getServerSideProps = async (context) => {

  console.log(context.locale);

  const content = await API.getContent();
  return {
    props:
    {
      data: content
    }
  }
}

export default IndexPage;
