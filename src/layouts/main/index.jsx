import { Header } from "./Header/index.jsx";
import { Footer } from "./Footer/index.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-300 font-quatro overflow-y-scroll overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
