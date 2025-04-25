import React from "react";
import "./CTASection.css";
import analyticsImg from "../assets/icons/analytics.webp";

export default function CTASection({ t, smoothScrollToSection }) {
  return (
    <section className="cta-section animate-on-scroll" data-threshold="0.5">
      <div className="cta-content">
        <div className="cta-card">
          <div className="shape shape1" />
          <div className="shape shape2" />
          <div className="cta-text">
            <h2>{t("Tired of Agencies That Overcharge and Underdeliver?")}</h2>
            <p>
              {t(
                "We’re a new kind of digital partner—lean, creative, and obsessed with results. We build fast, modern websites that get noticed and get clicks."
              )}
            </p>
            <p className="subtext">
              {t(
                "Let’s start with a quick chat about your goals. No pressure, just possibilities."
              )}
            </p>
            <button
              className="cta-button"
              onClick={() => smoothScrollToSection("contact")}
            >
              {t("Schedule a Free Discovery Call")}
            </button>
          </div>
          <div className="cta-illustration">
            <img src={analyticsImg} alt="Analytics Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
