import Navbar from "../../components/navbar/Navbar";
import landingImage from "../../assets/landing.jpg";
import "./help.css";
import { useState } from "react";

const Help1 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What happens when I tap “Connect”?",
      answer:
        "When you tap “Connect”, you express interest in the person. You’ll be redirected to their full profile to learn more and potentially start a conversation.",
      open: true,
    },
    {
      question: "Can I go back to a profile I skipped?",
      answer:
        "No, once you skip a profile using “X”, it will not appear again unless the person shows up in your recommendations later.",
      open: false,
    },
    {
      question: "Can I undo a “Connect” after tapping it?",
      answer:
        "Currently, there is no undo option for a “Connect” action once it has been submitted.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div
      style={{
        height: "100dvh",
        position: "relative",
        backgroundImage: `url(${landingImage})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "4rem",
        flexDirection: "column",
        gap: "3rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <h1>FAQ</h1>
      <div className="accordian_container">
        {faqs.map((item, key) => {
          return (
            <div className="accordian_item" key={key}>
              <div className="heading_container">
                <div
                  style={{
                    fontSize: "1.25rem",
                  }}
                >
                  {item.question}
                </div>
                <div onClick={() => toggleFAQ(key)}> +</div>
              </div>
              {item.open && (
                <div className="description_container">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Help1;
