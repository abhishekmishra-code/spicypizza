import { useState } from "react";

interface Price {
  regular: number;
  medium: number;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | Price;
  category: "pizza" | "appetizers" | "desserts" | "drinks" | "burger";
  image?: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu = ({ menuItems }: MenuProps) => {
  const groupedItems = menuItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, MenuItem[]>,
  );

  const categories = Object.keys(groupedItems);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const renderPrice = (price: number | Price) => {
    if (typeof price === "number") {
      return `₹${price}`;
    }
    return `Regular: ₹${price.regular} | Medium: ₹${price.medium}`;
  };

  return (
    <div id="menu" className="mx-auto max-w-7xl px-4 py-8 pt-28">
      <div className="mb-8 flex flex-wrap gap-4 border-b-2 border-gray-100 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {groupedItems[activeCategory]?.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
          >
            {item.image && (
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                {typeof item.price === "number" && (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
                    ₹{item.price}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-gray-600">{item.description}</p>

              {typeof item.price !== "number" && (
                <div className="mt-3 space-y-1">
                  <div className="text-sm font-medium text-red-600">
                    {renderPrice(item.price)}
                  </div>
                </div>
              )}

              {item.category === "pizza" && (
                <div className="mt-4 inline-flex items-center text-xs font-medium text-red-600">
                  <svg
                    className="mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Chef's Special
                </div>
              )}
              {item.category === "burger" && (
                <div className="mt-4 inline-flex items-center text-xs font-medium text-blue-600">
                  <svg
                    className="mr-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Freshly Prepared
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
