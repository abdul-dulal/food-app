import Layout from "@/Components/ui/layout";
import "@/styles/globals.css";
import { createContext, useState } from "react";
export const showContext = createContext();
export default function App({ Component, pageProps, router }) {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#EEF0F2]  max-w-[1920px] mx-auto">
      <showContext.Provider value={[show, setShow]}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </showContext.Provider>
    </div>
  );
}
