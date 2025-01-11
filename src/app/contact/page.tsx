import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 专业的云计算平台",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系我们"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
