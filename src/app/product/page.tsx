import AboutSectionOne from "@/components/About/AboutSectionOne";
import Features from "@/components/Features";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品服务 | 专业的云计算平台",
  description: "我们是专业的云计算平台",
  // other metadata
};

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="产品服务"
        description="为全球客户提供信息基础设置加速及安全的综合服务"
      />
      <Features />
      <AboutSectionOne />
    </>
  );
};

export default ProductPage;
