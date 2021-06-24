import Home from "../components/home/home";
import { API } from "../api/api"

const IndexPage = ({ data }) => {
  return (
    <Home data={data} />
  )
}

export const getServerSideProps = async (context) => {

  const content = await API.getContent(context.locale);
  return {
    props:
    {
      data: content
    }
  }
}

export default IndexPage;
