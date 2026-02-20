import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB for seeding...');

        // Clear existing data
        await Category.deleteMany({});
        await Product.deleteMany({});
        await User.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // ==================== CREATE ADMIN USER ====================
        const adminUser = await User.create({
            name: 'AARAA Admin',
            email: 'admin@aaragiftshop.com',
            password: 'admin123456',
            phone: '+91 98765 43210',
            role: 'admin',
        });
        console.log('👤 Admin user created (admin@aaragiftshop.com / admin123456)');

        // ==================== CREATE CATEGORIES ====================
        const returnGifts = await Category.create({
            name: 'Return Gifts',
            description: 'Premium return gifts for all occasions — weddings, birthdays, housewarming, and more.',
            displayOrder: 1,
        });

        const premiumGifts = await Category.create({
            name: 'Premium Gifts',
            description: 'Exquisite premium gifts for special occasions.',
            displayOrder: 2,
        });

        const divineGifts = await Category.create({
            name: 'Divine Gifts',
            description: 'Sacred figurines, pooja items, and divine gifting essentials.',
            displayOrder: 3,
        });

        const bags = await Category.create({
            name: 'Bags & Accessories',
            description: 'Jute bags, clutches, purses, and handcrafted accessories.',
            displayOrder: 4,
        });

        const homeDecor = await Category.create({
            name: 'Home Decor',
            description: 'Beautiful decor pieces to elevate your living spaces.',
            displayOrder: 5,
        });

        const brassCollection = await Category.create({
            name: 'Brass Collection',
            description: 'Handcrafted brass figurines, diyas, urlis, and wall hangings.',
            displayOrder: 6,
        });

        const silverGifts = await Category.create({
            name: 'Silver Gifts',
            description: 'Elegant silver coins and silver-plated gift items.',
            displayOrder: 7,
        });

        const festivalEssentials = await Category.create({
            name: 'Festival Essentials',
            description: 'Everything you need for Diwali, Navaratri, Pongal, and more.',
            displayOrder: 8,
        });

        // Sub-categories for Return Gifts
        await Category.create({ name: 'Under ₹99', parent: returnGifts._id, displayOrder: 1 });
        await Category.create({ name: 'Under ₹149', parent: returnGifts._id, displayOrder: 2 });
        await Category.create({ name: 'Under ₹249', parent: returnGifts._id, displayOrder: 3 });
        await Category.create({ name: 'Premium Return Gifts', parent: returnGifts._id, displayOrder: 4 });

        console.log('📂 Categories created');

        // ==================== CREATE PRODUCTS ====================
        const products = [
            // --- Return Gifts ---
            {
                name: 'Lakshmi-Ganesha Diya',
                sku: 'AG-RG-001',
                description: 'Beautiful brass Lakshmi-Ganesha diya perfect for return gifts. Intricately crafted with traditional Indian motifs, this diya brings divine blessings to every home.',
                shortDescription: 'Brass diya with Lakshmi-Ganesha design',
                price: 149,
                compareAtPrice: 199,
                images: [{ url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800', alt: 'Lakshmi-Ganesha Diya' }],
                category: returnGifts._id,
                tags: ['Best Seller', 'Festival'],
                productType: 'Diyas',
                material: 'Brass',
                dimensions: '3 x 2 inches',
                stock: 500,
                isFeatured: true,
                averageRating: 4.5,
                numReviews: 85,
            },
            {
                name: 'Meenakari Poori Box',
                sku: 'AG-RG-002',
                description: 'Colorful meenakari work poori box with traditional Rajasthani design. Perfect for storing prasad, dry fruits, or as a decorative piece.',
                shortDescription: 'Vibrant meenakari poori box',
                price: 199,
                compareAtPrice: 249,
                images: [{ url: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800', alt: 'Meenakari Poori Box' }],
                category: returnGifts._id,
                tags: ['Best Seller', 'Trending'],
                productType: 'Dry Fruit Boxes',
                material: 'Metal with Meenakari work',
                dimensions: '4 x 3 inches',
                stock: 350,
                isFeatured: true,
                averageRating: 4.3,
                numReviews: 62,
            },
            {
                name: 'Kanjivaram Silk Box',
                sku: 'AG-RG-003',
                description: 'Elegant tin box with Kanjivaram silk pattern print. Great for gifting dry fruits, sweets, or small treasures.',
                shortDescription: 'Kanjivaram print tin gift box',
                price: 129,
                images: [{ url: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf1d0?auto=format&fit=crop&q=80&w=800', alt: 'Kanjivaram Silk Box' }],
                category: returnGifts._id,
                tags: ['Best Seller'],
                productType: 'Tin Boxes',
                material: 'Printed Tin',
                dimensions: '5 x 3 inches',
                stock: 400,
                isFeatured: true,
                averageRating: 4.7,
                numReviews: 120,
            },
            {
                name: 'Double Kumkum Holder - Gold Finish',
                sku: 'AG-RG-004',
                description: 'German silver kumkum holder with gold finish and meenakari embossing. A must-have return gift for weddings and poojas.',
                shortDescription: 'Gold-finish kumkum holder',
                price: 89,
                compareAtPrice: 129,
                images: [{ url: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=800', alt: 'Kumkum Holder' }],
                category: returnGifts._id,
                tags: ['Best Seller', 'Festival'],
                productType: 'Kumkum Holders',
                material: 'German Silver',
                dimensions: '2.5 x 2 inches',
                stock: 600,
                isFeatured: true,
                averageRating: 4.4,
                numReviews: 95,
            },
            {
                name: 'Eco-Friendly Jute Bag - Floral',
                sku: 'AG-RG-005',
                description: 'Handcrafted jute bag with beautiful floral embroidery. Eco-friendly and reusable — perfect as a wedding favor or return gift bag.',
                shortDescription: 'Floral embroidered jute bag',
                price: 79,
                images: [{ url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800', alt: 'Jute Bag' }],
                category: bags._id,
                tags: ['Eco-Friendly', 'Trending'],
                productType: 'Jute Bags',
                material: 'Jute with embroidery',
                dimensions: '12 x 10 inches',
                stock: 800,
                isFeatured: true,
                averageRating: 4.2,
                numReviews: 45,
            },

            // --- Premium Gifts ---
            {
                name: 'Brass Ganesha Idol - 6 inch',
                sku: 'AG-PG-001',
                description: 'Handcrafted solid brass Ganesha idol with intricate detailing. A premium gift symbolizing wisdom and prosperity.',
                shortDescription: 'Solid brass Ganesha figurine',
                price: 1499,
                compareAtPrice: 1899,
                images: [{ url: 'https://images.unsplash.com/photo-1567591370504-82d782baf0d4?auto=format&fit=crop&q=80&w=800', alt: 'Brass Ganesha' }],
                category: premiumGifts._id,
                tags: ['Premium', 'Best Seller'],
                productType: 'Brass Figurines',
                material: 'Solid Brass',
                dimensions: '6 x 4 x 3 inches',
                weight: '800g',
                stock: 50,
                isFeatured: true,
                averageRating: 4.8,
                numReviews: 38,
            },
            {
                name: 'Tanjore Painting - Gajalakshmi - 10x8 inch',
                sku: 'AG-PG-002',
                description: 'Semi-embossed Tanjore painting of Gajalakshmi with 22kt gold foil work. A timeless piece of South Indian art.',
                shortDescription: 'Gold foil Tanjore painting',
                price: 3499,
                compareAtPrice: 4499,
                images: [{ url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800', alt: 'Tanjore Painting' }],
                category: premiumGifts._id,
                tags: ['Premium'],
                productType: 'Tanjore Paintings',
                material: '22kt Gold Foil, Semi-precious stones',
                dimensions: '10 x 8 inches',
                stock: 20,
                isFeatured: true,
                averageRating: 4.9,
                numReviews: 15,
            },
            {
                name: 'Corporate Gift Set - Leather Diary & Pen',
                sku: 'AG-PG-003',
                description: 'Premium corporate gift set in elegant matte black box. Includes genuine leather diary, metal pen, and visiting card holder.',
                shortDescription: 'Premium corporate gift box set',
                price: 1299,
                images: [{ url: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=800', alt: 'Corporate Gift Set' }],
                category: premiumGifts._id,
                tags: ['Premium', 'Customizable'],
                productType: 'Corporate Gifts',
                material: 'Genuine Leather, Metal',
                stock: 100,
                isFeatured: false,
                averageRating: 4.6,
                numReviews: 28,
            },

            // --- Divine Gifts ---
            {
                name: 'Brass Krishna Idol with Stonework - 10 inch',
                sku: 'AG-DG-001',
                description: 'Exquisite brass Krishna idol adorned with colorful stonework. Handcrafted by skilled artisans of South India.',
                shortDescription: 'Brass Krishna with stone inlay',
                price: 2999,
                compareAtPrice: 3999,
                images: [{ url: 'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&q=80&w=800', alt: 'Brass Krishna Idol' }],
                category: divineGifts._id,
                tags: ['Premium', 'New Arrival'],
                productType: 'Brass Figurines',
                material: 'Brass with stonework',
                dimensions: '10 x 5 x 4 inches',
                weight: '1.5kg',
                stock: 30,
                isFeatured: true,
                averageRating: 4.9,
                numReviews: 12,
            },
            {
                name: 'Brass Peacock Diya - Large',
                sku: 'AG-DG-002',
                description: 'Handcrafted brass oil diya with intricate peacock design. Perfect for daily pooja or as an elegant home decor piece.',
                shortDescription: 'Peacock design brass oil lamp',
                price: 899,
                images: [{ url: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=800', alt: 'Brass Peacock Diya' }],
                category: divineGifts._id,
                tags: ['Festival', 'Best Seller'],
                productType: 'Brass Diyas',
                material: 'Solid Brass',
                dimensions: '8 x 5 inches',
                stock: 150,
                isFeatured: true,
                averageRating: 4.6,
                numReviews: 55,
            },
            {
                name: 'Silver Coin - Lakshmi Ganesha - 10 Gram',
                sku: 'AG-DG-003',
                description: 'Pure 999 silver coin with Lakshmi-Ganesha engraving. Comes in premium packaging. Ideal for gifting on festivals and special occasions.',
                shortDescription: '999 silver coin with divine engraving',
                price: 999,
                images: [{ url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800', alt: 'Silver Coin' }],
                category: silverGifts._id,
                tags: ['Premium', 'Festival'],
                productType: 'Silver Coins',
                material: '999 Silver',
                weight: '10g',
                stock: 200,
                isFeatured: true,
                averageRating: 4.7,
                numReviews: 40,
            },

            // --- Brass Collection ---
            {
                name: 'Brass Elephant Urli with Tile Work',
                sku: 'AG-BC-001',
                description: 'Stunning brass urli with elephant motifs and colorful tile work. A centerpiece for your living room or pooja space.',
                shortDescription: 'Decorative brass urli',
                price: 2499,
                compareAtPrice: 2999,
                images: [{ url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', alt: 'Brass Urli' }],
                category: brassCollection._id,
                tags: ['Premium', 'New Arrival'],
                productType: 'Brass Urli',
                material: 'Brass with tile work',
                dimensions: '12 x 12 x 6 inches',
                stock: 25,
                isFeatured: false,
                averageRating: 4.8,
                numReviews: 8,
            },
            {
                name: 'Brass Wall Hanging - Dancing Ganesha',
                sku: 'AG-BC-002',
                description: 'Traditional brass wall hanging depicting dancing Ganesha. Adds a divine and artistic touch to your walls.',
                shortDescription: 'Dancing Ganesha wall decor',
                price: 1799,
                images: [{ url: 'https://images.unsplash.com/photo-1567591370504-82d782baf0d4?auto=format&fit=crop&q=80&w=800', alt: 'Brass Wall Hanging' }],
                category: brassCollection._id,
                tags: ['Premium'],
                productType: 'Brass Wall Hanging',
                material: 'Solid Brass',
                dimensions: '15 x 10 inches',
                stock: 40,
                isFeatured: false,
                averageRating: 4.5,
                numReviews: 18,
            },

            // --- Home Decor ---
            {
                name: 'Lippan Art Mirror Frame - Peacock',
                sku: 'AG-HD-001',
                description: 'Handcrafted Lippan art mirror frame with peacock design. Traditional Kutchi mirror work art that adds beauty to any wall.',
                shortDescription: 'Kutchi Lippan art wall mirror',
                price: 1199,
                compareAtPrice: 1499,
                images: [{ url: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800', alt: 'Lippan Art Frame' }],
                category: homeDecor._id,
                tags: ['New Arrival', 'Trending'],
                productType: 'Lippan Art',
                material: 'Clay, Mirror, Wood frame',
                dimensions: '15 x 15 inches',
                stock: 35,
                isFeatured: true,
                averageRating: 4.6,
                numReviews: 22,
            },
            {
                name: 'Metal Flower Wall Hanging Set',
                sku: 'AG-HD-002',
                description: 'Set of 2 metal flower wall hangings with gold and copper finish. Adds an artistic flair to your living space.',
                shortDescription: 'Set of 2 metal flower wall decor',
                price: 799,
                images: [{ url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', alt: 'Metal Wall Hanging' }],
                category: homeDecor._id,
                tags: ['Trending'],
                productType: 'Metal Decor Hanging',
                material: 'Metal with gold/copper finish',
                dimensions: '10 x 10 inches each',
                stock: 60,
                isFeatured: false,
                averageRating: 4.3,
                numReviews: 15,
            },

            // --- Bags ---
            {
                name: 'Raw Silk Jute Bag - 12x10 inch',
                sku: 'AG-BG-001',
                description: 'Premium raw silk jute bag with elegant design. Sturdy, reusable, and perfect for gifting or everyday use.',
                shortDescription: 'Raw silk jute tote bag',
                price: 159,
                compareAtPrice: 199,
                images: [{ url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800', alt: 'Silk Jute Bag' }],
                category: bags._id,
                tags: ['Eco-Friendly', 'Best Seller'],
                productType: 'Jute Bags',
                material: 'Raw Silk, Jute',
                dimensions: '12 x 10 inches',
                stock: 300,
                minOrderQuantity: 10,
                isFeatured: false,
                averageRating: 4.4,
                numReviews: 68,
            },
            {
                name: 'Embroidered Clutch Purse - Elephant Design',
                sku: 'AG-BG-002',
                description: 'Beautifully embroidered clutch purse with traditional elephant design. A stylish accessory and a thoughtful gift.',
                shortDescription: 'Embroidered elephant clutch',
                price: 349,
                images: [{ url: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800', alt: 'Embroidered Clutch' }],
                category: bags._id,
                tags: ['Trending'],
                productType: 'Clutches & Purses',
                material: 'Fabric with embroidery',
                dimensions: '9 x 5 inches',
                stock: 120,
                isFeatured: false,
                averageRating: 4.1,
                numReviews: 30,
            },

            // --- Festival Essentials ---
            {
                name: '7 Chakra Scented Candle Set',
                sku: 'AG-FE-001',
                description: 'Set of 7 aromatherapy candles representing the 7 chakras. Each candle is infused with essential oils for a calming ambiance.',
                shortDescription: 'Aromatherapy chakra candle set',
                price: 699,
                compareAtPrice: 899,
                images: [{ url: 'https://images.unsplash.com/photo-1602607861407-de4b4d40c7aa?auto=format&fit=crop&q=80&w=800', alt: 'Chakra Candles' }],
                category: festivalEssentials._id,
                tags: ['Festival', 'New Arrival'],
                productType: 'Candles & Votives',
                material: 'Soy Wax, Essential Oils',
                stock: 80,
                isFeatured: false,
                averageRating: 4.5,
                numReviews: 25,
            },
            {
                name: 'Artificial Marigold Flower Thoran',
                sku: 'AG-FE-002',
                description: 'Vibrant artificial marigold flower thoran (door hanging) with bells. Reusable and long-lasting decoration for festivals.',
                shortDescription: 'Marigold flower door hanging with bells',
                price: 249,
                images: [{ url: 'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&q=80&w=800', alt: 'Flower Thoran' }],
                category: festivalEssentials._id,
                tags: ['Festival', 'Best Seller'],
                productType: 'Festival Decor',
                material: 'Artificial flowers, Metal bells',
                dimensions: '36 inches',
                stock: 200,
                isFeatured: false,
                averageRating: 4.3,
                numReviews: 42,
            },

            // --- Kids Return Gifts ---
            {
                name: 'Kids Printed Tin Jar',
                sku: 'AG-KD-001',
                description: 'Colorful printed tin jar perfect for kids birthday return gifts. Fill with chocolates, candies, or small toys.',
                shortDescription: 'Fun printed tin jar for kids',
                price: 59,
                compareAtPrice: 79,
                images: [{ url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800', alt: 'Kids Tin Jar' }],
                category: returnGifts._id,
                tags: ['Best Seller', 'Trending'],
                productType: 'Kids Return Gifts',
                material: 'Printed Tin',
                dimensions: '3 x 3 inches',
                stock: 1000,
                minOrderQuantity: 25,
                isFeatured: true,
                averageRating: 4.6,
                numReviews: 150,
            },

            // --- More Premium ---
            {
                name: 'Meenakari Dry Fruit Box - 9x6 inch - Copper',
                sku: 'AG-PG-004',
                description: 'Premium copper meenakari dry fruit box with 4 compartments. Exquisite handwork makes this a standout gift.',
                shortDescription: 'Copper meenakari dry fruit container',
                price: 1799,
                compareAtPrice: 2199,
                images: [{ url: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800', alt: 'Meenakari Dry Fruit Box' }],
                category: premiumGifts._id,
                tags: ['Premium', 'Customizable'],
                productType: 'Dry Fruit Boxes',
                material: 'Copper with Meenakari work',
                dimensions: '9 x 6 inches',
                stock: 45,
                isFeatured: false,
                averageRating: 4.7,
                numReviews: 20,
            },

            // --- Return Gift Combos ---
            {
                name: 'Wedding Return Gift Combo - Set of 3',
                sku: 'AG-RG-006',
                description: 'Curated wedding return gift combo: 1 Kumkum Holder + 1 Diya + 1 Tin Box. Beautifully packed in a gift pouch.',
                shortDescription: '3-piece wedding return gift set',
                price: 299,
                compareAtPrice: 399,
                images: [{ url: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf1d0?auto=format&fit=crop&q=80&w=800', alt: 'Gift Combo' }],
                category: returnGifts._id,
                tags: ['Best Seller', 'Trending'],
                productType: 'Return Gift Combos',
                material: 'Assorted',
                stock: 250,
                isFeatured: true,
                averageRating: 4.5,
                numReviews: 75,
            },

            // --- Fridge Magnets ---
            {
                name: 'Ashtalakshmi Fridge Magnet Set',
                sku: 'AG-RG-007',
                description: 'Set of 8 colorful Ashtalakshmi fridge magnets. Each magnet depicts a form of Goddess Lakshmi — a unique and divine gift.',
                shortDescription: 'Set of 8 divine fridge magnets',
                price: 199,
                images: [{ url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800', alt: 'Fridge Magnets' }],
                category: returnGifts._id,
                tags: ['New Arrival'],
                productType: 'Fridge Magnets',
                material: 'Resin, Magnet',
                stock: 180,
                isFeatured: false,
                averageRating: 4.2,
                numReviews: 35,
            },

            // --- Key Hangers ---
            {
                name: 'Ashtalakshmi Frame Key Hanger',
                sku: 'AG-HD-003',
                description: 'Decorative key hanger with Ashtalakshmi frame design. Functional and divine — perfect for your entrance.',
                shortDescription: 'Divine key hanger wall decor',
                price: 349,
                images: [{ url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', alt: 'Key Hanger' }],
                category: homeDecor._id,
                tags: ['Trending'],
                productType: 'Key Hangers',
                material: 'Metal with enamel work',
                dimensions: '8 x 6 inches',
                stock: 90,
                isFeatured: false,
                averageRating: 4.4,
                numReviews: 28,
            },

            // --- Customized Gifts ---
            {
                name: 'Customized Gift Hamper - Premium',
                sku: 'AG-PG-005',
                description: 'Build your own premium gift hamper. Choose from our curated selection of items and we\'ll pack it beautifully with personalized messaging.',
                shortDescription: 'Personalized premium gift hamper',
                price: 2499,
                images: [{ url: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=800', alt: 'Gift Hamper' }],
                category: premiumGifts._id,
                tags: ['Premium', 'Customizable'],
                productType: 'Hampers',
                stock: 50,
                isFeatured: true,
                averageRating: 4.8,
                numReviews: 10,
            },

            // --- Brass Antique ---
            {
                name: 'Brass Tirupathi Balaji Idol - 16 inch',
                sku: 'AG-BC-003',
                description: 'Majestic brass Tirupathi Balaji idol standing 16 inches tall. A sacred masterpiece for your pooja room.',
                shortDescription: 'Large brass Balaji murti',
                price: 8999,
                compareAtPrice: 11999,
                images: [{ url: 'https://images.unsplash.com/photo-1567591370504-82d782baf0d4?auto=format&fit=crop&q=80&w=800', alt: 'Brass Balaji' }],
                category: brassCollection._id,
                tags: ['Premium'],
                productType: 'Brass Figurines',
                material: 'Solid Brass',
                dimensions: '16 x 8 x 5 inches',
                weight: '4kg',
                stock: 10,
                isFeatured: false,
                averageRating: 5.0,
                numReviews: 5,
            },

            // --- German Silver ---
            {
                name: 'German Silver Pooja Thali Set',
                sku: 'AG-DG-004',
                description: 'Complete German silver pooja thali set with plate, kumkum holders, agarbatti stand, and bell. Perfect for daily worship.',
                shortDescription: 'Complete German silver pooja set',
                price: 599,
                compareAtPrice: 799,
                images: [{ url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800', alt: 'Pooja Thali' }],
                category: divineGifts._id,
                tags: ['Best Seller', 'Festival'],
                productType: 'German Silver Pooja Utility',
                material: 'German Silver',
                dimensions: '10 inch thali',
                stock: 100,
                isFeatured: false,
                averageRating: 4.5,
                numReviews: 50,
            },

            // --- Kondapalli Dolls ---
            {
                name: 'Kondapalli Dancing Couple Dolls',
                sku: 'AG-HD-004',
                description: 'Traditional Kondapalli wooden dolls depicting a dancing couple. Handpainted by artisans from Andhra Pradesh.',
                shortDescription: 'Handpainted wooden dancing dolls',
                price: 449,
                images: [{ url: 'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&q=80&w=800', alt: 'Kondapalli Dolls' }],
                category: homeDecor._id,
                tags: ['New Arrival', 'Eco-Friendly'],
                productType: 'Dolls',
                material: 'Kondapalli wood, natural dyes',
                dimensions: '6 x 3 inches each',
                stock: 70,
                isFeatured: false,
                averageRating: 4.3,
                numReviews: 18,
            },
        ];

        await Product.insertMany(products);
        console.log(`🎁 ${products.length} products created`);

        console.log('\n✅ Seed completed successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('Admin Login:');
        console.log('  Email:    admin@aaragiftshop.com');
        console.log('  Password: admin123456');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        process.exit(0);
    } catch (error) {
        console.error('❌ Seed failed:', error);
        process.exit(1);
    }
};

seedData();
