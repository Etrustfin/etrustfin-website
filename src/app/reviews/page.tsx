import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { GOOGLE_REVIEW_URL, LINKEDIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read what clients say about working with Essential Trust Financial, and leave your own Google review.",
};

// TO ADD A REVIEW: add an entry to this array (from Google Reviews).
const REVIEWS = [
  {
    who: "Chris Ramirez",
    text: "I reached out to get a new policy for life insurance. Samantha Dolby helped me out and I couldn't be more happy with the service. Anytime I had any questions or concerns she answered them in a very timely manner. Was able to get me a great deal at a very good price. Would definitely recommend",
  },
  {
    who: "Andre Perenishko",
    text: "Samantha has been my advisor for a little over a year now! Amazing person and amazing team. They've exceeded my expectations and are constantly impressing me with their knowledge, Especially Samantha. She's been extremely transparent with everything and has helped out tremendously financially and health insurance wise. Would recommend 10/10 times",
  },
  {
    who: "Daniel Gonzales",
    text: "Referred to me by a trusted source, Samantha was able to review my life insurance and financial health is such a way that didn't make it feel overwhelming. She was able to help me develop a plan for my savings, investment and financial protection goals that made sense and didn't leave me questioning if I was going to be able to reach those goals. Highly recommend this incredible advisor!",
  },
  {
    who: "Jonathan Y.",
    text: "Sam is excellent. Informative, communicative, and detail oriented. She was able to help us fill the gap with our knowledge on life insurance and we are going to utilize her for financial management in the new year as well.",
  },
  {
    who: "Kat Heiden",
    text: "Samantha's assistance in creating a usable, practical budget to use as well as helping us develop more thorough plans for paying off debt and planning for the future was invaluable. She's kind and personable, but also extremely professional and clearly knows her stuff. She's even doing quarterly check ins with us to see how our plan is going and help us stay on track. I look forward to continuing to work with Samantha and Essential Trust to continue managing our finances and ensure the future will be one in which my family has financial security and minimal worry.",
  },
  {
    who: "Skin Palace OC",
    text: "As a new business owner I was in need of a strategy to help minimize my taxes but also plan for my future. Samantha and her team took great care of me by walking me through the process and keeping me updated step by step. I feel at peace knowing I have a split plan and a team I communicate with frequwntly to ensure I am on track.",
  },
  {
    who: "Nicole Stone",
    text: "Samantha Dalby is a gift to us all and provides end to end value with her fiduciary and consulting services! She has helped my family get organized, maximize returns and this provides tremendous peace of mind. She is a joy to work with\u{1F642}",
  },
  {
    who: "Thomas Lin",
    text: "Highly recommend Samantha for financial services/planning. She's a certified financial planner. Above all, she goes above and beyond to provide bespoke service.",
  },
  {
    who: "Lillian",
    text: "Samantha and her team were absolutely amazing! I really needed a financial advisor that I can trust. I've interviewed many advisors. Samantha really took the time to answer all of my questions and educate me. She is very honest, friendly, knowledgeable and professional. She has integrity and goes above and beyond for her clients. She educated me on all of the options I needed to know and help advise/guide me in the right direction. I highly recommend Essential Trust Financial for all of your financial needs and planning.",
  },
  {
    who: "Shaun Cheney",
    text: "Finding the right financial planner was crucial for me as a husband, business executive, and father, but I was fortunate to meet Samantha, the founder of Essential Trust Financial. She is an exceptional planner who surpassed our expectations. She and her team have a comprehensive approach and empathetic nature which immediately put us at ease. My wife and I found they paid attention to detail as they crafted a solid college funding plan, ensuring our children's education is secure. They also designed a robust retirement plan, considering our aspirations and risk tolerance, providing us with confidence and peace of mind. Moreover, their guidance in creating a legacy transfer plan showcased their expertise in preserving our wealth for our two children. We highly recommend her and her team to anyone seeking a partner in achieving long-term financial security and tranquility.",
  },
  {
    who: "Rosario Diaz",
    text: "amazing service samantha very friendly. I recommend it",
  },
  {
    who: "Michelle Lucero",
    text: "After working with Samantha I can honestly say I finally feel secure with my future finance goals. Sam not only took the time to fully educate me on the different possibilities and choices I could make. She made me feel comfortable and feel like I have a new sense of control in my life. I feel safe and protected knowing the hard money I have earned is now being set up to protect me and my family. Thank you Sam!!",
  },
  {
    who: "Majidreza Goudarzy",
    text: "Essential Trust Financial company is the best for all your financial planning needs that you can Trust, specifically for business owners. Samantha and her team are very knowledgeable, honest professionals, friendly, caring, and helpful. Samantha, spent time to educate and explain different options and products to financially protect my business and family. First, she took time to understand my needs and then provided a unique strategy that was tailored for me. She explained everything to make the process very simple. I highly recommend Essential Trust Financial for your financial planning",
  },
  {
    who: "Bob Moj",
    text: "As a Small Business owner. Was looking for a financial advisor to plan a safe, secure and sustainable retirement plan to support my family and referred to Samantha owner of Essential Trust Financial by a friend who got his retirement plan with her. After 3 sessions of online virtual meeting going through my business and family financial requirements, she put all information together and provided 2 different strategies based on the level of risk we wanted to take. Then we together, narrowed down the plans and finally came to very specific retirement plan which was tailored for us. I should say, it was great experience for me working with Samantha and her team as we got all information we needed and she patiently answered all our questions and concerns. I'm very glad that met Samantha and happy with the outcome. I would highly recommend Essential Trust Financial Insurance Solution and Samantha for your financial planning. B. Mojarad, QualTM General Construction",
  },
  {
    who: "Monica Melendez",
    text: "Samantha is very knowledgeable, professional and goes above and beyond. She truly cares.",
  },
  {
    who: "Tyler Bartoo",
    text: "My folks are a bit older and needed to get set up with some sort of life insurance. Not the easiest task and past experiences had left them skeptical of many financial professionals. I needed someone I knew would help them, someone I knew would act in their best interest. I met Samantha from Essential Trust some time before and I knew she was the right person to help. She worked hard to get them set up with the right solutions. She guided them through the process and treated them with the kind of respect I imagine she treats her own family. However, perhaps the highest praise of all, my mom loves her.",
  },
  {
    who: "Brianna Andazola",
    text: "Working with Samantha (founder of Essential Trust Financial) was such a wonderful experience. I 10/10 recommend her to all of my friends and family. She is very competent in her field and takes the time necessary to educate her clients first and foremost which I truly appreciated. She was so patient with me and my crazy schedule since I travel alot and took the time necessary to gain the best sense of what my unique needs were and developed a financial strategy that was unique to me. We were able to discuss where I am currently, where I intend to be in the future, the best strategies to get me there and most importantly the best strategies to ensure I stay there. She is a pleasure to work with and the exact person to guide me and you along the way.",
  },
  {
    who: "babak hodaie",
    text: "She works hard uncover what is truly meaningful to me. She create a strategy to meet my long term financial goals. First Samantha ask probing questions to better understand my views on money \u{1F4B0} and life before creating a plan I highly recommend her if u looking for trustworthiness and leading edge advice with strong communication ability",
  },
  {
    who: "Robert Maffie",
    text: "Not a one product fits all. She is very informed of many different products that fit different people at different times in their lives. With a true understanding of what's is needed to fit your goals. And she followed through to make sure I was completely satisfied. Highly recommend her and her products.",
  },
  {
    who: "Joy nomad",
    text: "As a millennial we are constantly hearing about saving for retirement. I always thought it would be too early at my age to start. I have a 401k established through my employer and thought I would reach out to Samantha for a review of my account. I was blown away when she educated me on how money works and where my money currently sits and how I can efficiently save more for retirement, keeping taxes in mind. We set up an investment to complement my 401k and I feel so happy I've started saving early. Samantha is a woman of integrity who I trust and recommend with financial planning. She is very knowledgeable in her field, and I know she always has my best intentions top of mind.",
  },
  {
    who: "Taylor Prior",
    text: "Samantha, owner of Essential Trust Financial, was amazing in helping me to reach my financial goals. She was very knowledgeable and understanding when it came to my personal financial situation. I have already recommended her to my friends and family in which she will be able to help them obtain their financial goals as she did for me.",
  },
  {
    who: "India Kinchelow",
    text: "I got a late start to planning for retirement and was concerned it may have been too late. Samantha helped me navigate through some very safe but impactful options that have laid a great pathway towards my retirement. She is also very responsive and answers calls and emails promptly. Highly recommended!",
  },
  {
    who: "Lorena Rajtic",
    text: "I really enjoyed working with Samantha. Her and her team were very professional and very detail oriented. The process was very easy to understand and I felt like she took the time to really understand my concerns and goals. She help me put in a plan in place to save for my retirement and now have the peace of mind I am protected against any unplanned life event. Highly recommend Samantha, she is a woman of integrity and is very knowledgeable!",
  },
  {
    who: "evitoification",
    text: "Highly reccomend! Samantha the founder of Essential Trust Financial sat down with me personally and was very thorough with her financial plan for me. She took the time to properly educate me on how taxes work and how my money is taxed. She explained what financial vehicles would be an asset for me and my company. I felt very comfortable and trusted Samantha throughout the entire process.",
  },
  {
    who: "Emily Neubert",
    text: "When I first met with Samantha, the owner of Essential Trust Financial, I was immediately put at ease. Samantha is honest, professional, caring, friendly, and helpful. She took the time to listen to me and understand my needs and then put together a financial strategy that was tailored specifically for me. Samantha was a pleasure to work with and made the process simple and effective. And most importantly she was very honest, and straightforward with me. She is clearly very knowledgeable and her and her team explained everything throughly. She explained multiple options for me and advised on the best way to protect my income. I can confidently say my family is now protected which gives me peace of mind. I highly recommend her and her team for your financial planning needs!",
  },
  {
    who: "Himothee Chillomet",
    text: "Such a wonderful experience with Essential Trust Financial!! I worked directly with Samantha, the company owner, and her honesty, professionalism, friendliness, and overall willingness to go above and beyond to help me made stood out right away. She took the time to understand my needs while putting together a strategy that catered to those needs. Samantha was a pleasure to work with and made the process simple and effective. She was very candid and understood exactly what I had to get done. Her financial knowledge is through the roof and she, along with her amazing team, explained everything to me thoroughly while making feel at ease. She explained how money works and the best way to protect my income. I can confidently say my family is now protected which gives me peace of mind. I highly recommend her and her team for your financial planning needs!",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Experiences"
        title="What clients say."
        description={`Real words from the people we serve. All ${REVIEWS.length} five-star reviews from Google. If we have worked together, we would be grateful for yours.`}
        crumbLabel="Client Reviews"
      />
      <section className="section">
        <div className="wrap">
          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div className="review" key={`${r.who}-${i}`}>
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <p className="who">{r.who}</p>
              </div>
            ))}
          </div>
          <div className="reviews-cta">
            <a className="btn btn-dark" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener">
              Leave Us a Google Review
            </a>
            <a className="btn btn-light" href={LINKEDIN_URL} target="_blank" rel="noopener">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
