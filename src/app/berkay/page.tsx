import Layout from "../components/Layout";
import Header from "../components/Header";
import Content from "./components/Content/Content";

export const metadata = {
  title: "Berkay - Hexaapps",
  description: "Berkay Oruç Personal Website",
};

export default function Apps() {
  return (
    <Layout>
      <Header backPath="/" appName="Berkay" />
      <Content />
    </Layout>
  );
}
