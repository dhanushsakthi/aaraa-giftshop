/**
 * API Features — query builder for filtering, sorting, searching, and pagination.
 * Usage: new APIFeatures(Model.find(), req.query).filter().sort().search().paginate()
 */
class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    // Filter by price range, category, tags, productType, isActive, isFeatured
    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'search', 'fields'];
        excludedFields.forEach(field => delete queryObj[field]);

        // Price range: ?minPrice=100&maxPrice=500
        if (queryObj.minPrice || queryObj.maxPrice) {
            queryObj.price = {};
            if (queryObj.minPrice) {
                queryObj.price.$gte = Number(queryObj.minPrice);
                delete queryObj.minPrice;
            }
            if (queryObj.maxPrice) {
                queryObj.price.$lte = Number(queryObj.maxPrice);
                delete queryObj.maxPrice;
            }
        }

        // Tags filter: ?tags=Best Seller,Premium
        if (queryObj.tags) {
            queryObj.tags = { $in: queryObj.tags.split(',') };
        }

        this.query = this.query.find(queryObj);
        return this;
    }

    // Sort: ?sort=price or ?sort=-price,name
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }

    // Text search: ?search=brass idol
    search() {
        if (this.queryString.search) {
            const searchRegex = new RegExp(this.queryString.search, 'i');
            this.query = this.query.find({
                $or: [
                    { name: searchRegex },
                    { description: searchRegex },
                    { productType: searchRegex },
                    { sku: searchRegex },
                ],
            });
        }
        return this;
    }

    // Paginate: ?page=2&limit=20
    paginate() {
        const page = parseInt(this.queryString.page, 10) || 1;
        const limit = parseInt(this.queryString.limit, 10) || 20;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);
        this.page = page;
        this.limit = limit;
        return this;
    }

    // Field selection: ?fields=name,price,images
    selectFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }
        return this;
    }
}

export default APIFeatures;
