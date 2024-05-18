import screenshot from "../assets/screenshot-fmt.png";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import AppContent from "../components/AppContent";

export const metadata = {
  title: "Breather",
  description: "iOS app to help you about breathing exercises",
};

export default function Apps() {
  const appURL = "https://apps.apple.com/us/app/lung-test/id6473705672";
  const appName = "Breather";
  return (
    <Layout>
      <Header appName={appName} appURL={appURL} backPath="/apps" />
      <AppContent
        screenshot={screenshot}
        title="Breathe easy"
        p="Breather is a simple app that helps you to relax and focus on your breathing. It guides you through a series of breathing exercises that help you to relax and focus."
        appURL={appURL}
      />
    </Layout>
  );
}
