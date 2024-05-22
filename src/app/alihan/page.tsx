import Content from "../berkay/components/AlihanContent/Content";
import Header from "../components/Header";
import Layout from "../components/Layout";

export const metadata = {
  title: "Alihan - Hexaapps",
  description: "Alihan Keskin Personal Website",
};

export default function Apps() {
  return (
    <Layout>
      <Header backPath="/" appName="Alihan" />
      <Content />
    </Layout>
  );
}
