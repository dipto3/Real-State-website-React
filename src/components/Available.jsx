import BathTubSvg from "./svg/BathTubSvg";
import BedSvg from "./svg/BedSvg";

const properties = [
  {
    id: 1,
    title: "Modern Design villa",
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    bedrooms: 3,
    bathrooms: 2,
    price: "20,000",
  },
  {
    id: 2,
    title: "Rupayan-sky-villa",
    image:
      "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bedrooms: 5,
    bathrooms: 3,
    price: "30,000",
  },
  {
    id: 3,
    title: "Grand Villa ",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bedrooms: 4,
    bathrooms: 2,
    price: "40,000",
  },
  {
    id: 4,
    title: "Jolshiri",
    image:
      "https://images.unsplash.com/photo-1510009489794-352fba39a0b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bedrooms: 2,
    bathrooms: 2,
    price: "50,000",
  },
  {
    id: 5,
    title: "Concord House",
    image:
      "https://images.unsplash.com/photo-1633119713175-c53c29479984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bedrooms: 4,
    bathrooms: 3,
    price: "55,000",
  },
];

export default function Available() {
  const propertyList = properties.map((property) => (
    <div
      className="p-4 bg-white rounded-lg border border-gray-600/10"
      key={property.id}
    >
      <img src={property.image} alt="property" />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{property.title}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            ${property.price}.00
          </span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedSvg />
          <p>
            <span className="font-bold text-gray-900">{property.bedrooms}</span>{" "}
            Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <BathTubSvg />
          <p>
            <span className="font-bold text-gray-900">
              {property.bathrooms}
            </span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Properties
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream Property
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyList}
          </div>
        </div>
      </section>
    </>
  );
}
