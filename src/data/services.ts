import kitchenImg from "@/assets/service-kitchen.jpg";
import bedroomImg from "@/assets/service-bedroom.jpg";
import wardrobeImg from "@/assets/service-wardrobe.jpg";
import kidsImg from "@/assets/service-kids.jpg";
import livingImg from "@/assets/service-living.jpg";
import entertainmentImg from "@/assets/service-entertainment.jpg";
import poojaImg from "@/assets/service-pooja.jpg";
import officeImg from "@/assets/service-office.jpg";
import makeoverImg from "@/assets/service-makeover.jpg";

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  category: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "modular-kitchens",
    title: "Modular Kitchens",
    shortDesc: "Bespoke modular kitchens combining innovation and elegance.",
    fullDesc: "Crafted with smart storage, premium materials, and seamless modular units that blend style with utility. Our kitchens are designed for the modern homeowner who values both aesthetics and functionality.",
    image: kitchenImg,
    tags: ["Modern", "Storage Solutions", "Custom Design"],
    category: "Functional Areas",
    features: ["Smart storage solutions", "Premium hardware & fittings", "Customized layouts", "Durable countertops", "Modular flexibility"],
  },
  {
    id: "personalized-bedrooms",
    title: "Personalized Bedrooms",
    shortDesc: "Luxury meets comfort with custom-designed bedrooms.",
    fullDesc: "From bed back paneling to elegant lighting and wardrobes, every detail reflects your unique personality and lifestyle. We create spaces that are your personal sanctuary.",
    image: bedroomImg,
    tags: ["Luxury", "Comfort", "Lighting"],
    category: "Private Spaces",
    features: ["Custom bed back paneling", "Designer lighting", "Walk-in wardrobes", "Premium fabrics", "Ambient mood settings"],
  },
  {
    id: "functional-wardrobes",
    title: "Functional Wardrobes",
    shortDesc: "Custom wardrobes designed for efficiency and elegance.",
    fullDesc: "Explore walk-in closets, wall-mounted units, and tinted glass designs that redefine organized living. Every wardrobe is tailored to your storage needs.",
    image: wardrobeImg,
    tags: ["Organization", "Walk-in Closets", "Glass Designs"],
    category: "Private Spaces",
    features: ["Walk-in closet designs", "Tinted glass options", "Smart organizers", "Soft-close mechanisms", "LED interior lighting"],
  },
  {
    id: "kids-room",
    title: "Functional Kids Room",
    shortDesc: "Vibrant, safe, and creative spaces for kids.",
    fullDesc: "Designed with playful decor, smart storage, and ergonomic layouts that grow with your child's imagination. Safe materials and creative designs for growing minds.",
    image: kidsImg,
    tags: ["Playful", "Safe Design", "Smart Storage"],
    category: "Specialized",
    features: ["Child-safe materials", "Study area design", "Bunk bed options", "Creative wall art", "Growth-adaptable furniture"],
  },
  {
    id: "living-room",
    title: "Living Room Interiors",
    shortDesc: "Stylish and comfortable living spaces designed to bring warmth.",
    fullDesc: "From statement walls to custom furniture, we create spaces that feel like home. Our living room designs combine sophistication with everyday comfort.",
    image: livingImg,
    tags: ["Warmth", "Statement Walls", "Custom Furniture"],
    category: "Living Spaces",
    features: ["Statement accent walls", "Custom sofa designs", "Designer lighting", "Textured wall panels", "Smart TV integration"],
  },
  {
    id: "entertainment-units",
    title: "Elegant Entertainment Units",
    shortDesc: "Transform your living area with entertainment units that combine functionality and design.",
    fullDesc: "Perfect for displaying your TV, decor, and collectibles in style. Our entertainment units are designed to be the centerpiece of your living space.",
    image: entertainmentImg,
    tags: ["Entertainment", "Display", "Modern"],
    category: "Living Spaces",
    features: ["Floating shelf designs", "LED backlighting", "Cable management", "Display shelving", "Customizable modules"],
  },
  {
    id: "pooja-rooms",
    title: "Divine Pooja Rooms",
    shortDesc: "Peaceful and sacred spaces crafted with devotion.",
    fullDesc: "From traditional temple-style setups to modern minimalist sanctuaries, we design pooja rooms that inspire serenity and spiritual connection.",
    image: poojaImg,
    tags: ["Sacred", "Traditional", "Minimalist"],
    category: "Specialized",
    features: ["Traditional temple designs", "Brass & wood carvings", "LED diya lighting", "Storage for puja items", "Vastu-compliant layouts"],
  },
  {
    id: "home-office",
    title: "Functional Home Office",
    shortDesc: "Boost productivity with ergonomic home office designs.",
    fullDesc: "Featuring intelligent layouts, inspiring decor, and functional organization. Work from home in a space that enhances focus and creativity.",
    image: officeImg,
    tags: ["Ergonomic", "Productivity", "Organization"],
    category: "Functional Areas",
    features: ["Ergonomic desk setups", "Built-in bookshelves", "Cable management", "Acoustic panels", "Adjustable lighting"],
  },
  {
    id: "complete-makeover",
    title: "Complete Home Makeovers",
    shortDesc: "Transform your entire home with our comprehensive design solutions.",
    fullDesc: "We handle everything from concept to completion, ensuring a cohesive and stunning result throughout your space. One vision, one team, one beautiful home.",
    image: makeoverImg,
    tags: ["Complete Solutions", "Cohesive Design", "Full Service"],
    category: "Specialized",
    features: ["End-to-end design", "Project management", "Material sourcing", "Quality inspection", "Post-handover support"],
  },
];
