import React from "react";

const PagesContacts = (props: { category: string }) => {
  console.log(props);
  return (
    <div className="my-10">
      {props.category === "company" ? (
        <div className="container mx-auto px-4 py-8 text-gray-800 max-w-3xl">
          <h2 className="text-center text-2xl font-medium text-gray-900 mb-4">
            Company
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome to SHOPPER, where style meets comfort! We are dedicated to
            providing high-quality, fashionable clothing for every occasion. Our
            carefully curated collections feature the latest trends and timeless
            classics, ensuring that you always look your best.
          </p>
          <p className="text-gray-600 mb-4">
            At SHOPPER, we believe that fashion should be accessible to
            everyone. That's why we offer a wide range of sizes and styles,
            designed to empower individuals to express their unique
            personalities.
          </p>
          <p className="text-gray-600 mb-4">
            Join us on our journey to redefine fashion, one outfit at a time.
            Explore our collections today and discover the perfect pieces to
            elevate your wardrobe!
          </p>
        </div>
      ) : props.category === "offices" ? (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-center text-2xl font-medium text-gray-900 mb-4">
            Offices
          </h2>
          <h3 className="text-xl text-gray-800 mb-4">Our Office Locations</h3>
          <p className="text-gray-600 mb-6">
            At SHOPPER, we are proud to serve you from multiple locations! Visit
            us at our offices to explore our latest collections and receive
            personalized assistance from our friendly team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Head Office
              </h3>
              <p className="text-gray-600 mb-2">
                123 Fashion Ave, Suite 100
                <br />
                New York, NY 10001
              </p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Branch Office
              </h3>
              <p className="text-gray-600 mb-2">
                456 Style St, Floor 2<br />
                Los Angeles, CA 90001
              </p>
              <p className="text-gray-600">Phone: (987) 654-3210</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Showroom
              </h3>
              <p className="text-gray-600 mb-2">
                789 Trendy Blvd
                <br />
                Chicago, IL 60601
              </p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
            </div>
          </div>

          <p className="text-gray-600 mt-6">
            We look forward to welcoming you to our offices and helping you find
            the perfect outfits for any occasion!
          </p>
        </div>
      ) : props.category === "about" ? (
        <div className="container mx-auto px-4 py-8 text-gray-800 max-w-3xl">
          <h2 className="text-center text-2xl font-medium text-gray-900 mb-4">
            About
          </h2>
          <p className="text-gray-600 mb-4">
            Your ultimate destination for stylish and affordable clothing!
            Founded with a passion for fashion, we strive to provide
            high-quality apparel that empowers individuals to express their
            unique style.
          </p>
          <p className="text-gray-600 mb-4">
            Our diverse collections cater to all tastes and occasions, from
            casual wear to elegant outfits. We believe that everyone deserves to
            look and feel their best, which is why we are committed to offering
            a wide range of sizes and styles.
          </p>
          <p className="text-gray-600 mb-4">
            At SHOPPER, we prioritize sustainability and ethical practices,
            ensuring that our products not only enhance your wardrobe but also
            respect the planet. Join us on this exciting journey and discover
            how we can help you elevate your fashion game!
          </p>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 text-gray-800 max-w-3xl">
          <h2 className="text-center text-2xl font-medium text-gray-900 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 mb-4">
            We’d love to hear from you! At SHOPPER, we are here to assist you
            with any questions or inquiries you may have. Feel free to reach out
            to us at any of our locations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Head Office
              </h3>
              <p className="text-gray-600 mb-2">
                123 Fashion Ave, Suite 100
                <br />
                New York, NY 10001
              </p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Branch Office
              </h3>
              <p className="text-gray-600 mb-2">
                456 Style St, Floor 2<br />
                Los Angeles, CA 90001
              </p>
              <p className="text-gray-600">Phone: (987) 654-3210</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Showroom
              </h3>
              <p className="text-gray-600 mb-2">
                789 Trendy Blvd
                <br />
                Chicago, IL 60601
              </p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-6">
            Whether you need help with your order, product information, or
            styling advice, our dedicated team is ready to help. Get in touch
            today!
          </p>
        </div>
      )}
    </div>
  );
};

export default PagesContacts;
