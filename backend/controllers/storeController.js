// @desc    Get store locations
// @route   GET /api/stores
export const getStores = async (req, res) => {
    // Static store data — similar to wedtree.com's store locator
    const stores = [
        {
            id: 1,
            name: 'AARAA Gift Shop — Main Store',
            address: 'No. 15, Anna Salai, T. Nagar, Chennai - 600017',
            city: 'Chennai',
            state: 'Tamil Nadu',
            phone: '+91 98765 43210',
            email: 'chennai@aaragiftshop.com',
            timings: 'Mon-Sat: 10:00 AM - 9:00 PM, Sun: 10:00 AM - 6:00 PM',
            mapUrl: 'https://maps.google.com',
            coordinates: { lat: 13.0418, lng: 80.2341 },
        },
        {
            id: 2,
            name: 'AARAA Gift Shop — Bengaluru',
            address: 'No. 22, Commercial Street, Shivajinagar, Bengaluru - 560001',
            city: 'Bengaluru',
            state: 'Karnataka',
            phone: '+91 98765 43211',
            email: 'bengaluru@aaragiftshop.com',
            timings: 'Mon-Sat: 10:00 AM - 9:00 PM, Sun: 10:00 AM - 6:00 PM',
            mapUrl: 'https://maps.google.com',
            coordinates: { lat: 12.9816, lng: 77.6077 },
        },
        {
            id: 3,
            name: 'AARAA Gift Shop — Hyderabad',
            address: 'Plot 8, Road No. 2, Banjara Hills, Hyderabad - 500034',
            city: 'Hyderabad',
            state: 'Telangana',
            phone: '+91 98765 43212',
            email: 'hyderabad@aaragiftshop.com',
            timings: 'Mon-Sat: 10:00 AM - 9:00 PM, Sun: 10:00 AM - 6:00 PM',
            mapUrl: 'https://maps.google.com',
            coordinates: { lat: 17.4156, lng: 78.4347 },
        },
    ];

    res.json({ success: true, count: stores.length, data: stores });
};
