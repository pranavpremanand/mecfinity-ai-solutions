import Contact from "../../components/common/Contact";
import { iotDevelopmentServices } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import iotBanner from "../../assets/videos/iot.mp4";
import Faqs from "../../components/common/Faqs";
import Credibility from "../../components/common/Credibility";
import ProcessFlowchart from "../../components/landingPages/ProcessFlowChart";
import KeyBenefits from "../../components/landingPages/KeyBenefits";
import CTA from "../../components/landingPages/CTA";
import iotLandingAbout from "../../assets/images/iot-development.webp";

const iotReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CTO, Smart Manufacturing Solutions",
    desc: "“MecfinityAI transformed our factory operations with their IoT solutions, reducing downtime by 35% and increasing production efficiency.”",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Director, Smart City Initiative",
    desc: "“Their IoT platform integrated seamlessly with our urban infrastructure, providing real-time data that improved city services by 40%.”",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "CEO, AgriTech Startup",
    desc: "“The precision agriculture IoT solution helped our farmers increase yields by 25% while reducing water usage by 30%.”",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "COO, Healthcare Network",
    desc: "“Our remote patient monitoring system built by MecfinityAI has improved patient outcomes while reducing hospital readmissions by 45%.”",
  },
];

const IotDevelopment = () => {
  return (
    <>
      <div id="banner" className="landing-page min-h-screen relative">
        <ReactPlayer
          url={iotBanner}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          pip={false}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
                playsinline: true,
              },
            },
          }}
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        <div className="bg-black/30 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[8rem] sm:pt-[3rem] pb-[3rem] wrapper flex items-center min-h-screen"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              IoT Development
            </div>
            <h1 className="heading-1 text-white leading-tight">
              Transform Your Business with Smart IoT Solutions
            </h1>
            <p className="text-white desc font-medium">
              Connect, collect, and analyze data from any device with our
              end-to-end IoT development services that drive efficiency,
              automation, and business growth.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Book Your Free Consultation
            </ScrollLink>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor relative"
        style={{
          backgroundImage: `url(${require("../../assets/images/pattern2.png")})`,
        }}
      >
        <div className="bg-backgroundcolor/70 absolute inset-0 h-full w-full" />

        <div className="wrapper">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto lg:mx-0"
          >
            IoT Development
          </div>
          <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-right"
              className="flex h-full flex-col gap-7 text-center lg:text-start"
            >
              <div className="flex flex-col gap-7">
                <h2 className="heading-2">
                  Building the Connected Future with Advanced IoT Solutions
                </h2>
                <p className="desc">
                  We design and implement comprehensive IoT ecosystems that
                  connect devices, collect meaningful data, and provide
                  actionable insights. From industrial automation to smart home
                  solutions, our expertise bridges the gap between physical
                  devices and digital transformation.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-5 mt-4">
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-90}
                  className="primary-btn"
                >
                  Contact Us
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth
                  offset={-80}
                  className="secondary-btn"
                >
                  Our Services
                </ScrollLink>
              </div>
            </div>
            <div data-aos="fade-left" className="h-full">
              <img
                loading="lazy"
                src={iotLandingAbout}
                className="object-contain max-h-[30rem] w-full rounded-lg"
                alt="IoT network visualization"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <KeyBenefits
        title="Why IoT Solutions Are Essential for Modern Businesses"
        benefits={[
          "Real-time monitoring and control of devices and assets",
          "Predictive maintenance reducing downtime by up to 50%",
          "Automated processes that increase operational efficiency",
          "Data-driven decision making with actionable insights",
          "Enhanced customer experiences through smart products",
          "Energy savings and sustainability improvements",
        ]}
      />
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our IoT Development Services
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            End-to-End IoT Solutions for Every Industry Need
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            Comprehensive IoT services from device connectivity to data
            analytics platforms that transform your business operations and
            customer experiences.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
          >
            {iotDevelopmentServices.map((item) => {
              const isLastItem = item.id === iotDevelopmentServices.length;
              const isLastItemOdd = isLastItem && item.id % 2 !== 0;

              return (
                <div
                  key={item.id}
                  className={`${
                    isLastItemOdd && "sm:col-span-2 sm:w-1/2"
                  } mx-auto shadow-2xl transition-all  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg`}
                >
                  <div className="group rounded-lg bg-backgro-gradient hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                    <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {item.img}
                          </div>
                        </div>
                        <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                          {item.title}
                        </h5>
                        <p className="desc text-primarytextcolor">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-14 wrapper text-center space-y-5 flex flex-col items-center">
        <h6 className="heading-2">
          Limited availability for custom IoT projects - book your consultation
          today!
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Start Your IoT Journey
        </ScrollLink>
      </div>
      <ProcessFlowchart
        steps={[
          "Discovery & Requirement Analysis",
          "IoT Architecture Design",
          "Hardware/Device Selection",
          "Connectivity Solution Development",
          "Data Platform Integration",
          "Application Development",
          "Testing & Quality Assurance",
          "Deployment & Maintenance",
        ]}
      />
      <WhyChooseUs
        points={[
          "10+ years of IoT implementation experience",
          "Certified IoT architects and engineers",
          "Proven track record across industries",
          "End-to-end solution development",
          "Focus on security and scalability",
          "Ongoing support and maintenance",
        ]}
      />
      <Testimonials reviews={iotReviews} />
      <Credibility />
      <CTA
        title={"Struggling with disconnected systems and data silos?"}
        desc={
          "Our IoT solutions can integrate your operations, providing real-time visibility and control that reduces costs by up to 35%."
        }
      />
      <Faqs
        questions={[
          {
            question: "What industries do you specialize in for IoT solutions?",
            answer:
              "We have delivered IoT solutions across manufacturing, healthcare, agriculture, smart cities, logistics, and energy sectors, tailoring each solution to industry-specific challenges.",
          },
          {
            question: "How long does a typical IoT implementation take?",
            answer:
              "Implementation timelines vary based on complexity, but most projects range from 3-9 months from conception to deployment, with phased rollouts for larger systems.",
          },
          {
            question: "What connectivity options do you support?",
            answer:
              "We work with all major IoT protocols including LoRaWAN, Zigbee, BLE, WiFi, Cellular (4G/5G), NB-IoT, and custom RF solutions depending on your requirements.",
          },
          {
            question: "How do you ensure IoT security?",
            answer:
              "We implement security at every layer - device authentication, encrypted communications, secure cloud infrastructure, and role-based data access controls following industry best practices.",
          },
        ]}
      />
      <Contact
        heading="Ready to Connect Your World?"
        desc="At Mecfinity AI Solutions, we're passionate about helping
                businesses harness the power of IoT. Whether you're looking to
                automate processes, gain real-time insights, or create new smart
                products, our team of IoT experts is ready to guide you through
                every step of your digital transformation journey. Let's discuss
                how IoT can solve your unique business challenges."
      />
    </>
  );
};

export default IotDevelopment;
