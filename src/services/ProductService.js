import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('product/index');
}
function getById(id)
{
    return httpAxios.get(`product/show/${id}`);
}
function create(data)
{
    return httpAxios.post('product/store', data);
}
function update(data,id)
{
    return httpAxios.post(`product/update/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`product/destroy/${id}`);
}
function getProductHome(limit,category_id) {
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductAll(limit)
{
    return httpAxios.get(`product_all/${limit}`);
}
function getProductByCategoryId(limit, category_id)
{
    return httpAxios.get(`product_category/${category_id}/${limit}`);
}
function getProductByBrandId(brand_id,limit)
{
    return httpAxios.get(`product_brand/${brand_id}/${limit}`);
}
function getProductBySlug(slug){
    return httpAxios.get(`product_detail/${slug}`);
}

const ProductService = {
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductBySlug:getProductBySlug,
    getProductAll:getProductAll,
    getProductHome:getProductHome,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default ProductService;