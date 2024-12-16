const Product = require('../models/Product');
const { User } = require('../models/User');
const Comment = require('../models/Comment');

exports.getAllProduct = async () => {
    const products = await Product.find().sort({ createdDate: -1 }).populate('owner', 'username');
    return products
}

exports.getLatestProduct = async () => await Product.find().sort({ createdDate: -1 }).limit(6).populate('owner', 'username');


exports.search = async (name, type) => {
    let query = {};

    if (name.trim()) {
        query.name = new RegExp(name, 'i');
        console.log(`search backend ${query.name}`);
    }

    if (type) {
        query.type = new RegExp(`^${type}$`, 'i');
        console.log(`Searching by type: ${type}`);
    }
    console.log('query beinig sent to database', query);

    const results = await Product.find(query).lean();
    console.log('Search results from database:', results);
    return results;

    //return Product.find(query).populate('owner', 'username').lean();
}


exports.getProductById = async (productId) => {
    const product = await Product.findById(productId).populate('owner', 'username').populate('likedBy.user', 'username');
    return product;

}

exports.getOneProduct = async (productId) => await Product.findById(productId);

exports.addProduct = async (createData, ownerId) => {
    const createdProduct = await Product.create({
        ...createData,
        owner: ownerId,
        usersWhoRated: [ownerId]
    });

    await User.findByIdAndUpdate(ownerId, { $push: { productOwner: createdProduct._id } });
    return createdProduct;
}

exports.editProduct = async (productId, editData) => {
    await Product.findByIdAndUpdate(productId, editData, { runValidators: true })
}

exports.deleteProduct = async (productId) => await Product.findByIdAndDelete(productId);

exports.likeProduct = async (productId, userId, isLiked) => {
    const current = await Product.findById(productId);
   // current.likedBy.push({ user: userId, likeOn: Date.now() });
    //await current.save();

    if (!current.likedBy.some(like => like.user.toString() === userId)) {
        current.likedBy.push({ user: userId, likeOn: Date.now() });
        await current.save();
      }

   const result = await Product.findByIdAndUpdate(productId, { $addToSet: { usersWhoRated: userId } }, { new:true}).lean();
    await User.findByIdAndUpdate(userId, { $push: { productLikeList: productId } });
    return result;
}

exports.notLikeProduct = async (productId, userId) => {
    await Product.updateOne({ _id: productId }, { $pull: { usersWhoRated: userId, likedBy: {user: userId}  } });
    await User.updateOne({ _id: userId }, { $pull: { productLikeList: productId } });
}