import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                云计算，我们是专业的
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                我们是一家由来自互联网大厂的精英团队创立的高科技企业。我们凭借15年的深厚从业经验，专注于为客户提供高效、可靠的CDN、安全、云计算服务。至今，我们已成功服务超过一百家客户，涵盖政企、游戏、泛娱乐、金融、教育等多个领域。以技术创新为驱动，不断优化产品与服务，致力于帮助客户实现数字化及国际化转型，提升业务效率与竞争力。我们期待与更多合作伙伴携手共进，共创美好未来。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
