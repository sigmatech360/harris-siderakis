import React from 'react'
import TestimonialCard from '../TestimonialCard'
import sara_b from "../../assets/sara-b.png";
import david_l from "../../assets/david-l.png";
import david_m from "../../assets/david-m.png";
import jessica_m from "../../assets/jessica-m.png";
import jessica_r from "../../assets/jessica-r.png";
import sammantha_r from "../../assets/sammantha-r.png";

const TestimonialSec = () => {
  return (
    <section className="testimonial-sec">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <TestimonialCard
                title={
                  "Saved me from a scam call—Reverse Phone Lookup workedperfectly!"
                }
                ratingNumber="5/5"
                name="Sarah B"
                state="Florida"
                userImg={sara_b}
              />
            </div>
            <div className="col-xl-5 col-lg-4">
              <TestimonialCard
                flexVariant="row"
                bgColor="lightGray"
                title={
                  "I found my lost childhood friend in minutes! It was life-changing."
                }
                ratingNumber="5/5"
                name="Jessica R."
                state="Texas"
                userImg={jessica_r}
              />
            </div>
            <div className="col-xl-3 col-lg-4">
              <TestimonialCard
                title={
                  "Helped me verify a tenant’s background before renting. Super easy!"
                }
                ratingNumber="5/5"
                name="David M"
                state="California"
                userImg={david_m}
              />
            </div>

            <div className="col-md-12 testimonial-sec-head-col">
              <div className="sec-head">
                <p className="sec-tag">Testimonials</p>
                <h2>
                  Life-Changing{" "}
                  <span className="colorBlue fw-bold">Results</span> Pure{" "}
                  <span className="colorBlue fw-bold">Perfection!</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-4">
              <TestimonialCard
                flexVariant="row"
                bgColor="lightGray"
                title={
                  "Found my childhood best friend in minutes after searching for years!"
                }
                ratingNumber="5/5"
                name="Samantha R."
                state="New York"
                userImg={sammantha_r}
              />
            </div>
            <div className="col-xl-3 col-lg-4">
              <TestimonialCard
                title={
                  "Used public records to find my biological siblings. Life-changing!"
                }
                ratingNumber="5/5"
                name="Jessica M."
                state="California"
                userImg={jessica_m}
              />
            </div>
            <div className="col-xl-3 col-lg-4">
              <TestimonialCard
                flexVariant="row"
                bgColor="lightGray"
                title={
                  "Ran a quick check turns out the ‘company’ was fake. Crisis avoided!"
                }
                ratingNumber="5/5"
                name="David L."
                state="Texas"
                userImg={david_l}
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default TestimonialSec