import Head from "next/head";
import Link from "next/link";

const DefaultLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="topnav" id="myTopnav">
        <Link href="/" tag="a">
          Home
        </Link>
        <Link href="/page-one" tag="a">
          Page one
        </Link>
        <Link href="/page-two" tag="a">
          Page two
        </Link>
        <Link href="/admin" tag="a">
          Admin Panel
        </Link>
        <select className="changeLanguage">
          <option value="en">EN</option>
          <option value="FR">FR</option>
          <option value="RO">RO</option>
        </select>
      </div>
      <div>{props.children}</div>
    </div>
  </>
);

export default DefaultLayout;
