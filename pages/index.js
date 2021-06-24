import Home from "../components/home/home";
import { API } from "../api/api"

const IndexPage = ({ data }) => {
  return (
    <Home data={data} />
  )
}

export const getServerSideProps = async () => {

  const content = await API.getContent();
  return {
    props:
    {
      data: content
    }
  }
}

export default IndexPage;
