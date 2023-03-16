import useScrollToTop from "@/hooks/useScrollToTop";
import React from "react";

const PrivacyPolicyPage = () => {
  useScrollToTop();
  return (
    <div>
      <div className="h-20" />

      <div className="fluid-container px-7 py-10">
        <h1 className="text-2xl font-spacemono font-bold mb-2">
          Privacy Policy for Kaugmaon
        </h1>
        <p className="text-gray-400 mb-10 text-sm">
          Last updated: February 5, 2023
        </p>

        <div className="text-gray-200">
          <p className="mb-10">
            At Kaugmaon, we are committed to protecting the privacy of our
            users. This Privacy Policy outlines how we collect, use, and share
            personal information in connection with the use of our website and
            services, including the use of the Google OAuth API for user
            authentication.
          </p>

          <h2 className="mb-2 text-gray-50 font-semibold">
            1. Collection of Personal Information
          </h2>
          <p className="mb-8">
            We collect personal information such as email, name, and profile
            picture from users who choose to log in to our website using their
            Google account. This information is used to generate a digital
            ticket for the event and is not shared with any third parties unless
            required by law.
          </p>

          <h2 className="mb-2 text-gray-50 font-semibold">
            2. Use of Personal Information
          </h2>
          <p className="mb-8">
            The personal information collected is used for the sole purpose of
            generating a digital ticket for the event and to improve the user
            experience on our website. We do not sell, rent, or share this
            information with any third parties for marketing purposes.
          </p>

          <h2 className="mb-2 text-gray-50 font-semibold">
            3. Security Measures
          </h2>
          <p className="mb-8">
            We take reasonable security measures to protect the personal
            information collected from unauthorized access, disclosure,
            alteration, or destruction. However, no data transmission over the
            internet can be guaranteed to be 100% secure. As a result, we cannot
            guarantee the security of any information transmitted to or from our
            website.
          </p>

          <h2 className="mb-2 text-gray-50 font-semibold">
            4. Changes to this Privacy Policy
          </h2>
          <p className="mb-8">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable laws. If we make any material
            changes, we will notify users by posting the updated Privacy Policy
            on our website.
          </p>

          <h2 className="mb-2 text-gray-50 font-semibold">5. Contact Us</h2>
          <p className="mb-8">
            If you have any questions or concerns about this Privacy Policy or
            the use of your personal information, please contact us at{" "}
            <a className="underline" href="emailto:jedadriandenosta@gmail.com">
              jedadriandenosta@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
