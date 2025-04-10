import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="bg-white text-gray-700">
      {/* Hero Image - Responsive */}
      <div className="w-full overflow-hidden">
        <img
          src={assets.about}
          alt="About GSD Organics"
          className="w-full h-auto md:h-[70vh] object-cover object-center rounded-b-3xl shadow-lg"
        />
      </div>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 animate-fade-in-down">
          🌱 GSD Organics – Your Green Partner in Growth
        </h2>

        <p className="text-lg leading-relaxed mb-6 text-left max-w-4xl mx-auto text-gray-800 animate-fade-in">
          <strong>Established in the summer of 2020</strong>, GSD Organics has quickly become a
          <span className="text-green-600 font-semibold"> trusted leader</span> in premium organic vermicompost production.
          Our mission is simple yet powerful:
          <br />
          <span className="italic">To nurture your plants naturally.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {[
            { icon: "🌿", title: "100% Organic", desc: "Pure, natural vermicompost made without any additives or chemicals." },
            { icon: "♻️", title: "Eco-Friendly", desc: "Safe for the environment and supports long-term soil health." },
            { icon: "💰", title: "Affordable", desc: "Premium quality compost at prices that suit every farmer and gardener." }
          ].map((item, i) => (
            <div key={i} className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl border border-green-200 transition duration-300">
              <h4 className="font-bold text-green-800 text-lg mb-2">{item.icon} {item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      <section className="max-w-6xl mx-auto my-12 px-6 flex flex-col md:flex-row items-center gap-10">
        <img
          className="w-full md:max-w-[450px] rounded-2xl shadow-xl object-cover"
          src={assets.vermicompost}
          alt="About Section"
        />
        <div className="flex flex-col gap-6 text-gray-700 md:w-2/3 text-lg">
          <p>
            We are passionate about sustainable living and natural growth. Our vision is rooted in tradition and driven by innovation, bringing organic farming solutions to every corner of the country.
          </p>
          <p>
            Our vermicompost undergoes rigorous quality checks and is made using eco-conscious practices. From urban homes to rural fields, our customers trust us to deliver nature’s best to their soil.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🌍 Our Mission</h3>
            <p>
              To promote chemical-free agriculture by providing affordable, effective, and premium-quality organic fertilizers. We envision a green, thriving planet nourished by conscious farming.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="text-xl py-8 border-t border-gray-200 text-center">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">
        {[
          {
            title: "Quality Assurance",
            content: "From preparation to packaging, we maintain the highest standards to ensure every batch of vermicompost meets our promise of purity."
          },
          {
            title: "User-Friendly",
            content: "Whether you're a beginner or a pro gardener, our compost is easy to use and delivers visible results without hassle."
          },
          {
            title: "Dedicated Support",
            content: "We love helping our customers! From composting tips to plant advice, our team is here to guide you every step of the way."
          }
        ].map((card, idx) => (
          <div
            key={idx}
            className="border border-green-300 bg-green-50 px-8 py-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-3 text-green-800">{card.title}</h4>
            <p>{card.content}</p>
          </div>
        ))}
      </section>

      {/* Newsletter Signup */}
      <NewsletterBox />
    </div>
  );
};

export default About;
