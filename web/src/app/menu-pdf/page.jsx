import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function MenuPDFPage() {
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

  useEffect(() => {
    // Auto-trigger print dialog when page loads
    const timer = setTimeout(() => {
      window.print();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Print Button - Only visible on screen */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handlePrintMenu}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold shadow-lg"
        >
          Download/Print Menu
        </button>
      </div>

      {/* PDF Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-4">
        {/* Header with Logo */}
        <div className="text-center mb-8 print:mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src="https://ucarecdn.com/4fee9ebe-ef67-4ef2-9074-ccc29032824c/-/format/auto/"
              alt="Mom's Approved Kitchen Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-4xl font-bold text-orange-600 font-poppins print:text-3xl">
              Mom's Approved Kitchen
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-medium print:text-lg">
            Where every meal is made with love
          </p>
          <div className="mt-4 text-gray-600 print:text-sm">
            <p>
              📍 Swarna Bhavan, 132, KVP Nagar, Singapura, Bengaluru, Karnataka
              560097
            </p>
            <p>📞 +91 8095053609 | ✉️ momsapprovedkitchen@gmail.com</p>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center print:mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-bold text-green-700 print:text-base">
              Order on WhatsApp
            </h3>
          </div>
          <p className="text-green-600 font-semibold print:text-sm">
            Send "Hello! I'd like to place an order" to +91 8095053609
          </p>
          <p className="text-sm text-green-600 mt-1">
            WhatsApp Link: https://wa.me/918095053609
          </p>
        </div>

        {/* Menu Sections */}
        {Object.entries(menuData).map(([key, category]) => (
          <div key={key} className="mb-12 print:mb-8 print:break-before-page">
            {/* Section Header */}
            <div className="text-center mb-8 print:mb-6">
              <h2 className="text-3xl font-bold text-orange-600 mb-2 font-poppins print:text-2xl">
                {category.title}
              </h2>
              <p className="text-gray-600 text-lg print:text-base">
                {category.description}
              </p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden print:break-inside-avoid print:mb-4"
                >
                  <div className="flex print:flex-col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover flex-shrink-0 print:w-full print:h-40"
                    />
                    <div className="p-4 flex-1 print:p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800 font-poppins print:text-base">
                          {item.name}
                        </h4>
                        <span className="text-xl font-bold text-orange-500 font-poppins print:text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed print:text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 print:mt-8 print:pt-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="https://ucarecdn.com/4fee9ebe-ef67-4ef2-9074-ccc29032824c/-/format/auto/"
              alt="Mom's Approved Kitchen Logo"
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-xl font-bold text-orange-600 font-poppins print:text-lg">
              Mom's Approved Kitchen
            </h3>
          </div>
          <p className="text-gray-600 font-medium print:text-sm">
            Thank you for choosing Mom's Approved Kitchen!
          </p>
          <p className="text-gray-500 text-sm print:text-xs">
            © 2025 Mom's Approved Kitchen. All rights reserved.
          </p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:break-before-page {
            page-break-before: always;
          }
          
          .print\\:break-inside-avoid {
            page-break-inside: avoid;
          }
          
          .print\\:grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
          
          .print\\:flex-col {
            flex-direction: column !important;
          }
          
          .print\\:w-full {
            width: 100% !important;
          }
          
          .print\\:h-40 {
            height: 10rem !important;
          }
          
          .print\\:text-3xl {
            font-size: 1.875rem !important;
            line-height: 2.25rem !important;
          }
          
          .print\\:text-2xl {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }
          
          .print\\:text-lg {
            font-size: 1.125rem !important;
            line-height: 1.75rem !important;
          }
          
          .print\\:text-base {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }
          
          .print\\:text-sm {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          
          .print\\:text-xs {
            font-size: 0.75rem !important;
            line-height: 1rem !important;
          }
          
          .print\\:p-4 {
            padding: 1rem !important;
          }
          
          .print\\:p-3 {
            padding: 0.75rem !important;
          }
          
          .print\\:mb-8 {
            margin-bottom: 2rem !important;
          }
          
          .print\\:mb-6 {
            margin-bottom: 1.5rem !important;
          }
          
          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }
          
          .print\\:mt-8 {
            margin-top: 2rem !important;
          }
          
          .print\\:pt-6 {
            padding-top: 1.5rem !important;
          }
          
          .print\\:gap-4 {
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}