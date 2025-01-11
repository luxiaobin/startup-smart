import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | 专业的云计算平台",
  description: "我们是专业的云计算平台",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于我们"
        description="我们是专业的云计算平台"
      />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
