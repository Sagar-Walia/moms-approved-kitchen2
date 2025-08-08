import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  X,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [activeMenuCategory, setActiveMenuCategory] = useState("main");
  const [selectedItem, setSelectedItem] = useState(null);

  const menuData = {
    main: {
      title: "Main Menu",
      description: "Authentic home-cooked main dishes",
      items: [
        {
          id: 1,
          name: "Chicken Masala",
          price: "₹300/Box",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fcef173bb1.jpg",
          description:
            "Delight in our Chicken Masala, featuring tender chicken pieces simmered in a rich aromatic sauce infused with a symphony of traditional Indian spices.",
        },
        {
          id: 2,
          name: "Matar Paneer",
          price: "₹280/Box",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd0d831813.jpg",
          description:
            "A classic North Indian curry dish that combines tender paneer (Indian cottage cheese) and green peas (matar) in a creamy and rich gravy, flavored with aromatic spices for a delightful culinary experience.",
        },
        {
          id: 3,
          name: "Yogurt Pepper Chicken",
          price: "₹320/Box",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd90c47446.jpg",
          description:
            "Tender chicken pieces marinated in creamy yogurt, butter and perfectly spiced with freshly ground black pepper, creating a harmonious blend of brightness and warmth in every bite.",
        },
        {
          id: 4,
          name: "Kadhai Paneer",
          price: "₹300/Box",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd9bc57dff.jpg",
          description:
            "Kadhai Paneer is a flavorful Indian dish featuring succulent cubes of cottage cheese stir-fried with a blend of aromatic spices, bell peppers, and onions, served in a thick, flavorful tomato-based gravy, perfect for pairing with naan or steamed rice.",
        },
      ],
    },
    desserts: {
      title: "Desserts",
      description: "Sweet treats to end your meal perfectly",
      items: [
        {
          id: 5,
          name: "Fruit Cream",
          price: "₹325/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fce1cbe6de.jpg",
          description:
            "A delectable dessert comprising a medley of fresh, seasonal fruits gently folded with velvety smooth cream, lightly sweetened to perfection, and served chilled for a refreshing and indulgent finish.",
        },
        {
          id: 6,
          name: "Gulab Jamun",
          price: "₹320/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd0a89bcb5.jpg",
          description:
            "A classic Indian dessert, warm and luscious deep-fried dough balls soaked in a fragrant rose and cardamom-infused syrup, offering a melt-in-your-mouth sweetness that's perfect for satisfying your dessert cravings. Made with fresh Paneer and Khoya.",
        },
        {
          id: 7,
          name: "Desi Kunafa",
          price: "₹70/Piece",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd36c408e2.jpg",
          description:
            "A classic Middle Eastern dessert with an Indian twist made of fine shredded pastry, layered with Kesar Elaichi Rabdi, garnished with roasted Pista and Almond.",
        },
        {
          id: 8,
          name: "Choco-Walnut Fudge Cake",
          price: "₹700/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd45972264.jpg",
          description:
            "Indulge in our Choco-Walnut Fudge, a decadent dessert crafted with rich, velvety chocolate and garnished with crunchy, toasted walnuts, creating a harmonious blend of textures and flavors. (500GM)",
        },
        {
          id: 9,
          name: "Carrot Cake (Eggless)",
          price: "₹350/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd4e0e9641.jpg",
          description:
            "Delight in our moist and flavorful Carrot Cake, expertly prepared without eggs. Infused with the rich taste of grated carrots, aromatic spices, and a hint of vanilla. (500GM)",
        },
        {
          id: 10,
          name: "Shahi Tukda",
          price: "₹250/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd7ecaf5d3.jpg",
          description:
            "A lavish Indian dessert made of crisp fried bread slices soaked in saffron-infused syrup, topped with Rabdi and coconut shredding.",
        },
      ],
    },
    fresh: {
      title: "Freshly made",
      description: "Daily fresh specialties made with love",
      items: [
        {
          id: 11,
          name: "Fresh Home-made Paneer",
          price: "₹250/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fdd08e3fb8.jpg",
          description:
            "Experience the delightful flavors of our 'Fresh Home-made Paneer,' crafted daily using traditional techniques to ensure superior taste and texture. Perfectly balanced for any palate. (500GM)",
        },
        {
          id: 12,
          name: "Moong Daal Atta Mathri",
          price: "₹300/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd6f1a9fda.jpg",
          description:
            "A delightful crunchy snack crafted with a blend of moong dal flour and whole wheat flour, delicately seasoned with aromatic spices, and fried to perfection. This savory treat pairs wonderfully with tea. (500GM)",
        },
        {
          id: 13,
          name: "Dryfruit Murmure Mixture",
          price: "₹350/500gm",
          image:
            "https://files.cdn-files-a.com/uploads/11010256/800_687fd862bfe46.jpg",
          description:
            "A delightful blend of crisp murmure (puffed rice) combined with a medley of premium dry fruits, lightly spiced and perfectly roasted to create a harmonious snack that's both delicious and health-conscious. (500GM)",
        },
        {
          id: 14,
          name: "Matthi",
          price: "₹200/500gm",
          image:
            "https://ucarecdn.com/825888b4-1083-4a0b-816c-a1db4138c5d1/-/format/auto/",
          description:
            "Mathi, also known as mathri, is a popular Indian savory snack, often described as a crispy, fried cracker. It's typically made from a dough of flour and ghee then deep-fried until golden brown. Mathi is a common tea-time snack and is also enjoyed during festivals and special occasions.",
        },
        {
          id: 15,
          name: "Namak Para",
          price: "₹200/500gm",
          image:
            "https://ucarecdn.com/881927fc-a091-4eaf-8621-1c0b7af57a7b/-/format/auto/",
          description:
            "Namak Para is a popular Indian savory snack similar to Mathri, but with an exciting twist - it's enhanced with tangy masala spices that give it a zesty, flavorful kick. These crispy, diamond-shaped treats are made from flour and ghee, then deep-fried until golden brown and seasoned with aromatic spice blends. Perfect for tea-time or as a crunchy snack during festivals and special occasions.",
        },
      ],
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const openItemModal = (item) => {
    setSelectedItem(item);
  };

  const closeItemModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeItemModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="p-0">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  {selectedItem.price}
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-orange-600 mb-4 font-poppins">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://ucarecdn.com/4fee9ebe-ef67-4ef2-9074-ccc29032824c/-/format/auto/"
                alt="Mom's Approved Kitchen Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-2xl font-bold text-orange-600 font-poppins">
                Mom's Approved Kitchen
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("introduction")}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Mom's Menu
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Mom's Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section
        id="introduction"
        className="pt-20 min-h-screen flex items-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://raw.createusercontent.com/bd1cfa07-67ee-4e8b-af9e-0710bffe01d4/')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-white mb-6 font-poppins">
              Welcome to{" "}
              <span className="text-orange-400">Mom's Approved Kitchen</span>
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Where every dish is made with love, just like mom used to make.
              Experience authentic home-cooked meals that warm your heart and
              satisfy your soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("menu")}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                View Our Menu
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-semibold"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-20 bg-gradient-to-b from-orange-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-orange-600 mb-4 font-poppins">
              Mom's Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Craft your perfect meals effortlessly with authentic home-cooked
              dishes
            </p>
          </div>

          {/* Menu Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border">
              <div className="flex space-x-1">
                {Object.entries(menuData).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveMenuCategory(key)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeMenuCategory === key
                        ? "bg-orange-500 text-white shadow-md transform scale-105"
                        : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Category Content */}
          <div className="min-h-[600px]">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-orange-600 mb-2 font-poppins">
                {menuData[activeMenuCategory].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {menuData[activeMenuCategory].description}
              </p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {menuData[activeMenuCategory].items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => openItemModal(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1 font-poppins">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-500 font-poppins">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-6 font-poppins">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mom's Approved Kitchen was born from a simple belief: that the
                best meals are made with love, fresh ingredients, and
                time-honored recipes passed down through generations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founder, inspired by her grandmother's cooking, wanted to
                create a place where families could enjoy authentic home-cooked
                meals without the hassle of cooking. Every dish is prepared with
                the same care and attention you'd find in a loving home kitchen.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-600 mb-2 font-poppins">
                  Fresh Ingredients
                </h3>
                <p className="text-gray-600">
                  We source our ingredients locally and prepare everything fresh
                  daily.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-600 mb-2 font-poppins">
                  Family Recipes
                </h3>
                <p className="text-gray-600">
                  Our recipes have been passed down through generations of home
                  cooks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-600 mb-2 font-poppins">
                  Made with Love
                </h3>
                <p className="text-gray-600">
                  Every dish is prepared with the same care you'd find at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-4 font-poppins">
              Contact & Location
            </h2>
            <p className="text-xl text-gray-600">
              Visit us today and taste the difference love makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-6 font-poppins">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-600">
                    Swarna Bhavan, 132, KVP Nagar, Singapura, Bengaluru,
                    Karnataka 560097, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-600">+91 8095053609</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-600">
                    momsapprovedkitchen@gmail.com
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918095053609?text=Hello! I'd like to place an order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send WhatsApp Message</span>
                </a>
                <a
                  href="/menu-pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  <span>📄</span>
                  <span>Download Menu PDF</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-6 font-poppins">
                Find Us
              </h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://maps.app.goo.gl/hpLpNCuXVZ7FvmYa6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="https://ucarecdn.com/4fee9ebe-ef67-4ef2-9074-ccc29032824c/-/format/auto/"
              alt="Mom's Approved Kitchen Logo"
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-xl font-bold text-orange-400 font-poppins">
              Mom's Approved Kitchen
            </h3>
          </div>
          <p className="text-gray-400 mb-4 font-medium">
            Where every meal is made with love
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Mom's Approved Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}