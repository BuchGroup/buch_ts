import Head from "next/head";
import Meta from "@/components/meta";
import Layout from "@/components/layout/layout";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import AboutUs from "@/components/abou_us";
import Offer from "@/components/offer";
import Dream from "@/components/dream_home";
import Review from "@/components/reviews";
import Form from "@/components/new_contact";

export default function Home() {
  return (
    <>
      <Meta>
        <Layout>
          <section id="home">
            <Hero />
          </section>
          <Stats />
          <section id="about">
            <AboutUs />
          </section>
          <section id="offer">
            <Offer />
          </section>
          <section id="mls">
            <Dream />
          </section>
          <Review />
          <section id="contact">
            <Form />
          </section>
        </Layout>
      </Meta>
    </>
  );
}
