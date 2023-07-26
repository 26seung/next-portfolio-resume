import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      {/* <Home /> */}
      <div>{children}</div>
      <Footer />
    </div>
  );
}
