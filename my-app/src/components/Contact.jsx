import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //this is  for submitting form
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_gz4s3sn",
        "template_jwcepsn",
        {
          from_name: form.name,
          to_name: "Inas",
          from_email: form.email,
          to_email: "inaschabla@gmail.com",
          message: form.message,
        },
        "baR39nN1Jz0tRQttN"
      )
      .then(() => {
        // ✅ send confirmation to the sender
        emailjs.send(
          "service_gz4s3sn",
          "template_0uuvzfe", // new template ID
          {
            from_name: "Inas",
            to_name: form.name,
            to_email: form.email, // send to sender
          },
          "baR39nN1Jz0tRQttN"
        );

        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Ahh, something went wrong. Please try again.");
      });
  };
  return (
    <div className="xl:mt-4 xl:flex-row flex-col-reverse flex gap-6 overflow-hidden">
      <motion.div
        // the object will fly from the left side while the EarthCanvas will fly from the right side
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-6 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 text-white w-fit rounded-xl outline-none border-none font-bold shadow-md shadow-primary mx-auto"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md-[350px] h-[150px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
